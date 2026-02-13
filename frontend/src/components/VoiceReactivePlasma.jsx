import React, { useRef, useEffect, useCallback } from 'react';
import * as THREE from 'three';

const VoiceReactivePlasma = ({
    sensitivity = 2.0,
    smoothing = 0.8,
    idle = true,
    initialSettings = {
        colorDeep: '#001433',
        colorMid: '#0084ff',
        colorBright: '#00ffe1',
        size: 1.0
    }
}) => {
    const mountRef = useRef(null);
    const cleanupRef = useRef(null);

    const initScene = useCallback((container) => {
        // ===================== THREE.JS SETUP =====================
        const scene = new THREE.Scene();
        scene.background = null; // Transparent background to show underlying image

        const camera = new THREE.PerspectiveCamera(
            75,
            container.clientWidth / container.clientHeight,
            0.1,
            100
        );
        camera.position.z = 2.4;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 0.9;
        container.appendChild(renderer.domElement);

        const mainGroup = new THREE.Group();
        scene.add(mainGroup);

        // ===================== NOISE GLSL =====================
        const noiseFunctions = `
      vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
      vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
      vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
      vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
      float snoise(vec3 v){
        const vec2 C=vec2(1.0/6.0,1.0/3.0);
        const vec4 D=vec4(0.0,0.5,1.0,2.0);
        vec3 i=floor(v+dot(v,C.yyy));
        vec3 x0=v-i+dot(i,C.xxx);
        vec3 g=step(x0.yzx,x0.xyz);
        vec3 l=1.0-g;
        vec3 i1=min(g.xyz,l.zxy);
        vec3 i2=max(g.xyz,l.zxy);
        vec3 x1=x0-i1+C.xxx;
        vec3 x2=x0-i2+C.yyy;
        vec3 x3=x0-D.yyy;
        i=mod289(i);
        vec4 p=permute(permute(permute(
          i.z+vec4(0.0,i1.z,i2.z,1.0))
          +i.y+vec4(0.0,i1.y,i2.y,1.0))
          +i.x+vec4(0.0,i1.x,i2.x,1.0));
        float n_=0.142857142857;
        vec3 ns=n_*D.wyz-D.xzx;
        vec4 j=p-49.0*floor(p*ns.z*ns.z);
        vec4 x_=floor(j*ns.z);
        vec4 y_=floor(j-7.0*x_);
        vec4 x=x_*ns.x+ns.yyyy;
        vec4 y=y_*ns.x+ns.yyyy;
        vec4 h=1.0-abs(x)-abs(y);
        vec4 b0=vec4(x.xy,y.xy);
        vec4 b1=vec4(x.zw,y.zw);
        vec4 s0=floor(b0)*2.0+1.0;
        vec4 s1=floor(b1)*2.0+1.0;
        vec4 sh=-step(h,vec4(0.0));
        vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
        vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
        vec3 p0=vec3(a0.xy,h.x);
        vec3 p1=vec3(a0.zw,h.y);
        vec3 p2=vec3(a1.xy,h.z);
        vec3 p3=vec3(a1.zw,h.w);
        vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
        p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
        vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);
        m=m*m;
        return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
      }
      float fbm(vec3 p){
        float total=0.0;float amplitude=0.5;float frequency=1.0;
        for(int i=0;i<3;i++){
          total+=snoise(p*frequency)*amplitude;
          amplitude*=0.5;frequency*=2.0;
        }
        return total;
      }
    `;

        // ===================== LIGHTS =====================
        const pointLight = new THREE.PointLight(0x0088ff, 2.0, 10);
        mainGroup.add(pointLight);

        // ===================== SHELL =====================
        const shellGeo = new THREE.SphereGeometry(1.0, 64, 64);
        const shellShaderCode = {
            vertexShader: `
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        void main(){
          vNormal=normalize(normalMatrix*normal);
          vec4 mv=modelViewMatrix*vec4(position,1.0);
          vViewPosition=-mv.xyz;
          gl_Position=projectionMatrix*mv;
        }
      `,
            fragmentShader: `
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        uniform vec3 uColor;
        uniform float uOpacity;
        void main(){
          float fresnel=pow(1.0-dot(normalize(vNormal),normalize(vViewPosition)),2.5);
          gl_FragColor=vec4(uColor,fresnel*uOpacity);
        }
      `,
        };

        const shellBackMat = new THREE.ShaderMaterial({
            vertexShader: shellShaderCode.vertexShader,
            fragmentShader: shellShaderCode.fragmentShader,
            uniforms: {
                uColor: { value: new THREE.Color(0x000055) },
                uOpacity: { value: 0.3 },
            },
            transparent: true,
            blending: THREE.AdditiveBlending,
            side: THREE.BackSide,
            depthWrite: false,
        });

        const shellFrontMat = new THREE.ShaderMaterial({
            vertexShader: shellShaderCode.vertexShader,
            fragmentShader: shellShaderCode.fragmentShader,
            uniforms: {
                uColor: { value: new THREE.Color(0x0066ff) },
                uOpacity: { value: 0.41 },
            },
            transparent: true,
            blending: THREE.AdditiveBlending,
            side: THREE.FrontSide,
            depthWrite: false,
        });

        mainGroup.add(new THREE.Mesh(shellGeo, shellBackMat));
        mainGroup.add(new THREE.Mesh(shellGeo, shellFrontMat));

        // ===================== PLASMA =====================
        const plasmaGeo = new THREE.SphereGeometry(0.998, 128, 128);
        const plasmaMat = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uScale: { value: 0.1404 * initialSettings.size }, // Initial size
                uBrightness: { value: 1.31 },
                uThreshold: { value: 0.072 },
                uColorDeep: { value: new THREE.Color(initialSettings.colorDeep) },
                uColorMid: { value: new THREE.Color(initialSettings.colorMid) },
                uColorBright: { value: new THREE.Color(initialSettings.colorBright) },
                uAudioLevel: { value: 0.0 },
            },
            vertexShader: `
        uniform float uAudioLevel;
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        ${noiseFunctions}
        void main(){
          // Vertex displacement based on audio - Reduced expansion, kept surface detail
          float displacement = 1.0 + uAudioLevel * 0.012; // Slightly increased (was 0.01)
          float noiseDisp = snoise(position * 3.0 + uAudioLevel * 0.5) * (0.02 + uAudioLevel * 0.06); // Slightly increased (was 0.05)
          vec3 newPos = position * (displacement + noiseDisp);
          
          vPosition = newPos;
          vNormal = normalize(normalMatrix * normal);
          vec4 mv = modelViewMatrix * vec4(newPos, 1.0);
          vViewPosition = -mv.xyz;
          gl_Position = projectionMatrix * mv;
        }
      `,
            fragmentShader: `
        uniform float uTime;
        uniform float uScale;
        uniform float uBrightness;
        uniform float uThreshold;
        uniform vec3 uColorDeep;
        uniform vec3 uColorMid;
        uniform vec3 uColorBright;
        uniform float uAudioLevel;
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        ${noiseFunctions}
        void main(){
          vec3 p = vPosition * uScale;
          vec3 q = vec3(
            fbm(p + vec3(0.0, uTime * 0.05 + uAudioLevel * 0.2, 0.0)),
            fbm(p + vec3(5.2, 1.3, 2.8) + uTime * 0.05 + uAudioLevel * 0.2),
            fbm(p + vec3(2.2, 8.4, 0.5) - uTime * 0.02 - uAudioLevel * 0.2)
          );
          float density = fbm(p + 2.0 * q);
          float t = (density + 0.4) * 0.8;
          
          // Audio boosts density
          t += uAudioLevel * 0.3;
          t = clamp(t, 0.0, 1.0);
          
          float alpha = smoothstep(uThreshold, 0.7, t);
          vec3 cWhite = vec3(1.0);
          vec3 color = mix(uColorDeep, uColorMid, smoothstep(uThreshold, 0.5, t));
          color = mix(color, uColorBright, smoothstep(0.5, 0.8, t));
          color = mix(color, cWhite, smoothstep(0.8, 1.0, t));
          
          float facing = dot(normalize(vNormal), normalize(vViewPosition));
          float depthFactor = (facing + 1.0) * 0.5;
          float finalAlpha = alpha * (0.02 + 0.98 * depthFactor);
          
          float brightBoost = 1.0 + uAudioLevel * 1.2;
          gl_FragColor = vec4(color * uBrightness * brightBoost, finalAlpha);
        }
      `,
            transparent: true,
            blending: THREE.AdditiveBlending,
            side: THREE.DoubleSide,
            depthWrite: false,
        });

        const plasmaMesh = new THREE.Mesh(plasmaGeo, plasmaMat);
        mainGroup.add(plasmaMesh);

        // ===================== SHELL DISPLACEMENT =====================
        // We also need to scale shell with audio, so store shell meshes
        const shellMeshes = mainGroup.children.filter(
            (c) => c.isMesh && (c.material === shellBackMat || c.material === shellFrontMat)
        );

        // ===================== PARTICLES =====================
        const pCount = 600;
        const pPos = new Float32Array(pCount * 3);
        const pSizes = new Float32Array(pCount);
        const sphereRadius = 0.95;

        for (let i = 0; i < pCount; i++) {
            const r = sphereRadius * Math.cbrt(Math.random());
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            pPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            pPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            pPos[i * 3 + 2] = r * Math.cos(phi);
            pSizes[i] = Math.random();
        }

        const pGeo = new THREE.BufferGeometry();
        pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
        pGeo.setAttribute('aSize', new THREE.BufferAttribute(pSizes, 1));

        const pMat = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uColor: { value: new THREE.Color(initialSettings.colorBright) }, // Use bright color for particles too
                uAudioLevel: { value: 0.0 },
            },
            vertexShader: `
        uniform float uTime;
        uniform float uAudioLevel;
        attribute float aSize;
        varying float vAlpha;
        void main(){
          vec3 pos = position;
          float audioScale = 1.0 + uAudioLevel * 0.12; // Slightly increased (was 0.1)
          pos *= audioScale;
          pos.y += sin(uTime * 0.2 + pos.x) * 0.02 * (1.0 + uAudioLevel * 0.5); // Reduced wave (was 3.0)
          pos.x += cos(uTime * 0.15 + pos.z) * 0.02 * (1.0 + uAudioLevel * 0.5);
          vec4 mv = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mv;
          float baseSize = (8.0 * aSize + 4.0) * (1.0 + uAudioLevel * 0.5); // Smaller size boost
          gl_PointSize = baseSize * (1.0 / -mv.z);
          vAlpha = (0.8 + 0.2 * sin(uTime + aSize * 10.0)) * (0.5 + uAudioLevel * 1.6);
        }
      `,
            fragmentShader: `
        uniform vec3 uColor;
        varying float vAlpha;
        void main(){
          vec2 uv = gl_PointCoord - vec2(0.5);
          float dist = length(uv);
          if(dist > 0.5) discard;
          float glow = 1.0 - dist * 2.0;
          glow = pow(glow, 1.8);
          gl_FragColor = vec4(uColor, glow * clamp(vAlpha, 0.0, 1.0));
        }
      `,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });

        const particles = new THREE.Points(pGeo, pMat);
        mainGroup.add(particles);

        // ===================== AUDIO SETUP =====================
        let audioContext = null;
        let analyser = null;
        let dataArray = null;
        let audioStream = null;
        let smoothedVolume = 0;

        const initAudio = async () => {
            try {
                if (audioStream) {
                    audioStream.getTracks().forEach(track => track.stop());
                }

                audioStream = await navigator.mediaDevices.getUserMedia({
                    audio: {
                        echoCancellation: true,
                        noiseSuppression: true,
                        autoGainControl: true
                    }
                });

                if (audioContext) {
                    audioContext.close();
                }
                audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const source = audioContext.createMediaStreamSource(audioStream);

                // Add GainNode to boost quiet microphones
                const gainNode = audioContext.createGain();
                gainNode.gain.value = 20.0; // Kept at 20.0 for good sensitivity

                source.connect(gainNode);
                analyser = audioContext.createAnalyser();
                gainNode.connect(analyser);

                analyser.fftSize = 256;
                analyser.smoothingTimeConstant = smoothing;
                dataArray = new Uint8Array(analyser.frequencyBinCount);
            } catch (err) {
                console.warn('Microphone access denied or error.', err);
            }
        };

        initAudio();

        const getAudioLevel = () => {
            if (!analyser || !dataArray) return 0;
            analyser.getByteFrequencyData(dataArray);
            let sum = 0;
            for (let i = 0; i < dataArray.length; i++) {
                sum += dataArray[i];
            }
            let avg = sum / dataArray.length / 255;

            // Apply sensitivity
            let val = avg * sensitivity;

            // Noise Gate: Ignore background noise
            // Threshold reduced to 0.05 since we removed the massive gain boost
            if (val < 0.05) {
                val = 0;
            } else {
                // Normalize the range above the gate
                val = (val - 0.05) / (1.0 - 0.05);
            }

            return Math.min(val, 1.0);
        };

        // ===================== INTERACTION =====================
        const handleInteraction = () => {
            if (audioContext && audioContext.state === 'suspended') {
                audioContext.resume();
                console.log('AudioContext resumed');
            }
        };
        window.addEventListener('click', handleInteraction);
        window.addEventListener('touchstart', handleInteraction);

        // ===================== ANIMATION =====================
        const clock = new THREE.Clock();
        let animationId = null;

        const animate = () => {
            animationId = requestAnimationFrame(animate);
            const t = clock.getElapsedTime();

            // Audio reactivity
            let rawVolume = getAudioLevel();

            // Idle breathing when no audio - Reduced amplitude for stillness
            if (idle && rawVolume < 0.01) {
                rawVolume = 0.02 + Math.sin(t * 1.0) * 0.01;
            }

            smoothedVolume += (rawVolume - smoothedVolume) * 0.1; // Slower smoothing for less jitter
            const audioLevel = smoothedVolume;

            // Update plasma
            // Rapid time scale change for vibration
            const timeScale = 0.4 + audioLevel * 0.12; // Slightly increased (was 0.1)
            plasmaMat.uniforms.uTime.value = t * timeScale;
            plasmaMat.uniforms.uAudioLevel.value = audioLevel;

            // Update particles
            pMat.uniforms.uTime.value = t;
            pMat.uniforms.uAudioLevel.value = audioLevel;

            // Scale shell with audio - REMOVED "explosion" effect
            const shellScale = 1.0; // Fixed size
            shellMeshes.forEach((mesh) => {
                mesh.scale.setScalar(shellScale);
            });

            // Shell glow reacts to audio
            shellFrontMat.uniforms.uOpacity.value = 0.41 + audioLevel * 0.5;

            // Plasma rotation
            plasmaMesh.rotation.y = t * 0.08;

            // Group rotation — reduced for controlled excitement
            const rotMult = 1.0 + audioLevel * 0.05; // Reduced to 10% of previous 0.5
            mainGroup.rotation.x += 0.002 * rotMult;
            mainGroup.rotation.y += 0.005 * rotMult;

            // Jitter group position for "vibration" (smaller amplitude)
            // Threshold reduced to 0.05 to pick up quieter laptop mics
            if (audioLevel > 0.1) {
                // Reduced amplitude for subtle vibration
                mainGroup.position.x = (Math.random() - 0.5) * audioLevel * 0.0002; // Reduced to 10% of 0.002
                mainGroup.position.y = (Math.random() - 0.5) * audioLevel * 0.0002;
            } else {
                mainGroup.position.x = 0;
                mainGroup.position.y = 0;
            }

            renderer.render(scene, camera);
        };

        // ===================== RESIZE =====================
        const handleResize = () => {
            const w = container.clientWidth;
            const h = container.clientHeight;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        };
        window.addEventListener('resize', handleResize);

        animate();

        // ===================== CLEANUP =====================
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('click', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
            if (animationId) cancelAnimationFrame(animationId);

            if (audioStream) {
                audioStream.getTracks().forEach((track) => track.stop());
            }
            if (audioContext) {
                audioContext.close();
            }

            renderer.dispose();
            shellGeo.dispose();
            plasmaGeo.dispose();
            pGeo.dispose();
            shellBackMat.dispose();
            shellFrontMat.dispose();
            plasmaMat.dispose();
            pMat.dispose();

            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
        };
    }, [sensitivity, smoothing, idle, initialSettings]); // Added initialSettings to dependencies

    useEffect(() => {
        const container = mountRef.current;
        if (!container) return;

        cleanupRef.current = initScene(container);

        return () => {
            if (cleanupRef.current) {
                cleanupRef.current();
            }
        };
    }, [initScene]);

    return (
        <div
            ref={mountRef}
            style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                background: 'transparent',
                overflow: 'hidden',
            }}
        />
    );
};

export default VoiceReactivePlasma;
