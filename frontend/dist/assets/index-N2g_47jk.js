(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var _d={exports:{}},Fo={};var J0;function _y(){if(J0)return Fo;J0=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:u}}return Fo.Fragment=e,Fo.jsx=i,Fo.jsxs=i,Fo}var $0;function vy(){return $0||($0=1,_d.exports=_y()),_d.exports}var Ae=vy(),vd={exports:{}},Bo={},xd={exports:{}},Sd={};var e_;function xy(){return e_||(e_=1,(function(s){function e(U,B){var $=U.length;U.push(B);e:for(;0<$;){var ne=$-1>>>1,fe=U[ne];if(0<l(fe,B))U[ne]=B,U[$]=fe,$=ne;else break e}}function i(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var B=U[0],$=U.pop();if($!==B){U[0]=$;e:for(var ne=0,fe=U.length,N=fe>>>1;ne<N;){var Z=2*(ne+1)-1,me=U[Z],be=Z+1,Te=U[be];if(0>l(me,$))be<fe&&0>l(Te,me)?(U[ne]=Te,U[be]=$,ne=be):(U[ne]=me,U[Z]=$,ne=Z);else if(be<fe&&0>l(Te,$))U[ne]=Te,U[be]=$,ne=be;else break e}}return B}function l(U,B){var $=U.sortIndex-B.sortIndex;return $!==0?$:U.id-B.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var m=[],p=[],_=1,g=null,x=3,M=!1,b=!1,T=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function O(U){for(var B=i(p);B!==null;){if(B.callback===null)r(p);else if(B.startTime<=U)r(p),B.sortIndex=B.expirationTime,e(m,B);else break;B=i(p)}}function P(U){if(T=!1,O(U),!b)if(i(m)!==null)b=!0,F||(F=!0,ae());else{var B=i(p);B!==null&&ce(P,B.startTime-U)}}var F=!1,I=-1,K=5,C=-1;function L(){return y?!0:!(s.unstable_now()-C<K)}function V(){if(y=!1,F){var U=s.unstable_now();C=U;var B=!0;try{e:{b=!1,T&&(T=!1,w(I),I=-1),M=!0;var $=x;try{t:{for(O(U),g=i(m);g!==null&&!(g.expirationTime>U&&L());){var ne=g.callback;if(typeof ne=="function"){g.callback=null,x=g.priorityLevel;var fe=ne(g.expirationTime<=U);if(U=s.unstable_now(),typeof fe=="function"){g.callback=fe,O(U),B=!0;break t}g===i(m)&&r(m),O(U)}else r(m);g=i(m)}if(g!==null)B=!0;else{var N=i(p);N!==null&&ce(P,N.startTime-U),B=!1}}break e}finally{g=null,x=$,M=!1}B=void 0}}finally{B?ae():F=!1}}}var ae;if(typeof D=="function")ae=function(){D(V)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,pe=ee.port2;ee.port1.onmessage=V,ae=function(){pe.postMessage(null)}}else ae=function(){v(V,0)};function ce(U,B){I=v(function(){U(s.unstable_now())},B)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(U){U.callback=null},s.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<U?Math.floor(1e3/U):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(U){switch(x){case 1:case 2:case 3:var B=3;break;default:B=x}var $=x;x=B;try{return U()}finally{x=$}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(U,B){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var $=x;x=U;try{return B()}finally{x=$}},s.unstable_scheduleCallback=function(U,B,$){var ne=s.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ne+$:ne):$=ne,U){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=$+fe,U={id:_++,callback:B,priorityLevel:U,startTime:$,expirationTime:fe,sortIndex:-1},$>ne?(U.sortIndex=$,e(p,U),i(m)===null&&U===i(p)&&(T?(w(I),I=-1):T=!0,ce(P,$-ne))):(U.sortIndex=fe,e(m,U),b||M||(b=!0,F||(F=!0,ae()))),U},s.unstable_shouldYield=L,s.unstable_wrapCallback=function(U){var B=x;return function(){var $=x;x=B;try{return U.apply(this,arguments)}finally{x=$}}}})(Sd)),Sd}var t_;function Sy(){return t_||(t_=1,xd.exports=xy()),xd.exports}var yd={exports:{}},rt={};var n_;function yy(){if(n_)return rt;n_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.iterator;function M(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,y={};function v(N,Z,me){this.props=N,this.context=Z,this.refs=y,this.updater=me||b}v.prototype.isReactComponent={},v.prototype.setState=function(N,Z){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,Z,"setState")},v.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function w(){}w.prototype=v.prototype;function D(N,Z,me){this.props=N,this.context=Z,this.refs=y,this.updater=me||b}var O=D.prototype=new w;O.constructor=D,T(O,v.prototype),O.isPureReactComponent=!0;var P=Array.isArray;function F(){}var I={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function C(N,Z,me){var be=me.ref;return{$$typeof:s,type:N,key:Z,ref:be!==void 0?be:null,props:me}}function L(N,Z){return C(N.type,Z,N.props)}function V(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function ae(N){var Z={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(me){return Z[me]})}var ee=/\/+/g;function pe(N,Z){return typeof N=="object"&&N!==null&&N.key!=null?ae(""+N.key):Z.toString(36)}function ce(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(F,F):(N.status="pending",N.then(function(Z){N.status==="pending"&&(N.status="fulfilled",N.value=Z)},function(Z){N.status==="pending"&&(N.status="rejected",N.reason=Z)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function U(N,Z,me,be,Te){var Q=typeof N;(Q==="undefined"||Q==="boolean")&&(N=null);var oe=!1;if(N===null)oe=!0;else switch(Q){case"bigint":case"string":case"number":oe=!0;break;case"object":switch(N.$$typeof){case s:case e:oe=!0;break;case _:return oe=N._init,U(oe(N._payload),Z,me,be,Te)}}if(oe)return Te=Te(N),oe=be===""?"."+pe(N,0):be,P(Te)?(me="",oe!=null&&(me=oe.replace(ee,"$&/")+"/"),U(Te,Z,me,"",function(He){return He})):Te!=null&&(V(Te)&&(Te=L(Te,me+(Te.key==null||N&&N.key===Te.key?"":(""+Te.key).replace(ee,"$&/")+"/")+oe)),Z.push(Te)),1;oe=0;var we=be===""?".":be+":";if(P(N))for(var Ve=0;Ve<N.length;Ve++)be=N[Ve],Q=we+pe(be,Ve),oe+=U(be,Z,me,Q,Te);else if(Ve=M(N),typeof Ve=="function")for(N=Ve.call(N),Ve=0;!(be=N.next()).done;)be=be.value,Q=we+pe(be,Ve++),oe+=U(be,Z,me,Q,Te);else if(Q==="object"){if(typeof N.then=="function")return U(ce(N),Z,me,be,Te);throw Z=String(N),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return oe}function B(N,Z,me){if(N==null)return N;var be=[],Te=0;return U(N,be,"","",function(Q){return Z.call(me,Q,Te++)}),be}function $(N){if(N._status===-1){var Z=N._result;Z=Z(),Z.then(function(me){(N._status===0||N._status===-1)&&(N._status=1,N._result=me)},function(me){(N._status===0||N._status===-1)&&(N._status=2,N._result=me)}),N._status===-1&&(N._status=0,N._result=Z)}if(N._status===1)return N._result.default;throw N._result}var ne=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},fe={map:B,forEach:function(N,Z,me){B(N,function(){Z.apply(this,arguments)},me)},count:function(N){var Z=0;return B(N,function(){Z++}),Z},toArray:function(N){return B(N,function(Z){return Z})||[]},only:function(N){if(!V(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return rt.Activity=g,rt.Children=fe,rt.Component=v,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=D,rt.StrictMode=r,rt.Suspense=m,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,rt.__COMPILER_RUNTIME={__proto__:null,c:function(N){return I.H.useMemoCache(N)}},rt.cache=function(N){return function(){return N.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(N,Z,me){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var be=T({},N.props),Te=N.key;if(Z!=null)for(Q in Z.key!==void 0&&(Te=""+Z.key),Z)!K.call(Z,Q)||Q==="key"||Q==="__self"||Q==="__source"||Q==="ref"&&Z.ref===void 0||(be[Q]=Z[Q]);var Q=arguments.length-2;if(Q===1)be.children=me;else if(1<Q){for(var oe=Array(Q),we=0;we<Q;we++)oe[we]=arguments[we+2];be.children=oe}return C(N.type,Te,be)},rt.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},rt.createElement=function(N,Z,me){var be,Te={},Q=null;if(Z!=null)for(be in Z.key!==void 0&&(Q=""+Z.key),Z)K.call(Z,be)&&be!=="key"&&be!=="__self"&&be!=="__source"&&(Te[be]=Z[be]);var oe=arguments.length-2;if(oe===1)Te.children=me;else if(1<oe){for(var we=Array(oe),Ve=0;Ve<oe;Ve++)we[Ve]=arguments[Ve+2];Te.children=we}if(N&&N.defaultProps)for(be in oe=N.defaultProps,oe)Te[be]===void 0&&(Te[be]=oe[be]);return C(N,Q,Te)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(N){return{$$typeof:h,render:N}},rt.isValidElement=V,rt.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:$}},rt.memo=function(N,Z){return{$$typeof:p,type:N,compare:Z===void 0?null:Z}},rt.startTransition=function(N){var Z=I.T,me={};I.T=me;try{var be=N(),Te=I.S;Te!==null&&Te(me,be),typeof be=="object"&&be!==null&&typeof be.then=="function"&&be.then(F,ne)}catch(Q){ne(Q)}finally{Z!==null&&me.types!==null&&(Z.types=me.types),I.T=Z}},rt.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},rt.use=function(N){return I.H.use(N)},rt.useActionState=function(N,Z,me){return I.H.useActionState(N,Z,me)},rt.useCallback=function(N,Z){return I.H.useCallback(N,Z)},rt.useContext=function(N){return I.H.useContext(N)},rt.useDebugValue=function(){},rt.useDeferredValue=function(N,Z){return I.H.useDeferredValue(N,Z)},rt.useEffect=function(N,Z){return I.H.useEffect(N,Z)},rt.useEffectEvent=function(N){return I.H.useEffectEvent(N)},rt.useId=function(){return I.H.useId()},rt.useImperativeHandle=function(N,Z,me){return I.H.useImperativeHandle(N,Z,me)},rt.useInsertionEffect=function(N,Z){return I.H.useInsertionEffect(N,Z)},rt.useLayoutEffect=function(N,Z){return I.H.useLayoutEffect(N,Z)},rt.useMemo=function(N,Z){return I.H.useMemo(N,Z)},rt.useOptimistic=function(N,Z){return I.H.useOptimistic(N,Z)},rt.useReducer=function(N,Z,me){return I.H.useReducer(N,Z,me)},rt.useRef=function(N){return I.H.useRef(N)},rt.useState=function(N){return I.H.useState(N)},rt.useSyncExternalStore=function(N,Z,me){return I.H.useSyncExternalStore(N,Z,me)},rt.useTransition=function(){return I.H.useTransition()},rt.version="19.2.4",rt}var i_;function tp(){return i_||(i_=1,yd.exports=yy()),yd.exports}var Md={exports:{}},Un={};var a_;function My(){if(a_)return Un;a_=1;var s=tp();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Un.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,_)},Un.flushSync=function(m){var p=f.T,_=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=_,r.d.f()}},Un.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Un.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Un.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=h(_,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:M}):_==="script"&&r.d.X(m,{crossOrigin:g,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Un.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Un.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=h(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Un.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Un.requestFormReset=function(m){r.d.r(m)},Un.unstable_batchedUpdates=function(m,p){return m(p)},Un.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},Un.useFormStatus=function(){return f.H.useHostTransitionStatus()},Un.version="19.2.4",Un}var r_;function Ey(){if(r_)return Md.exports;r_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Md.exports=My(),Md.exports}var s_;function by(){if(s_)return Bo;s_=1;var s=Sy(),e=tp(),i=Ey();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var c=a.return;if(c===null)break;var d=c.alternate;if(d===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===a)return m(c),t;if(d===o)return m(c),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=d;else{for(var S=!1,A=c.child;A;){if(A===a){S=!0,a=c,o=d;break}if(A===o){S=!0,o=c,a=d;break}A=A.sibling}if(!S){for(A=d.child;A;){if(A===a){S=!0,a=d,o=c;break}if(A===o){S=!0,o=d,a=c;break}A=A.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),D=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),L=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function ae(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var ee=Symbol.for("react.client.reference");function pe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ee?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case v:return"Profiler";case y:return"StrictMode";case P:return"Suspense";case F:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case D:return t.displayName||"Context";case w:return(t._context.displayName||"Context")+".Consumer";case O:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:pe(t.type)||"Memo";case K:n=t._payload,t=t._init;try{return pe(t(n))}catch{}}return null}var ce=Array.isArray,U=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},ne=[],fe=-1;function N(t){return{current:t}}function Z(t){0>fe||(t.current=ne[fe],ne[fe]=null,fe--)}function me(t,n){fe++,ne[fe]=t.current,t.current=n}var be=N(null),Te=N(null),Q=N(null),oe=N(null);function we(t,n){switch(me(Q,n),me(Te,t),me(be,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?y0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=y0(n),t=M0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Z(be),me(be,t)}function Ve(){Z(be),Z(Te),Z(Q)}function He(t){t.memoizedState!==null&&me(oe,t);var n=be.current,a=M0(n,t.type);n!==a&&(me(Te,t),me(be,a))}function ht(t){Te.current===t&&(Z(be),Z(Te)),oe.current===t&&(Z(oe),Oo._currentValue=$)}var $t,_t;function pt(t){if($t===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);$t=n&&n[1]||"",_t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$t+t+_t}var wt=!1;function ot(t,n){if(!t||wt)return"";wt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(de){var se=de}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(de){se=de}t.call(xe.prototype)}}else{try{throw Error()}catch(de){se=de}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(de){if(de&&se&&typeof de.stack=="string")return[de.stack,se.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),S=d[0],A=d[1];if(S&&A){var H=S.split(`
`),ie=A.split(`
`);for(c=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;c<ie.length&&!ie[c].includes("DetermineComponentFrameRoot");)c++;if(o===H.length||c===ie.length)for(o=H.length-1,c=ie.length-1;1<=o&&0<=c&&H[o]!==ie[c];)c--;for(;1<=o&&0<=c;o--,c--)if(H[o]!==ie[c]){if(o!==1||c!==1)do if(o--,c--,0>c||H[o]!==ie[c]){var ge=`
`+H[o].replace(" at new "," at ");return t.displayName&&ge.includes("<anonymous>")&&(ge=ge.replace("<anonymous>",t.displayName)),ge}while(1<=o&&0<=c);break}}}finally{wt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?pt(a):""}function en(t,n){switch(t.tag){case 26:case 27:case 5:return pt(t.type);case 16:return pt("Lazy");case 13:return t.child!==n&&n!==null?pt("Suspense Fallback"):pt("Suspense");case 19:return pt("SuspenseList");case 0:case 15:return ot(t.type,!1);case 11:return ot(t.type.render,!1);case 1:return ot(t.type,!0);case 31:return pt("Activity");default:return""}}function G(t){try{var n="",a=null;do n+=en(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var jt=Object.prototype.hasOwnProperty,Et=s.unstable_scheduleCallback,Nt=s.unstable_cancelCallback,je=s.unstable_shouldYield,z=s.unstable_requestPaint,E=s.unstable_now,W=s.unstable_getCurrentPriorityLevel,_e=s.unstable_ImmediatePriority,ye=s.unstable_UserBlockingPriority,he=s.unstable_NormalPriority,Ke=s.unstable_LowPriority,Ue=s.unstable_IdlePriority,We=s.log,nt=s.unstable_setDisableYieldValue,Ee=null,Re=null;function Be(t){if(typeof We=="function"&&nt(t),Re&&typeof Re.setStrictMode=="function")try{Re.setStrictMode(Ee,t)}catch{}}var Ie=Math.clz32?Math.clz32:X,Le=Math.log,ut=Math.LN2;function X(t){return t>>>=0,t===0?32:31-(Le(t)/ut|0)|0}var Oe=256,Ce=262144,Fe=4194304;function Me(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Se(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var c=0,d=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var A=o&134217727;return A!==0?(o=A&~d,o!==0?c=Me(o):(S&=A,S!==0?c=Me(S):a||(a=A&~t,a!==0&&(c=Me(a))))):(A=o&~d,A!==0?c=Me(A):S!==0?c=Me(S):a||(a=o&~t,a!==0&&(c=Me(a)))),c===0?0:n!==0&&n!==c&&(n&d)===0&&(d=c&-c,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:c}function De(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function it(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zt(){var t=Fe;return Fe<<=1,(Fe&62914560)===0&&(Fe=4194304),t}function bt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Dn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Mi(t,n,a,o,c,d){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,H=t.expirationTimes,ie=t.hiddenUpdates;for(a=S&~a;0<a;){var ge=31-Ie(a),xe=1<<ge;A[ge]=0,H[ge]=-1;var se=ie[ge];if(se!==null)for(ie[ge]=null,ge=0;ge<se.length;ge++){var de=se[ge];de!==null&&(de.lane&=-536870913)}a&=~xe}o!==0&&fl(t,o,0),d!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=d&~(S&~n))}function fl(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ie(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Ws(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Ie(a),c=1<<o;c&n|t[o]&n&&(t[o]|=n),a&=~c}}function Ir(t,n){var a=n&-n;return a=(a&42)!==0?1:qs(a),(a&(t.suspendedLanes|n))!==0?0:a}function qs(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Fr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ys(){var t=B.p;return t!==0?t:(t=window.event,t===void 0?32:W0(t.type))}function Ni(t,n){var a=B.p;try{return B.p=t,n()}finally{B.p=a}}var ri=Math.random().toString(36).slice(2),on="__reactFiber$"+ri,xn="__reactProps$"+ri,Ei="__reactContainer$"+ri,Br="__reactEvents$"+ri,Hr="__reactListeners$"+ri,dl="__reactHandles$"+ri,js="__reactResources$"+ri,sr="__reactMarker$"+ri;function Zs(t){delete t[on],delete t[xn],delete t[Br],delete t[Hr],delete t[dl]}function Aa(t){var n=t[on];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Ei]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=w0(t);t!==null;){if(a=t[on])return a;t=w0(t)}return n}t=a,a=t.parentNode}return null}function Ra(t){if(t=t[on]||t[Ei]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function or(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ca(t){var n=t[js];return n||(n=t[js]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function R(t){t[sr]=!0}var q=new Set,ue={};function re(t,n){J(t,n),J(t+"Capture",n)}function J(t,n){for(ue[t]=n,t=0;t<n.length;t++)q.add(n[t])}var Ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ge={},Pe={};function ke(t){return jt.call(Pe,t)?!0:jt.call(Ge,t)?!1:Ne.test(t)?Pe[t]=!0:(Ge[t]=!0,!1)}function qe(t,n,a){if(ke(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function $e(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ye(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function et(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Dt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Zt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){a=""+S,d.call(this,S)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Wt(t){if(!t._valueTracker){var n=Dt(t)?"checked":"value";t._valueTracker=Zt(t,n,""+t[n])}}function Ot(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Dt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Qe(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ut=/[\n"\\]/g;function at(t){return t.replace(Ut,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Sn(t,n,a,o,c,d,S,A){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+et(n)):t.value!==""+et(n)&&(t.value=""+et(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?yn(t,S,et(n)):a!=null?yn(t,S,et(a)):o!=null&&t.removeAttribute("value"),c==null&&d!=null&&(t.defaultChecked=!!d),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+et(A):t.removeAttribute("name")}function Yi(t,n,a,o,c,d,S,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Wt(t);return}a=a!=null?""+et(a):"",n=n!=null?""+et(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=A?t.checked:!!o,t.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),Wt(t)}function yn(t,n,a){n==="number"&&Qe(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function si(t,n,a,o){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&o&&(t[a].defaultSelected=!0)}else{for(a=""+et(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function It(t,n,a){if(n!=null&&(n=""+et(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+et(a):""}function Mn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ce(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=et(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Wt(t)}function hn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var En=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||En.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Gr(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&bn(t,c,o)}else for(var d in n)n.hasOwnProperty(d)&&bn(t,d,n[d])}function bi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),px=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function hl(t){return px.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ji(){}var hc=null;function pc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Vr=null,kr=null;function Sp(t){var n=Ra(t);if(n&&(t=n.stateNode)){var a=t[xn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Sn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+at(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var c=o[xn]||null;if(!c)throw Error(r(90));Sn(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Ot(o)}break e;case"textarea":It(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&si(t,!!a.multiple,n,!1)}}}var mc=!1;function yp(t,n,a){if(mc)return t(n,a);mc=!0;try{var o=t(n);return o}finally{if(mc=!1,(Vr!==null||kr!==null)&&(eu(),Vr&&(n=Vr,t=kr,kr=Vr=null,Sp(n),t)))for(n=0;n<t.length;n++)Sp(t[n])}}function Ks(t,n){var a=t.stateNode;if(a===null)return null;var o=a[xn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gc=!1;if(Zi)try{var Qs={};Object.defineProperty(Qs,"passive",{get:function(){gc=!0}}),window.addEventListener("test",Qs,Qs),window.removeEventListener("test",Qs,Qs)}catch{gc=!1}var wa=null,_c=null,pl=null;function Mp(){if(pl)return pl;var t,n=_c,a=n.length,o,c="value"in wa?wa.value:wa.textContent,d=c.length;for(t=0;t<a&&n[t]===c[t];t++);var S=a-t;for(o=1;o<=S&&n[a-o]===c[d-o];o++);return pl=c.slice(t,1<o?1-o:void 0)}function ml(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function gl(){return!0}function Ep(){return!1}function Hn(t){function n(a,o,c,d,S){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?gl:Ep,this.isPropagationStopped=Ep,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=gl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=gl)},persist:function(){},isPersistent:gl}),n}var lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_l=Hn(lr),Js=g({},lr,{view:0,detail:0}),mx=Hn(Js),vc,xc,$s,vl=g({},Js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$s&&($s&&t.type==="mousemove"?(vc=t.screenX-$s.screenX,xc=t.screenY-$s.screenY):xc=vc=0,$s=t),vc)},movementY:function(t){return"movementY"in t?t.movementY:xc}}),bp=Hn(vl),gx=g({},vl,{dataTransfer:0}),_x=Hn(gx),vx=g({},Js,{relatedTarget:0}),Sc=Hn(vx),xx=g({},lr,{animationName:0,elapsedTime:0,pseudoElement:0}),Sx=Hn(xx),yx=g({},lr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Mx=Hn(yx),Ex=g({},lr,{data:0}),Tp=Hn(Ex),bx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ax={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Ax[t])?!!n[t]:!1}function yc(){return Rx}var Cx=g({},Js,{key:function(t){if(t.key){var n=bx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Tx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yc,charCode:function(t){return t.type==="keypress"?ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wx=Hn(Cx),Dx=g({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ap=Hn(Dx),Ux=g({},Js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yc}),Lx=Hn(Ux),Nx=g({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ox=Hn(Nx),Px=g({},vl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zx=Hn(Px),Ix=g({},lr,{newState:0,oldState:0}),Fx=Hn(Ix),Bx=[9,13,27,32],Mc=Zi&&"CompositionEvent"in window,eo=null;Zi&&"documentMode"in document&&(eo=document.documentMode);var Hx=Zi&&"TextEvent"in window&&!eo,Rp=Zi&&(!Mc||eo&&8<eo&&11>=eo),Cp=" ",wp=!1;function Dp(t,n){switch(t){case"keyup":return Bx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Up(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xr=!1;function Gx(t,n){switch(t){case"compositionend":return Up(n);case"keypress":return n.which!==32?null:(wp=!0,Cp);case"textInput":return t=n.data,t===Cp&&wp?null:t;default:return null}}function Vx(t,n){if(Xr)return t==="compositionend"||!Mc&&Dp(t,n)?(t=Mp(),pl=_c=wa=null,Xr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Rp&&n.locale!=="ko"?null:n.data;default:return null}}var kx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!kx[t.type]:n==="textarea"}function Np(t,n,a,o){Vr?kr?kr.push(o):kr=[o]:Vr=o,n=ou(n,"onChange"),0<n.length&&(a=new _l("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var to=null,no=null;function Xx(t){m0(t,0)}function xl(t){var n=or(t);if(Ot(n))return t}function Op(t,n){if(t==="change")return n}var Pp=!1;if(Zi){var Ec;if(Zi){var bc="oninput"in document;if(!bc){var zp=document.createElement("div");zp.setAttribute("oninput","return;"),bc=typeof zp.oninput=="function"}Ec=bc}else Ec=!1;Pp=Ec&&(!document.documentMode||9<document.documentMode)}function Ip(){to&&(to.detachEvent("onpropertychange",Fp),no=to=null)}function Fp(t){if(t.propertyName==="value"&&xl(no)){var n=[];Np(n,no,t,pc(t)),yp(Xx,n)}}function Wx(t,n,a){t==="focusin"?(Ip(),to=n,no=a,to.attachEvent("onpropertychange",Fp)):t==="focusout"&&Ip()}function qx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xl(no)}function Yx(t,n){if(t==="click")return xl(n)}function jx(t,n){if(t==="input"||t==="change")return xl(n)}function Zx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var jn=typeof Object.is=="function"?Object.is:Zx;function io(t,n){if(jn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!jt.call(n,c)||!jn(t[c],n[c]))return!1}return!0}function Bp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hp(t,n){var a=Bp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Bp(a)}}function Gp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Gp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Vp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Qe(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Qe(t.document)}return n}function Tc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Kx=Zi&&"documentMode"in document&&11>=document.documentMode,Wr=null,Ac=null,ao=null,Rc=!1;function kp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Rc||Wr==null||Wr!==Qe(o)||(o=Wr,"selectionStart"in o&&Tc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ao&&io(ao,o)||(ao=o,o=ou(Ac,"onSelect"),0<o.length&&(n=new _l("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Wr)))}function ur(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var qr={animationend:ur("Animation","AnimationEnd"),animationiteration:ur("Animation","AnimationIteration"),animationstart:ur("Animation","AnimationStart"),transitionrun:ur("Transition","TransitionRun"),transitionstart:ur("Transition","TransitionStart"),transitioncancel:ur("Transition","TransitionCancel"),transitionend:ur("Transition","TransitionEnd")},Cc={},Xp={};Zi&&(Xp=document.createElement("div").style,"AnimationEvent"in window||(delete qr.animationend.animation,delete qr.animationiteration.animation,delete qr.animationstart.animation),"TransitionEvent"in window||delete qr.transitionend.transition);function cr(t){if(Cc[t])return Cc[t];if(!qr[t])return t;var n=qr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Xp)return Cc[t]=n[a];return t}var Wp=cr("animationend"),qp=cr("animationiteration"),Yp=cr("animationstart"),Qx=cr("transitionrun"),Jx=cr("transitionstart"),$x=cr("transitioncancel"),jp=cr("transitionend"),Zp=new Map,wc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");wc.push("scrollEnd");function Ti(t,n){Zp.set(t,n),re(n,[t])}var Sl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},oi=[],Yr=0,Dc=0;function yl(){for(var t=Yr,n=Dc=Yr=0;n<t;){var a=oi[n];oi[n++]=null;var o=oi[n];oi[n++]=null;var c=oi[n];oi[n++]=null;var d=oi[n];if(oi[n++]=null,o!==null&&c!==null){var S=o.pending;S===null?c.next=c:(c.next=S.next,S.next=c),o.pending=c}d!==0&&Kp(a,c,d)}}function Ml(t,n,a,o){oi[Yr++]=t,oi[Yr++]=n,oi[Yr++]=a,oi[Yr++]=o,Dc|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Uc(t,n,a,o){return Ml(t,n,a,o),El(t)}function fr(t,n){return Ml(t,null,null,n),El(t)}function Kp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var c=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(c=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,c&&n!==null&&(c=31-Ie(a),t=d.hiddenUpdates,o=t[c],o===null?t[c]=[n]:o.push(n),n.lane=a|536870912),d):null}function El(t){if(50<Ro)throw Ro=0,Gf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var jr={};function eS(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(t,n,a,o){return new eS(t,n,a,o)}function Lc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ki(t,n){var a=t.alternate;return a===null?(a=Zn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Qp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function bl(t,n,a,o,c,d){var S=0;if(o=t,typeof t=="function")Lc(t)&&(S=1);else if(typeof t=="string")S=ry(t,a,be.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=Zn(31,a,n,c),t.elementType=C,t.lanes=d,t;case T:return dr(a.children,c,d,n);case y:S=8,c|=24;break;case v:return t=Zn(12,a,n,c|2),t.elementType=v,t.lanes=d,t;case P:return t=Zn(13,a,n,c),t.elementType=P,t.lanes=d,t;case F:return t=Zn(19,a,n,c),t.elementType=F,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D:S=10;break e;case w:S=9;break e;case O:S=11;break e;case I:S=14;break e;case K:S=16,o=null;break e}S=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=Zn(S,a,n,c),n.elementType=t,n.type=o,n.lanes=d,n}function dr(t,n,a,o){return t=Zn(7,t,o,n),t.lanes=a,t}function Nc(t,n,a){return t=Zn(6,t,null,n),t.lanes=a,t}function Jp(t){var n=Zn(18,null,null,0);return n.stateNode=t,n}function Oc(t,n,a){return n=Zn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var $p=new WeakMap;function li(t,n){if(typeof t=="object"&&t!==null){var a=$p.get(t);return a!==void 0?a:(n={value:t,source:n,stack:G(n)},$p.set(t,n),n)}return{value:t,source:n,stack:G(n)}}var Zr=[],Kr=0,Tl=null,ro=0,ui=[],ci=0,Da=null,Oi=1,Pi="";function Qi(t,n){Zr[Kr++]=ro,Zr[Kr++]=Tl,Tl=t,ro=n}function em(t,n,a){ui[ci++]=Oi,ui[ci++]=Pi,ui[ci++]=Da,Da=t;var o=Oi;t=Pi;var c=32-Ie(o)-1;o&=~(1<<c),a+=1;var d=32-Ie(n)+c;if(30<d){var S=c-c%5;d=(o&(1<<S)-1).toString(32),o>>=S,c-=S,Oi=1<<32-Ie(n)+c|a<<c|o,Pi=d+t}else Oi=1<<d|a<<c|o,Pi=t}function Pc(t){t.return!==null&&(Qi(t,1),em(t,1,0))}function zc(t){for(;t===Tl;)Tl=Zr[--Kr],Zr[Kr]=null,ro=Zr[--Kr],Zr[Kr]=null;for(;t===Da;)Da=ui[--ci],ui[ci]=null,Pi=ui[--ci],ui[ci]=null,Oi=ui[--ci],ui[ci]=null}function tm(t,n){ui[ci++]=Oi,ui[ci++]=Pi,ui[ci++]=Da,Oi=n.id,Pi=n.overflow,Da=t}var Tn=null,qt=null,yt=!1,Ua=null,fi=!1,Ic=Error(r(519));function La(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw so(li(n,t)),Ic}function nm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[on]=t,n[xn]=o,a){case"dialog":gt("cancel",n),gt("close",n);break;case"iframe":case"object":case"embed":gt("load",n);break;case"video":case"audio":for(a=0;a<wo.length;a++)gt(wo[a],n);break;case"source":gt("error",n);break;case"img":case"image":case"link":gt("error",n),gt("load",n);break;case"details":gt("toggle",n);break;case"input":gt("invalid",n),Yi(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":gt("invalid",n);break;case"textarea":gt("invalid",n),Mn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||x0(n.textContent,a)?(o.popover!=null&&(gt("beforetoggle",n),gt("toggle",n)),o.onScroll!=null&&gt("scroll",n),o.onScrollEnd!=null&&gt("scrollend",n),o.onClick!=null&&(n.onclick=ji),n=!0):n=!1,n||La(t,!0)}function im(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:fi=!1;return;case 27:case 3:fi=!0;return;default:Tn=Tn.return}}function Qr(t){if(t!==Tn)return!1;if(!yt)return im(t),yt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||nd(t.type,t.memoizedProps)),a=!a),a&&qt&&La(t),im(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));qt=C0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));qt=C0(t)}else n===27?(n=qt,qa(t.type)?(t=od,od=null,qt=t):qt=n):qt=Tn?hi(t.stateNode.nextSibling):null;return!0}function hr(){qt=Tn=null,yt=!1}function Fc(){var t=Ua;return t!==null&&(Xn===null?Xn=t:Xn.push.apply(Xn,t),Ua=null),t}function so(t){Ua===null?Ua=[t]:Ua.push(t)}var Bc=N(null),pr=null,Ji=null;function Na(t,n,a){me(Bc,n._currentValue),n._currentValue=a}function $i(t){t._currentValue=Bc.current,Z(Bc)}function Hc(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Gc(t,n,a,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var d=c.dependencies;if(d!==null){var S=c.child;d=d.firstContext;e:for(;d!==null;){var A=d;d=c;for(var H=0;H<n.length;H++)if(A.context===n[H]){d.lanes|=a,A=d.alternate,A!==null&&(A.lanes|=a),Hc(d.return,a,t),o||(S=null);break e}d=A.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,d=S.alternate,d!==null&&(d.lanes|=a),Hc(S,a,t),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===t){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function Jr(t,n,a,o){t=null;for(var c=n,d=!1;c!==null;){if(!d){if((c.flags&524288)!==0)d=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var A=c.type;jn(c.pendingProps.value,S.value)||(t!==null?t.push(A):t=[A])}}else if(c===oe.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Oo):t=[Oo])}c=c.return}t!==null&&Gc(n,t,a,o),n.flags|=262144}function Al(t){for(t=t.firstContext;t!==null;){if(!jn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function mr(t){pr=t,Ji=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return am(pr,t)}function Rl(t,n){return pr===null&&mr(t),am(t,n)}function am(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ji===null){if(t===null)throw Error(r(308));Ji=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ji=Ji.next=n;return a}var tS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},nS=s.unstable_scheduleCallback,iS=s.unstable_NormalPriority,ln={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Vc(){return{controller:new tS,data:new Map,refCount:0}}function oo(t){t.refCount--,t.refCount===0&&nS(iS,function(){t.controller.abort()})}var lo=null,kc=0,$r=0,es=null;function aS(t,n){if(lo===null){var a=lo=[];kc=0,$r=Yf(),es={status:"pending",value:void 0,then:function(o){a.push(o)}}}return kc++,n.then(rm,rm),n}function rm(){if(--kc===0&&lo!==null){es!==null&&(es.status="fulfilled");var t=lo;lo=null,$r=0,es=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function rS(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var sm=U.S;U.S=function(t,n){kg=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&aS(t,n),sm!==null&&sm(t,n)};var gr=N(null);function Xc(){var t=gr.current;return t!==null?t:Xt.pooledCache}function Cl(t,n){n===null?me(gr,gr.current):me(gr,n.pool)}function om(){var t=Xc();return t===null?null:{parent:ln._currentValue,pool:t}}var ts=Error(r(460)),Wc=Error(r(474)),wl=Error(r(542)),Dl={then:function(){}};function lm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function um(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ji,ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,fm(t),t;default:if(typeof n.status=="string")n.then(ji,ji);else{if(t=Xt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,fm(t),t}throw vr=n,ts}}function _r(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(vr=a,ts):a}}var vr=null;function cm(){if(vr===null)throw Error(r(459));var t=vr;return vr=null,t}function fm(t){if(t===ts||t===wl)throw Error(r(483))}var ns=null,uo=0;function Ul(t){var n=uo;return uo+=1,ns===null&&(ns=[]),um(ns,t,n)}function co(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ll(t,n){throw n.$$typeof===x?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function dm(t){function n(Y,k){if(t){var te=Y.deletions;te===null?(Y.deletions=[k],Y.flags|=16):te.push(k)}}function a(Y,k){if(!t)return null;for(;k!==null;)n(Y,k),k=k.sibling;return null}function o(Y){for(var k=new Map;Y!==null;)Y.key!==null?k.set(Y.key,Y):k.set(Y.index,Y),Y=Y.sibling;return k}function c(Y,k){return Y=Ki(Y,k),Y.index=0,Y.sibling=null,Y}function d(Y,k,te){return Y.index=te,t?(te=Y.alternate,te!==null?(te=te.index,te<k?(Y.flags|=67108866,k):te):(Y.flags|=67108866,k)):(Y.flags|=1048576,k)}function S(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function A(Y,k,te,ve){return k===null||k.tag!==6?(k=Nc(te,Y.mode,ve),k.return=Y,k):(k=c(k,te),k.return=Y,k)}function H(Y,k,te,ve){var Je=te.type;return Je===T?ge(Y,k,te.props.children,ve,te.key):k!==null&&(k.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===K&&_r(Je)===k.type)?(k=c(k,te.props),co(k,te),k.return=Y,k):(k=bl(te.type,te.key,te.props,null,Y.mode,ve),co(k,te),k.return=Y,k)}function ie(Y,k,te,ve){return k===null||k.tag!==4||k.stateNode.containerInfo!==te.containerInfo||k.stateNode.implementation!==te.implementation?(k=Oc(te,Y.mode,ve),k.return=Y,k):(k=c(k,te.children||[]),k.return=Y,k)}function ge(Y,k,te,ve,Je){return k===null||k.tag!==7?(k=dr(te,Y.mode,ve,Je),k.return=Y,k):(k=c(k,te),k.return=Y,k)}function xe(Y,k,te){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Nc(""+k,Y.mode,te),k.return=Y,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return te=bl(k.type,k.key,k.props,null,Y.mode,te),co(te,k),te.return=Y,te;case b:return k=Oc(k,Y.mode,te),k.return=Y,k;case K:return k=_r(k),xe(Y,k,te)}if(ce(k)||ae(k))return k=dr(k,Y.mode,te,null),k.return=Y,k;if(typeof k.then=="function")return xe(Y,Ul(k),te);if(k.$$typeof===D)return xe(Y,Rl(Y,k),te);Ll(Y,k)}return null}function se(Y,k,te,ve){var Je=k!==null?k.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return Je!==null?null:A(Y,k,""+te,ve);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case M:return te.key===Je?H(Y,k,te,ve):null;case b:return te.key===Je?ie(Y,k,te,ve):null;case K:return te=_r(te),se(Y,k,te,ve)}if(ce(te)||ae(te))return Je!==null?null:ge(Y,k,te,ve,null);if(typeof te.then=="function")return se(Y,k,Ul(te),ve);if(te.$$typeof===D)return se(Y,k,Rl(Y,te),ve);Ll(Y,te)}return null}function de(Y,k,te,ve,Je){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return Y=Y.get(te)||null,A(k,Y,""+ve,Je);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case M:return Y=Y.get(ve.key===null?te:ve.key)||null,H(k,Y,ve,Je);case b:return Y=Y.get(ve.key===null?te:ve.key)||null,ie(k,Y,ve,Je);case K:return ve=_r(ve),de(Y,k,te,ve,Je)}if(ce(ve)||ae(ve))return Y=Y.get(te)||null,ge(k,Y,ve,Je,null);if(typeof ve.then=="function")return de(Y,k,te,Ul(ve),Je);if(ve.$$typeof===D)return de(Y,k,te,Rl(k,ve),Je);Ll(k,ve)}return null}function Xe(Y,k,te,ve){for(var Je=null,At=null,Ze=k,ct=k=0,xt=null;Ze!==null&&ct<te.length;ct++){Ze.index>ct?(xt=Ze,Ze=null):xt=Ze.sibling;var Rt=se(Y,Ze,te[ct],ve);if(Rt===null){Ze===null&&(Ze=xt);break}t&&Ze&&Rt.alternate===null&&n(Y,Ze),k=d(Rt,k,ct),At===null?Je=Rt:At.sibling=Rt,At=Rt,Ze=xt}if(ct===te.length)return a(Y,Ze),yt&&Qi(Y,ct),Je;if(Ze===null){for(;ct<te.length;ct++)Ze=xe(Y,te[ct],ve),Ze!==null&&(k=d(Ze,k,ct),At===null?Je=Ze:At.sibling=Ze,At=Ze);return yt&&Qi(Y,ct),Je}for(Ze=o(Ze);ct<te.length;ct++)xt=de(Ze,Y,ct,te[ct],ve),xt!==null&&(t&&xt.alternate!==null&&Ze.delete(xt.key===null?ct:xt.key),k=d(xt,k,ct),At===null?Je=xt:At.sibling=xt,At=xt);return t&&Ze.forEach(function(Qa){return n(Y,Qa)}),yt&&Qi(Y,ct),Je}function tt(Y,k,te,ve){if(te==null)throw Error(r(151));for(var Je=null,At=null,Ze=k,ct=k=0,xt=null,Rt=te.next();Ze!==null&&!Rt.done;ct++,Rt=te.next()){Ze.index>ct?(xt=Ze,Ze=null):xt=Ze.sibling;var Qa=se(Y,Ze,Rt.value,ve);if(Qa===null){Ze===null&&(Ze=xt);break}t&&Ze&&Qa.alternate===null&&n(Y,Ze),k=d(Qa,k,ct),At===null?Je=Qa:At.sibling=Qa,At=Qa,Ze=xt}if(Rt.done)return a(Y,Ze),yt&&Qi(Y,ct),Je;if(Ze===null){for(;!Rt.done;ct++,Rt=te.next())Rt=xe(Y,Rt.value,ve),Rt!==null&&(k=d(Rt,k,ct),At===null?Je=Rt:At.sibling=Rt,At=Rt);return yt&&Qi(Y,ct),Je}for(Ze=o(Ze);!Rt.done;ct++,Rt=te.next())Rt=de(Ze,Y,ct,Rt.value,ve),Rt!==null&&(t&&Rt.alternate!==null&&Ze.delete(Rt.key===null?ct:Rt.key),k=d(Rt,k,ct),At===null?Je=Rt:At.sibling=Rt,At=Rt);return t&&Ze.forEach(function(gy){return n(Y,gy)}),yt&&Qi(Y,ct),Je}function kt(Y,k,te,ve){if(typeof te=="object"&&te!==null&&te.type===T&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case M:e:{for(var Je=te.key;k!==null;){if(k.key===Je){if(Je=te.type,Je===T){if(k.tag===7){a(Y,k.sibling),ve=c(k,te.props.children),ve.return=Y,Y=ve;break e}}else if(k.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===K&&_r(Je)===k.type){a(Y,k.sibling),ve=c(k,te.props),co(ve,te),ve.return=Y,Y=ve;break e}a(Y,k);break}else n(Y,k);k=k.sibling}te.type===T?(ve=dr(te.props.children,Y.mode,ve,te.key),ve.return=Y,Y=ve):(ve=bl(te.type,te.key,te.props,null,Y.mode,ve),co(ve,te),ve.return=Y,Y=ve)}return S(Y);case b:e:{for(Je=te.key;k!==null;){if(k.key===Je)if(k.tag===4&&k.stateNode.containerInfo===te.containerInfo&&k.stateNode.implementation===te.implementation){a(Y,k.sibling),ve=c(k,te.children||[]),ve.return=Y,Y=ve;break e}else{a(Y,k);break}else n(Y,k);k=k.sibling}ve=Oc(te,Y.mode,ve),ve.return=Y,Y=ve}return S(Y);case K:return te=_r(te),kt(Y,k,te,ve)}if(ce(te))return Xe(Y,k,te,ve);if(ae(te)){if(Je=ae(te),typeof Je!="function")throw Error(r(150));return te=Je.call(te),tt(Y,k,te,ve)}if(typeof te.then=="function")return kt(Y,k,Ul(te),ve);if(te.$$typeof===D)return kt(Y,k,Rl(Y,te),ve);Ll(Y,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,k!==null&&k.tag===6?(a(Y,k.sibling),ve=c(k,te),ve.return=Y,Y=ve):(a(Y,k),ve=Nc(te,Y.mode,ve),ve.return=Y,Y=ve),S(Y)):a(Y,k)}return function(Y,k,te,ve){try{uo=0;var Je=kt(Y,k,te,ve);return ns=null,Je}catch(Ze){if(Ze===ts||Ze===wl)throw Ze;var At=Zn(29,Ze,null,Y.mode);return At.lanes=ve,At.return=Y,At}}}var xr=dm(!0),hm=dm(!1),Oa=!1;function qc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Pa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function za(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Lt&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=El(t),Kp(t,null,a),n}return Ml(t,o,n,a),El(t)}function fo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ws(t,a)}}function jc(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?c=d=S:d=d.next=S,a=a.next}while(a!==null);d===null?c=d=n:d=d.next=n}else c=d=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Zc=!1;function ho(){if(Zc){var t=es;if(t!==null)throw t}}function po(t,n,a,o){Zc=!1;var c=t.updateQueue;Oa=!1;var d=c.firstBaseUpdate,S=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var H=A,ie=H.next;H.next=null,S===null?d=ie:S.next=ie,S=H;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,A=ge.lastBaseUpdate,A!==S&&(A===null?ge.firstBaseUpdate=ie:A.next=ie,ge.lastBaseUpdate=H))}if(d!==null){var xe=c.baseState;S=0,ge=ie=H=null,A=d;do{var se=A.lane&-536870913,de=se!==A.lane;if(de?(vt&se)===se:(o&se)===se){se!==0&&se===$r&&(Zc=!0),ge!==null&&(ge=ge.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var Xe=t,tt=A;se=n;var kt=a;switch(tt.tag){case 1:if(Xe=tt.payload,typeof Xe=="function"){xe=Xe.call(kt,xe,se);break e}xe=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=tt.payload,se=typeof Xe=="function"?Xe.call(kt,xe,se):Xe,se==null)break e;xe=g({},xe,se);break e;case 2:Oa=!0}}se=A.callback,se!==null&&(t.flags|=64,de&&(t.flags|=8192),de=c.callbacks,de===null?c.callbacks=[se]:de.push(se))}else de={lane:se,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ge===null?(ie=ge=de,H=xe):ge=ge.next=de,S|=se;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;de=A,A=de.next,de.next=null,c.lastBaseUpdate=de,c.shared.pending=null}}while(!0);ge===null&&(H=xe),c.baseState=H,c.firstBaseUpdate=ie,c.lastBaseUpdate=ge,d===null&&(c.shared.lanes=0),Ga|=S,t.lanes=S,t.memoizedState=xe}}function pm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function mm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)pm(a[t],n)}var is=N(null),Nl=N(0);function gm(t,n){t=la,me(Nl,t),me(is,n),la=t|n.baseLanes}function Kc(){me(Nl,la),me(is,is.current)}function Qc(){la=Nl.current,Z(is),Z(Nl)}var Kn=N(null),di=null;function Ia(t){var n=t.alternate;me(rn,rn.current&1),me(Kn,t),di===null&&(n===null||is.current!==null||n.memoizedState!==null)&&(di=t)}function Jc(t){me(rn,rn.current),me(Kn,t),di===null&&(di=t)}function _m(t){t.tag===22?(me(rn,rn.current),me(Kn,t),di===null&&(di=t)):Fa()}function Fa(){me(rn,rn.current),me(Kn,Kn.current)}function Qn(t){Z(Kn),di===t&&(di=null),Z(rn)}var rn=N(0);function Ol(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||rd(a)||sd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ea=0,lt=null,Gt=null,un=null,Pl=!1,as=!1,Sr=!1,zl=0,mo=0,rs=null,sS=0;function tn(){throw Error(r(321))}function $c(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!jn(t[a],n[a]))return!1;return!0}function ef(t,n,a,o,c,d){return ea=d,lt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,U.H=t===null||t.memoizedState===null?eg:gf,Sr=!1,d=a(o,c),Sr=!1,as&&(d=xm(n,a,o,c)),vm(t),d}function vm(t){U.H=vo;var n=Gt!==null&&Gt.next!==null;if(ea=0,un=Gt=lt=null,Pl=!1,mo=0,rs=null,n)throw Error(r(300));t===null||cn||(t=t.dependencies,t!==null&&Al(t)&&(cn=!0))}function xm(t,n,a,o){lt=t;var c=0;do{if(as&&(rs=null),mo=0,as=!1,25<=c)throw Error(r(301));if(c+=1,un=Gt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}U.H=tg,d=n(a,o)}while(as);return d}function oS(){var t=U.H,n=t.useState()[0];return n=typeof n.then=="function"?go(n):n,t=t.useState()[0],(Gt!==null?Gt.memoizedState:null)!==t&&(lt.flags|=1024),n}function tf(){var t=zl!==0;return zl=0,t}function nf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function af(t){if(Pl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Pl=!1}ea=0,un=Gt=lt=null,as=!1,mo=zl=0,rs=null}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?lt.memoizedState=un=t:un=un.next=t,un}function sn(){if(Gt===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var n=un===null?lt.memoizedState:un.next;if(n!==null)un=n,Gt=t;else{if(t===null)throw lt.alternate===null?Error(r(467)):Error(r(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},un===null?lt.memoizedState=un=t:un=un.next=t}return un}function Il(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function go(t){var n=mo;return mo+=1,rs===null&&(rs=[]),t=um(rs,t,n),n=lt,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,U.H=n===null||n.memoizedState===null?eg:gf),t}function Fl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return go(t);if(t.$$typeof===D)return An(t)}throw Error(r(438,String(t)))}function rf(t){var n=null,a=lt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=lt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Il(),lt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=L;return n.index++,a}function ta(t,n){return typeof n=="function"?n(t):n}function Bl(t){var n=sn();return sf(n,Gt,t)}function sf(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=t.baseQueue,d=o.pending;if(d!==null){if(c!==null){var S=c.next;c.next=d.next,d.next=S}n.baseQueue=c=d,o.pending=null}if(d=t.baseState,c===null)t.memoizedState=d;else{n=c.next;var A=S=null,H=null,ie=n,ge=!1;do{var xe=ie.lane&-536870913;if(xe!==ie.lane?(vt&xe)===xe:(ea&xe)===xe){var se=ie.revertLane;if(se===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),xe===$r&&(ge=!0);else if((ea&se)===se){ie=ie.next,se===$r&&(ge=!0);continue}else xe={lane:0,revertLane:ie.revertLane,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},H===null?(A=H=xe,S=d):H=H.next=xe,lt.lanes|=se,Ga|=se;xe=ie.action,Sr&&a(d,xe),d=ie.hasEagerState?ie.eagerState:a(d,xe)}else se={lane:xe,revertLane:ie.revertLane,gesture:ie.gesture,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},H===null?(A=H=se,S=d):H=H.next=se,lt.lanes|=xe,Ga|=xe;ie=ie.next}while(ie!==null&&ie!==n);if(H===null?S=d:H.next=A,!jn(d,t.memoizedState)&&(cn=!0,ge&&(a=es,a!==null)))throw a;t.memoizedState=d,t.baseState=S,t.baseQueue=H,o.lastRenderedState=d}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function of(t){var n=sn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,c=a.pending,d=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do d=t(d,S.action),S=S.next;while(S!==c);jn(d,n.memoizedState)||(cn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Sm(t,n,a){var o=lt,c=sn(),d=yt;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!jn((Gt||c).memoizedState,a);if(S&&(c.memoizedState=a,cn=!0),c=c.queue,cf(Em.bind(null,o,c,t),[t]),c.getSnapshot!==n||S||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,ss(9,{destroy:void 0},Mm.bind(null,o,c,a,n),null),Xt===null)throw Error(r(349));d||(ea&127)!==0||ym(o,n,a)}return a}function ym(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=lt.updateQueue,n===null?(n=Il(),lt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Mm(t,n,a,o){n.value=a,n.getSnapshot=o,bm(n)&&Tm(t)}function Em(t,n,a){return a(function(){bm(n)&&Tm(t)})}function bm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!jn(t,a)}catch{return!0}}function Tm(t){var n=fr(t,2);n!==null&&Wn(n,t,2)}function lf(t){var n=Pn();if(typeof t=="function"){var a=t;if(t=a(),Sr){Be(!0);try{a()}finally{Be(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:t},n}function Am(t,n,a,o){return t.baseState=a,sf(t,Gt,typeof o=="function"?o:ta)}function lS(t,n,a,o,c){if(Vl(t))throw Error(r(485));if(t=n.action,t!==null){var d={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};U.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Rm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Rm(t,n){var a=n.action,o=n.payload,c=t.state;if(n.isTransition){var d=U.T,S={};U.T=S;try{var A=a(c,o),H=U.S;H!==null&&H(S,A),Cm(t,n,A)}catch(ie){uf(t,n,ie)}finally{d!==null&&S.types!==null&&(d.types=S.types),U.T=d}}else try{d=a(c,o),Cm(t,n,d)}catch(ie){uf(t,n,ie)}}function Cm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){wm(t,n,o)},function(o){return uf(t,n,o)}):wm(t,n,a)}function wm(t,n,a){n.status="fulfilled",n.value=a,Dm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Rm(t,a)))}function uf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Dm(n),n=n.next;while(n!==o)}t.action=null}function Dm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Um(t,n){return n}function Lm(t,n){if(yt){var a=Xt.formState;if(a!==null){e:{var o=lt;if(yt){if(qt){t:{for(var c=qt,d=fi;c.nodeType!==8;){if(!d){c=null;break t}if(c=hi(c.nextSibling),c===null){c=null;break t}}d=c.data,c=d==="F!"||d==="F"?c:null}if(c){qt=hi(c.nextSibling),o=c.data==="F!";break e}}La(o)}o=!1}o&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Um,lastRenderedState:n},a.queue=o,a=Qm.bind(null,lt,o),o.dispatch=a,o=lf(!1),d=mf.bind(null,lt,!1,o.queue),o=Pn(),c={state:n,dispatch:null,action:t,pending:null},o.queue=c,a=lS.bind(null,lt,c,d,a),c.dispatch=a,o.memoizedState=t,[n,a,!1]}function Nm(t){var n=sn();return Om(n,Gt,t)}function Om(t,n,a){if(n=sf(t,n,Um)[0],t=Bl(ta)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=go(n)}catch(S){throw S===ts?wl:S}else o=n;n=sn();var c=n.queue,d=c.dispatch;return a!==n.memoizedState&&(lt.flags|=2048,ss(9,{destroy:void 0},uS.bind(null,c,a),null)),[o,d,t]}function uS(t,n){t.action=n}function Pm(t){var n=sn(),a=Gt;if(a!==null)return Om(n,a,t);sn(),n=n.memoizedState,a=sn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function ss(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=lt.updateQueue,n===null&&(n=Il(),lt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function zm(){return sn().memoizedState}function Hl(t,n,a,o){var c=Pn();lt.flags|=t,c.memoizedState=ss(1|n,{destroy:void 0},a,o===void 0?null:o)}function Gl(t,n,a,o){var c=sn();o=o===void 0?null:o;var d=c.memoizedState.inst;Gt!==null&&o!==null&&$c(o,Gt.memoizedState.deps)?c.memoizedState=ss(n,d,a,o):(lt.flags|=t,c.memoizedState=ss(1|n,d,a,o))}function Im(t,n){Hl(8390656,8,t,n)}function cf(t,n){Gl(2048,8,t,n)}function cS(t){lt.flags|=4;var n=lt.updateQueue;if(n===null)n=Il(),lt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Fm(t){var n=sn().memoizedState;return cS({ref:n,nextImpl:t}),function(){if((Lt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Bm(t,n){return Gl(4,2,t,n)}function Hm(t,n){return Gl(4,4,t,n)}function Gm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Vm(t,n,a){a=a!=null?a.concat([t]):null,Gl(4,4,Gm.bind(null,n,t),a)}function ff(){}function km(t,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&$c(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Xm(t,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&$c(n,o[1]))return o[0];if(o=t(),Sr){Be(!0);try{t()}finally{Be(!1)}}return a.memoizedState=[o,n],o}function df(t,n,a){return a===void 0||(ea&1073741824)!==0&&(vt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Wg(),lt.lanes|=t,Ga|=t,a)}function Wm(t,n,a,o){return jn(a,n)?a:is.current!==null?(t=df(t,a,o),jn(t,n)||(cn=!0),t):(ea&42)===0||(ea&1073741824)!==0&&(vt&261930)===0?(cn=!0,t.memoizedState=a):(t=Wg(),lt.lanes|=t,Ga|=t,n)}function qm(t,n,a,o,c){var d=B.p;B.p=d!==0&&8>d?d:8;var S=U.T,A={};U.T=A,mf(t,!1,n,a);try{var H=c(),ie=U.S;if(ie!==null&&ie(A,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var ge=rS(H,o);_o(t,n,ge,ei(t))}else _o(t,n,o,ei(t))}catch(xe){_o(t,n,{then:function(){},status:"rejected",reason:xe},ei())}finally{B.p=d,S!==null&&A.types!==null&&(S.types=A.types),U.T=S}}function fS(){}function hf(t,n,a,o){if(t.tag!==5)throw Error(r(476));var c=Ym(t).queue;qm(t,c,n,$,a===null?fS:function(){return jm(t),a(o)})}function Ym(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:$},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function jm(t){var n=Ym(t);n.next===null&&(n=t.alternate.memoizedState),_o(t,n.next.queue,{},ei())}function pf(){return An(Oo)}function Zm(){return sn().memoizedState}function Km(){return sn().memoizedState}function dS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ei();t=Pa(a);var o=za(n,t,a);o!==null&&(Wn(o,n,a),fo(o,n,a)),n={cache:Vc()},t.payload=n;return}n=n.return}}function hS(t,n,a){var o=ei();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Vl(t)?Jm(n,a):(a=Uc(t,n,a,o),a!==null&&(Wn(a,t,o),$m(a,n,o)))}function Qm(t,n,a){var o=ei();_o(t,n,a,o)}function _o(t,n,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Vl(t))Jm(n,c);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var S=n.lastRenderedState,A=d(S,a);if(c.hasEagerState=!0,c.eagerState=A,jn(A,S))return Ml(t,n,c,0),Xt===null&&yl(),!1}catch{}if(a=Uc(t,n,c,o),a!==null)return Wn(a,t,o),$m(a,n,o),!0}return!1}function mf(t,n,a,o){if(o={lane:2,revertLane:Yf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Vl(t)){if(n)throw Error(r(479))}else n=Uc(t,a,o,2),n!==null&&Wn(n,t,2)}function Vl(t){var n=t.alternate;return t===lt||n!==null&&n===lt}function Jm(t,n){as=Pl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function $m(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ws(t,a)}}var vo={readContext:An,use:Fl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};vo.useEffectEvent=tn;var eg={readContext:An,use:Fl,useCallback:function(t,n){return Pn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:Im,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Hl(4194308,4,Gm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Hl(4194308,4,t,n)},useInsertionEffect:function(t,n){Hl(4,2,t,n)},useMemo:function(t,n){var a=Pn();n=n===void 0?null:n;var o=t();if(Sr){Be(!0);try{t()}finally{Be(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Pn();if(a!==void 0){var c=a(n);if(Sr){Be(!0);try{a(n)}finally{Be(!1)}}}else c=n;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=hS.bind(null,lt,t),[o.memoizedState,t]},useRef:function(t){var n=Pn();return t={current:t},n.memoizedState=t},useState:function(t){t=lf(t);var n=t.queue,a=Qm.bind(null,lt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:ff,useDeferredValue:function(t,n){var a=Pn();return df(a,t,n)},useTransition:function(){var t=lf(!1);return t=qm.bind(null,lt,t.queue,!0,!1),Pn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=lt,c=Pn();if(yt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Xt===null)throw Error(r(349));(vt&127)!==0||ym(o,n,a)}c.memoizedState=a;var d={value:a,getSnapshot:n};return c.queue=d,Im(Em.bind(null,o,d,t),[t]),o.flags|=2048,ss(9,{destroy:void 0},Mm.bind(null,o,d,a,n),null),a},useId:function(){var t=Pn(),n=Xt.identifierPrefix;if(yt){var a=Pi,o=Oi;a=(o&~(1<<32-Ie(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=zl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=sS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:pf,useFormState:Lm,useActionState:Lm,useOptimistic:function(t){var n=Pn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=mf.bind(null,lt,!0,a),a.dispatch=n,[t,n]},useMemoCache:rf,useCacheRefresh:function(){return Pn().memoizedState=dS.bind(null,lt)},useEffectEvent:function(t){var n=Pn(),a={impl:t};return n.memoizedState=a,function(){if((Lt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},gf={readContext:An,use:Fl,useCallback:km,useContext:An,useEffect:cf,useImperativeHandle:Vm,useInsertionEffect:Bm,useLayoutEffect:Hm,useMemo:Xm,useReducer:Bl,useRef:zm,useState:function(){return Bl(ta)},useDebugValue:ff,useDeferredValue:function(t,n){var a=sn();return Wm(a,Gt.memoizedState,t,n)},useTransition:function(){var t=Bl(ta)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:go(t),n]},useSyncExternalStore:Sm,useId:Zm,useHostTransitionStatus:pf,useFormState:Nm,useActionState:Nm,useOptimistic:function(t,n){var a=sn();return Am(a,Gt,t,n)},useMemoCache:rf,useCacheRefresh:Km};gf.useEffectEvent=Fm;var tg={readContext:An,use:Fl,useCallback:km,useContext:An,useEffect:cf,useImperativeHandle:Vm,useInsertionEffect:Bm,useLayoutEffect:Hm,useMemo:Xm,useReducer:of,useRef:zm,useState:function(){return of(ta)},useDebugValue:ff,useDeferredValue:function(t,n){var a=sn();return Gt===null?df(a,t,n):Wm(a,Gt.memoizedState,t,n)},useTransition:function(){var t=of(ta)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:go(t),n]},useSyncExternalStore:Sm,useId:Zm,useHostTransitionStatus:pf,useFormState:Pm,useActionState:Pm,useOptimistic:function(t,n){var a=sn();return Gt!==null?Am(a,Gt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:rf,useCacheRefresh:Km};tg.useEffectEvent=Fm;function _f(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var vf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ei(),c=Pa(o);c.payload=n,a!=null&&(c.callback=a),n=za(t,c,o),n!==null&&(Wn(n,t,o),fo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ei(),c=Pa(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=za(t,c,o),n!==null&&(Wn(n,t,o),fo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ei(),o=Pa(a);o.tag=2,n!=null&&(o.callback=n),n=za(t,o,a),n!==null&&(Wn(n,t,a),fo(n,t,a))}};function ng(t,n,a,o,c,d,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,S):n.prototype&&n.prototype.isPureReactComponent?!io(a,o)||!io(c,d):!0}function ig(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&vf.enqueueReplaceState(n,n.state,null)}function yr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function ag(t){Sl(t)}function rg(t){console.error(t)}function sg(t){Sl(t)}function kl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function og(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function xf(t,n,a){return a=Pa(a),a.tag=3,a.payload={element:null},a.callback=function(){kl(t,n)},a}function lg(t){return t=Pa(t),t.tag=3,t}function ug(t,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var d=o.value;t.payload=function(){return c(d)},t.callback=function(){og(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){og(n,a,o),typeof c!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function pS(t,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Jr(n,a,c,!0),a=Kn.current,a!==null){switch(a.tag){case 31:case 13:return di===null?tu():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===Dl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Xf(t,o,c)),!1;case 22:return a.flags|=65536,o===Dl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Xf(t,o,c)),!1}throw Error(r(435,a.tag))}return Xf(t,o,c),tu(),!1}if(yt)return n=Kn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Ic&&(t=Error(r(422),{cause:o}),so(li(t,a)))):(o!==Ic&&(n=Error(r(423),{cause:o}),so(li(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=li(o,a),c=xf(t.stateNode,o,c),jc(t,c),nn!==4&&(nn=2)),!1;var d=Error(r(520),{cause:o});if(d=li(d,a),Ao===null?Ao=[d]:Ao.push(d),nn!==4&&(nn=2),n===null)return!0;o=li(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=xf(a.stateNode,o,t),jc(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Va===null||!Va.has(d))))return a.flags|=65536,c&=-c,a.lanes|=c,c=lg(c),ug(c,t,a,o),jc(a,c),!1}a=a.return}while(a!==null);return!1}var Sf=Error(r(461)),cn=!1;function Rn(t,n,a,o){n.child=t===null?hm(n,null,a,o):xr(n,t.child,a,o)}function cg(t,n,a,o,c){a=a.render;var d=n.ref;if("ref"in o){var S={};for(var A in o)A!=="ref"&&(S[A]=o[A])}else S=o;return mr(n),o=ef(t,n,a,S,d,c),A=tf(),t!==null&&!cn?(nf(t,n,c),na(t,n,c)):(yt&&A&&Pc(n),n.flags|=1,Rn(t,n,o,c),n.child)}function fg(t,n,a,o,c){if(t===null){var d=a.type;return typeof d=="function"&&!Lc(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,dg(t,n,d,o,c)):(t=bl(a.type,null,o,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Cf(t,c)){var S=d.memoizedProps;if(a=a.compare,a=a!==null?a:io,a(S,o)&&t.ref===n.ref)return na(t,n,c)}return n.flags|=1,t=Ki(d,o),t.ref=n.ref,t.return=n,n.child=t}function dg(t,n,a,o,c){if(t!==null){var d=t.memoizedProps;if(io(d,o)&&t.ref===n.ref)if(cn=!1,n.pendingProps=o=d,Cf(t,c))(t.flags&131072)!==0&&(cn=!0);else return n.lanes=t.lanes,na(t,n,c)}return yf(t,n,a,o,c)}function hg(t,n,a,o){var c=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~d}else o=0,n.child=null;return pg(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Cl(n,d!==null?d.cachePool:null),d!==null?gm(n,d):Kc(),_m(n);else return o=n.lanes=536870912,pg(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Cl(n,d.cachePool),gm(n,d),Fa(),n.memoizedState=null):(t!==null&&Cl(n,null),Kc(),Fa());return Rn(t,n,c,a),n.child}function xo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function pg(t,n,a,o,c){var d=Xc();return d=d===null?null:{parent:ln._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&Cl(n,null),Kc(),_m(n),t!==null&&Jr(t,n,o,!0),n.childLanes=c,null}function Xl(t,n){return n=ql({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function mg(t,n,a){return xr(n,t.child,null,a),t=Xl(n,n.pendingProps),t.flags|=2,Qn(n),n.memoizedState=null,t}function mS(t,n,a){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(yt){if(o.mode==="hidden")return t=Xl(n,o),n.lanes=536870912,xo(null,t);if(Jc(n),(t=qt)?(t=R0(t,fi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=Jp(t),a.return=n,n.child=a,Tn=n,qt=null)):t=null,t===null)throw La(n);return n.lanes=536870912,null}return Xl(n,o)}var d=t.memoizedState;if(d!==null){var S=d.dehydrated;if(Jc(n),c)if(n.flags&256)n.flags&=-257,n=mg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(cn||Jr(t,n,a,!1),c=(a&t.childLanes)!==0,cn||c){if(o=Xt,o!==null&&(S=Ir(o,a),S!==0&&S!==d.retryLane))throw d.retryLane=S,fr(t,S),Wn(o,t,S),Sf;tu(),n=mg(t,n,a)}else t=d.treeContext,qt=hi(S.nextSibling),Tn=n,yt=!0,Ua=null,fi=!1,t!==null&&tm(n,t),n=Xl(n,o),n.flags|=4096;return n}return t=Ki(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Wl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function yf(t,n,a,o,c){return mr(n),a=ef(t,n,a,o,void 0,c),o=tf(),t!==null&&!cn?(nf(t,n,c),na(t,n,c)):(yt&&o&&Pc(n),n.flags|=1,Rn(t,n,a,c),n.child)}function gg(t,n,a,o,c,d){return mr(n),n.updateQueue=null,a=xm(n,o,a,c),vm(t),o=tf(),t!==null&&!cn?(nf(t,n,d),na(t,n,d)):(yt&&o&&Pc(n),n.flags|=1,Rn(t,n,a,d),n.child)}function _g(t,n,a,o,c){if(mr(n),n.stateNode===null){var d=jr,S=a.contextType;typeof S=="object"&&S!==null&&(d=An(S)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=vf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},qc(n),S=a.contextType,d.context=typeof S=="object"&&S!==null?An(S):jr,d.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(_f(n,a,S,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&vf.enqueueReplaceState(d,d.state,null),po(n,o,d,c),ho(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var A=n.memoizedProps,H=yr(a,A);d.props=H;var ie=d.context,ge=a.contextType;S=jr,typeof ge=="object"&&ge!==null&&(S=An(ge));var xe=a.getDerivedStateFromProps;ge=typeof xe=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ge||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||ie!==S)&&ig(n,d,o,S),Oa=!1;var se=n.memoizedState;d.state=se,po(n,o,d,c),ho(),ie=n.memoizedState,A||se!==ie||Oa?(typeof xe=="function"&&(_f(n,a,xe,o),ie=n.memoizedState),(H=Oa||ng(n,a,H,o,se,ie,S))?(ge||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ie),d.props=o,d.state=ie,d.context=S,o=H):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Yc(t,n),S=n.memoizedProps,ge=yr(a,S),d.props=ge,xe=n.pendingProps,se=d.context,ie=a.contextType,H=jr,typeof ie=="object"&&ie!==null&&(H=An(ie)),A=a.getDerivedStateFromProps,(ie=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==xe||se!==H)&&ig(n,d,o,H),Oa=!1,se=n.memoizedState,d.state=se,po(n,o,d,c),ho();var de=n.memoizedState;S!==xe||se!==de||Oa||t!==null&&t.dependencies!==null&&Al(t.dependencies)?(typeof A=="function"&&(_f(n,a,A,o),de=n.memoizedState),(ge=Oa||ng(n,a,ge,o,se,de,H)||t!==null&&t.dependencies!==null&&Al(t.dependencies))?(ie||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,de,H),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,de,H)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===t.memoizedProps&&se===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&se===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=de),d.props=o,d.state=de,d.context=H,o=ge):(typeof d.componentDidUpdate!="function"||S===t.memoizedProps&&se===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&se===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,Wl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=xr(n,t.child,null,c),n.child=xr(n,null,a,c)):Rn(t,n,a,c),n.memoizedState=d.state,t=n.child):t=na(t,n,c),t}function vg(t,n,a,o){return hr(),n.flags|=256,Rn(t,n,a,o),n.child}var Mf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ef(t){return{baseLanes:t,cachePool:om()}}function bf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=$n),t}function xg(t,n,a){var o=n.pendingProps,c=!1,d=(n.flags&128)!==0,S;if((S=d)||(S=t!==null&&t.memoizedState===null?!1:(rn.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(yt){if(c?Ia(n):Fa(),(t=qt)?(t=R0(t,fi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=Jp(t),a.return=n,n.child=a,Tn=n,qt=null)):t=null,t===null)throw La(n);return sd(t)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,c?(Fa(),c=n.mode,A=ql({mode:"hidden",children:A},c),o=dr(o,c,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=Ef(a),o.childLanes=bf(t,S,a),n.memoizedState=Mf,xo(null,o)):(Ia(n),Tf(n,A))}var H=t.memoizedState;if(H!==null&&(A=H.dehydrated,A!==null)){if(d)n.flags&256?(Ia(n),n.flags&=-257,n=Af(t,n,a)):n.memoizedState!==null?(Fa(),n.child=t.child,n.flags|=128,n=null):(Fa(),A=o.fallback,c=n.mode,o=ql({mode:"visible",children:o.children},c),A=dr(A,c,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,xr(n,t.child,null,a),o=n.child,o.memoizedState=Ef(a),o.childLanes=bf(t,S,a),n.memoizedState=Mf,n=xo(null,o));else if(Ia(n),sd(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var ie=S.dgst;S=ie,o=Error(r(419)),o.stack="",o.digest=S,so({value:o,source:null,stack:null}),n=Af(t,n,a)}else if(cn||Jr(t,n,a,!1),S=(a&t.childLanes)!==0,cn||S){if(S=Xt,S!==null&&(o=Ir(S,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,fr(t,o),Wn(S,t,o),Sf;rd(A)||tu(),n=Af(t,n,a)}else rd(A)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,qt=hi(A.nextSibling),Tn=n,yt=!0,Ua=null,fi=!1,t!==null&&tm(n,t),n=Tf(n,o.children),n.flags|=4096);return n}return c?(Fa(),A=o.fallback,c=n.mode,H=t.child,ie=H.sibling,o=Ki(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,ie!==null?A=Ki(ie,A):(A=dr(A,c,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,xo(null,o),o=n.child,A=t.child.memoizedState,A===null?A=Ef(a):(c=A.cachePool,c!==null?(H=ln._currentValue,c=c.parent!==H?{parent:H,pool:H}:c):c=om(),A={baseLanes:A.baseLanes|a,cachePool:c}),o.memoizedState=A,o.childLanes=bf(t,S,a),n.memoizedState=Mf,xo(t.child,o)):(Ia(n),a=t.child,t=a.sibling,a=Ki(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function Tf(t,n){return n=ql({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function ql(t,n){return t=Zn(22,t,null,n),t.lanes=0,t}function Af(t,n,a){return xr(n,t.child,null,a),t=Tf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Sg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Hc(t.return,n,a)}function Rf(t,n,a,o,c,d){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:d}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=c,S.treeForkCount=d)}function yg(t,n,a){var o=n.pendingProps,c=o.revealOrder,d=o.tail;o=o.children;var S=rn.current,A=(S&2)!==0;if(A?(S=S&1|2,n.flags|=128):S&=1,me(rn,S),Rn(t,n,o,a),o=yt?ro:0,!A&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sg(t,a,n);else if(t.tag===19)Sg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&Ol(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Rf(n,!1,c,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&Ol(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Rf(n,!0,a,null,d,o);break;case"together":Rf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function na(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ga|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Jr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Ki(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ki(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Cf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Al(t)))}function gS(t,n,a){switch(n.tag){case 3:we(n,n.stateNode.containerInfo),Na(n,ln,t.memoizedState.cache),hr();break;case 27:case 5:He(n);break;case 4:we(n,n.stateNode.containerInfo);break;case 10:Na(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Jc(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ia(n),n.flags|=128,null):(a&n.child.childLanes)!==0?xg(t,n,a):(Ia(n),t=na(t,n,a),t!==null?t.sibling:null);Ia(n);break;case 19:var c=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Jr(t,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return yg(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),me(rn,rn.current),o)break;return null;case 22:return n.lanes=0,hg(t,n,a,n.pendingProps);case 24:Na(n,ln,t.memoizedState.cache)}return na(t,n,a)}function Mg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)cn=!0;else{if(!Cf(t,a)&&(n.flags&128)===0)return cn=!1,gS(t,n,a);cn=(t.flags&131072)!==0}else cn=!1,yt&&(n.flags&1048576)!==0&&em(n,ro,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=_r(n.elementType),n.type=t,typeof t=="function")Lc(t)?(o=yr(t,o),n.tag=1,n=_g(null,n,t,o,a)):(n.tag=0,n=yf(null,n,t,o,a));else{if(t!=null){var c=t.$$typeof;if(c===O){n.tag=11,n=cg(null,n,t,o,a);break e}else if(c===I){n.tag=14,n=fg(null,n,t,o,a);break e}}throw n=pe(t)||t,Error(r(306,n,""))}}return n;case 0:return yf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=yr(o,n.pendingProps),_g(t,n,o,c,a);case 3:e:{if(we(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;c=d.element,Yc(t,n),po(n,o,null,a);var S=n.memoizedState;if(o=S.cache,Na(n,ln,o),o!==d.cache&&Gc(n,[ln],a,!0),ho(),o=S.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=vg(t,n,o,a);break e}else if(o!==c){c=li(Error(r(424)),n),so(c),n=vg(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,qt=hi(t.firstChild),Tn=n,yt=!0,Ua=null,fi=!0,a=hm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(hr(),o===c){n=na(t,n,a);break e}Rn(t,n,o,a)}n=n.child}return n;case 26:return Wl(t,n),t===null?(a=N0(n.type,null,n.pendingProps,null))?n.memoizedState=a:yt||(a=n.type,t=n.pendingProps,o=lu(Q.current).createElement(a),o[on]=n,o[xn]=t,Cn(o,a,t),R(o),n.stateNode=o):n.memoizedState=N0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return He(n),t===null&&yt&&(o=n.stateNode=D0(n.type,n.pendingProps,Q.current),Tn=n,fi=!0,c=qt,qa(n.type)?(od=c,qt=hi(o.firstChild)):qt=c),Rn(t,n,n.pendingProps.children,a),Wl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&yt&&((c=o=qt)&&(o=qS(o,n.type,n.pendingProps,fi),o!==null?(n.stateNode=o,Tn=n,qt=hi(o.firstChild),fi=!1,c=!0):c=!1),c||La(n)),He(n),c=n.type,d=n.pendingProps,S=t!==null?t.memoizedProps:null,o=d.children,nd(c,d)?o=null:S!==null&&nd(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=ef(t,n,oS,null,null,a),Oo._currentValue=c),Wl(t,n),Rn(t,n,o,a),n.child;case 6:return t===null&&yt&&((t=a=qt)&&(a=YS(a,n.pendingProps,fi),a!==null?(n.stateNode=a,Tn=n,qt=null,t=!0):t=!1),t||La(n)),null;case 13:return xg(t,n,a);case 4:return we(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=xr(n,null,o,a):Rn(t,n,o,a),n.child;case 11:return cg(t,n,n.type,n.pendingProps,a);case 7:return Rn(t,n,n.pendingProps,a),n.child;case 8:return Rn(t,n,n.pendingProps.children,a),n.child;case 12:return Rn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Na(n,n.type,o.value),Rn(t,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,mr(n),c=An(c),o=o(c),n.flags|=1,Rn(t,n,o,a),n.child;case 14:return fg(t,n,n.type,n.pendingProps,a);case 15:return dg(t,n,n.type,n.pendingProps,a);case 19:return yg(t,n,a);case 31:return mS(t,n,a);case 22:return hg(t,n,a,n.pendingProps);case 24:return mr(n),o=An(ln),t===null?(c=Xc(),c===null&&(c=Xt,d=Vc(),c.pooledCache=d,d.refCount++,d!==null&&(c.pooledCacheLanes|=a),c=d),n.memoizedState={parent:o,cache:c},qc(n),Na(n,ln,c)):((t.lanes&a)!==0&&(Yc(t,n),po(n,null,null,a),ho()),c=t.memoizedState,d=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Na(n,ln,o)):(o=d.cache,Na(n,ln,o),o!==c.cache&&Gc(n,[ln],a,!0))),Rn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ia(t){t.flags|=4}function wf(t,n,a,o,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(Zg())t.flags|=8192;else throw vr=Dl,Wc}else t.flags&=-16777217}function Eg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!F0(n))if(Zg())t.flags|=8192;else throw vr=Dl,Wc}function Yl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?zt():536870912,t.lanes|=n,cs|=n)}function So(t,n){if(!yt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Yt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function _S(t,n,a){var o=n.pendingProps;switch(zc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(n),null;case 1:return Yt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),$i(ln),Ve(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Qr(n)?ia(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Fc())),Yt(n),null;case 26:var c=n.type,d=n.memoizedState;return t===null?(ia(n),d!==null?(Yt(n),Eg(n,d)):(Yt(n),wf(n,c,null,o,a))):d?d!==t.memoizedState?(ia(n),Yt(n),Eg(n,d)):(Yt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ia(n),Yt(n),wf(n,c,t,o,a)),null;case 27:if(ht(n),a=Q.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ia(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Yt(n),null}t=be.current,Qr(n)?nm(n):(t=D0(c,o,a),n.stateNode=t,ia(n))}return Yt(n),null;case 5:if(ht(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ia(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Yt(n),null}if(d=be.current,Qr(n))nm(n);else{var S=lu(Q.current);switch(d){case 1:d=S.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:d=S.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":d=S.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":d=S.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":d=S.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?S.createElement(c,{is:o.is}):S.createElement(c)}}d[on]=n,d[xn]=o;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)d.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=d;e:switch(Cn(d,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ia(n)}}return Yt(n),wf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ia(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=Q.current,Qr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,c=Tn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[on]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||x0(t.nodeValue,a)),t||La(n,!0)}else t=lu(t).createTextNode(o),t[on]=n,n.stateNode=t}return Yt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=Qr(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[on]=n}else hr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Yt(n),t=!1}else a=Fc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Qn(n),n):(Qn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Yt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Qr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[on]=n}else hr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Yt(n),c=!1}else c=Fc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Qn(n),n):(Qn(n),null)}return Qn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==c&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Yl(n,n.updateQueue),Yt(n),null);case 4:return Ve(),t===null&&Qf(n.stateNode.containerInfo),Yt(n),null;case 10:return $i(n.type),Yt(n),null;case 19:if(Z(rn),o=n.memoizedState,o===null)return Yt(n),null;if(c=(n.flags&128)!==0,d=o.rendering,d===null)if(c)So(o,!1);else{if(nn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Ol(t),d!==null){for(n.flags|=128,So(o,!1),t=d.updateQueue,n.updateQueue=t,Yl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Qp(a,t),a=a.sibling;return me(rn,rn.current&1|2),yt&&Qi(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&E()>Jl&&(n.flags|=128,c=!0,So(o,!1),n.lanes=4194304)}else{if(!c)if(t=Ol(d),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Yl(n,t),So(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!yt)return Yt(n),null}else 2*E()-o.renderingStartTime>Jl&&a!==536870912&&(n.flags|=128,c=!0,So(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=E(),t.sibling=null,a=rn.current,me(rn,c?a&1|2:a&1),yt&&Qi(n,o.treeForkCount),t):(Yt(n),null);case 22:case 23:return Qn(n),Qc(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Yt(n),n.subtreeFlags&6&&(n.flags|=8192)):Yt(n),a=n.updateQueue,a!==null&&Yl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Z(gr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),$i(ln),Yt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function vS(t,n){switch(zc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return $i(ln),Ve(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ht(n),null;case 31:if(n.memoizedState!==null){if(Qn(n),n.alternate===null)throw Error(r(340));hr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Qn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));hr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Z(rn),null;case 4:return Ve(),null;case 10:return $i(n.type),null;case 22:case 23:return Qn(n),Qc(),t!==null&&Z(gr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return $i(ln),null;case 25:return null;default:return null}}function bg(t,n){switch(zc(n),n.tag){case 3:$i(ln),Ve();break;case 26:case 27:case 5:ht(n);break;case 4:Ve();break;case 31:n.memoizedState!==null&&Qn(n);break;case 13:Qn(n);break;case 19:Z(rn);break;case 10:$i(n.type);break;case 22:case 23:Qn(n),Qc(),t!==null&&Z(gr);break;case 24:$i(ln)}}function yo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&t)===t){o=void 0;var d=a.create,S=a.inst;o=d(),S.destroy=o}a=a.next}while(a!==c)}}catch(A){Bt(n,n.return,A)}}function Ba(t,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var d=c.next;o=d;do{if((o.tag&t)===t){var S=o.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,c=n;var H=a,ie=A;try{ie()}catch(ge){Bt(c,H,ge)}}}o=o.next}while(o!==d)}}catch(ge){Bt(n,n.return,ge)}}function Tg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{mm(n,a)}catch(o){Bt(t,t.return,o)}}}function Ag(t,n,a){a.props=yr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Bt(t,n,o)}}function Mo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(c){Bt(t,n,c)}}function zi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Bt(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Bt(t,n,c)}else a.current=null}function Rg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Bt(t,t.return,c)}}function Df(t,n,a){try{var o=t.stateNode;HS(o,t.type,a,n),o[xn]=n}catch(c){Bt(t,t.return,c)}}function Cg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&qa(t.type)||t.tag===4}function Uf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Cg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&qa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Lf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ji));else if(o!==4&&(o===27&&qa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Lf(t,n,a),t=t.sibling;t!==null;)Lf(t,n,a),t=t.sibling}function jl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&qa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(jl(t,n,a),t=t.sibling;t!==null;)jl(t,n,a),t=t.sibling}function wg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Cn(n,o,a),n[on]=t,n[xn]=a}catch(d){Bt(t,t.return,d)}}var aa=!1,fn=!1,Nf=!1,Dg=typeof WeakSet=="function"?WeakSet:Set,_n=null;function xS(t,n){if(t=t.containerInfo,ed=mu,t=Vp(t),Tc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var S=0,A=-1,H=-1,ie=0,ge=0,xe=t,se=null;t:for(;;){for(var de;xe!==a||c!==0&&xe.nodeType!==3||(A=S+c),xe!==d||o!==0&&xe.nodeType!==3||(H=S+o),xe.nodeType===3&&(S+=xe.nodeValue.length),(de=xe.firstChild)!==null;)se=xe,xe=de;for(;;){if(xe===t)break t;if(se===a&&++ie===c&&(A=S),se===d&&++ge===o&&(H=S),(de=xe.nextSibling)!==null)break;xe=se,se=xe.parentNode}xe=de}a=A===-1||H===-1?null:{start:A,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(td={focusedElem:t,selectionRange:a},mu=!1,_n=n;_n!==null;)if(n=_n,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,_n=t;else for(;_n!==null;){switch(n=_n,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,c=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var Xe=yr(a.type,c);t=o.getSnapshotBeforeUpdate(Xe,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(tt){Bt(a,a.return,tt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)ad(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ad(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,_n=t;break}_n=n.return}}function Ug(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:sa(t,a),o&4&&yo(5,a);break;case 1:if(sa(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){Bt(a,a.return,S)}else{var c=yr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Bt(a,a.return,S)}}o&64&&Tg(a),o&512&&Mo(a,a.return);break;case 3:if(sa(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{mm(t,n)}catch(S){Bt(a,a.return,S)}}break;case 27:n===null&&o&4&&wg(a);case 26:case 5:sa(t,a),n===null&&o&4&&Rg(a),o&512&&Mo(a,a.return);break;case 12:sa(t,a);break;case 31:sa(t,a),o&4&&Og(t,a);break;case 13:sa(t,a),o&4&&Pg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=CS.bind(null,a),jS(t,a))));break;case 22:if(o=a.memoizedState!==null||aa,!o){n=n!==null&&n.memoizedState!==null||fn,c=aa;var d=fn;aa=o,(fn=n)&&!d?oa(t,a,(a.subtreeFlags&8772)!==0):sa(t,a),aa=c,fn=d}break;case 30:break;default:sa(t,a)}}function Lg(t){var n=t.alternate;n!==null&&(t.alternate=null,Lg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Zs(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Kt=null,Gn=!1;function ra(t,n,a){for(a=a.child;a!==null;)Ng(t,n,a),a=a.sibling}function Ng(t,n,a){if(Re&&typeof Re.onCommitFiberUnmount=="function")try{Re.onCommitFiberUnmount(Ee,a)}catch{}switch(a.tag){case 26:fn||zi(a,n),ra(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||zi(a,n);var o=Kt,c=Gn;qa(a.type)&&(Kt=a.stateNode,Gn=!1),ra(t,n,a),Uo(a.stateNode),Kt=o,Gn=c;break;case 5:fn||zi(a,n);case 6:if(o=Kt,c=Gn,Kt=null,ra(t,n,a),Kt=o,Gn=c,Kt!==null)if(Gn)try{(Kt.nodeType===9?Kt.body:Kt.nodeName==="HTML"?Kt.ownerDocument.body:Kt).removeChild(a.stateNode)}catch(d){Bt(a,n,d)}else try{Kt.removeChild(a.stateNode)}catch(d){Bt(a,n,d)}break;case 18:Kt!==null&&(Gn?(t=Kt,T0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),vs(t)):T0(Kt,a.stateNode));break;case 4:o=Kt,c=Gn,Kt=a.stateNode.containerInfo,Gn=!0,ra(t,n,a),Kt=o,Gn=c;break;case 0:case 11:case 14:case 15:Ba(2,a,n),fn||Ba(4,a,n),ra(t,n,a);break;case 1:fn||(zi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Ag(a,n,o)),ra(t,n,a);break;case 21:ra(t,n,a);break;case 22:fn=(o=fn)||a.memoizedState!==null,ra(t,n,a),fn=o;break;default:ra(t,n,a)}}function Og(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{vs(t)}catch(a){Bt(n,n.return,a)}}}function Pg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{vs(t)}catch(a){Bt(n,n.return,a)}}function SS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Dg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Dg),n;default:throw Error(r(435,t.tag))}}function Zl(t,n){var a=SS(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var c=wS.bind(null,t,o);o.then(c,c)}})}function Vn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],d=t,S=n,A=S;e:for(;A!==null;){switch(A.tag){case 27:if(qa(A.type)){Kt=A.stateNode,Gn=!1;break e}break;case 5:Kt=A.stateNode,Gn=!1;break e;case 3:case 4:Kt=A.stateNode.containerInfo,Gn=!0;break e}A=A.return}if(Kt===null)throw Error(r(160));Ng(d,S,c),Kt=null,Gn=!1,d=c.alternate,d!==null&&(d.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)zg(n,t),n=n.sibling}var Ai=null;function zg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Vn(n,t),kn(t),o&4&&(Ba(3,t,t.return),yo(3,t),Ba(5,t,t.return));break;case 1:Vn(n,t),kn(t),o&512&&(fn||a===null||zi(a,a.return)),o&64&&aa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=Ai;if(Vn(n,t),kn(t),o&512&&(fn||a===null||zi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":d=c.getElementsByTagName("title")[0],(!d||d[sr]||d[on]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=c.createElement(o),c.head.insertBefore(d,c.querySelector("head > title"))),Cn(d,o,a),d[on]=t,R(d),o=d;break e;case"link":var S=z0("link","href",c).get(o+(a.href||""));if(S){for(var A=0;A<S.length;A++)if(d=S[A],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(A,1);break t}}d=c.createElement(o),Cn(d,o,a),c.head.appendChild(d);break;case"meta":if(S=z0("meta","content",c).get(o+(a.content||""))){for(A=0;A<S.length;A++)if(d=S[A],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(A,1);break t}}d=c.createElement(o),Cn(d,o,a),c.head.appendChild(d);break;default:throw Error(r(468,o))}d[on]=t,R(d),o=d}t.stateNode=o}else I0(c,t.type,t.stateNode);else t.stateNode=P0(c,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?I0(c,t.type,t.stateNode):P0(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Df(t,t.memoizedProps,a.memoizedProps)}break;case 27:Vn(n,t),kn(t),o&512&&(fn||a===null||zi(a,a.return)),a!==null&&o&4&&Df(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Vn(n,t),kn(t),o&512&&(fn||a===null||zi(a,a.return)),t.flags&32){c=t.stateNode;try{hn(c,"")}catch(Xe){Bt(t,t.return,Xe)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,Df(t,c,a!==null?a.memoizedProps:c)),o&1024&&(Nf=!0);break;case 6:if(Vn(n,t),kn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Xe){Bt(t,t.return,Xe)}}break;case 3:if(fu=null,c=Ai,Ai=uu(n.containerInfo),Vn(n,t),Ai=c,kn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{vs(n.containerInfo)}catch(Xe){Bt(t,t.return,Xe)}Nf&&(Nf=!1,Ig(t));break;case 4:o=Ai,Ai=uu(t.stateNode.containerInfo),Vn(n,t),kn(t),Ai=o;break;case 12:Vn(n,t),kn(t);break;case 31:Vn(n,t),kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Zl(t,o)));break;case 13:Vn(n,t),kn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ql=E()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Zl(t,o)));break;case 22:c=t.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,ie=aa,ge=fn;if(aa=ie||c,fn=ge||H,Vn(n,t),fn=ge,aa=ie,kn(t),o&8192)e:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||H||aa||fn||Mr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(d=H.stateNode,c)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=H.stateNode;var xe=H.memoizedProps.style,se=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;A.style.display=se==null||typeof se=="boolean"?"":(""+se).trim()}}catch(Xe){Bt(H,H.return,Xe)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=c?"":H.memoizedProps}catch(Xe){Bt(H,H.return,Xe)}}}else if(n.tag===18){if(a===null){H=n;try{var de=H.stateNode;c?A0(de,!0):A0(H.stateNode,!1)}catch(Xe){Bt(H,H.return,Xe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Zl(t,a))));break;case 19:Vn(n,t),kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Zl(t,o)));break;case 30:break;case 21:break;default:Vn(n,t),kn(t)}}function kn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Cg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,d=Uf(t);jl(t,d,c);break;case 5:var S=a.stateNode;a.flags&32&&(hn(S,""),a.flags&=-33);var A=Uf(t);jl(t,A,S);break;case 3:case 4:var H=a.stateNode.containerInfo,ie=Uf(t);Lf(t,ie,H);break;default:throw Error(r(161))}}catch(ge){Bt(t,t.return,ge)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Ig(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Ig(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function sa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Ug(t,n.alternate,n),n=n.sibling}function Mr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ba(4,n,n.return),Mr(n);break;case 1:zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Ag(n,n.return,a),Mr(n);break;case 27:Uo(n.stateNode);case 26:case 5:zi(n,n.return),Mr(n);break;case 22:n.memoizedState===null&&Mr(n);break;case 30:Mr(n);break;default:Mr(n)}t=t.sibling}}function oa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=t,d=n,S=d.flags;switch(d.tag){case 0:case 11:case 15:oa(c,d,a),yo(4,d);break;case 1:if(oa(c,d,a),o=d,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(ie){Bt(o,o.return,ie)}if(o=d,c=o.updateQueue,c!==null){var A=o.stateNode;try{var H=c.shared.hiddenCallbacks;if(H!==null)for(c.shared.hiddenCallbacks=null,c=0;c<H.length;c++)pm(H[c],A)}catch(ie){Bt(o,o.return,ie)}}a&&S&64&&Tg(d),Mo(d,d.return);break;case 27:wg(d);case 26:case 5:oa(c,d,a),a&&o===null&&S&4&&Rg(d),Mo(d,d.return);break;case 12:oa(c,d,a);break;case 31:oa(c,d,a),a&&S&4&&Og(c,d);break;case 13:oa(c,d,a),a&&S&4&&Pg(c,d);break;case 22:d.memoizedState===null&&oa(c,d,a),Mo(d,d.return);break;case 30:break;default:oa(c,d,a)}n=n.sibling}}function Of(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&oo(a))}function Pf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&oo(t))}function Ri(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Fg(t,n,a,o),n=n.sibling}function Fg(t,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ri(t,n,a,o),c&2048&&yo(9,n);break;case 1:Ri(t,n,a,o);break;case 3:Ri(t,n,a,o),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&oo(t)));break;case 12:if(c&2048){Ri(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,S=d.id,A=d.onPostCommit;typeof A=="function"&&A(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){Bt(n,n.return,H)}}else Ri(t,n,a,o);break;case 31:Ri(t,n,a,o);break;case 13:Ri(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,S=n.alternate,n.memoizedState!==null?d._visibility&2?Ri(t,n,a,o):Eo(t,n):d._visibility&2?Ri(t,n,a,o):(d._visibility|=2,os(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),c&2048&&Of(S,n);break;case 24:Ri(t,n,a,o),c&2048&&Pf(n.alternate,n);break;default:Ri(t,n,a,o)}}function os(t,n,a,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,S=n,A=a,H=o,ie=S.flags;switch(S.tag){case 0:case 11:case 15:os(d,S,A,H,c),yo(8,S);break;case 23:break;case 22:var ge=S.stateNode;S.memoizedState!==null?ge._visibility&2?os(d,S,A,H,c):Eo(d,S):(ge._visibility|=2,os(d,S,A,H,c)),c&&ie&2048&&Of(S.alternate,S);break;case 24:os(d,S,A,H,c),c&&ie&2048&&Pf(S.alternate,S);break;default:os(d,S,A,H,c)}n=n.sibling}}function Eo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,c=o.flags;switch(o.tag){case 22:Eo(a,o),c&2048&&Of(o.alternate,o);break;case 24:Eo(a,o),c&2048&&Pf(o.alternate,o);break;default:Eo(a,o)}n=n.sibling}}var bo=8192;function ls(t,n,a){if(t.subtreeFlags&bo)for(t=t.child;t!==null;)Bg(t,n,a),t=t.sibling}function Bg(t,n,a){switch(t.tag){case 26:ls(t,n,a),t.flags&bo&&t.memoizedState!==null&&sy(a,Ai,t.memoizedState,t.memoizedProps);break;case 5:ls(t,n,a);break;case 3:case 4:var o=Ai;Ai=uu(t.stateNode.containerInfo),ls(t,n,a),Ai=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=bo,bo=16777216,ls(t,n,a),bo=o):ls(t,n,a));break;default:ls(t,n,a)}}function Hg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function To(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];_n=o,Vg(o,t)}Hg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Gg(t),t=t.sibling}function Gg(t){switch(t.tag){case 0:case 11:case 15:To(t),t.flags&2048&&Ba(9,t,t.return);break;case 3:To(t);break;case 12:To(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Kl(t)):To(t);break;default:To(t)}}function Kl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];_n=o,Vg(o,t)}Hg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ba(8,n,n.return),Kl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Kl(n));break;default:Kl(n)}t=t.sibling}}function Vg(t,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:Ba(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:oo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,_n=o;else e:for(a=t;_n!==null;){o=_n;var c=o.sibling,d=o.return;if(Lg(o),o===a){_n=null;break e}if(c!==null){c.return=d,_n=c;break e}_n=d}}}var yS={getCacheForType:function(t){var n=An(ln),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return An(ln).controller.signal}},MS=typeof WeakMap=="function"?WeakMap:Map,Lt=0,Xt=null,mt=null,vt=0,Ft=0,Jn=null,Ha=!1,us=!1,zf=!1,la=0,nn=0,Ga=0,Er=0,If=0,$n=0,cs=0,Ao=null,Xn=null,Ff=!1,Ql=0,kg=0,Jl=1/0,$l=null,Va=null,pn=0,ka=null,fs=null,ua=0,Bf=0,Hf=null,Xg=null,Ro=0,Gf=null;function ei(){return(Lt&2)!==0&&vt!==0?vt&-vt:U.T!==null?Yf():Ys()}function Wg(){if($n===0)if((vt&536870912)===0||yt){var t=Ce;Ce<<=1,(Ce&3932160)===0&&(Ce=262144),$n=t}else $n=536870912;return t=Kn.current,t!==null&&(t.flags|=32),$n}function Wn(t,n,a){(t===Xt&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)&&(ds(t,0),Xa(t,vt,$n,!1)),Dn(t,a),((Lt&2)===0||t!==Xt)&&(t===Xt&&((Lt&2)===0&&(Er|=a),nn===4&&Xa(t,vt,$n,!1)),Ii(t))}function qg(t,n,a){if((Lt&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||De(t,n),c=o?TS(t,n):kf(t,n,!0),d=o;do{if(c===0){us&&!o&&Xa(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!ES(a)){c=kf(t,n,!1),d=!1;continue}if(c===2){if(d=n,t.errorRecoveryDisabledLanes&d)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var A=t;c=Ao;var H=A.current.memoizedState.isDehydrated;if(H&&(ds(A,S).flags|=256),S=kf(A,S,!1),S!==2){if(zf&&!H){A.errorRecoveryDisabledLanes|=d,Er|=d,c=4;break e}d=Xn,Xn=c,d!==null&&(Xn===null?Xn=d:Xn.push.apply(Xn,d))}c=S}if(d=!1,c!==2)continue}}if(c===1){ds(t,0),Xa(t,n,0,!0);break}e:{switch(o=t,d=c,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Xa(o,n,$n,!Ha);break e;case 2:Xn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Ql+300-E(),10<c)){if(Xa(o,n,$n,!Ha),Se(o,0,!0)!==0)break e;ua=n,o.timeoutHandle=E0(Yg.bind(null,o,a,Xn,$l,Ff,n,$n,Er,cs,Ha,d,"Throttled",-0,0),c);break e}Yg(o,a,Xn,$l,Ff,n,$n,Er,cs,Ha,d,null,-0,0)}}break}while(!0);Ii(t)}function Yg(t,n,a,o,c,d,S,A,H,ie,ge,xe,se,de){if(t.timeoutHandle=-1,xe=n.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},Bg(n,d,xe);var Xe=(d&62914560)===d?Ql-E():(d&4194048)===d?kg-E():0;if(Xe=oy(xe,Xe),Xe!==null){ua=d,t.cancelPendingCommit=Xe(t0.bind(null,t,n,d,a,o,c,S,A,H,ge,xe,null,se,de)),Xa(t,d,S,!ie);return}}t0(t,n,d,a,o,c,S,A,H)}function ES(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],d=c.getSnapshot;c=c.value;try{if(!jn(d(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Xa(t,n,a,o){n&=~If,n&=~Er,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var c=n;0<c;){var d=31-Ie(c),S=1<<d;o[d]=-1,c&=~S}a!==0&&fl(t,a,n)}function eu(){return(Lt&6)===0?(Co(0),!1):!0}function Vf(){if(mt!==null){if(Ft===0)var t=mt.return;else t=mt,Ji=pr=null,af(t),ns=null,uo=0,t=mt;for(;t!==null;)bg(t.alternate,t),t=t.return;mt=null}}function ds(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,kS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ua=0,Vf(),Xt=t,mt=a=Ki(t.current,null),vt=n,Ft=0,Jn=null,Ha=!1,us=De(t,n),zf=!1,cs=$n=If=Er=Ga=nn=0,Xn=Ao=null,Ff=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var c=31-Ie(o),d=1<<c;n|=t[c],o&=~d}return la=n,yl(),a}function jg(t,n){lt=null,U.H=vo,n===ts||n===wl?(n=cm(),Ft=3):n===Wc?(n=cm(),Ft=4):Ft=n===Sf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Jn=n,mt===null&&(nn=1,kl(t,li(n,t.current)))}function Zg(){var t=Kn.current;return t===null?!0:(vt&4194048)===vt?di===null:(vt&62914560)===vt||(vt&536870912)!==0?t===di:!1}function Kg(){var t=U.H;return U.H=vo,t===null?vo:t}function Qg(){var t=U.A;return U.A=yS,t}function tu(){nn=4,Ha||(vt&4194048)!==vt&&Kn.current!==null||(us=!0),(Ga&134217727)===0&&(Er&134217727)===0||Xt===null||Xa(Xt,vt,$n,!1)}function kf(t,n,a){var o=Lt;Lt|=2;var c=Kg(),d=Qg();(Xt!==t||vt!==n)&&($l=null,ds(t,n)),n=!1;var S=nn;e:do try{if(Ft!==0&&mt!==null){var A=mt,H=Jn;switch(Ft){case 8:Vf(),S=6;break e;case 3:case 2:case 9:case 6:Kn.current===null&&(n=!0);var ie=Ft;if(Ft=0,Jn=null,hs(t,A,H,ie),a&&us){S=0;break e}break;default:ie=Ft,Ft=0,Jn=null,hs(t,A,H,ie)}}bS(),S=nn;break}catch(ge){jg(t,ge)}while(!0);return n&&t.shellSuspendCounter++,Ji=pr=null,Lt=o,U.H=c,U.A=d,mt===null&&(Xt=null,vt=0,yl()),S}function bS(){for(;mt!==null;)Jg(mt)}function TS(t,n){var a=Lt;Lt|=2;var o=Kg(),c=Qg();Xt!==t||vt!==n?($l=null,Jl=E()+500,ds(t,n)):us=De(t,n);e:do try{if(Ft!==0&&mt!==null){n=mt;var d=Jn;t:switch(Ft){case 1:Ft=0,Jn=null,hs(t,n,d,1);break;case 2:case 9:if(lm(d)){Ft=0,Jn=null,$g(n);break}n=function(){Ft!==2&&Ft!==9||Xt!==t||(Ft=7),Ii(t)},d.then(n,n);break e;case 3:Ft=7;break e;case 4:Ft=5;break e;case 7:lm(d)?(Ft=0,Jn=null,$g(n)):(Ft=0,Jn=null,hs(t,n,d,7));break;case 5:var S=null;switch(mt.tag){case 26:S=mt.memoizedState;case 5:case 27:var A=mt;if(S?F0(S):A.stateNode.complete){Ft=0,Jn=null;var H=A.sibling;if(H!==null)mt=H;else{var ie=A.return;ie!==null?(mt=ie,nu(ie)):mt=null}break t}}Ft=0,Jn=null,hs(t,n,d,5);break;case 6:Ft=0,Jn=null,hs(t,n,d,6);break;case 8:Vf(),nn=6;break e;default:throw Error(r(462))}}AS();break}catch(ge){jg(t,ge)}while(!0);return Ji=pr=null,U.H=o,U.A=c,Lt=a,mt!==null?0:(Xt=null,vt=0,yl(),nn)}function AS(){for(;mt!==null&&!je();)Jg(mt)}function Jg(t){var n=Mg(t.alternate,t,la);t.memoizedProps=t.pendingProps,n===null?nu(t):mt=n}function $g(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=gg(a,n,n.pendingProps,n.type,void 0,vt);break;case 11:n=gg(a,n,n.pendingProps,n.type.render,n.ref,vt);break;case 5:af(n);default:bg(a,n),n=mt=Qp(n,la),n=Mg(a,n,la)}t.memoizedProps=t.pendingProps,n===null?nu(t):mt=n}function hs(t,n,a,o){Ji=pr=null,af(n),ns=null,uo=0;var c=n.return;try{if(pS(t,c,n,a,vt)){nn=1,kl(t,li(a,t.current)),mt=null;return}}catch(d){if(c!==null)throw mt=c,d;nn=1,kl(t,li(a,t.current)),mt=null;return}n.flags&32768?(yt||o===1?t=!0:us||(vt&536870912)!==0?t=!1:(Ha=t=!0,(o===2||o===9||o===3||o===6)&&(o=Kn.current,o!==null&&o.tag===13&&(o.flags|=16384))),e0(n,t)):nu(n)}function nu(t){var n=t;do{if((n.flags&32768)!==0){e0(n,Ha);return}t=n.return;var a=_S(n.alternate,n,la);if(a!==null){mt=a;return}if(n=n.sibling,n!==null){mt=n;return}mt=n=t}while(n!==null);nn===0&&(nn=5)}function e0(t,n){do{var a=vS(t.alternate,t);if(a!==null){a.flags&=32767,mt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){mt=t;return}mt=t=a}while(t!==null);nn=6,mt=null}function t0(t,n,a,o,c,d,S,A,H){t.cancelPendingCommit=null;do iu();while(pn!==0);if((Lt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=Dc,Mi(t,a,d,S,A,H),t===Xt&&(mt=Xt=null,vt=0),fs=n,ka=t,ua=a,Bf=d,Hf=c,Xg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,DS(he,function(){return s0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=U.T,U.T=null,c=B.p,B.p=2,S=Lt,Lt|=4;try{xS(t,n,a)}finally{Lt=S,B.p=c,U.T=o}}pn=1,n0(),i0(),a0()}}function n0(){if(pn===1){pn=0;var t=ka,n=fs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var o=B.p;B.p=2;var c=Lt;Lt|=4;try{zg(n,t);var d=td,S=Vp(t.containerInfo),A=d.focusedElem,H=d.selectionRange;if(S!==A&&A&&A.ownerDocument&&Gp(A.ownerDocument.documentElement,A)){if(H!==null&&Tc(A)){var ie=H.start,ge=H.end;if(ge===void 0&&(ge=ie),"selectionStart"in A)A.selectionStart=ie,A.selectionEnd=Math.min(ge,A.value.length);else{var xe=A.ownerDocument||document,se=xe&&xe.defaultView||window;if(se.getSelection){var de=se.getSelection(),Xe=A.textContent.length,tt=Math.min(H.start,Xe),kt=H.end===void 0?tt:Math.min(H.end,Xe);!de.extend&&tt>kt&&(S=kt,kt=tt,tt=S);var Y=Hp(A,tt),k=Hp(A,kt);if(Y&&k&&(de.rangeCount!==1||de.anchorNode!==Y.node||de.anchorOffset!==Y.offset||de.focusNode!==k.node||de.focusOffset!==k.offset)){var te=xe.createRange();te.setStart(Y.node,Y.offset),de.removeAllRanges(),tt>kt?(de.addRange(te),de.extend(k.node,k.offset)):(te.setEnd(k.node,k.offset),de.addRange(te))}}}}for(xe=[],de=A;de=de.parentNode;)de.nodeType===1&&xe.push({element:de,left:de.scrollLeft,top:de.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<xe.length;A++){var ve=xe[A];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}mu=!!ed,td=ed=null}finally{Lt=c,B.p=o,U.T=a}}t.current=n,pn=2}}function i0(){if(pn===2){pn=0;var t=ka,n=fs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var o=B.p;B.p=2;var c=Lt;Lt|=4;try{Ug(t,n.alternate,n)}finally{Lt=c,B.p=o,U.T=a}}pn=3}}function a0(){if(pn===4||pn===3){pn=0,z();var t=ka,n=fs,a=ua,o=Xg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?pn=5:(pn=0,fs=ka=null,r0(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Va=null),Fr(a),n=n.stateNode,Re&&typeof Re.onCommitFiberRoot=="function")try{Re.onCommitFiberRoot(Ee,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=U.T,c=B.p,B.p=2,U.T=null;try{for(var d=t.onRecoverableError,S=0;S<o.length;S++){var A=o[S];d(A.value,{componentStack:A.stack})}}finally{U.T=n,B.p=c}}(ua&3)!==0&&iu(),Ii(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===Gf?Ro++:(Ro=0,Gf=t):Ro=0,Co(0)}}function r0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,oo(n)))}function iu(){return n0(),i0(),a0(),s0()}function s0(){if(pn!==5)return!1;var t=ka,n=Bf;Bf=0;var a=Fr(ua),o=U.T,c=B.p;try{B.p=32>a?32:a,U.T=null,a=Hf,Hf=null;var d=ka,S=ua;if(pn=0,fs=ka=null,ua=0,(Lt&6)!==0)throw Error(r(331));var A=Lt;if(Lt|=4,Gg(d.current),Fg(d,d.current,S,a),Lt=A,Co(0,!1),Re&&typeof Re.onPostCommitFiberRoot=="function")try{Re.onPostCommitFiberRoot(Ee,d)}catch{}return!0}finally{B.p=c,U.T=o,r0(t,n)}}function o0(t,n,a){n=li(a,n),n=xf(t.stateNode,n,2),t=za(t,n,2),t!==null&&(Dn(t,2),Ii(t))}function Bt(t,n,a){if(t.tag===3)o0(t,t,a);else for(;n!==null;){if(n.tag===3){o0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Va===null||!Va.has(o))){t=li(a,t),a=lg(2),o=za(n,a,2),o!==null&&(ug(a,o,n,t),Dn(o,2),Ii(o));break}}n=n.return}}function Xf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new MS;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(zf=!0,c.add(a),t=RS.bind(null,t,n,a),n.then(t,t))}function RS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xt===t&&(vt&a)===a&&(nn===4||nn===3&&(vt&62914560)===vt&&300>E()-Ql?(Lt&2)===0&&ds(t,0):If|=a,cs===vt&&(cs=0)),Ii(t)}function l0(t,n){n===0&&(n=zt()),t=fr(t,n),t!==null&&(Dn(t,n),Ii(t))}function CS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),l0(t,a)}function wS(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),l0(t,a)}function DS(t,n){return Et(t,n)}var au=null,ps=null,Wf=!1,ru=!1,qf=!1,Wa=0;function Ii(t){t!==ps&&t.next===null&&(ps===null?au=ps=t:ps=ps.next=t),ru=!0,Wf||(Wf=!0,LS())}function Co(t,n){if(!qf&&ru){qf=!0;do for(var a=!1,o=au;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var d=0;else{var S=o.suspendedLanes,A=o.pingedLanes;d=(1<<31-Ie(42|t)+1)-1,d&=c&~(S&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,d0(o,d))}else d=vt,d=Se(o,o===Xt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||De(o,d)||(a=!0,d0(o,d));o=o.next}while(a);qf=!1}}function US(){u0()}function u0(){ru=Wf=!1;var t=0;Wa!==0&&VS()&&(t=Wa);for(var n=E(),a=null,o=au;o!==null;){var c=o.next,d=c0(o,n);d===0?(o.next=null,a===null?au=c:a.next=c,c===null&&(ps=a)):(a=o,(t!==0||(d&3)!==0)&&(ru=!0)),o=c}pn!==0&&pn!==5||Co(t),Wa!==0&&(Wa=0)}function c0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var S=31-Ie(d),A=1<<S,H=c[S];H===-1?((A&a)===0||(A&o)!==0)&&(c[S]=it(A,n)):H<=n&&(t.expiredLanes|=A),d&=~A}if(n=Xt,a=vt,a=Se(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Nt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||De(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Nt(o),Fr(a)){case 2:case 8:a=ye;break;case 32:a=he;break;case 268435456:a=Ue;break;default:a=he}return o=f0.bind(null,t),a=Et(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Nt(o),t.callbackPriority=2,t.callbackNode=null,2}function f0(t,n){if(pn!==0&&pn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(iu()&&t.callbackNode!==a)return null;var o=vt;return o=Se(t,t===Xt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(qg(t,o,n),c0(t,E()),t.callbackNode!=null&&t.callbackNode===a?f0.bind(null,t):null)}function d0(t,n){if(iu())return null;qg(t,n,!0)}function LS(){XS(function(){(Lt&6)!==0?Et(_e,US):u0()})}function Yf(){if(Wa===0){var t=$r;t===0&&(t=Oe,Oe<<=1,(Oe&261888)===0&&(Oe=256)),Wa=t}return Wa}function h0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:hl(""+t)}function p0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function NS(t,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var d=h0((c[xn]||null).action),S=o.submitter;S&&(n=(n=S[xn]||null)?h0(n.formAction):S.getAttribute("formAction"),n!==null&&(d=n,S=null));var A=new _l("action","action",null,o,c);t.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Wa!==0){var H=S?p0(c,S):new FormData(c);hf(a,{pending:!0,data:H,method:c.method,action:d},null,H)}}else typeof d=="function"&&(A.preventDefault(),H=S?p0(c,S):new FormData(c),hf(a,{pending:!0,data:H,method:c.method,action:d},d,H))},currentTarget:c}]})}}for(var jf=0;jf<wc.length;jf++){var Zf=wc[jf],OS=Zf.toLowerCase(),PS=Zf[0].toUpperCase()+Zf.slice(1);Ti(OS,"on"+PS)}Ti(Wp,"onAnimationEnd"),Ti(qp,"onAnimationIteration"),Ti(Yp,"onAnimationStart"),Ti("dblclick","onDoubleClick"),Ti("focusin","onFocus"),Ti("focusout","onBlur"),Ti(Qx,"onTransitionRun"),Ti(Jx,"onTransitionStart"),Ti($x,"onTransitionCancel"),Ti(jp,"onTransitionEnd"),J("onMouseEnter",["mouseout","mouseover"]),J("onMouseLeave",["mouseout","mouseover"]),J("onPointerEnter",["pointerout","pointerover"]),J("onPointerLeave",["pointerout","pointerover"]),re("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),re("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),re("onBeforeInput",["compositionend","keypress","textInput","paste"]),re("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),re("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),re("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wo));function m0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],c=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var S=o.length-1;0<=S;S--){var A=o[S],H=A.instance,ie=A.currentTarget;if(A=A.listener,H!==d&&c.isPropagationStopped())break e;d=A,c.currentTarget=ie;try{d(c)}catch(ge){Sl(ge)}c.currentTarget=null,d=H}else for(S=0;S<o.length;S++){if(A=o[S],H=A.instance,ie=A.currentTarget,A=A.listener,H!==d&&c.isPropagationStopped())break e;d=A,c.currentTarget=ie;try{d(c)}catch(ge){Sl(ge)}c.currentTarget=null,d=H}}}}function gt(t,n){var a=n[Br];a===void 0&&(a=n[Br]=new Set);var o=t+"__bubble";a.has(o)||(g0(n,t,2,!1),a.add(o))}function Kf(t,n,a){var o=0;n&&(o|=4),g0(a,t,o,n)}var su="_reactListening"+Math.random().toString(36).slice(2);function Qf(t){if(!t[su]){t[su]=!0,q.forEach(function(a){a!=="selectionchange"&&(zS.has(a)||Kf(a,!1,t),Kf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[su]||(n[su]=!0,Kf("selectionchange",!1,n))}}function g0(t,n,a,o){switch(W0(n)){case 2:var c=cy;break;case 8:c=fy;break;default:c=dd}a=c.bind(null,n,a,t),c=void 0,!gc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Jf(t,n,a,o,c){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var A=o.stateNode.containerInfo;if(A===c)break;if(S===4)for(S=o.return;S!==null;){var H=S.tag;if((H===3||H===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;A!==null;){if(S=Aa(A),S===null)return;if(H=S.tag,H===5||H===6||H===26||H===27){o=d=S;continue e}A=A.parentNode}}o=o.return}yp(function(){var ie=d,ge=pc(a),xe=[];e:{var se=Zp.get(t);if(se!==void 0){var de=_l,Xe=t;switch(t){case"keypress":if(ml(a)===0)break e;case"keydown":case"keyup":de=wx;break;case"focusin":Xe="focus",de=Sc;break;case"focusout":Xe="blur",de=Sc;break;case"beforeblur":case"afterblur":de=Sc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=bp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=_x;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=Lx;break;case Wp:case qp:case Yp:de=Sx;break;case jp:de=Ox;break;case"scroll":case"scrollend":de=mx;break;case"wheel":de=zx;break;case"copy":case"cut":case"paste":de=Mx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=Ap;break;case"toggle":case"beforetoggle":de=Fx}var tt=(n&4)!==0,kt=!tt&&(t==="scroll"||t==="scrollend"),Y=tt?se!==null?se+"Capture":null:se;tt=[];for(var k=ie,te;k!==null;){var ve=k;if(te=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||te===null||Y===null||(ve=Ks(k,Y),ve!=null&&tt.push(Do(k,ve,te))),kt)break;k=k.return}0<tt.length&&(se=new de(se,Xe,null,a,ge),xe.push({event:se,listeners:tt}))}}if((n&7)===0){e:{if(se=t==="mouseover"||t==="pointerover",de=t==="mouseout"||t==="pointerout",se&&a!==hc&&(Xe=a.relatedTarget||a.fromElement)&&(Aa(Xe)||Xe[Ei]))break e;if((de||se)&&(se=ge.window===ge?ge:(se=ge.ownerDocument)?se.defaultView||se.parentWindow:window,de?(Xe=a.relatedTarget||a.toElement,de=ie,Xe=Xe?Aa(Xe):null,Xe!==null&&(kt=u(Xe),tt=Xe.tag,Xe!==kt||tt!==5&&tt!==27&&tt!==6)&&(Xe=null)):(de=null,Xe=ie),de!==Xe)){if(tt=bp,ve="onMouseLeave",Y="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(tt=Ap,ve="onPointerLeave",Y="onPointerEnter",k="pointer"),kt=de==null?se:or(de),te=Xe==null?se:or(Xe),se=new tt(ve,k+"leave",de,a,ge),se.target=kt,se.relatedTarget=te,ve=null,Aa(ge)===ie&&(tt=new tt(Y,k+"enter",Xe,a,ge),tt.target=te,tt.relatedTarget=kt,ve=tt),kt=ve,de&&Xe)t:{for(tt=IS,Y=de,k=Xe,te=0,ve=Y;ve;ve=tt(ve))te++;ve=0;for(var Je=k;Je;Je=tt(Je))ve++;for(;0<te-ve;)Y=tt(Y),te--;for(;0<ve-te;)k=tt(k),ve--;for(;te--;){if(Y===k||k!==null&&Y===k.alternate){tt=Y;break t}Y=tt(Y),k=tt(k)}tt=null}else tt=null;de!==null&&_0(xe,se,de,tt,!1),Xe!==null&&kt!==null&&_0(xe,kt,Xe,tt,!0)}}e:{if(se=ie?or(ie):window,de=se.nodeName&&se.nodeName.toLowerCase(),de==="select"||de==="input"&&se.type==="file")var At=Op;else if(Lp(se))if(Pp)At=jx;else{At=qx;var Ze=Wx}else de=se.nodeName,!de||de.toLowerCase()!=="input"||se.type!=="checkbox"&&se.type!=="radio"?ie&&bi(ie.elementType)&&(At=Op):At=Yx;if(At&&(At=At(t,ie))){Np(xe,At,a,ge);break e}Ze&&Ze(t,se,ie),t==="focusout"&&ie&&se.type==="number"&&ie.memoizedProps.value!=null&&yn(se,"number",se.value)}switch(Ze=ie?or(ie):window,t){case"focusin":(Lp(Ze)||Ze.contentEditable==="true")&&(Wr=Ze,Ac=ie,ao=null);break;case"focusout":ao=Ac=Wr=null;break;case"mousedown":Rc=!0;break;case"contextmenu":case"mouseup":case"dragend":Rc=!1,kp(xe,a,ge);break;case"selectionchange":if(Kx)break;case"keydown":case"keyup":kp(xe,a,ge)}var ct;if(Mc)e:{switch(t){case"compositionstart":var xt="onCompositionStart";break e;case"compositionend":xt="onCompositionEnd";break e;case"compositionupdate":xt="onCompositionUpdate";break e}xt=void 0}else Xr?Dp(t,a)&&(xt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(xt="onCompositionStart");xt&&(Rp&&a.locale!=="ko"&&(Xr||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&Xr&&(ct=Mp()):(wa=ge,_c="value"in wa?wa.value:wa.textContent,Xr=!0)),Ze=ou(ie,xt),0<Ze.length&&(xt=new Tp(xt,t,null,a,ge),xe.push({event:xt,listeners:Ze}),ct?xt.data=ct:(ct=Up(a),ct!==null&&(xt.data=ct)))),(ct=Hx?Gx(t,a):Vx(t,a))&&(xt=ou(ie,"onBeforeInput"),0<xt.length&&(Ze=new Tp("onBeforeInput","beforeinput",null,a,ge),xe.push({event:Ze,listeners:xt}),Ze.data=ct)),NS(xe,t,ie,a,ge)}m0(xe,n)})}function Do(t,n,a){return{instance:t,listener:n,currentTarget:a}}function ou(t,n){for(var a=n+"Capture",o=[];t!==null;){var c=t,d=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||d===null||(c=Ks(t,a),c!=null&&o.unshift(Do(t,c,d)),c=Ks(t,n),c!=null&&o.push(Do(t,c,d))),t.tag===3)return o;t=t.return}return[]}function IS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function _0(t,n,a,o,c){for(var d=n._reactName,S=[];a!==null&&a!==o;){var A=a,H=A.alternate,ie=A.stateNode;if(A=A.tag,H!==null&&H===o)break;A!==5&&A!==26&&A!==27||ie===null||(H=ie,c?(ie=Ks(a,d),ie!=null&&S.unshift(Do(a,ie,H))):c||(ie=Ks(a,d),ie!=null&&S.push(Do(a,ie,H)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var FS=/\r\n?/g,BS=/\u0000|\uFFFD/g;function v0(t){return(typeof t=="string"?t:""+t).replace(FS,`
`).replace(BS,"")}function x0(t,n){return n=v0(n),v0(t)===n}function Vt(t,n,a,o,c,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||hn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&hn(t,""+o);break;case"className":$e(t,"class",o);break;case"tabIndex":$e(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":$e(t,a,o);break;case"style":Gr(t,o,d);break;case"data":if(n!=="object"){$e(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=hl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Vt(t,n,"name",c.name,c,null),Vt(t,n,"formEncType",c.formEncType,c,null),Vt(t,n,"formMethod",c.formMethod,c,null),Vt(t,n,"formTarget",c.formTarget,c,null)):(Vt(t,n,"encType",c.encType,c,null),Vt(t,n,"method",c.method,c,null),Vt(t,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=hl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ji);break;case"onScroll":o!=null&&gt("scroll",t);break;case"onScrollEnd":o!=null&&gt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=hl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":gt("beforetoggle",t),gt("toggle",t),qe(t,"popover",o);break;case"xlinkActuate":Ye(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ye(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ye(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ye(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ye(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ye(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":qe(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=hx.get(a)||a,qe(t,a,o))}}function $f(t,n,a,o,c,d){switch(a){case"style":Gr(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?hn(t,o):(typeof o=="number"||typeof o=="bigint")&&hn(t,""+o);break;case"onScroll":o!=null&&gt("scroll",t);break;case"onScrollEnd":o!=null&&gt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ue.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),d=t[xn]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,c),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,c);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):qe(t,a,o)}}}function Cn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gt("error",t),gt("load",t);var o=!1,c=!1,d;for(d in a)if(a.hasOwnProperty(d)){var S=a[d];if(S!=null)switch(d){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Vt(t,n,d,S,a,null)}}c&&Vt(t,n,"srcSet",a.srcSet,a,null),o&&Vt(t,n,"src",a.src,a,null);return;case"input":gt("invalid",t);var A=d=S=c=null,H=null,ie=null;for(o in a)if(a.hasOwnProperty(o)){var ge=a[o];if(ge!=null)switch(o){case"name":c=ge;break;case"type":S=ge;break;case"checked":H=ge;break;case"defaultChecked":ie=ge;break;case"value":d=ge;break;case"defaultValue":A=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(r(137,n));break;default:Vt(t,n,o,ge,a,null)}}Yi(t,d,A,H,ie,S,c,!1);return;case"select":gt("invalid",t),o=S=d=null;for(c in a)if(a.hasOwnProperty(c)&&(A=a[c],A!=null))switch(c){case"value":d=A;break;case"defaultValue":S=A;break;case"multiple":o=A;default:Vt(t,n,c,A,a,null)}n=d,a=S,t.multiple=!!o,n!=null?si(t,!!o,n,!1):a!=null&&si(t,!!o,a,!0);return;case"textarea":gt("invalid",t),d=c=o=null;for(S in a)if(a.hasOwnProperty(S)&&(A=a[S],A!=null))switch(S){case"value":o=A;break;case"defaultValue":c=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Vt(t,n,S,A,a,null)}Mn(t,o,c,d);return;case"option":for(H in a)a.hasOwnProperty(H)&&(o=a[H],o!=null)&&(H==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":Vt(t,n,H,o,a,null));return;case"dialog":gt("beforetoggle",t),gt("toggle",t),gt("cancel",t),gt("close",t);break;case"iframe":case"object":gt("load",t);break;case"video":case"audio":for(o=0;o<wo.length;o++)gt(wo[o],t);break;case"image":gt("error",t),gt("load",t);break;case"details":gt("toggle",t);break;case"embed":case"source":case"link":gt("error",t),gt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ie in a)if(a.hasOwnProperty(ie)&&(o=a[ie],o!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Vt(t,n,ie,o,a,null)}return;default:if(bi(n)){for(ge in a)a.hasOwnProperty(ge)&&(o=a[ge],o!==void 0&&$f(t,n,ge,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Vt(t,n,A,o,a,null))}function HS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,d=null,S=null,A=null,H=null,ie=null,ge=null;for(de in a){var xe=a[de];if(a.hasOwnProperty(de)&&xe!=null)switch(de){case"checked":break;case"value":break;case"defaultValue":H=xe;default:o.hasOwnProperty(de)||Vt(t,n,de,null,o,xe)}}for(var se in o){var de=o[se];if(xe=a[se],o.hasOwnProperty(se)&&(de!=null||xe!=null))switch(se){case"type":d=de;break;case"name":c=de;break;case"checked":ie=de;break;case"defaultChecked":ge=de;break;case"value":S=de;break;case"defaultValue":A=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,n));break;default:de!==xe&&Vt(t,n,se,de,o,xe)}}Sn(t,S,A,H,ie,ge,d,c);return;case"select":de=S=A=se=null;for(d in a)if(H=a[d],a.hasOwnProperty(d)&&H!=null)switch(d){case"value":break;case"multiple":de=H;default:o.hasOwnProperty(d)||Vt(t,n,d,null,o,H)}for(c in o)if(d=o[c],H=a[c],o.hasOwnProperty(c)&&(d!=null||H!=null))switch(c){case"value":se=d;break;case"defaultValue":A=d;break;case"multiple":S=d;default:d!==H&&Vt(t,n,c,d,o,H)}n=A,a=S,o=de,se!=null?si(t,!!a,se,!1):!!o!=!!a&&(n!=null?si(t,!!a,n,!0):si(t,!!a,a?[]:"",!1));return;case"textarea":de=se=null;for(A in a)if(c=a[A],a.hasOwnProperty(A)&&c!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Vt(t,n,A,null,o,c)}for(S in o)if(c=o[S],d=a[S],o.hasOwnProperty(S)&&(c!=null||d!=null))switch(S){case"value":se=c;break;case"defaultValue":de=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==d&&Vt(t,n,S,c,o,d)}It(t,se,de);return;case"option":for(var Xe in a)se=a[Xe],a.hasOwnProperty(Xe)&&se!=null&&!o.hasOwnProperty(Xe)&&(Xe==="selected"?t.selected=!1:Vt(t,n,Xe,null,o,se));for(H in o)se=o[H],de=a[H],o.hasOwnProperty(H)&&se!==de&&(se!=null||de!=null)&&(H==="selected"?t.selected=se&&typeof se!="function"&&typeof se!="symbol":Vt(t,n,H,se,o,de));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)se=a[tt],a.hasOwnProperty(tt)&&se!=null&&!o.hasOwnProperty(tt)&&Vt(t,n,tt,null,o,se);for(ie in o)if(se=o[ie],de=a[ie],o.hasOwnProperty(ie)&&se!==de&&(se!=null||de!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(r(137,n));break;default:Vt(t,n,ie,se,o,de)}return;default:if(bi(n)){for(var kt in a)se=a[kt],a.hasOwnProperty(kt)&&se!==void 0&&!o.hasOwnProperty(kt)&&$f(t,n,kt,void 0,o,se);for(ge in o)se=o[ge],de=a[ge],!o.hasOwnProperty(ge)||se===de||se===void 0&&de===void 0||$f(t,n,ge,se,o,de);return}}for(var Y in a)se=a[Y],a.hasOwnProperty(Y)&&se!=null&&!o.hasOwnProperty(Y)&&Vt(t,n,Y,null,o,se);for(xe in o)se=o[xe],de=a[xe],!o.hasOwnProperty(xe)||se===de||se==null&&de==null||Vt(t,n,xe,se,o,de)}function S0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function GS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],d=c.transferSize,S=c.initiatorType,A=c.duration;if(d&&A&&S0(S)){for(S=0,A=c.responseEnd,o+=1;o<a.length;o++){var H=a[o],ie=H.startTime;if(ie>A)break;var ge=H.transferSize,xe=H.initiatorType;ge&&S0(xe)&&(H=H.responseEnd,S+=ge*(H<A?1:(A-ie)/(H-ie)))}if(--o,n+=8*(d+S)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ed=null,td=null;function lu(t){return t.nodeType===9?t:t.ownerDocument}function y0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function M0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function nd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var id=null;function VS(){var t=window.event;return t&&t.type==="popstate"?t===id?!1:(id=t,!0):(id=null,!1)}var E0=typeof setTimeout=="function"?setTimeout:void 0,kS=typeof clearTimeout=="function"?clearTimeout:void 0,b0=typeof Promise=="function"?Promise:void 0,XS=typeof queueMicrotask=="function"?queueMicrotask:typeof b0<"u"?function(t){return b0.resolve(null).then(t).catch(WS)}:E0;function WS(t){setTimeout(function(){throw t})}function qa(t){return t==="head"}function T0(t,n){var a=n,o=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(c),vs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Uo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Uo(a);for(var d=a.firstChild;d;){var S=d.nextSibling,A=d.nodeName;d[sr]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=S}}else a==="body"&&Uo(t.ownerDocument.body);a=c}while(a);vs(n)}function A0(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function ad(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ad(a),Zs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function qS(t,n,a,o){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[sr])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=hi(t.nextSibling),t===null)break}return null}function YS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=hi(t.nextSibling),t===null))return null;return t}function R0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=hi(t.nextSibling),t===null))return null;return t}function rd(t){return t.data==="$?"||t.data==="$~"}function sd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function jS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function hi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var od=null;function C0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return hi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function w0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function D0(t,n,a){switch(n=lu(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Uo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Zs(t)}var pi=new Map,U0=new Set;function uu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ca=B.d;B.d={f:ZS,r:KS,D:QS,C:JS,L:$S,m:ey,X:ny,S:ty,M:iy};function ZS(){var t=ca.f(),n=eu();return t||n}function KS(t){var n=Ra(t);n!==null&&n.tag===5&&n.type==="form"?jm(n):ca.r(t)}var ms=typeof document>"u"?null:document;function L0(t,n,a){var o=ms;if(o&&typeof n=="string"&&n){var c=at(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),U0.has(c)||(U0.add(c),t={rel:t,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Cn(n,"link",t),R(n),o.head.appendChild(n)))}}function QS(t){ca.D(t),L0("dns-prefetch",t,null)}function JS(t,n){ca.C(t,n),L0("preconnect",t,n)}function $S(t,n,a){ca.L(t,n,a);var o=ms;if(o&&t&&n){var c='link[rel="preload"][as="'+at(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+at(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+at(a.imageSizes)+'"]')):c+='[href="'+at(t)+'"]';var d=c;switch(n){case"style":d=gs(t);break;case"script":d=_s(t)}pi.has(d)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),pi.set(d,t),o.querySelector(c)!==null||n==="style"&&o.querySelector(Lo(d))||n==="script"&&o.querySelector(No(d))||(n=o.createElement("link"),Cn(n,"link",t),R(n),o.head.appendChild(n)))}}function ey(t,n){ca.m(t,n);var a=ms;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+at(o)+'"][href="'+at(t)+'"]',d=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=_s(t)}if(!pi.has(d)&&(t=g({rel:"modulepreload",href:t},n),pi.set(d,t),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(No(d)))return}o=a.createElement("link"),Cn(o,"link",t),R(o),a.head.appendChild(o)}}}function ty(t,n,a){ca.S(t,n,a);var o=ms;if(o&&t){var c=Ca(o).hoistableStyles,d=gs(t);n=n||"default";var S=c.get(d);if(!S){var A={loading:0,preload:null};if(S=o.querySelector(Lo(d)))A.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=pi.get(d))&&ld(t,a);var H=S=o.createElement("link");R(H),Cn(H,"link",t),H._p=new Promise(function(ie,ge){H.onload=ie,H.onerror=ge}),H.addEventListener("load",function(){A.loading|=1}),H.addEventListener("error",function(){A.loading|=2}),A.loading|=4,cu(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:A},c.set(d,S)}}}function ny(t,n){ca.X(t,n);var a=ms;if(a&&t){var o=Ca(a).hoistableScripts,c=_s(t),d=o.get(c);d||(d=a.querySelector(No(c)),d||(t=g({src:t,async:!0},n),(n=pi.get(c))&&ud(t,n),d=a.createElement("script"),R(d),Cn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function iy(t,n){ca.M(t,n);var a=ms;if(a&&t){var o=Ca(a).hoistableScripts,c=_s(t),d=o.get(c);d||(d=a.querySelector(No(c)),d||(t=g({src:t,async:!0,type:"module"},n),(n=pi.get(c))&&ud(t,n),d=a.createElement("script"),R(d),Cn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function N0(t,n,a,o){var c=(c=Q.current)?uu(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=gs(a.href),a=Ca(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=gs(a.href);var d=Ca(c).hoistableStyles,S=d.get(t);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,S),(d=c.querySelector(Lo(t)))&&!d._p&&(S.instance=d,S.state.loading=5),pi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},pi.set(t,a),d||ay(c,t,a,S.state))),n&&o===null)throw Error(r(528,""));return S}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=_s(a),a=Ca(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function gs(t){return'href="'+at(t)+'"'}function Lo(t){return'link[rel="stylesheet"]['+t+"]"}function O0(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function ay(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Cn(n,"link",a),R(n),t.head.appendChild(n))}function _s(t){return'[src="'+at(t)+'"]'}function No(t){return"script[async]"+t}function P0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+at(a.href)+'"]');if(o)return n.instance=o,R(o),o;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),R(o),Cn(o,"style",c),cu(o,a.precedence,t),n.instance=o;case"stylesheet":c=gs(a.href);var d=t.querySelector(Lo(c));if(d)return n.state.loading|=4,n.instance=d,R(d),d;o=O0(a),(c=pi.get(c))&&ld(o,c),d=(t.ownerDocument||t).createElement("link"),R(d);var S=d;return S._p=new Promise(function(A,H){S.onload=A,S.onerror=H}),Cn(d,"link",o),n.state.loading|=4,cu(d,a.precedence,t),n.instance=d;case"script":return d=_s(a.src),(c=t.querySelector(No(d)))?(n.instance=c,R(c),c):(o=a,(c=pi.get(d))&&(o=g({},a),ud(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),R(c),Cn(c,"link",o),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,cu(o,a.precedence,t));return n.instance}function cu(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,d=c,S=0;S<o.length;S++){var A=o[S];if(A.dataset.precedence===n)d=A;else if(d!==c)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function ld(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function ud(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var fu=null;function z0(t,n,a){if(fu===null){var o=new Map,c=fu=new Map;c.set(a,o)}else c=fu,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var d=a[c];if(!(d[sr]||d[on]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(n)||"";S=t+S;var A=o.get(S);A?A.push(d):o.set(S,[d])}}return o}function I0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function ry(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function F0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function sy(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=gs(o.href),d=n.querySelector(Lo(c));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=du.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,R(d);return}d=n.ownerDocument||n,o=O0(o),(c=pi.get(c))&&ld(o,c),d=d.createElement("link"),R(d);var S=d;S._p=new Promise(function(A,H){S.onload=A,S.onerror=H}),Cn(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=du.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var cd=0;function oy(t,n){return t.stylesheets&&t.count===0&&pu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&pu(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&cd===0&&(cd=62500*GS());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&pu(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>cd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function du(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)pu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var hu=null;function pu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,hu=new Map,n.forEach(ly,t),hu=null,du.call(t))}function ly(t,n){if(!(n.state.loading&4)){var a=hu.get(t);if(a)var o=a.get(null);else{a=new Map,hu.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<c.length;d++){var S=c[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}c=n.instance,S=c.getAttribute("data-precedence"),d=a.get(S)||o,d===o&&a.set(null,c),a.set(S,c),this.count++,o=du.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),d?d.parentNode.insertBefore(c,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Oo={$$typeof:D,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function uy(t,n,a,o,c,d,S,A,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bt(0),this.hiddenUpdates=bt(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function B0(t,n,a,o,c,d,S,A,H,ie,ge,xe){return t=new uy(t,n,a,S,H,ie,ge,xe,A),n=1,d===!0&&(n|=24),d=Zn(3,null,null,n),t.current=d,d.stateNode=t,n=Vc(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},qc(d),t}function H0(t){return t?(t=jr,t):jr}function G0(t,n,a,o,c,d){c=H0(c),o.context===null?o.context=c:o.pendingContext=c,o=Pa(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=za(t,o,n),a!==null&&(Wn(a,t,n),fo(a,t,n))}function V0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function fd(t,n){V0(t,n),(t=t.alternate)&&V0(t,n)}function k0(t){if(t.tag===13||t.tag===31){var n=fr(t,67108864);n!==null&&Wn(n,t,67108864),fd(t,67108864)}}function X0(t){if(t.tag===13||t.tag===31){var n=ei();n=qs(n);var a=fr(t,n);a!==null&&Wn(a,t,n),fd(t,n)}}var mu=!0;function cy(t,n,a,o){var c=U.T;U.T=null;var d=B.p;try{B.p=2,dd(t,n,a,o)}finally{B.p=d,U.T=c}}function fy(t,n,a,o){var c=U.T;U.T=null;var d=B.p;try{B.p=8,dd(t,n,a,o)}finally{B.p=d,U.T=c}}function dd(t,n,a,o){if(mu){var c=hd(o);if(c===null)Jf(t,n,o,gu,a),q0(t,o);else if(hy(c,t,n,a,o))o.stopPropagation();else if(q0(t,o),n&4&&-1<dy.indexOf(t)){for(;c!==null;){var d=Ra(c);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=Me(d.pendingLanes);if(S!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var H=1<<31-Ie(S);A.entanglements[1]|=H,S&=~H}Ii(d),(Lt&6)===0&&(Jl=E()+500,Co(0))}}break;case 31:case 13:A=fr(d,2),A!==null&&Wn(A,d,2),eu(),fd(d,2)}if(d=hd(o),d===null&&Jf(t,n,o,gu,a),d===c)break;c=d}c!==null&&o.stopPropagation()}else Jf(t,n,o,null,a)}}function hd(t){return t=pc(t),pd(t)}var gu=null;function pd(t){if(gu=null,t=Aa(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return gu=t,null}function W0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case _e:return 2;case ye:return 8;case he:case Ke:return 32;case Ue:return 268435456;default:return 32}default:return 32}}var md=!1,Ya=null,ja=null,Za=null,Po=new Map,zo=new Map,Ka=[],dy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function q0(t,n){switch(t){case"focusin":case"focusout":Ya=null;break;case"dragenter":case"dragleave":ja=null;break;case"mouseover":case"mouseout":Za=null;break;case"pointerover":case"pointerout":Po.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":zo.delete(n.pointerId)}}function Io(t,n,a,o,c,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[c]},n!==null&&(n=Ra(n),n!==null&&k0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function hy(t,n,a,o,c){switch(n){case"focusin":return Ya=Io(Ya,t,n,a,o,c),!0;case"dragenter":return ja=Io(ja,t,n,a,o,c),!0;case"mouseover":return Za=Io(Za,t,n,a,o,c),!0;case"pointerover":var d=c.pointerId;return Po.set(d,Io(Po.get(d)||null,t,n,a,o,c)),!0;case"gotpointercapture":return d=c.pointerId,zo.set(d,Io(zo.get(d)||null,t,n,a,o,c)),!0}return!1}function Y0(t){var n=Aa(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,Ni(t.priority,function(){X0(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Ni(t.priority,function(){X0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _u(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=hd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);hc=o,a.target.dispatchEvent(o),hc=null}else return n=Ra(a),n!==null&&k0(n),t.blockedOn=a,!1;n.shift()}return!0}function j0(t,n,a){_u(t)&&a.delete(n)}function py(){md=!1,Ya!==null&&_u(Ya)&&(Ya=null),ja!==null&&_u(ja)&&(ja=null),Za!==null&&_u(Za)&&(Za=null),Po.forEach(j0),zo.forEach(j0)}function vu(t,n){t.blockedOn===n&&(t.blockedOn=null,md||(md=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,py)))}var xu=null;function Z0(t){xu!==t&&(xu=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){xu===t&&(xu=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],c=t[n+2];if(typeof o!="function"){if(pd(o||a)===null)continue;break}var d=Ra(a);d!==null&&(t.splice(n,3),n-=3,hf(d,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function vs(t){function n(H){return vu(H,t)}Ya!==null&&vu(Ya,t),ja!==null&&vu(ja,t),Za!==null&&vu(Za,t),Po.forEach(n),zo.forEach(n);for(var a=0;a<Ka.length;a++){var o=Ka[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ka.length&&(a=Ka[0],a.blockedOn===null);)Y0(a),a.blockedOn===null&&Ka.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],d=a[o+1],S=c[xn]||null;if(typeof d=="function")S||Z0(a);else if(S){var A=null;if(d&&d.hasAttribute("formAction")){if(c=d,S=d[xn]||null)A=S.formAction;else if(pd(c)!==null)continue}else A=S.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),Z0(a)}}}function K0(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(S){return c=S})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function gd(t){this._internalRoot=t}Su.prototype.render=gd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ei();G0(a,o,t,n,null,null)},Su.prototype.unmount=gd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;G0(t.current,2,null,t,null,null),eu(),n[Ei]=null}};function Su(t){this._internalRoot=t}Su.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ys();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ka.length&&n!==0&&n<Ka[a].priority;a++);Ka.splice(a,0,t),a===0&&Y0(t)}};var Q0=e.version;if(Q0!=="19.2.4")throw Error(r(527,Q0,"19.2.4"));B.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var my={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yu.isDisabled&&yu.supportsFiber)try{Ee=yu.inject(my),Re=yu}catch{}}return Bo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",c=ag,d=rg,S=sg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=B0(t,1,!1,null,null,a,o,null,c,d,S,K0),t[Ei]=n.current,Qf(t),new gd(n)},Bo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,c="",d=ag,S=rg,A=sg,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=B0(t,1,!0,n,a??null,o,c,H,d,S,A,K0),n.context=H0(null),a=n.current,o=ei(),o=qs(o),c=Pa(o),c.callback=null,za(a,c,o),a=o,n.current.lanes=a,Dn(n,a),Ii(n),t[Ei]=n.current,Qf(t),new Su(n)},Bo.version="19.2.4",Bo}var o_;function Ty(){if(o_)return vd.exports;o_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),vd.exports=by(),vd.exports}var Ay=Ty(),j=tp();var l_="popstate";function Ry(s={}){function e(r,l){let{pathname:u,search:f,hash:h}=r.location;return ah("",{pathname:u,search:f,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(r,l){return typeof l=="string"?l:Jo(l)}return wy(e,i,null,s)}function Qt(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Wi(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Cy(){return Math.random().toString(36).substring(2,10)}function u_(s,e){return{usr:s.state,key:s.key,idx:e}}function ah(s,e,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?Gs(e):e,state:i,key:e&&e.key||r||Cy()}}function Jo({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Gs(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function wy(s,e,i,r={}){let{window:l=document.defaultView,v5Compat:u=!1}=r,f=l.history,h="POP",m=null,p=_();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function _(){return(f.state||{idx:null}).idx}function g(){h="POP";let y=_(),v=y==null?null:y-p;p=y,m&&m({action:h,location:T.location,delta:v})}function x(y,v){h="PUSH";let w=ah(T.location,y,v);p=_()+1;let D=u_(w,p),O=T.createHref(w);try{f.pushState(D,"",O)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;l.location.assign(O)}u&&m&&m({action:h,location:T.location,delta:1})}function M(y,v){h="REPLACE";let w=ah(T.location,y,v);p=_();let D=u_(w,p),O=T.createHref(w);f.replaceState(D,"",O),u&&m&&m({action:h,location:T.location,delta:0})}function b(y){return Dy(y)}let T={get action(){return h},get location(){return s(l,f)},listen(y){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(l_,g),m=y,()=>{l.removeEventListener(l_,g),m=null}},createHref(y){return e(l,y)},createURL:b,encodeLocation(y){let v=b(y);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:x,replace:M,go(y){return f.go(y)}};return T}function Dy(s,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Qt(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:Jo(s);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function hv(s,e,i="/"){return Uy(s,e,i,!1)}function Uy(s,e,i,r){let l=typeof e=="string"?Gs(e):e,u=Sa(l.pathname||"/",i);if(u==null)return null;let f=pv(s);Ly(f);let h=null;for(let m=0;h==null&&m<f.length;++m){let p=ky(u);h=Gy(f[m],p,r)}return h}function pv(s,e=[],i=[],r="",l=!1){let u=(f,h,m=l,p)=>{let _={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(_.relativePath.startsWith("/")){if(!_.relativePath.startsWith(r)&&m)return;Qt(_.relativePath.startsWith(r),`Absolute route path "${_.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),_.relativePath=_.relativePath.slice(r.length)}let g=_a([r,_.relativePath]),x=i.concat(_);f.children&&f.children.length>0&&(Qt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),pv(f.children,e,x,g,m)),!(f.path==null&&!f.index)&&e.push({path:g,score:By(g,f.index),routesMeta:x})};return s.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))u(f,h);else for(let m of mv(f.path))u(f,h,!0,m)}),e}function mv(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(r.length===0)return l?[u,""]:[u];let f=mv(r.join("/")),h=[];return h.push(...f.map(m=>m===""?u:[u,m].join("/"))),l&&h.push(...f),h.map(m=>s.startsWith("/")&&m===""?"/":m)}function Ly(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:Hy(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var Ny=/^:[\w-]+$/,Oy=3,Py=2,zy=1,Iy=10,Fy=-2,c_=s=>s==="*";function By(s,e){let i=s.split("/"),r=i.length;return i.some(c_)&&(r+=Fy),e&&(r+=Py),i.filter(l=>!c_(l)).reduce((l,u)=>l+(Ny.test(u)?Oy:u===""?zy:Iy),r)}function Hy(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function Gy(s,e,i=!1){let{routesMeta:r}=s,l={},u="/",f=[];for(let h=0;h<r.length;++h){let m=r[h],p=h===r.length-1,_=u==="/"?e:e.slice(u.length)||"/",g=ec({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},_),x=m.route;if(!g&&p&&i&&!r[r.length-1].route.index&&(g=ec({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},_)),!g)return null;Object.assign(l,g.params),f.push({params:l,pathname:_a([u,g.pathname]),pathnameBase:Yy(_a([u,g.pathnameBase])),route:x}),g.pathnameBase!=="/"&&(u=_a([u,g.pathnameBase]))}return f}function ec(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=Vy(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let u=l[0],f=u.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:r.reduce((p,{paramName:_,isOptional:g},x)=>{if(_==="*"){let b=h[x]||"";f=u.slice(0,u.length-b.length).replace(/(.)\/+$/,"$1")}const M=h[x];return g&&!M?p[_]=void 0:p[_]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:f,pattern:s}}function Vy(s,e=!1,i=!0){Wi(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,m)=>(r.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function ky(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Wi(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function Sa(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}var Xy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Wy(s,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Gs(s):s,u;return i?(i=i.replace(/\/\/+/g,"/"),i.startsWith("/")?u=f_(i.substring(1),"/"):u=f_(i,e)):u=e,{pathname:u,search:jy(r),hash:Zy(l)}}function f_(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Ed(s,e,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function qy(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function gv(s){let e=qy(s);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function _v(s,e,i,r=!1){let l;typeof s=="string"?l=Gs(s):(l={...s},Qt(!l.pathname||!l.pathname.includes("?"),Ed("?","pathname","search",l)),Qt(!l.pathname||!l.pathname.includes("#"),Ed("#","pathname","hash",l)),Qt(!l.search||!l.search.includes("#"),Ed("#","search","hash",l)));let u=s===""||l.pathname==="",f=u?"/":l.pathname,h;if(f==null)h=i;else{let g=e.length-1;if(!r&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),g-=1;l.pathname=x.join("/")}h=g>=0?e[g]:"/"}let m=Wy(l,h),p=f&&f!=="/"&&f.endsWith("/"),_=(u||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||_)&&(m.pathname+="/"),m}var _a=s=>s.join("/").replace(/\/\/+/g,"/"),Yy=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),jy=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,Zy=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,Ky=class{constructor(s,e,i,r=!1){this.status=s,this.statusText=e||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function Qy(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function Jy(s){return s.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var vv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function xv(s,e){let i=s;if(typeof i!="string"||!Xy.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let r=i,l=!1;if(vv)try{let u=new URL(window.location.href),f=i.startsWith("//")?new URL(u.protocol+i):new URL(i),h=Sa(f.pathname,e);f.origin===u.origin&&h!=null?i=h+f.search+f.hash:l=!0}catch{Wi(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Sv=["POST","PUT","PATCH","DELETE"];new Set(Sv);var $y=["GET",...Sv];new Set($y);var Vs=j.createContext(null);Vs.displayName="DataRouter";var rc=j.createContext(null);rc.displayName="DataRouterState";var eM=j.createContext(!1),yv=j.createContext({isTransitioning:!1});yv.displayName="ViewTransition";var tM=j.createContext(new Map);tM.displayName="Fetchers";var nM=j.createContext(null);nM.displayName="Await";var Si=j.createContext(null);Si.displayName="Navigation";var il=j.createContext(null);il.displayName="Location";var Ta=j.createContext({outlet:null,matches:[],isDataRoute:!1});Ta.displayName="Route";var np=j.createContext(null);np.displayName="RouteError";var Mv="REACT_ROUTER_ERROR",iM="REDIRECT",aM="ROUTE_ERROR_RESPONSE";function rM(s){if(s.startsWith(`${Mv}:${iM}:{`))try{let e=JSON.parse(s.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function sM(s){if(s.startsWith(`${Mv}:${aM}:{`))try{let e=JSON.parse(s.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new Ky(e.status,e.statusText,e.data)}catch{}}function oM(s,{relative:e}={}){Qt(al(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=j.useContext(Si),{hash:l,pathname:u,search:f}=rl(s,{relative:e}),h=u;return i!=="/"&&(h=u==="/"?i:_a([i,u])),r.createHref({pathname:h,search:f,hash:l})}function al(){return j.useContext(il)!=null}function zr(){return Qt(al(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(il).location}var Ev="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function bv(s){j.useContext(Si).static||j.useLayoutEffect(s)}function ip(){let{isDataRoute:s}=j.useContext(Ta);return s?SM():lM()}function lM(){Qt(al(),"useNavigate() may be used only in the context of a <Router> component.");let s=j.useContext(Vs),{basename:e,navigator:i}=j.useContext(Si),{matches:r}=j.useContext(Ta),{pathname:l}=zr(),u=JSON.stringify(gv(r)),f=j.useRef(!1);return bv(()=>{f.current=!0}),j.useCallback((m,p={})=>{if(Wi(f.current,Ev),!f.current)return;if(typeof m=="number"){i.go(m);return}let _=_v(m,JSON.parse(u),l,p.relative==="path");s==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:_a([e,_.pathname])),(p.replace?i.replace:i.push)(_,p.state,p)},[e,i,u,l,s])}j.createContext(null);function rl(s,{relative:e}={}){let{matches:i}=j.useContext(Ta),{pathname:r}=zr(),l=JSON.stringify(gv(i));return j.useMemo(()=>_v(s,JSON.parse(l),r,e==="path"),[s,l,r,e])}function uM(s,e){return Tv(s,e)}function Tv(s,e,i,r,l){Qt(al(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=j.useContext(Si),{matches:f}=j.useContext(Ta),h=f[f.length-1],m=h?h.params:{},p=h?h.pathname:"/",_=h?h.pathnameBase:"/",g=h&&h.route;{let w=g&&g.path||"";Rv(p,!g||w.endsWith("*")||w.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${w}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${w}"> to <Route path="${w==="/"?"*":`${w}/*`}">.`)}let x=zr(),M;if(e){let w=typeof e=="string"?Gs(e):e;Qt(_==="/"||w.pathname?.startsWith(_),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${w.pathname}" was given in the \`location\` prop.`),M=w}else M=x;let b=M.pathname||"/",T=b;if(_!=="/"){let w=_.replace(/^\//,"").split("/");T="/"+b.replace(/^\//,"").split("/").slice(w.length).join("/")}let y=hv(s,{pathname:T});Wi(g||y!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),Wi(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=pM(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},m,w.params),pathname:_a([_,u.encodeLocation?u.encodeLocation(w.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?_:_a([_,u.encodeLocation?u.encodeLocation(w.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:w.pathnameBase])})),f,i,r,l);return e&&v?j.createElement(il.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},v):v}function cM(){let s=xM(),e=Qy(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:u},"ErrorBoundary")," or"," ",j.createElement("code",{style:u},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),i?j.createElement("pre",{style:l},i):null,f)}var fM=j.createElement(cM,null),Av=class extends j.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.onError?this.props.onError(s,e):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const i=sM(s.digest);i&&(s=i)}let e=s!==void 0?j.createElement(Ta.Provider,{value:this.props.routeContext},j.createElement(np.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?j.createElement(dM,{error:s},e):e}};Av.contextType=eM;var bd=new WeakMap;function dM({children:s,error:e}){let{basename:i}=j.useContext(Si);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=rM(e.digest);if(r){let l=bd.get(e);if(l)throw l;let u=xv(r.location,i);if(vv&&!bd.get(e))if(u.isExternal||r.reloadDocument)window.location.href=u.absoluteURL||u.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:r.replace}));throw bd.set(e,f),f}return j.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u.absoluteURL||u.to}`})}}return s}function hM({routeContext:s,match:e,children:i}){let r=j.useContext(Vs);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),j.createElement(Ta.Provider,{value:s},i)}function pM(s,e=[],i=null,r=null,l=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let u=s,f=i?.errors;if(f!=null){let _=u.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);Qt(_>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),u=u.slice(0,Math.min(u.length,_+1))}let h=!1,m=-1;if(i)for(let _=0;_<u.length;_++){let g=u[_];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=_),g.route.id){let{loaderData:x,errors:M}=i,b=g.route.loader&&!x.hasOwnProperty(g.route.id)&&(!M||M[g.route.id]===void 0);if(g.route.lazy||b){h=!0,m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}let p=i&&r?(_,g)=>{r(_,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:Jy(i.matches),errorInfo:g})}:void 0;return u.reduceRight((_,g,x)=>{let M,b=!1,T=null,y=null;i&&(M=f&&g.route.id?f[g.route.id]:void 0,T=g.route.errorElement||fM,h&&(m<0&&x===0?(Rv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,y=null):m===x&&(b=!0,y=g.route.hydrateFallbackElement||null)));let v=e.concat(u.slice(0,x+1)),w=()=>{let D;return M?D=T:b?D=y:g.route.Component?D=j.createElement(g.route.Component,null):g.route.element?D=g.route.element:D=_,j.createElement(hM,{match:g,routeContext:{outlet:_,matches:v,isDataRoute:i!=null},children:D})};return i&&(g.route.ErrorBoundary||g.route.errorElement||x===0)?j.createElement(Av,{location:i.location,revalidation:i.revalidation,component:T,error:M,children:w(),routeContext:{outlet:null,matches:v,isDataRoute:!0},onError:p}):w()},null)}function ap(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function mM(s){let e=j.useContext(Vs);return Qt(e,ap(s)),e}function gM(s){let e=j.useContext(rc);return Qt(e,ap(s)),e}function _M(s){let e=j.useContext(Ta);return Qt(e,ap(s)),e}function rp(s){let e=_M(s),i=e.matches[e.matches.length-1];return Qt(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function vM(){return rp("useRouteId")}function xM(){let s=j.useContext(np),e=gM("useRouteError"),i=rp("useRouteError");return s!==void 0?s:e.errors?.[i]}function SM(){let{router:s}=mM("useNavigate"),e=rp("useNavigate"),i=j.useRef(!1);return bv(()=>{i.current=!0}),j.useCallback(async(l,u={})=>{Wi(i.current,Ev),i.current&&(typeof l=="number"?await s.navigate(l):await s.navigate(l,{fromRouteId:e,...u}))},[s,e])}var d_={};function Rv(s,e,i){!e&&!d_[s]&&(d_[s]=!0,Wi(!1,i))}j.memo(yM);function yM({routes:s,future:e,state:i,onError:r}){return Tv(s,void 0,i,r,e)}function Wu(s){Qt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function MM({basename:s="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:u=!1,unstable_useTransitions:f}){Qt(!al(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=s.replace(/^\/*/,"/"),m=j.useMemo(()=>({basename:h,navigator:l,static:u,unstable_useTransitions:f,future:{}}),[h,l,u,f]);typeof i=="string"&&(i=Gs(i));let{pathname:p="/",search:_="",hash:g="",state:x=null,key:M="default"}=i,b=j.useMemo(()=>{let T=Sa(p,h);return T==null?null:{location:{pathname:T,search:_,hash:g,state:x,key:M},navigationType:r}},[h,p,_,g,x,M,r]);return Wi(b!=null,`<Router basename="${h}"> is not able to match the URL "${p}${_}${g}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:j.createElement(Si.Provider,{value:m},j.createElement(il.Provider,{children:e,value:b}))}function EM({children:s,location:e}){return uM(rh(s),e)}function rh(s,e=[]){let i=[];return j.Children.forEach(s,(r,l)=>{if(!j.isValidElement(r))return;let u=[...e,l];if(r.type===j.Fragment){i.push.apply(i,rh(r.props.children,u));return}Qt(r.type===Wu,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=rh(r.props.children,u)),i.push(f)}),i}var qu="get",Yu="application/x-www-form-urlencoded";function sc(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function bM(s){return sc(s)&&s.tagName.toLowerCase()==="button"}function TM(s){return sc(s)&&s.tagName.toLowerCase()==="form"}function AM(s){return sc(s)&&s.tagName.toLowerCase()==="input"}function RM(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function CM(s,e){return s.button===0&&(!e||e==="_self")&&!RM(s)}var Mu=null;function wM(){if(Mu===null)try{new FormData(document.createElement("form"),0),Mu=!1}catch{Mu=!0}return Mu}var DM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Td(s){return s!=null&&!DM.has(s)?(Wi(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Yu}"`),null):s}function UM(s,e){let i,r,l,u,f;if(TM(s)){let h=s.getAttribute("action");r=h?Sa(h,e):null,i=s.getAttribute("method")||qu,l=Td(s.getAttribute("enctype"))||Yu,u=new FormData(s)}else if(bM(s)||AM(s)&&(s.type==="submit"||s.type==="image")){let h=s.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||h.getAttribute("action");if(r=m?Sa(m,e):null,i=s.getAttribute("formmethod")||h.getAttribute("method")||qu,l=Td(s.getAttribute("formenctype"))||Td(h.getAttribute("enctype"))||Yu,u=new FormData(h,s),!wM()){let{name:p,type:_,value:g}=s;if(_==="image"){let x=p?`${p}.`:"";u.append(`${x}x`,"0"),u.append(`${x}y`,"0")}else p&&u.append(p,g)}}else{if(sc(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=qu,r=null,l=Yu,f=s}return u&&l==="text/plain"&&(f=u,u=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:u,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function sp(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function LM(s,e,i,r){let l=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${r}`:l.pathname=`${l.pathname}.${r}`:l.pathname==="/"?l.pathname=`_root.${r}`:e&&Sa(l.pathname,e)==="/"?l.pathname=`${e.replace(/\/$/,"")}/_root.${r}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${r}`,l}async function NM(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function OM(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function PM(s,e,i){let r=await Promise.all(s.map(async l=>{let u=e.routes[l.route.id];if(u){let f=await NM(u,i);return f.links?f.links():[]}return[]}));return BM(r.flat(1).filter(OM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function h_(s,e,i,r,l,u){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,h=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return u==="assets"?e.filter((m,p)=>f(m,p)||h(m,p)):u==="data"?e.filter((m,p)=>{let _=r.routes[m.route.id];if(!_||!_.hasLoader)return!1;if(f(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function zM(s,e,{includeHydrateFallback:i}={}){return IM(s.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function IM(s){return[...new Set(s)]}function FM(s){let e={},i=Object.keys(s).sort();for(let r of i)e[r]=s[r];return e}function BM(s,e){let i=new Set;return new Set(e),s.reduce((r,l)=>{let u=JSON.stringify(FM(l));return i.has(u)||(i.add(u),r.push({key:u,link:l})),r},[])}function Cv(){let s=j.useContext(Vs);return sp(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function HM(){let s=j.useContext(rc);return sp(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var op=j.createContext(void 0);op.displayName="FrameworkContext";function wv(){let s=j.useContext(op);return sp(s,"You must render this element inside a <HydratedRouter> element"),s}function GM(s,e){let i=j.useContext(op),[r,l]=j.useState(!1),[u,f]=j.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:_,onTouchStart:g}=e,x=j.useRef(null);j.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let T=v=>{v.forEach(w=>{f(w.isIntersecting)})},y=new IntersectionObserver(T,{threshold:.5});return x.current&&y.observe(x.current),()=>{y.disconnect()}}},[s]),j.useEffect(()=>{if(r){let T=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(T)}}},[r]);let M=()=>{l(!0)},b=()=>{l(!1),f(!1)};return i?s!=="intent"?[u,x,{}]:[u,x,{onFocus:Ho(h,M),onBlur:Ho(m,b),onMouseEnter:Ho(p,M),onMouseLeave:Ho(_,b),onTouchStart:Ho(g,M)}]:[!1,x,{}]}function Ho(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function VM({page:s,...e}){let{router:i}=Cv(),r=j.useMemo(()=>hv(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?j.createElement(XM,{page:s,matches:r,...e}):null}function kM(s){let{manifest:e,routeModules:i}=wv(),[r,l]=j.useState([]);return j.useEffect(()=>{let u=!1;return PM(s,e,i).then(f=>{u||l(f)}),()=>{u=!0}},[s,e,i]),r}function XM({page:s,matches:e,...i}){let r=zr(),{future:l,manifest:u,routeModules:f}=wv(),{basename:h}=Cv(),{loaderData:m,matches:p}=HM(),_=j.useMemo(()=>h_(s,e,p,u,r,"data"),[s,e,p,u,r]),g=j.useMemo(()=>h_(s,e,p,u,r,"assets"),[s,e,p,u,r]),x=j.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let T=new Set,y=!1;if(e.forEach(w=>{let D=u.routes[w.route.id];!D||!D.hasLoader||(!_.some(O=>O.route.id===w.route.id)&&w.route.id in m&&f[w.route.id]?.shouldRevalidate||D.hasClientLoader?y=!0:T.add(w.route.id))}),T.size===0)return[];let v=LM(s,h,l.unstable_trailingSlashAwareDataRequests,"data");return y&&T.size>0&&v.searchParams.set("_routes",e.filter(w=>T.has(w.route.id)).map(w=>w.route.id).join(",")),[v.pathname+v.search]},[h,l.unstable_trailingSlashAwareDataRequests,m,r,u,_,e,s,f]),M=j.useMemo(()=>zM(g,u),[g,u]),b=kM(g);return j.createElement(j.Fragment,null,x.map(T=>j.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...i})),M.map(T=>j.createElement("link",{key:T,rel:"modulepreload",href:T,...i})),b.map(({key:T,link:y})=>j.createElement("link",{key:T,nonce:i.nonce,...y,crossOrigin:y.crossOrigin??i.crossOrigin})))}function WM(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var qM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{qM&&(window.__reactRouterVersion="7.13.0")}catch{}function YM({basename:s,children:e,unstable_useTransitions:i,window:r}){let l=j.useRef();l.current==null&&(l.current=Ry({window:r,v5Compat:!0}));let u=l.current,[f,h]=j.useState({action:u.action,location:u.location}),m=j.useCallback(p=>{i===!1?h(p):j.startTransition(()=>h(p))},[i]);return j.useLayoutEffect(()=>u.listen(m),[u,m]),j.createElement(MM,{basename:s,children:e,location:f.location,navigationType:f.action,navigator:u,unstable_useTransitions:i})}var Dv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qo=j.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:u,replace:f,state:h,target:m,to:p,preventScrollReset:_,viewTransition:g,unstable_defaultShouldRevalidate:x,...M},b){let{basename:T,unstable_useTransitions:y}=j.useContext(Si),v=typeof p=="string"&&Dv.test(p),w=xv(p,T);p=w.to;let D=oM(p,{relative:l}),[O,P,F]=GM(r,M),I=QM(p,{replace:f,state:h,target:m,preventScrollReset:_,relative:l,viewTransition:g,unstable_defaultShouldRevalidate:x,unstable_useTransitions:y});function K(L){e&&e(L),L.defaultPrevented||I(L)}let C=j.createElement("a",{...M,...F,href:w.absoluteURL||D,onClick:w.isExternal||u?e:K,ref:WM(b,P),target:m,"data-discover":!v&&i==="render"?"true":void 0});return O&&!v?j.createElement(j.Fragment,null,C,j.createElement(VM,{page:D})):C});Qo.displayName="Link";var jM=j.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:u,to:f,viewTransition:h,children:m,...p},_){let g=rl(f,{relative:p.relative}),x=zr(),M=j.useContext(rc),{navigator:b,basename:T}=j.useContext(Si),y=M!=null&&nE(g)&&h===!0,v=b.encodeLocation?b.encodeLocation(g).pathname:g.pathname,w=x.pathname,D=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(w=w.toLowerCase(),D=D?D.toLowerCase():null,v=v.toLowerCase()),D&&T&&(D=Sa(D,T)||D);const O=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let P=w===v||!l&&w.startsWith(v)&&w.charAt(O)==="/",F=D!=null&&(D===v||!l&&D.startsWith(v)&&D.charAt(v.length)==="/"),I={isActive:P,isPending:F,isTransitioning:y},K=P?e:void 0,C;typeof r=="function"?C=r(I):C=[r,P?"active":null,F?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let L=typeof u=="function"?u(I):u;return j.createElement(Qo,{...p,"aria-current":K,className:C,ref:_,style:L,to:f,viewTransition:h},typeof m=="function"?m(I):m)});jM.displayName="NavLink";var ZM=j.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:u,method:f=qu,action:h,onSubmit:m,relative:p,preventScrollReset:_,viewTransition:g,unstable_defaultShouldRevalidate:x,...M},b)=>{let{unstable_useTransitions:T}=j.useContext(Si),y=eE(),v=tE(h,{relative:p}),w=f.toLowerCase()==="get"?"get":"post",D=typeof h=="string"&&Dv.test(h),O=P=>{if(m&&m(P),P.defaultPrevented)return;P.preventDefault();let F=P.nativeEvent.submitter,I=F?.getAttribute("formmethod")||f,K=()=>y(F||P.currentTarget,{fetcherKey:e,method:I,navigate:i,replace:l,state:u,relative:p,preventScrollReset:_,viewTransition:g,unstable_defaultShouldRevalidate:x});T&&i!==!1?j.startTransition(()=>K()):K()};return j.createElement("form",{ref:b,method:w,action:v,onSubmit:r?m:O,...M,"data-discover":!D&&s==="render"?"true":void 0})});ZM.displayName="Form";function KM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Uv(s){let e=j.useContext(Vs);return Qt(e,KM(s)),e}function QM(s,{target:e,replace:i,state:r,preventScrollReset:l,relative:u,viewTransition:f,unstable_defaultShouldRevalidate:h,unstable_useTransitions:m}={}){let p=ip(),_=zr(),g=rl(s,{relative:u});return j.useCallback(x=>{if(CM(x,e)){x.preventDefault();let M=i!==void 0?i:Jo(_)===Jo(g),b=()=>p(s,{replace:M,state:r,preventScrollReset:l,relative:u,viewTransition:f,unstable_defaultShouldRevalidate:h});m?j.startTransition(()=>b()):b()}},[_,p,g,i,r,e,s,l,u,f,h,m])}var JM=0,$M=()=>`__${String(++JM)}__`;function eE(){let{router:s}=Uv("useSubmit"),{basename:e}=j.useContext(Si),i=vM(),r=s.fetch,l=s.navigate;return j.useCallback(async(u,f={})=>{let{action:h,method:m,encType:p,formData:_,body:g}=UM(u,e);if(f.navigate===!1){let x=f.fetcherKey||$M();await r(x,i,f.action||h,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:_,body:g,formMethod:f.method||m,formEncType:f.encType||p,flushSync:f.flushSync})}else await l(f.action||h,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:_,body:g,formMethod:f.method||m,formEncType:f.encType||p,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[r,l,e,i])}function tE(s,{relative:e}={}){let{basename:i}=j.useContext(Si),r=j.useContext(Ta);Qt(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),u={...rl(s||".",{relative:e})},f=zr();if(s==null){u.search=f.search;let h=new URLSearchParams(u.search),m=h.getAll("index");if(m.some(_=>_==="")){h.delete("index"),m.filter(g=>g).forEach(g=>h.append("index",g));let _=h.toString();u.search=_?`?${_}`:""}}return(!s||s===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:_a([i,u.pathname])),Jo(u)}function nE(s,{relative:e}={}){let i=j.useContext(yv);Qt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Uv("useViewTransitionState"),l=rl(s,{relative:e});if(!i.isTransitioning)return!1;let u=Sa(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=Sa(i.nextLocation.pathname,r)||i.nextLocation.pathname;return ec(l.pathname,f)!=null||ec(l.pathname,u)!=null}const Lv=j.createContext(),oc=()=>j.useContext(Lv),iE=({children:s})=>{const[e,i]=j.useState(()=>{const _=localStorage.getItem("blobSettings"),g=_?JSON.parse(_):{};return{colorDeep:g.colorDeep||"#001433",colorMid:g.colorMid||"#0084ff",colorBright:g.colorBright||"#00ffe1",size:g.size||1,position:g.position||{x:50,y:50},controls:g.controls||{mic:!0,location:!0,speaker:!0}}}),[r,l]=j.useState(!1);j.useEffect(()=>{localStorage.setItem("blobSettings",JSON.stringify(e))},[e]);const u=(_,g)=>{i(x=>({...x,[_]:g}))},f=_=>{i(g=>({...g,size:parseFloat(_)}))},h=(_,g)=>{i(x=>({...x,position:{x:_,y:g}}))},m=_=>{i(g=>{const x=g.controls||{mic:!0,location:!0,speaker:!0};return{...g,controls:{...x,[_]:!x[_]}}})},p=()=>{i({colorDeep:"#001433",colorMid:"#0084ff",colorBright:"#00ffe1",size:1,size:1,position:{x:50,y:50},controls:{mic:!0,location:!0,speaker:!0}})};return Ae.jsx(Lv.Provider,{value:{settings:e,updateColor:u,updateSize:f,updatePosition:h,toggleControl:m,resetSettings:p,isEditMode:r,setIsEditMode:l},children:s})};const lp="182",aE=0,p_=1,rE=2,ju=1,sE=2,jo=3,ya=0,In=1,Hi=2,va=0,Os=1,Ns=2,m_=3,g_=4,oE=5,Ur=100,lE=101,uE=102,cE=103,fE=104,dE=200,hE=201,pE=202,mE=203,sh=204,oh=205,gE=206,_E=207,vE=208,xE=209,SE=210,yE=211,ME=212,EE=213,bE=214,lh=0,uh=1,ch=2,zs=3,fh=4,dh=5,hh=6,ph=7,Nv=0,TE=1,AE=2,ki=0,Ov=1,Pv=2,zv=3,up=4,Iv=5,Fv=6,Bv=7,Hv=300,Pr=301,Is=302,mh=303,gh=304,lc=306,_h=1e3,ga=1001,vh=1002,wn=1003,RE=1004,Eu=1005,On=1006,Ad=1007,Nr=1008,ai=1009,Gv=1010,Vv=1011,$o=1012,cp=1013,qi=1014,Gi=1015,Ma=1016,fp=1017,dp=1018,el=1020,kv=35902,Xv=35899,Wv=1021,qv=1022,Li=1023,Ea=1026,Or=1027,Yv=1028,hp=1029,Fs=1030,pp=1031,mp=1033,Zu=33776,Ku=33777,Qu=33778,Ju=33779,xh=35840,Sh=35841,yh=35842,Mh=35843,Eh=36196,bh=37492,Th=37496,Ah=37488,Rh=37489,Ch=37490,wh=37491,Dh=37808,Uh=37809,Lh=37810,Nh=37811,Oh=37812,Ph=37813,zh=37814,Ih=37815,Fh=37816,Bh=37817,Hh=37818,Gh=37819,Vh=37820,kh=37821,Xh=36492,Wh=36494,qh=36495,Yh=36283,jh=36284,Zh=36285,Kh=36286,CE=3200,wE=0,DE=1,ar="",gi="srgb",Bs="srgb-linear",tc="linear",Ht="srgb",xs=7680,__=519,UE=512,LE=513,NE=514,gp=515,OE=516,PE=517,_p=518,zE=519,v_=35044,x_="300 es",Vi=2e3,nc=2001;function jv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ic(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function IE(){const s=ic("canvas");return s.style.display="block",s}const S_={};function y_(...s){const e="THREE."+s.shift();console.log(e,...s)}function st(...s){const e="THREE."+s.shift();console.warn(e,...s)}function Ct(...s){const e="THREE."+s.shift();console.error(e,...s)}function tl(...s){const e=s.join(" ");e in S_||(S_[e]=!0,st(...s))}function FE(s,e,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}class ks{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,f=l.length;u<f;u++)l[u].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rd=Math.PI/180,Qh=180/Math.PI;function sl(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function Mt(s,e,i){return Math.max(e,Math.min(i,s))}function BE(s,e){return(s%e+e)%e}function Cd(s,e,i){return(1-i)*s+i*e}function Go(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function qn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Pt{constructor(e=0,i=0){Pt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*l+e.x,this.y=u*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ol{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,f,h){let m=r[l+0],p=r[l+1],_=r[l+2],g=r[l+3],x=u[f+0],M=u[f+1],b=u[f+2],T=u[f+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=_,e[i+3]=g;return}if(h>=1){e[i+0]=x,e[i+1]=M,e[i+2]=b,e[i+3]=T;return}if(g!==T||m!==x||p!==M||_!==b){let y=m*x+p*M+_*b+g*T;y<0&&(x=-x,M=-M,b=-b,T=-T,y=-y);let v=1-h;if(y<.9995){const w=Math.acos(y),D=Math.sin(w);v=Math.sin(v*w)/D,h=Math.sin(h*w)/D,m=m*v+x*h,p=p*v+M*h,_=_*v+b*h,g=g*v+T*h}else{m=m*v+x*h,p=p*v+M*h,_=_*v+b*h,g=g*v+T*h;const w=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=w,p*=w,_*=w,g*=w}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=g}static multiplyQuaternionsFlat(e,i,r,l,u,f){const h=r[l],m=r[l+1],p=r[l+2],_=r[l+3],g=u[f],x=u[f+1],M=u[f+2],b=u[f+3];return e[i]=h*b+_*g+m*M-p*x,e[i+1]=m*b+_*x+p*g-h*M,e[i+2]=p*b+_*M+h*x-m*g,e[i+3]=_*b-h*g-m*x-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(r/2),_=h(l/2),g=h(u/2),x=m(r/2),M=m(l/2),b=m(u/2);switch(f){case"XYZ":this._x=x*_*g+p*M*b,this._y=p*M*g-x*_*b,this._z=p*_*b+x*M*g,this._w=p*_*g-x*M*b;break;case"YXZ":this._x=x*_*g+p*M*b,this._y=p*M*g-x*_*b,this._z=p*_*b-x*M*g,this._w=p*_*g+x*M*b;break;case"ZXY":this._x=x*_*g-p*M*b,this._y=p*M*g+x*_*b,this._z=p*_*b+x*M*g,this._w=p*_*g-x*M*b;break;case"ZYX":this._x=x*_*g-p*M*b,this._y=p*M*g+x*_*b,this._z=p*_*b-x*M*g,this._w=p*_*g+x*M*b;break;case"YZX":this._x=x*_*g+p*M*b,this._y=p*M*g+x*_*b,this._z=p*_*b-x*M*g,this._w=p*_*g-x*M*b;break;case"XZY":this._x=x*_*g-p*M*b,this._y=p*M*g-x*_*b,this._z=p*_*b+x*M*g,this._w=p*_*g+x*M*b;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],f=i[1],h=i[5],m=i[9],p=i[2],_=i[6],g=i[10],x=r+h+g;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(_-m)*M,this._y=(u-p)*M,this._z=(f-l)*M}else if(r>h&&r>g){const M=2*Math.sqrt(1+r-h-g);this._w=(_-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(u+p)/M}else if(h>g){const M=2*Math.sqrt(1+h-r-g);this._w=(u-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+g-r-h);this._w=(f-l)/M,this._x=(u+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,f=e._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+f*h+l*p-u*m,this._y=l*_+f*m+u*h-r*p,this._z=u*_+f*p+r*m-l*h,this._w=f*_-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,u=e._z,f=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,u=-u,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class le{constructor(e=0,i=0,r=0){le.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(M_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(M_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,f=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*f,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*f,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*f,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*r),_=2*(h*i-u*l),g=2*(u*r-f*i);return this.x=i+m*p+f*g-h*_,this.y=r+m*_+h*p-u*g,this.z=l+m*g+u*_-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this.z=Mt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this.z=Mt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*f-r*m,this.z=r*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return wd.copy(this).projectOnVector(e),this.sub(wd)}reflect(e){return this.sub(wd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wd=new le,M_=new ol;class ft{constructor(e,i,r,l,u,f,h,m,p){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,f,h,m,p)}set(e,i,r,l,u,f,h,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=h,_[3]=i,_[4]=u,_[5]=m,_[6]=r,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,f=r[0],h=r[3],m=r[6],p=r[1],_=r[4],g=r[7],x=r[2],M=r[5],b=r[8],T=l[0],y=l[3],v=l[6],w=l[1],D=l[4],O=l[7],P=l[2],F=l[5],I=l[8];return u[0]=f*T+h*w+m*P,u[3]=f*y+h*D+m*F,u[6]=f*v+h*O+m*I,u[1]=p*T+_*w+g*P,u[4]=p*y+_*D+g*F,u[7]=p*v+_*O+g*I,u[2]=x*T+M*w+b*P,u[5]=x*y+M*D+b*F,u[8]=x*v+M*O+b*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8];return i*f*_-i*h*p-r*u*_+r*h*m+l*u*p-l*f*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8],g=_*f-h*p,x=h*m-_*u,M=p*u-f*m,b=i*g+r*x+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=g*T,e[1]=(l*p-_*r)*T,e[2]=(h*r-l*f)*T,e[3]=x*T,e[4]=(_*i-l*m)*T,e[5]=(l*u-h*i)*T,e[6]=M*T,e[7]=(r*m-p*i)*T,e[8]=(f*i-r*u)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,f,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Dd.makeScale(e,i)),this}rotate(e){return this.premultiply(Dd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Dd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Dd=new ft,E_=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),b_=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function HE(){const s={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(l,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===Ht&&(l.r=xa(l.r),l.g=xa(l.g),l.b=xa(l.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ht&&(l.r=Ps(l.r),l.g=Ps(l.g),l.b=Ps(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ar?tc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,f){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return tl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return tl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Bs]:{primaries:e,whitePoint:r,transfer:tc,toXYZ:E_,fromXYZ:b_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:e,whitePoint:r,transfer:Ht,toXYZ:E_,fromXYZ:b_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),s}const Tt=HE();function xa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ps(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ss;class GE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ss===void 0&&(Ss=ic("canvas")),Ss.width=e.width,Ss.height=e.height;const l=Ss.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Ss}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=ic("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let f=0;f<u.length;f++)u[f]=xa(u[f]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(xa(i[r]/255)*255):i[r]=xa(i[r]);return{data:i,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let VE=0;class vp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:VE++}),this.uuid=sl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?u.push(Ud(l[f].image)):u.push(Ud(l[f]))}else u=Ud(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Ud(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?GE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let kE=0;const Ld=new le;class Fn extends ks{constructor(e=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,r=ga,l=ga,u=On,f=Nr,h=Li,m=ai,p=Fn.DEFAULT_ANISOTROPY,_=ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kE++}),this.uuid=sl(),this.name="",this.source=new vp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ld).x}get height(){return this.source.getSize(Ld).y}get depth(){return this.source.getSize(Ld).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){st(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){st(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _h:e.x=e.x-Math.floor(e.x);break;case ga:e.x=e.x<0?0:1;break;case vh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _h:e.y=e.y-Math.floor(e.y);break;case ga:e.y=e.y<0?0:1;break;case vh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=Hv;Fn.DEFAULT_ANISOTROPY=1;class an{constructor(e=0,i=0,r=0,l=1){an.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*u,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*u,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*u,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],_=m[4],g=m[8],x=m[1],M=m[5],b=m[9],T=m[2],y=m[6],v=m[10];if(Math.abs(_-x)<.01&&Math.abs(g-T)<.01&&Math.abs(b-y)<.01){if(Math.abs(_+x)<.1&&Math.abs(g+T)<.1&&Math.abs(b+y)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(p+1)/2,O=(M+1)/2,P=(v+1)/2,F=(_+x)/4,I=(g+T)/4,K=(b+y)/4;return D>O&&D>P?D<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(D),l=F/r,u=I/r):O>P?O<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(O),r=F/l,u=K/l):P<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(P),r=I/u,l=K/u),this.set(r,l,u,i),this}let w=Math.sqrt((y-b)*(y-b)+(g-T)*(g-T)+(x-_)*(x-_));return Math.abs(w)<.001&&(w=1),this.x=(y-b)/w,this.y=(g-T)/w,this.z=(x-_)/w,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this.z=Mt(this.z,e.z,i.z),this.w=Mt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this.z=Mt(this.z,e,i),this.w=Mt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class XE extends ks{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new an(0,0,e,i),this.scissorTest=!1,this.viewport=new an(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new Fn(l);this.textures=[];const f=r.count;for(let h=0;h<f;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new vp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends XE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Zv extends Fn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class WE extends Fn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ll{constructor(e=new le(1/0,1/0,1/0),i=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ci.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ci.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ci.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=u.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,Ci):Ci.fromBufferAttribute(u,f),Ci.applyMatrix4(e.matrixWorld),this.expandByPoint(Ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),bu.copy(r.boundingBox)),bu.applyMatrix4(e.matrixWorld),this.union(bu)}const l=e.children;for(let u=0,f=l.length;u<f;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vo),Tu.subVectors(this.max,Vo),ys.subVectors(e.a,Vo),Ms.subVectors(e.b,Vo),Es.subVectors(e.c,Vo),Ja.subVectors(Ms,ys),$a.subVectors(Es,Ms),br.subVectors(ys,Es);let i=[0,-Ja.z,Ja.y,0,-$a.z,$a.y,0,-br.z,br.y,Ja.z,0,-Ja.x,$a.z,0,-$a.x,br.z,0,-br.x,-Ja.y,Ja.x,0,-$a.y,$a.x,0,-br.y,br.x,0];return!Nd(i,ys,Ms,Es,Tu)||(i=[1,0,0,0,1,0,0,0,1],!Nd(i,ys,Ms,Es,Tu))?!1:(Au.crossVectors(Ja,$a),i=[Au.x,Au.y,Au.z],Nd(i,ys,Ms,Es,Tu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const fa=[new le,new le,new le,new le,new le,new le,new le,new le],Ci=new le,bu=new ll,ys=new le,Ms=new le,Es=new le,Ja=new le,$a=new le,br=new le,Vo=new le,Tu=new le,Au=new le,Tr=new le;function Nd(s,e,i,r,l){for(let u=0,f=s.length-3;u<=f;u+=3){Tr.fromArray(s,u);const h=l.x*Math.abs(Tr.x)+l.y*Math.abs(Tr.y)+l.z*Math.abs(Tr.z),m=e.dot(Tr),p=i.dot(Tr),_=r.dot(Tr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const qE=new ll,ko=new le,Od=new le;class uc{constructor(e=new le,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):qE.setFromPoints(e).getCenter(r);let l=0;for(let u=0,f=e.length;u<f;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ko.subVectors(e,this.center);const i=ko.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(ko,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Od.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ko.copy(e.center).add(Od)),this.expandByPoint(ko.copy(e.center).sub(Od))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const da=new le,Pd=new le,Ru=new le,er=new le,zd=new le,Cu=new le,Id=new le;class Kv{constructor(e=new le,i=new le(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,da)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=da.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(da.copy(this.origin).addScaledVector(this.direction,i),da.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Pd.copy(e).add(i).multiplyScalar(.5),Ru.copy(i).sub(e).normalize(),er.copy(this.origin).sub(Pd);const u=e.distanceTo(i)*.5,f=-this.direction.dot(Ru),h=er.dot(this.direction),m=-er.dot(Ru),p=er.lengthSq(),_=Math.abs(1-f*f);let g,x,M,b;if(_>0)if(g=f*m-h,x=f*h-m,b=u*_,g>=0)if(x>=-b)if(x<=b){const T=1/_;g*=T,x*=T,M=g*(g+f*x+2*h)+x*(f*g+x+2*m)+p}else x=u,g=Math.max(0,-(f*x+h)),M=-g*g+x*(x+2*m)+p;else x=-u,g=Math.max(0,-(f*x+h)),M=-g*g+x*(x+2*m)+p;else x<=-b?(g=Math.max(0,-(-f*u+h)),x=g>0?-u:Math.min(Math.max(-u,-m),u),M=-g*g+x*(x+2*m)+p):x<=b?(g=0,x=Math.min(Math.max(-u,-m),u),M=x*(x+2*m)+p):(g=Math.max(0,-(f*u+h)),x=g>0?u:Math.min(Math.max(-u,-m),u),M=-g*g+x*(x+2*m)+p);else x=f>0?-u:u,g=Math.max(0,-(f*x+h)),M=-g*g+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Pd).addScaledVector(Ru,x),M}intersectSphere(e,i){da.subVectors(e.center,this.origin);const r=da.dot(this.direction),l=da.dot(da)-r*r,u=e.radius*e.radius;if(l>u)return null;const f=Math.sqrt(u-l),h=r-f,m=r+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,f,h,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),_>=0?(u=(e.min.y-x.y)*_,f=(e.max.y-x.y)*_):(u=(e.max.y-x.y)*_,f=(e.min.y-x.y)*_),r>f||u>l||((u>r||isNaN(r))&&(r=u),(f<l||isNaN(l))&&(l=f),g>=0?(h=(e.min.z-x.z)*g,m=(e.max.z-x.z)*g):(h=(e.max.z-x.z)*g,m=(e.min.z-x.z)*g),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,da)!==null}intersectTriangle(e,i,r,l,u){zd.subVectors(i,e),Cu.subVectors(r,e),Id.crossVectors(zd,Cu);let f=this.direction.dot(Id),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;er.subVectors(this.origin,e);const m=h*this.direction.dot(Cu.crossVectors(er,Cu));if(m<0)return null;const p=h*this.direction.dot(zd.cross(er));if(p<0||m+p>f)return null;const _=-h*er.dot(Id);return _<0?null:this.at(_/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(e,i,r,l,u,f,h,m,p,_,g,x,M,b,T,y){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,f,h,m,p,_,g,x,M,b,T,y)}set(e,i,r,l,u,f,h,m,p,_,g,x,M,b,T,y){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=l,v[1]=u,v[5]=f,v[9]=h,v[13]=m,v[2]=p,v[6]=_,v[10]=g,v[14]=x,v[3]=M,v[7]=b,v[11]=T,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/bs.setFromMatrixColumn(e,0).length(),u=1/bs.setFromMatrixColumn(e,1).length(),f=1/bs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,f=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),g=Math.sin(u);if(e.order==="XYZ"){const x=f*_,M=f*g,b=h*_,T=h*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=M+b*p,i[5]=x-T*p,i[9]=-h*m,i[2]=T-x*p,i[6]=b+M*p,i[10]=f*m}else if(e.order==="YXZ"){const x=m*_,M=m*g,b=p*_,T=p*g;i[0]=x+T*h,i[4]=b*h-M,i[8]=f*p,i[1]=f*g,i[5]=f*_,i[9]=-h,i[2]=M*h-b,i[6]=T+x*h,i[10]=f*m}else if(e.order==="ZXY"){const x=m*_,M=m*g,b=p*_,T=p*g;i[0]=x-T*h,i[4]=-f*g,i[8]=b+M*h,i[1]=M+b*h,i[5]=f*_,i[9]=T-x*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(e.order==="ZYX"){const x=f*_,M=f*g,b=h*_,T=h*g;i[0]=m*_,i[4]=b*p-M,i[8]=x*p+T,i[1]=m*g,i[5]=T*p+x,i[9]=M*p-b,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(e.order==="YZX"){const x=f*m,M=f*p,b=h*m,T=h*p;i[0]=m*_,i[4]=T-x*g,i[8]=b*g+M,i[1]=g,i[5]=f*_,i[9]=-h*_,i[2]=-p*_,i[6]=M*g+b,i[10]=x-T*g}else if(e.order==="XZY"){const x=f*m,M=f*p,b=h*m,T=h*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=x*g+T,i[5]=f*_,i[9]=M*g-b,i[2]=b*g-M,i[6]=h*_,i[10]=T*g+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(YE,e,jE)}lookAt(e,i,r){const l=this.elements;return ti.subVectors(e,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),tr.crossVectors(r,ti),tr.lengthSq()===0&&(Math.abs(r.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),tr.crossVectors(r,ti)),tr.normalize(),wu.crossVectors(ti,tr),l[0]=tr.x,l[4]=wu.x,l[8]=ti.x,l[1]=tr.y,l[5]=wu.y,l[9]=ti.y,l[2]=tr.z,l[6]=wu.z,l[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,f=r[0],h=r[4],m=r[8],p=r[12],_=r[1],g=r[5],x=r[9],M=r[13],b=r[2],T=r[6],y=r[10],v=r[14],w=r[3],D=r[7],O=r[11],P=r[15],F=l[0],I=l[4],K=l[8],C=l[12],L=l[1],V=l[5],ae=l[9],ee=l[13],pe=l[2],ce=l[6],U=l[10],B=l[14],$=l[3],ne=l[7],fe=l[11],N=l[15];return u[0]=f*F+h*L+m*pe+p*$,u[4]=f*I+h*V+m*ce+p*ne,u[8]=f*K+h*ae+m*U+p*fe,u[12]=f*C+h*ee+m*B+p*N,u[1]=_*F+g*L+x*pe+M*$,u[5]=_*I+g*V+x*ce+M*ne,u[9]=_*K+g*ae+x*U+M*fe,u[13]=_*C+g*ee+x*B+M*N,u[2]=b*F+T*L+y*pe+v*$,u[6]=b*I+T*V+y*ce+v*ne,u[10]=b*K+T*ae+y*U+v*fe,u[14]=b*C+T*ee+y*B+v*N,u[3]=w*F+D*L+O*pe+P*$,u[7]=w*I+D*V+O*ce+P*ne,u[11]=w*K+D*ae+O*U+P*fe,u[15]=w*C+D*ee+O*B+P*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],f=e[1],h=e[5],m=e[9],p=e[13],_=e[2],g=e[6],x=e[10],M=e[14],b=e[3],T=e[7],y=e[11],v=e[15],w=m*M-p*x,D=h*M-p*g,O=h*x-m*g,P=f*M-p*_,F=f*x-m*_,I=f*g-h*_;return i*(T*w-y*D+v*O)-r*(b*w-y*P+v*F)+l*(b*D-T*P+v*I)-u*(b*O-T*F+y*I)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8],g=e[9],x=e[10],M=e[11],b=e[12],T=e[13],y=e[14],v=e[15],w=g*y*p-T*x*p+T*m*M-h*y*M-g*m*v+h*x*v,D=b*x*p-_*y*p-b*m*M+f*y*M+_*m*v-f*x*v,O=_*T*p-b*g*p+b*h*M-f*T*M-_*h*v+f*g*v,P=b*g*m-_*T*m-b*h*x+f*T*x+_*h*y-f*g*y,F=i*w+r*D+l*O+u*P;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/F;return e[0]=w*I,e[1]=(T*x*u-g*y*u-T*l*M+r*y*M+g*l*v-r*x*v)*I,e[2]=(h*y*u-T*m*u+T*l*p-r*y*p-h*l*v+r*m*v)*I,e[3]=(g*m*u-h*x*u-g*l*p+r*x*p+h*l*M-r*m*M)*I,e[4]=D*I,e[5]=(_*y*u-b*x*u+b*l*M-i*y*M-_*l*v+i*x*v)*I,e[6]=(b*m*u-f*y*u-b*l*p+i*y*p+f*l*v-i*m*v)*I,e[7]=(f*x*u-_*m*u+_*l*p-i*x*p-f*l*M+i*m*M)*I,e[8]=O*I,e[9]=(b*g*u-_*T*u-b*r*M+i*T*M+_*r*v-i*g*v)*I,e[10]=(f*T*u-b*h*u+b*r*p-i*T*p-f*r*v+i*h*v)*I,e[11]=(_*h*u-f*g*u-_*r*p+i*g*p+f*r*M-i*h*M)*I,e[12]=P*I,e[13]=(_*T*l-b*g*l+b*r*x-i*T*x-_*r*y+i*g*y)*I,e[14]=(b*h*l-f*T*l-b*r*m+i*T*m+f*r*y-i*h*y)*I,e[15]=(f*g*l-_*h*l+_*r*m-i*g*m-f*r*x+i*h*x)*I,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,f=e.x,h=e.y,m=e.z,p=u*f,_=u*h;return this.set(p*f+r,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+r,_*m-l*f,0,p*m-l*h,_*m+l*f,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,f){return this.set(1,r,u,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,f=i._y,h=i._z,m=i._w,p=u+u,_=f+f,g=h+h,x=u*p,M=u*_,b=u*g,T=f*_,y=f*g,v=h*g,w=m*p,D=m*_,O=m*g,P=r.x,F=r.y,I=r.z;return l[0]=(1-(T+v))*P,l[1]=(M+O)*P,l[2]=(b-D)*P,l[3]=0,l[4]=(M-O)*F,l[5]=(1-(x+v))*F,l[6]=(y+w)*F,l[7]=0,l[8]=(b+D)*I,l[9]=(y-w)*I,l[10]=(1-(x+T))*I,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return r.set(1,1,1),i.identity(),this;let u=bs.set(l[0],l[1],l[2]).length();const f=bs.set(l[4],l[5],l[6]).length(),h=bs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),wi.copy(this);const p=1/u,_=1/f,g=1/h;return wi.elements[0]*=p,wi.elements[1]*=p,wi.elements[2]*=p,wi.elements[4]*=_,wi.elements[5]*=_,wi.elements[6]*=_,wi.elements[8]*=g,wi.elements[9]*=g,wi.elements[10]*=g,i.setFromRotationMatrix(wi),r.x=u,r.y=f,r.z=h,this}makePerspective(e,i,r,l,u,f,h=Vi,m=!1){const p=this.elements,_=2*u/(i-e),g=2*u/(r-l),x=(i+e)/(i-e),M=(r+l)/(r-l);let b,T;if(m)b=u/(f-u),T=f*u/(f-u);else if(h===Vi)b=-(f+u)/(f-u),T=-2*f*u/(f-u);else if(h===nc)b=-f/(f-u),T=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,f,h=Vi,m=!1){const p=this.elements,_=2/(i-e),g=2/(r-l),x=-(i+e)/(i-e),M=-(r+l)/(r-l);let b,T;if(m)b=1/(f-u),T=f/(f-u);else if(h===Vi)b=-2/(f-u),T=-(f+u)/(f-u);else if(h===nc)b=-1/(f-u),T=-u/(f-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=g,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const bs=new le,wi=new Jt,YE=new le(0,0,0),jE=new le(1,1,1),tr=new le,wu=new le,ti=new le,T_=new Jt,A_=new ol;class ba{constructor(e=0,i=0,r=0,l=ba.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],f=l[4],h=l[8],m=l[1],p=l[5],_=l[9],g=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Mt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-_,M),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return T_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(T_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return A_.setFromEuler(this),this.setFromQuaternion(A_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ba.DEFAULT_ORDER="XYZ";class Qv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ZE=0;const R_=new le,Ts=new ol,ha=new Jt,Du=new le,Xo=new le,KE=new le,QE=new ol,C_=new le(1,0,0),w_=new le(0,1,0),D_=new le(0,0,1),U_={type:"added"},JE={type:"removed"},As={type:"childadded",child:null},Fd={type:"childremoved",child:null};class Bn extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ZE++}),this.uuid=sl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const e=new le,i=new ba,r=new ol,l=new le(1,1,1);function u(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Jt},normalMatrix:{value:new ft}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ts.setFromAxisAngle(e,i),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,i){return Ts.setFromAxisAngle(e,i),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(C_,e)}rotateY(e){return this.rotateOnAxis(w_,e)}rotateZ(e){return this.rotateOnAxis(D_,e)}translateOnAxis(e,i){return R_.copy(e).applyQuaternion(this.quaternion),this.position.add(R_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(C_,e)}translateY(e){return this.translateOnAxis(w_,e)}translateZ(e){return this.translateOnAxis(D_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ha.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Du.copy(e):Du.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ha.lookAt(Xo,Du,this.up):ha.lookAt(Du,Xo,this.up),this.quaternion.setFromRotationMatrix(ha),l&&(ha.extractRotation(l.matrixWorld),Ts.setFromRotationMatrix(ha),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(U_),As.child=e,this.dispatchEvent(As),As.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(JE),Fd.child=e,this.dispatchEvent(Fd),Fd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ha.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ha.multiply(e.parent.matrixWorld)),e.applyMatrix4(ha),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(U_),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,e,KE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,QE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];u(e.shapes,g)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(e.materials,this.material[m]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(e.animations,m))}}if(i){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),_=f(e.images),g=f(e.shapes),x=f(e.skeletons),M=f(e.animations),b=f(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=l,r;function f(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Bn.DEFAULT_UP=new le(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Di=new le,pa=new le,Bd=new le,ma=new le,Rs=new le,Cs=new le,L_=new le,Hd=new le,Gd=new le,Vd=new le,kd=new an,Xd=new an,Wd=new an;class Ui{constructor(e=new le,i=new le,r=new le){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Di.subVectors(e,i),l.cross(Di);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){Di.subVectors(l,i),pa.subVectors(r,i),Bd.subVectors(e,i);const f=Di.dot(Di),h=Di.dot(pa),m=Di.dot(Bd),p=pa.dot(pa),_=pa.dot(Bd),g=f*p-h*h;if(g===0)return u.set(0,0,0),null;const x=1/g,M=(p*m-h*_)*x,b=(f*_-h*m)*x;return u.set(1-M-b,b,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ma)===null?!1:ma.x>=0&&ma.y>=0&&ma.x+ma.y<=1}static getInterpolation(e,i,r,l,u,f,h,m){return this.getBarycoord(e,i,r,l,ma)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ma.x),m.addScaledVector(f,ma.y),m.addScaledVector(h,ma.z),m)}static getInterpolatedAttribute(e,i,r,l,u,f){return kd.setScalar(0),Xd.setScalar(0),Wd.setScalar(0),kd.fromBufferAttribute(e,i),Xd.fromBufferAttribute(e,r),Wd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(kd,u.x),f.addScaledVector(Xd,u.y),f.addScaledVector(Wd,u.z),f}static isFrontFacing(e,i,r,l){return Di.subVectors(r,i),pa.subVectors(e,i),Di.cross(pa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Di.subVectors(this.c,this.b),pa.subVectors(this.a,this.b),Di.cross(pa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ui.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return Ui.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return Ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let f,h;Rs.subVectors(l,r),Cs.subVectors(u,r),Hd.subVectors(e,r);const m=Rs.dot(Hd),p=Cs.dot(Hd);if(m<=0&&p<=0)return i.copy(r);Gd.subVectors(e,l);const _=Rs.dot(Gd),g=Cs.dot(Gd);if(_>=0&&g<=_)return i.copy(l);const x=m*g-_*p;if(x<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(r).addScaledVector(Rs,f);Vd.subVectors(e,u);const M=Rs.dot(Vd),b=Cs.dot(Vd);if(b>=0&&M<=b)return i.copy(u);const T=M*p-m*b;if(T<=0&&p>=0&&b<=0)return h=p/(p-b),i.copy(r).addScaledVector(Cs,h);const y=_*b-M*g;if(y<=0&&g-_>=0&&M-b>=0)return L_.subVectors(u,l),h=(g-_)/(g-_+(M-b)),i.copy(l).addScaledVector(L_,h);const v=1/(y+T+x);return f=T*v,h=x*v,i.copy(r).addScaledVector(Rs,f).addScaledVector(Cs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},Uu={h:0,s:0,l:0};function qd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class St{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=gi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Tt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Tt.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Tt.workingColorSpace){if(e=BE(e,1),i=Mt(i,0,1),r=Mt(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,f=2*r-u;this.r=qd(f,u,e+1/3),this.g=qd(f,u,e),this.b=qd(f,u,e-1/3)}return Tt.colorSpaceToWorking(this,l),this}setStyle(e,i=gi){function r(u){u!==void 0&&parseFloat(u)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:st("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(u,16),i);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=gi){const r=Jv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xa(e.r),this.g=xa(e.g),this.b=xa(e.b),this}copyLinearToSRGB(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gi){return Tt.workingToColorSpace(Nn.copy(this),e),Math.round(Mt(Nn.r*255,0,255))*65536+Math.round(Mt(Nn.g*255,0,255))*256+Math.round(Mt(Nn.b*255,0,255))}getHexString(e=gi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Tt.workingColorSpace){Tt.workingToColorSpace(Nn.copy(this),i);const r=Nn.r,l=Nn.g,u=Nn.b,f=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const _=(h+f)/2;if(h===f)m=0,p=0;else{const g=f-h;switch(p=_<=.5?g/(f+h):g/(2-f-h),f){case r:m=(l-u)/g+(l<u?6:0);break;case l:m=(u-r)/g+2;break;case u:m=(r-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=Tt.workingColorSpace){return Tt.workingToColorSpace(Nn.copy(this),i),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=gi){Tt.workingToColorSpace(Nn.copy(this),e);const i=Nn.r,r=Nn.g,l=Nn.b;return e!==gi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(nr),this.setHSL(nr.h+e,nr.s+i,nr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(nr),e.getHSL(Uu);const r=Cd(nr.h,Uu.h,i),l=Cd(nr.s,Uu.s,i),u=Cd(nr.l,Uu.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new St;St.NAMES=Jv;let $E=0;class ul extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$E++}),this.uuid=sl(),this.name="",this.type="Material",this.blending=Os,this.side=ya,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sh,this.blendDst=oh,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=__,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){st(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){st(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(r.blending=this.blending),this.side!==ya&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==sh&&(r.blendSrc=this.blendSrc),this.blendDst!==oh&&(r.blendDst=this.blendDst),this.blendEquation!==Ur&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==__&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const f=[];for(const h in u){const m=u[h];delete m.metadata,f.push(m)}return f}if(i){const u=l(e.textures),f=l(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class $v extends ul{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ba,this.combine=Nv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new le,Lu=new Pt;let eb=0;class _i{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:eb++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=v_,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Lu.fromBufferAttribute(this,i),Lu.applyMatrix3(e),this.setXY(i,Lu.x,Lu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Go(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=qn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Go(i,this.array)),i}setX(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Go(i,this.array)),i}setY(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Go(i,this.array)),i}setZ(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Go(i,this.array)),i}setW(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=qn(i,this.array),r=qn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=qn(i,this.array),r=qn(r,this.array),l=qn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=qn(i,this.array),r=qn(r,this.array),l=qn(l,this.array),u=qn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==v_&&(e.usage=this.usage),e}}class ex extends _i{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class tx extends _i{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class vi extends _i{constructor(e,i,r){super(new Float32Array(e),i,r)}}let tb=0;const mi=new Jt,Yd=new Bn,ws=new le,ni=new ll,Wo=new ll,vn=new le;class yi extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=sl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jv(e)?tx:ex)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ft().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,i,r){return mi.makeTranslation(e,i,r),this.applyMatrix4(mi),this}scale(e,i,r){return mi.makeScale(e,i,r),this.applyMatrix4(mi),this}lookAt(e){return Yd.lookAt(e),Yd.updateMatrix(),this.applyMatrix4(Yd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new vi(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ll);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ni.setFromBufferAttribute(u),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const r=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),i)for(let u=0,f=i.length;u<f;u++){const h=i[u];Wo.setFromBufferAttribute(h),this.morphTargetsRelative?(vn.addVectors(ni.min,Wo.min),ni.expandByPoint(vn),vn.addVectors(ni.max,Wo.max),ni.expandByPoint(vn)):(ni.expandByPoint(Wo.min),ni.expandByPoint(Wo.max))}ni.getCenter(r);let l=0;for(let u=0,f=e.count;u<f;u++)vn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(vn));if(i)for(let u=0,f=i.length;u<f;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)vn.fromBufferAttribute(h,p),m&&(ws.fromBufferAttribute(e,p),vn.add(ws)),l=Math.max(l,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _i(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let K=0;K<r.count;K++)h[K]=new le,m[K]=new le;const p=new le,_=new le,g=new le,x=new Pt,M=new Pt,b=new Pt,T=new le,y=new le;function v(K,C,L){p.fromBufferAttribute(r,K),_.fromBufferAttribute(r,C),g.fromBufferAttribute(r,L),x.fromBufferAttribute(u,K),M.fromBufferAttribute(u,C),b.fromBufferAttribute(u,L),_.sub(p),g.sub(p),M.sub(x),b.sub(x);const V=1/(M.x*b.y-b.x*M.y);isFinite(V)&&(T.copy(_).multiplyScalar(b.y).addScaledVector(g,-M.y).multiplyScalar(V),y.copy(g).multiplyScalar(M.x).addScaledVector(_,-b.x).multiplyScalar(V),h[K].add(T),h[C].add(T),h[L].add(T),m[K].add(y),m[C].add(y),m[L].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let K=0,C=w.length;K<C;++K){const L=w[K],V=L.start,ae=L.count;for(let ee=V,pe=V+ae;ee<pe;ee+=3)v(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const D=new le,O=new le,P=new le,F=new le;function I(K){P.fromBufferAttribute(l,K),F.copy(P);const C=h[K];D.copy(C),D.sub(P.multiplyScalar(P.dot(C))).normalize(),O.crossVectors(F,C);const V=O.dot(m[K])<0?-1:1;f.setXYZW(K,D.x,D.y,D.z,V)}for(let K=0,C=w.length;K<C;++K){const L=w[K],V=L.start,ae=L.count;for(let ee=V,pe=V+ae;ee<pe;ee+=3)I(e.getX(ee+0)),I(e.getX(ee+1)),I(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new _i(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new le,u=new le,f=new le,h=new le,m=new le,p=new le,_=new le,g=new le;if(e)for(let x=0,M=e.count;x<M;x+=3){const b=e.getX(x+0),T=e.getX(x+1),y=e.getX(x+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,y),_.subVectors(f,u),g.subVectors(l,u),_.cross(g),h.fromBufferAttribute(r,b),m.fromBufferAttribute(r,T),p.fromBufferAttribute(r,y),h.add(_),m.add(_),p.add(_),r.setXYZ(b,h.x,h.y,h.z),r.setXYZ(T,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),_.subVectors(f,u),g.subVectors(l,u),_.cross(g),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)vn.fromBufferAttribute(e,i),vn.normalize(),e.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function e(h,m){const p=h.array,_=h.itemSize,g=h.normalized,x=new p.constructor(m.length*_);let M=0,b=0;for(let T=0,y=m.length;T<y;T++){h.isInterleavedBufferAttribute?M=m[T]*h.data.stride+h.offset:M=m[T]*_;for(let v=0;v<_;v++)x[b++]=p[M++]}return new _i(x,_,g)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new yi,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let _=0,g=p.length;_<g;_++){const x=p[_],M=e(x,r);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,x=p.length;g<x;g++){const M=p[g];_.push(M.toJSON(e.data))}_.length>0&&(l[m]=_,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=e.morphAttributes;for(const p in u){const _=[],g=u[p];for(let x=0,M=g.length;x<M;x++)_.push(g[x].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,_=f.length;p<_;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const N_=new Jt,Ar=new Kv,Nu=new uc,O_=new le,Ou=new le,Pu=new le,zu=new le,jd=new le,Iu=new le,P_=new le,Fu=new le;class xi extends Bn{constructor(e=new yi,i=new $v){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){Iu.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=h[m],g=u[m];_!==0&&(jd.fromBufferAttribute(g,e),f?Iu.addScaledVector(jd,_):Iu.addScaledVector(jd.sub(i),_))}i.add(Iu)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Nu.copy(r.boundingSphere),Nu.applyMatrix4(u),Ar.copy(e.ray).recast(e.near),!(Nu.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(Nu,O_)===null||Ar.origin.distanceToSquared(O_)>(e.far-e.near)**2))&&(N_.copy(u).invert(),Ar.copy(e.ray).applyMatrix4(N_),!(r.boundingBox!==null&&Ar.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Ar)))}_computeIntersections(e,i,r){let l;const u=this.geometry,f=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,g=u.attributes.normal,x=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(f))for(let b=0,T=x.length;b<T;b++){const y=x[b],v=f[y.materialIndex],w=Math.max(y.start,M.start),D=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let O=w,P=D;O<P;O+=3){const F=h.getX(O),I=h.getX(O+1),K=h.getX(O+2);l=Bu(this,v,e,r,p,_,g,F,I,K),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),T=Math.min(h.count,M.start+M.count);for(let y=b,v=T;y<v;y+=3){const w=h.getX(y),D=h.getX(y+1),O=h.getX(y+2);l=Bu(this,f,e,r,p,_,g,w,D,O),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,T=x.length;b<T;b++){const y=x[b],v=f[y.materialIndex],w=Math.max(y.start,M.start),D=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let O=w,P=D;O<P;O+=3){const F=O,I=O+1,K=O+2;l=Bu(this,v,e,r,p,_,g,F,I,K),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),T=Math.min(m.count,M.start+M.count);for(let y=b,v=T;y<v;y+=3){const w=y,D=y+1,O=y+2;l=Bu(this,f,e,r,p,_,g,w,D,O),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function nb(s,e,i,r,l,u,f,h){let m;if(e.side===In?m=r.intersectTriangle(f,u,l,!0,h):m=r.intersectTriangle(l,u,f,e.side===ya,h),m===null)return null;Fu.copy(h),Fu.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Fu);return p<i.near||p>i.far?null:{distance:p,point:Fu.clone(),object:s}}function Bu(s,e,i,r,l,u,f,h,m,p){s.getVertexPosition(h,Ou),s.getVertexPosition(m,Pu),s.getVertexPosition(p,zu);const _=nb(s,e,i,r,Ou,Pu,zu,P_);if(_){const g=new le;Ui.getBarycoord(P_,Ou,Pu,zu,g),l&&(_.uv=Ui.getInterpolatedAttribute(l,h,m,p,g,new Pt)),u&&(_.uv1=Ui.getInterpolatedAttribute(u,h,m,p,g,new Pt)),f&&(_.normal=Ui.getInterpolatedAttribute(f,h,m,p,g,new le),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new le,materialIndex:0};Ui.getNormal(Ou,Pu,zu,x.normal),_.face=x,_.barycoord=g}return _}class cl extends yi{constructor(e=1,i=1,r=1,l=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:f};const h=this;l=Math.floor(l),u=Math.floor(u),f=Math.floor(f);const m=[],p=[],_=[],g=[];let x=0,M=0;b("z","y","x",-1,-1,r,i,e,f,u,0),b("z","y","x",1,-1,r,i,-e,f,u,1),b("x","z","y",1,1,e,r,i,l,f,2),b("x","z","y",1,-1,e,r,-i,l,f,3),b("x","y","z",1,-1,e,i,r,l,u,4),b("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new vi(p,3)),this.setAttribute("normal",new vi(_,3)),this.setAttribute("uv",new vi(g,2));function b(T,y,v,w,D,O,P,F,I,K,C){const L=O/I,V=P/K,ae=O/2,ee=P/2,pe=F/2,ce=I+1,U=K+1;let B=0,$=0;const ne=new le;for(let fe=0;fe<U;fe++){const N=fe*V-ee;for(let Z=0;Z<ce;Z++){const me=Z*L-ae;ne[T]=me*w,ne[y]=N*D,ne[v]=pe,p.push(ne.x,ne.y,ne.z),ne[T]=0,ne[y]=0,ne[v]=F>0?1:-1,_.push(ne.x,ne.y,ne.z),g.push(Z/I),g.push(1-fe/K),B+=1}}for(let fe=0;fe<K;fe++)for(let N=0;N<I;N++){const Z=x+N+ce*fe,me=x+N+ce*(fe+1),be=x+(N+1)+ce*(fe+1),Te=x+(N+1)+ce*fe;m.push(Z,me,Te),m.push(me,be,Te),$+=6}h.addGroup(M,$,C),M+=$,x+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hs(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function zn(s){const e={};for(let i=0;i<s.length;i++){const r=Hs(s[i]);for(const l in r)e[l]=r[l]}return e}function ib(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function nx(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const ab={clone:Hs,merge:zn};var rb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends ul{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rb,this.fragmentShader=sb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=ib(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class ix extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ir=new le,z_=new Pt,I_=new Pt;class ii extends ix{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Qh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qh*2*Math.atan(Math.tan(Rd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ir.x,ir.y).multiplyScalar(-e/ir.z),ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ir.x,ir.y).multiplyScalar(-e/ir.z)}getViewSize(e,i){return this.getViewBounds(e,z_,I_),i.subVectors(I_,z_)}setViewOffset(e,i,r,l,u,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Rd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;u+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ds=-90,Us=1;class ob extends Bn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ii(Ds,Us,e,i);l.layers=this.layers,this.add(l);const u=new ii(Ds,Us,e,i);u.layers=this.layers,this.add(u);const f=new ii(Ds,Us,e,i);f.layers=this.layers,this.add(f);const h=new ii(Ds,Us,e,i);h.layers=this.layers,this.add(h);const m=new ii(Ds,Us,e,i);m.layers=this.layers,this.add(m);const p=new ii(Ds,Us,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,f,h,m]=i;for(const p of i)this.remove(p);if(e===Vi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===nc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,h,m,p,_]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,f),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,l),e.render(i,_),e.setRenderTarget(g,x,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class ax extends Fn{constructor(e=[],i=Pr,r,l,u,f,h,m,p,_){super(e,i,r,l,u,f,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rx extends Xi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new ax(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new cl(5,5,5),u=new Yn({name:"CubemapFromEquirect",uniforms:Hs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:In,blending:va});u.uniforms.tEquirect.value=i;const f=new xi(l,u),h=i.minFilter;return i.minFilter===Nr&&(i.minFilter=On),new ob(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,r,l);e.setRenderTarget(u)}}class Zo extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lb={type:"move"};class Zd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const T of e.hand.values()){const y=i.getJointPose(T,r),v=this._getHandJoint(p,T);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=_.position.distanceTo(g.position),M=.02,b=.005;p.inputState.pinching&&x>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(lb)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Zo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class ub extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ba,this.environmentIntensity=1,this.environmentRotation=new ba,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class cb extends Fn{constructor(e=null,i=1,r=1,l,u,f,h,m,p=wn,_=wn,g,x){super(null,f,h,m,p,_,l,u,g,x),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Kd=new le,fb=new le,db=new ft;class Dr{constructor(e=new le(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Kd.subVectors(r,i).cross(fb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Kd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||db.getNormalMatrix(e),l=this.coplanarPoint(Kd).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rr=new uc,hb=new Pt(.5,.5),Hu=new le;class xp{constructor(e=new Dr,i=new Dr,r=new Dr,l=new Dr,u=new Dr,f=new Dr){this.planes=[e,i,r,l,u,f]}set(e,i,r,l,u,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(f),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Vi,r=!1){const l=this.planes,u=e.elements,f=u[0],h=u[1],m=u[2],p=u[3],_=u[4],g=u[5],x=u[6],M=u[7],b=u[8],T=u[9],y=u[10],v=u[11],w=u[12],D=u[13],O=u[14],P=u[15];if(l[0].setComponents(p-f,M-_,v-b,P-w).normalize(),l[1].setComponents(p+f,M+_,v+b,P+w).normalize(),l[2].setComponents(p+h,M+g,v+T,P+D).normalize(),l[3].setComponents(p-h,M-g,v-T,P-D).normalize(),r)l[4].setComponents(m,x,y,O).normalize(),l[5].setComponents(p-m,M-x,v-y,P-O).normalize();else if(l[4].setComponents(p-m,M-x,v-y,P-O).normalize(),i===Vi)l[5].setComponents(p+m,M+x,v+y,P+O).normalize();else if(i===nc)l[5].setComponents(m,x,y,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Rr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(e){Rr.center.set(0,0,0);const i=hb.distanceTo(e.center);return Rr.radius=.7071067811865476+i,Rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Hu.x=l.normal.x>0?e.max.x:e.min.x,Hu.y=l.normal.y>0?e.max.y:e.min.y,Hu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Hu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pb extends ul{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new St(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const F_=new Jt,Jh=new Kv,Gu=new uc,Vu=new le;class mb extends Bn{constructor(e=new yi,i=new pb){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Gu.copy(r.boundingSphere),Gu.applyMatrix4(l),Gu.radius+=u,e.ray.intersectsSphere(Gu)===!1)return;F_.copy(l).invert(),Jh.copy(e.ray).applyMatrix4(F_);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,g=r.attributes.position;if(p!==null){const x=Math.max(0,f.start),M=Math.min(p.count,f.start+f.count);for(let b=x,T=M;b<T;b++){const y=p.getX(b);Vu.fromBufferAttribute(g,y),B_(Vu,y,m,l,e,i,this)}}else{const x=Math.max(0,f.start),M=Math.min(g.count,f.start+f.count);for(let b=x,T=M;b<T;b++)Vu.fromBufferAttribute(g,b),B_(Vu,b,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function B_(s,e,i,r,l,u,f){const h=Jh.distanceSqToPoint(s);if(h<i){const m=new le;Jh.closestPointToPoint(s,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class nl extends Fn{constructor(e,i,r=qi,l,u,f,h=wn,m=wn,p,_=Ea,g=1){if(_!==Ea&&_!==Or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:g};super(x,l,u,f,h,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class gb extends nl{constructor(e,i=qi,r=Pr,l,u,f=wn,h=wn,m,p=Ea){const _={width:e,height:e,depth:1},g=[_,_,_,_,_,_];super(e,e,i,r,l,u,f,h,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class sx extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class cc extends yi{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,f=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,_=m+1,g=e/h,x=i/m,M=[],b=[],T=[],y=[];for(let v=0;v<_;v++){const w=v*x-f;for(let D=0;D<p;D++){const O=D*g-u;b.push(O,-w,0),T.push(0,0,1),y.push(D/h),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let w=0;w<h;w++){const D=w+p*v,O=w+p*(v+1),P=w+1+p*(v+1),F=w+1+p*v;M.push(D,O,F),M.push(O,P,F)}this.setIndex(M),this.setAttribute("position",new vi(b,3)),this.setAttribute("normal",new vi(T,3)),this.setAttribute("uv",new vi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cc(e.width,e.height,e.widthSegments,e.heightSegments)}}class ac extends yi{constructor(e=1,i=32,r=16,l=0,u=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(f+h,Math.PI);let p=0;const _=[],g=new le,x=new le,M=[],b=[],T=[],y=[];for(let v=0;v<=r;v++){const w=[],D=v/r;let O=0;v===0&&f===0?O=.5/i:v===r&&m===Math.PI&&(O=-.5/i);for(let P=0;P<=i;P++){const F=P/i;g.x=-e*Math.cos(l+F*u)*Math.sin(f+D*h),g.y=e*Math.cos(f+D*h),g.z=e*Math.sin(l+F*u)*Math.sin(f+D*h),b.push(g.x,g.y,g.z),x.copy(g).normalize(),T.push(x.x,x.y,x.z),y.push(F+O,1-D),w.push(p++)}_.push(w)}for(let v=0;v<r;v++)for(let w=0;w<i;w++){const D=_[v][w+1],O=_[v][w],P=_[v+1][w],F=_[v+1][w+1];(v!==0||f>0)&&M.push(D,O,F),(v!==r-1||m<Math.PI)&&M.push(O,P,F)}this.setIndex(M),this.setAttribute("position",new vi(b,3)),this.setAttribute("normal",new vi(T,3)),this.setAttribute("uv",new vi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ac(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _b extends Yn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vb extends ul{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=CE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xb extends ul{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Sb extends Bn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new St(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Qd=new Jt,H_=new le,G_=new le;class yb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xp,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;H_.setFromMatrixPosition(e.matrixWorld),i.position.copy(H_),G_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(G_),i.updateMatrixWorld(),Qd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Qd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Mb extends yb{constructor(){super(new ii(90,1,.5,500)),this.isPointLightShadow=!0}}class Eb extends Sb{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new Mb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class ox extends ix{constructor(e=-1,i=1,r=1,l=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,f=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,f=u+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(u,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class bb extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Tb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function V_(s,e,i,r){const l=Ab(r);switch(i){case Wv:return s*e;case Yv:return s*e/l.components*l.byteLength;case hp:return s*e/l.components*l.byteLength;case Fs:return s*e*2/l.components*l.byteLength;case pp:return s*e*2/l.components*l.byteLength;case qv:return s*e*3/l.components*l.byteLength;case Li:return s*e*4/l.components*l.byteLength;case mp:return s*e*4/l.components*l.byteLength;case Zu:case Ku:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Qu:case Ju:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sh:case Mh:return Math.max(s,16)*Math.max(e,8)/4;case xh:case yh:return Math.max(s,8)*Math.max(e,8)/2;case Eh:case bh:case Ah:case Rh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Th:case Ch:case wh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Dh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Uh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Lh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case zh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ih:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Fh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Hh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Gh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Vh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case kh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Xh:case Wh:case qh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Yh:case jh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Zh:case Kh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Ab(s){switch(s){case ai:case Gv:return{byteLength:1,components:1};case $o:case Vv:case Ma:return{byteLength:2,components:1};case fp:case dp:return{byteLength:2,components:4};case qi:case cp:case Gi:return{byteLength:4,components:1};case kv:case Xv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lp}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lp);function lx(){let s=null,e=!1,i=null,r=null;function l(u,f){i(u,f),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function Rb(s){const e=new WeakMap;function i(h,m){const p=h.array,_=h.usage,g=p.byteLength,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,p,_),h.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,m,p){const _=m.array,g=m.updateRanges;if(s.bindBuffer(p,h),g.length===0)s.bufferSubData(p,0,_);else{g.sort((M,b)=>M.start-b.start);let x=0;for(let M=1;M<g.length;M++){const b=g[x],T=g[M];T.start<=b.start+b.count+1?b.count=Math.max(b.count,T.start+T.count-b.start):(++x,g[x]=T)}g.length=x+1;for(let M=0,b=g.length;M<b;M++){const T=g[M];s.bufferSubData(p,T.start*_.BYTES_PER_ELEMENT,_,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(s.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:f}}var Cb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Db=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ub=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ob=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ib=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Gb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Xb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Qb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Jb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$b=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,eT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aT="gl_FragColor = linearToOutputTexel( gl_FragColor );",rT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,oT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,lT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,uT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_T=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ST=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,MT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ET=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,AT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,RT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,CT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,DT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,UT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,OT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,PT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,IT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,BT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,GT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,VT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,XT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,YT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,KT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,QT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,JT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$T=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,e1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,i1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,a1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,u1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,c1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,f1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,d1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,h1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,m1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,v1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,x1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,S1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,y1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,M1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,E1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,b1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,T1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,A1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const R1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,C1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,O1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,P1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,z1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,I1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,F1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,H1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,G1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,V1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,q1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,j1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Z1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,J1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,nA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dt={alphahash_fragment:Cb,alphahash_pars_fragment:wb,alphamap_fragment:Db,alphamap_pars_fragment:Ub,alphatest_fragment:Lb,alphatest_pars_fragment:Nb,aomap_fragment:Ob,aomap_pars_fragment:Pb,batching_pars_vertex:zb,batching_vertex:Ib,begin_vertex:Fb,beginnormal_vertex:Bb,bsdfs:Hb,iridescence_fragment:Gb,bumpmap_pars_fragment:Vb,clipping_planes_fragment:kb,clipping_planes_pars_fragment:Xb,clipping_planes_pars_vertex:Wb,clipping_planes_vertex:qb,color_fragment:Yb,color_pars_fragment:jb,color_pars_vertex:Zb,color_vertex:Kb,common:Qb,cube_uv_reflection_fragment:Jb,defaultnormal_vertex:$b,displacementmap_pars_vertex:eT,displacementmap_vertex:tT,emissivemap_fragment:nT,emissivemap_pars_fragment:iT,colorspace_fragment:aT,colorspace_pars_fragment:rT,envmap_fragment:sT,envmap_common_pars_fragment:oT,envmap_pars_fragment:lT,envmap_pars_vertex:uT,envmap_physical_pars_fragment:ST,envmap_vertex:cT,fog_vertex:fT,fog_pars_vertex:dT,fog_fragment:hT,fog_pars_fragment:pT,gradientmap_pars_fragment:mT,lightmap_pars_fragment:gT,lights_lambert_fragment:_T,lights_lambert_pars_fragment:vT,lights_pars_begin:xT,lights_toon_fragment:yT,lights_toon_pars_fragment:MT,lights_phong_fragment:ET,lights_phong_pars_fragment:bT,lights_physical_fragment:TT,lights_physical_pars_fragment:AT,lights_fragment_begin:RT,lights_fragment_maps:CT,lights_fragment_end:wT,logdepthbuf_fragment:DT,logdepthbuf_pars_fragment:UT,logdepthbuf_pars_vertex:LT,logdepthbuf_vertex:NT,map_fragment:OT,map_pars_fragment:PT,map_particle_fragment:zT,map_particle_pars_fragment:IT,metalnessmap_fragment:FT,metalnessmap_pars_fragment:BT,morphinstance_vertex:HT,morphcolor_vertex:GT,morphnormal_vertex:VT,morphtarget_pars_vertex:kT,morphtarget_vertex:XT,normal_fragment_begin:WT,normal_fragment_maps:qT,normal_pars_fragment:YT,normal_pars_vertex:jT,normal_vertex:ZT,normalmap_pars_fragment:KT,clearcoat_normal_fragment_begin:QT,clearcoat_normal_fragment_maps:JT,clearcoat_pars_fragment:$T,iridescence_pars_fragment:e1,opaque_fragment:t1,packing:n1,premultiplied_alpha_fragment:i1,project_vertex:a1,dithering_fragment:r1,dithering_pars_fragment:s1,roughnessmap_fragment:o1,roughnessmap_pars_fragment:l1,shadowmap_pars_fragment:u1,shadowmap_pars_vertex:c1,shadowmap_vertex:f1,shadowmask_pars_fragment:d1,skinbase_vertex:h1,skinning_pars_vertex:p1,skinning_vertex:m1,skinnormal_vertex:g1,specularmap_fragment:_1,specularmap_pars_fragment:v1,tonemapping_fragment:x1,tonemapping_pars_fragment:S1,transmission_fragment:y1,transmission_pars_fragment:M1,uv_pars_fragment:E1,uv_pars_vertex:b1,uv_vertex:T1,worldpos_vertex:A1,background_vert:R1,background_frag:C1,backgroundCube_vert:w1,backgroundCube_frag:D1,cube_vert:U1,cube_frag:L1,depth_vert:N1,depth_frag:O1,distance_vert:P1,distance_frag:z1,equirect_vert:I1,equirect_frag:F1,linedashed_vert:B1,linedashed_frag:H1,meshbasic_vert:G1,meshbasic_frag:V1,meshlambert_vert:k1,meshlambert_frag:X1,meshmatcap_vert:W1,meshmatcap_frag:q1,meshnormal_vert:Y1,meshnormal_frag:j1,meshphong_vert:Z1,meshphong_frag:K1,meshphysical_vert:Q1,meshphysical_frag:J1,meshtoon_vert:$1,meshtoon_frag:eA,points_vert:tA,points_frag:nA,shadow_vert:iA,shadow_frag:aA,sprite_vert:rA,sprite_frag:sA},ze={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Bi={basic:{uniforms:zn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:zn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new St(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:zn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:zn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:zn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new St(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:zn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:zn([ze.points,ze.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:zn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:zn([ze.common,ze.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:zn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:zn([ze.sprite,ze.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:zn([ze.common,ze.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:zn([ze.lights,ze.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Bi.physical={uniforms:zn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const ku={r:0,b:0,g:0},Cr=new ba,oA=new Jt;function lA(s,e,i,r,l,u,f){const h=new St(0);let m=u===!0?0:1,p,_,g=null,x=0,M=null;function b(D){let O=D.isScene===!0?D.background:null;return O&&O.isTexture&&(O=(D.backgroundBlurriness>0?i:e).get(O)),O}function T(D){let O=!1;const P=b(D);P===null?v(h,m):P&&P.isColor&&(v(P,1),O=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,f):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||O)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(D,O){const P=b(O);P&&(P.isCubeTexture||P.mapping===lc)?(_===void 0&&(_=new xi(new cl(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:Hs(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(F,I,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Cr.copy(O.backgroundRotation),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),_.material.uniforms.envMap.value=P,_.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(oA.makeRotationFromEuler(Cr)),_.material.toneMapped=Tt.getTransfer(P.colorSpace)!==Ht,(g!==P||x!==P.version||M!==s.toneMapping)&&(_.material.needsUpdate=!0,g=P,x=P.version,M=s.toneMapping),_.layers.enableAll(),D.unshift(_,_.geometry,_.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new xi(new cc(2,2),new Yn({name:"BackgroundMaterial",uniforms:Hs(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:ya,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.toneMapped=Tt.getTransfer(P.colorSpace)!==Ht,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(g!==P||x!==P.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,g=P,x=P.version,M=s.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function v(D,O){D.getRGB(ku,nx(s)),r.buffers.color.setClear(ku.r,ku.g,ku.b,O,f)}function w(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,O=1){h.set(D),m=O,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(D){m=D,v(h,m)},render:T,addToRenderList:y,dispose:w}}function uA(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let u=l,f=!1;function h(L,V,ae,ee,pe){let ce=!1;const U=g(ee,ae,V);u!==U&&(u=U,p(u.object)),ce=M(L,ee,ae,pe),ce&&b(L,ee,ae,pe),pe!==null&&e.update(pe,s.ELEMENT_ARRAY_BUFFER),(ce||f)&&(f=!1,O(L,V,ae,ee),pe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(pe).buffer))}function m(){return s.createVertexArray()}function p(L){return s.bindVertexArray(L)}function _(L){return s.deleteVertexArray(L)}function g(L,V,ae){const ee=ae.wireframe===!0;let pe=r[L.id];pe===void 0&&(pe={},r[L.id]=pe);let ce=pe[V.id];ce===void 0&&(ce={},pe[V.id]=ce);let U=ce[ee];return U===void 0&&(U=x(m()),ce[ee]=U),U}function x(L){const V=[],ae=[],ee=[];for(let pe=0;pe<i;pe++)V[pe]=0,ae[pe]=0,ee[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ae,attributeDivisors:ee,object:L,attributes:{},index:null}}function M(L,V,ae,ee){const pe=u.attributes,ce=V.attributes;let U=0;const B=ae.getAttributes();for(const $ in B)if(B[$].location>=0){const fe=pe[$];let N=ce[$];if(N===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(N=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(N=L.instanceColor)),fe===void 0||fe.attribute!==N||N&&fe.data!==N.data)return!0;U++}return u.attributesNum!==U||u.index!==ee}function b(L,V,ae,ee){const pe={},ce=V.attributes;let U=0;const B=ae.getAttributes();for(const $ in B)if(B[$].location>=0){let fe=ce[$];fe===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(fe=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(fe=L.instanceColor));const N={};N.attribute=fe,fe&&fe.data&&(N.data=fe.data),pe[$]=N,U++}u.attributes=pe,u.attributesNum=U,u.index=ee}function T(){const L=u.newAttributes;for(let V=0,ae=L.length;V<ae;V++)L[V]=0}function y(L){v(L,0)}function v(L,V){const ae=u.newAttributes,ee=u.enabledAttributes,pe=u.attributeDivisors;ae[L]=1,ee[L]===0&&(s.enableVertexAttribArray(L),ee[L]=1),pe[L]!==V&&(s.vertexAttribDivisor(L,V),pe[L]=V)}function w(){const L=u.newAttributes,V=u.enabledAttributes;for(let ae=0,ee=V.length;ae<ee;ae++)V[ae]!==L[ae]&&(s.disableVertexAttribArray(ae),V[ae]=0)}function D(L,V,ae,ee,pe,ce,U){U===!0?s.vertexAttribIPointer(L,V,ae,pe,ce):s.vertexAttribPointer(L,V,ae,ee,pe,ce)}function O(L,V,ae,ee){T();const pe=ee.attributes,ce=ae.getAttributes(),U=V.defaultAttributeValues;for(const B in ce){const $=ce[B];if($.location>=0){let ne=pe[B];if(ne===void 0&&(B==="instanceMatrix"&&L.instanceMatrix&&(ne=L.instanceMatrix),B==="instanceColor"&&L.instanceColor&&(ne=L.instanceColor)),ne!==void 0){const fe=ne.normalized,N=ne.itemSize,Z=e.get(ne);if(Z===void 0)continue;const me=Z.buffer,be=Z.type,Te=Z.bytesPerElement,Q=be===s.INT||be===s.UNSIGNED_INT||ne.gpuType===cp;if(ne.isInterleavedBufferAttribute){const oe=ne.data,we=oe.stride,Ve=ne.offset;if(oe.isInstancedInterleavedBuffer){for(let He=0;He<$.locationSize;He++)v($.location+He,oe.meshPerAttribute);L.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let He=0;He<$.locationSize;He++)y($.location+He);s.bindBuffer(s.ARRAY_BUFFER,me);for(let He=0;He<$.locationSize;He++)D($.location+He,N/$.locationSize,be,fe,we*Te,(Ve+N/$.locationSize*He)*Te,Q)}else{if(ne.isInstancedBufferAttribute){for(let oe=0;oe<$.locationSize;oe++)v($.location+oe,ne.meshPerAttribute);L.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let oe=0;oe<$.locationSize;oe++)y($.location+oe);s.bindBuffer(s.ARRAY_BUFFER,me);for(let oe=0;oe<$.locationSize;oe++)D($.location+oe,N/$.locationSize,be,fe,N*Te,N/$.locationSize*oe*Te,Q)}}else if(U!==void 0){const fe=U[B];if(fe!==void 0)switch(fe.length){case 2:s.vertexAttrib2fv($.location,fe);break;case 3:s.vertexAttrib3fv($.location,fe);break;case 4:s.vertexAttrib4fv($.location,fe);break;default:s.vertexAttrib1fv($.location,fe)}}}}w()}function P(){K();for(const L in r){const V=r[L];for(const ae in V){const ee=V[ae];for(const pe in ee)_(ee[pe].object),delete ee[pe];delete V[ae]}delete r[L]}}function F(L){if(r[L.id]===void 0)return;const V=r[L.id];for(const ae in V){const ee=V[ae];for(const pe in ee)_(ee[pe].object),delete ee[pe];delete V[ae]}delete r[L.id]}function I(L){for(const V in r){const ae=r[V];if(ae[L.id]===void 0)continue;const ee=ae[L.id];for(const pe in ee)_(ee[pe].object),delete ee[pe];delete ae[L.id]}}function K(){C(),f=!0,u!==l&&(u=l,p(u.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:K,resetDefaultState:C,dispose:P,releaseStatesOfGeometry:F,releaseStatesOfProgram:I,initAttributes:T,enableAttribute:y,disableUnusedAttributes:w}}function cA(s,e,i){let r;function l(p){r=p}function u(p,_){s.drawArrays(r,p,_),i.update(_,r,1)}function f(p,_,g){g!==0&&(s.drawArraysInstanced(r,p,_,g),i.update(_,r,g))}function h(p,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,g);let M=0;for(let b=0;b<g;b++)M+=_[b];i.update(M,r,1)}function m(p,_,g,x){if(g===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)f(p[b],_[b],x[b]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,_,0,x,0,g);let b=0;for(let T=0;T<g;T++)b+=_[T]*x[T];i.update(b,r,1)}}this.setMode=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function fA(s,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(I){return!(I!==Li&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const K=I===Ma&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==ai&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Gi&&!K)}function m(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(st("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),O=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=s.getParameter(s.MAX_SAMPLES),F=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:b,maxTextureSize:T,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:w,maxVaryings:D,maxFragmentUniforms:O,maxSamples:P,samples:F}}function dA(s){const e=this;let i=null,r=0,l=!1,u=!1;const f=new Dr,h=new ft,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const M=g.length!==0||x||r!==0||l;return l=x,r=g.length,M},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,x){i=_(g,x,0)},this.setState=function(g,x,M){const b=g.clippingPlanes,T=g.clipIntersection,y=g.clipShadows,v=s.get(g);if(!l||b===null||b.length===0||u&&!y)u?_(null):p();else{const w=u?0:r,D=w*4;let O=v.clippingState||null;m.value=O,O=_(b,x,D,M);for(let P=0;P!==D;++P)O[P]=i[P];v.clippingState=O,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=w}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(g,x,M,b){const T=g!==null?g.length:0;let y=null;if(T!==0){if(y=m.value,b!==!0||y===null){const v=M+T*4,w=x.matrixWorldInverse;h.getNormalMatrix(w),(y===null||y.length<v)&&(y=new Float32Array(v));for(let D=0,O=M;D!==T;++D,O+=4)f.copy(g[D]).applyMatrix4(w,h),f.normal.toArray(y,O),y[O+3]=f.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}function hA(s){let e=new WeakMap;function i(f,h){return h===mh?f.mapping=Pr:h===gh&&(f.mapping=Is),f}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===mh||h===gh)if(e.has(f)){const m=e.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new rx(m.height);return p.fromEquirectangularTexture(s,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const rr=4,k_=[.125,.215,.35,.446,.526,.582],Lr=20,pA=256,qo=new ox,X_=new St;let Jd=null,$d=0,eh=0,th=!1;const mA=new le;class W_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,u={}){const{size:f=256,position:h=mA}=u;Jd=this._renderer.getRenderTarget(),$d=this._renderer.getActiveCubeFace(),eh=this._renderer.getActiveMipmapLevel(),th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=j_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Y_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Jd,$d,eh),this._renderer.xr.enabled=th,e.scissorTest=!1,Ls(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Pr||e.mapping===Is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jd=this._renderer.getRenderTarget(),$d=this._renderer.getActiveCubeFace(),eh=this._renderer.getActiveMipmapLevel(),th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:On,minFilter:On,generateMipmaps:!1,type:Ma,format:Li,colorSpace:Bs,depthBuffer:!1},l=q_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=q_(e,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=gA(u)),this._blurMaterial=vA(u,e,i),this._ggxMaterial=_A(u,e,i)}return l}_compileMaterial(e){const i=new xi(new yi,e);this._renderer.compile(i,qo)}_sceneToCubeUV(e,i,r,l,u){const m=new ii(90,1,i,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,M=g.toneMapping;g.getClearColor(X_),g.toneMapping=ki,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xi(new cl,new $v({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,y=T.material;let v=!1;const w=e.background;w?w.isColor&&(y.color.copy(w),e.background=null,v=!0):(y.color.copy(X_),v=!0);for(let D=0;D<6;D++){const O=D%3;O===0?(m.up.set(0,p[D],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+_[D],u.y,u.z)):O===1?(m.up.set(0,0,p[D]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+_[D],u.z)):(m.up.set(0,p[D],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+_[D]));const P=this._cubeSize;Ls(l,O*P,D>2?P:0,P,P),g.setRenderTarget(l),v&&g.render(T,m),g.render(e,m)}g.toneMapping=M,g.autoClear=x,e.background=w}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Pr||e.mapping===Is;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=j_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Y_());const u=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=u;const h=u.uniforms;h.envMap.value=e;const m=this._cubeSize;Ls(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,qo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,u=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[r];h.material=f;const m=f.uniforms,p=r/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-_*_),x=0+p*1.25,M=g*x,{_lodMax:b}=this,T=this._sizeLods[r],y=3*T*(r>b-rr?r-b+rr:0),v=4*(this._cubeSize-T);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=b-i,Ls(u,y,v,3*T,2*T),l.setRenderTarget(u),l.render(h,qo),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=b-r,Ls(e,y,v,3*T,2*T),l.setRenderTarget(e),l.render(h,qo)}_blur(e,i,r,l,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,r,l,"latitudinal",u),this._halfBlur(f,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Ct("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[l];g.material=p;const x=p.uniforms,M=this._sizeLods[r]-1,b=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Lr-1),T=u/b,y=isFinite(u)?1+Math.floor(_*T):Lr;y>Lr&&st(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Lr}`);const v=[];let w=0;for(let I=0;I<Lr;++I){const K=I/T,C=Math.exp(-K*K/2);v.push(C),I===0?w+=C:I<y&&(w+=2*C)}for(let I=0;I<v.length;I++)v[I]=v[I]/w;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=v,x.latitudinal.value=f==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:D}=this;x.dTheta.value=b,x.mipInt.value=D-r;const O=this._sizeLods[l],P=3*O*(l>D-rr?l-D+rr:0),F=4*(this._cubeSize-O);Ls(i,P,F,3*O,2*O),m.setRenderTarget(i),m.render(g,qo)}}function gA(s){const e=[],i=[],r=[];let l=s;const u=s-rr+1+k_.length;for(let f=0;f<u;f++){const h=Math.pow(2,l);e.push(h);let m=1/h;f>s-rr?m=k_[f-s+rr-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),_=-p,g=1+p,x=[_,_,g,_,g,g,_,_,g,g,_,g],M=6,b=6,T=3,y=2,v=1,w=new Float32Array(T*b*M),D=new Float32Array(y*b*M),O=new Float32Array(v*b*M);for(let F=0;F<M;F++){const I=F%3*2/3-1,K=F>2?0:-1,C=[I,K,0,I+2/3,K,0,I+2/3,K+1,0,I,K,0,I+2/3,K+1,0,I,K+1,0];w.set(C,T*b*F),D.set(x,y*b*F);const L=[F,F,F,F,F,F];O.set(L,v*b*F)}const P=new yi;P.setAttribute("position",new _i(w,T)),P.setAttribute("uv",new _i(D,y)),P.setAttribute("faceIndex",new _i(O,v)),r.push(new xi(P,null)),l>rr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function q_(s,e,i){const r=new Xi(s,e,i);return r.texture.mapping=lc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ls(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function _A(s,e,i){return new Yn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:pA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function vA(s,e,i){const r=new Float32Array(Lr),l=new le(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function Y_(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function j_(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function fc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function xA(s){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===mh||m===gh,_=m===Pr||m===Is;if(p||_){let g=e.get(h);const x=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new W_(s)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const M=h.image;return p&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new W_(s)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function SA(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&tl("WebGLRenderer: "+r+" extension not supported."),l}}}function yA(s,e,i,r){const l={},u=new WeakMap;function f(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const b in x.attributes)e.remove(x.attributes[b]);x.removeEventListener("dispose",f),delete l[x.id];const M=u.get(x);M&&(e.remove(M),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(g,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(g){const x=g.attributes;for(const M in x)e.update(x[M],s.ARRAY_BUFFER)}function p(g){const x=[],M=g.index,b=g.attributes.position;let T=0;if(M!==null){const w=M.array;T=M.version;for(let D=0,O=w.length;D<O;D+=3){const P=w[D+0],F=w[D+1],I=w[D+2];x.push(P,F,F,I,I,P)}}else if(b!==void 0){const w=b.array;T=b.version;for(let D=0,O=w.length/3-1;D<O;D+=3){const P=D+0,F=D+1,I=D+2;x.push(P,F,F,I,I,P)}}else return;const y=new(jv(x)?tx:ex)(x,1);y.version=T;const v=u.get(g);v&&e.remove(v),u.set(g,y)}function _(g){const x=u.get(g);if(x){const M=g.index;M!==null&&x.version<M.version&&p(g)}else p(g);return u.get(g)}return{get:h,update:m,getWireframeAttribute:_}}function MA(s,e,i){let r;function l(x){r=x}let u,f;function h(x){u=x.type,f=x.bytesPerElement}function m(x,M){s.drawElements(r,M,u,x*f),i.update(M,r,1)}function p(x,M,b){b!==0&&(s.drawElementsInstanced(r,M,u,x*f,b),i.update(M,r,b))}function _(x,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,x,0,b);let y=0;for(let v=0;v<b;v++)y+=M[v];i.update(y,r,1)}function g(x,M,b,T){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<x.length;v++)p(x[v]/f,M[v],T[v]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,u,x,0,T,0,b);let v=0;for(let w=0;w<b;w++)v+=M[w]*T[w];i.update(v,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function EA(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,h){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=h*(u/3);break;case s.LINES:i.lines+=h*(u/2);break;case s.LINE_STRIP:i.lines+=h*(u-1);break;case s.LINE_LOOP:i.lines+=h*u;break;case s.POINTS:i.points+=h*u;break;default:Ct("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function bA(s,e,i){const r=new WeakMap,l=new an;function u(f,h,m){const p=f.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let x=r.get(h);if(x===void 0||x.count!==g){let L=function(){K.dispose(),r.delete(h),h.removeEventListener("dispose",L)};var M=L;x!==void 0&&x.texture.dispose();const b=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let O=0;b===!0&&(O=1),T===!0&&(O=2),y===!0&&(O=3);let P=h.attributes.position.count*O,F=1;P>e.maxTextureSize&&(F=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const I=new Float32Array(P*F*4*g),K=new Zv(I,P,F,g);K.type=Gi,K.needsUpdate=!0;const C=O*4;for(let V=0;V<g;V++){const ae=v[V],ee=w[V],pe=D[V],ce=P*F*4*V;for(let U=0;U<ae.count;U++){const B=U*C;b===!0&&(l.fromBufferAttribute(ae,U),I[ce+B+0]=l.x,I[ce+B+1]=l.y,I[ce+B+2]=l.z,I[ce+B+3]=0),T===!0&&(l.fromBufferAttribute(ee,U),I[ce+B+4]=l.x,I[ce+B+5]=l.y,I[ce+B+6]=l.z,I[ce+B+7]=0),y===!0&&(l.fromBufferAttribute(pe,U),I[ce+B+8]=l.x,I[ce+B+9]=l.y,I[ce+B+10]=l.z,I[ce+B+11]=pe.itemSize===4?l.w:1)}}x={count:g,texture:K,size:new Pt(P,F)},r.set(h,x),h.addEventListener("dispose",L)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let b=0;for(let y=0;y<p.length;y++)b+=p[y];const T=h.morphTargetsRelative?1:1-b;m.getUniforms().setValue(s,"morphTargetBaseInfluence",T),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:u}}function TA(s,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,_=m.geometry,g=e.get(m,_);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return g}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:f}}const AA={[Ov]:"LINEAR_TONE_MAPPING",[Pv]:"REINHARD_TONE_MAPPING",[zv]:"CINEON_TONE_MAPPING",[up]:"ACES_FILMIC_TONE_MAPPING",[Fv]:"AGX_TONE_MAPPING",[Bv]:"NEUTRAL_TONE_MAPPING",[Iv]:"CUSTOM_TONE_MAPPING"};function RA(s,e,i,r,l){const u=new Xi(e,i,{type:s,depthBuffer:r,stencilBuffer:l}),f=new Xi(e,i,{type:Ma,depthBuffer:!1,stencilBuffer:!1}),h=new yi;h.setAttribute("position",new vi([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new vi([0,2,0,0,2,0],2));const m=new _b({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new xi(h,m),_=new ox(-1,1,1,-1,0,1);let g=null,x=null,M=!1,b,T=null,y=[],v=!1;this.setSize=function(w,D){u.setSize(w,D),f.setSize(w,D);for(let O=0;O<y.length;O++){const P=y[O];P.setSize&&P.setSize(w,D)}},this.setEffects=function(w){y=w,v=y.length>0&&y[0].isRenderPass===!0;const D=u.width,O=u.height;for(let P=0;P<y.length;P++){const F=y[P];F.setSize&&F.setSize(D,O)}},this.begin=function(w,D){if(M||w.toneMapping===ki&&y.length===0)return!1;if(T=D,D!==null){const O=D.width,P=D.height;(u.width!==O||u.height!==P)&&this.setSize(O,P)}return v===!1&&w.setRenderTarget(u),b=w.toneMapping,w.toneMapping=ki,!0},this.hasRenderPass=function(){return v},this.end=function(w,D){w.toneMapping=b,M=!0;let O=u,P=f;for(let F=0;F<y.length;F++){const I=y[F];if(I.enabled!==!1&&(I.render(w,P,O,D),I.needsSwap!==!1)){const K=O;O=P,P=K}}if(g!==w.outputColorSpace||x!==w.toneMapping){g=w.outputColorSpace,x=w.toneMapping,m.defines={},Tt.getTransfer(g)===Ht&&(m.defines.SRGB_TRANSFER="");const F=AA[x];F&&(m.defines[F]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=O.texture,w.setRenderTarget(T),w.render(p,_),T=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){u.dispose(),f.dispose(),h.dispose(),m.dispose()}}const ux=new Fn,$h=new nl(1,1),cx=new Zv,fx=new WE,dx=new ax,Z_=[],K_=[],Q_=new Float32Array(16),J_=new Float32Array(9),$_=new Float32Array(4);function Xs(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let u=Z_[l];if(u===void 0&&(u=new Float32Array(l),Z_[l]=u),e!==0){r.toArray(u,0);for(let f=1,h=0;f!==e;++f)h+=i,s[f].toArray(u,h)}return u}function mn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function gn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function dc(s,e){let i=K_[e];i===void 0&&(i=new Int32Array(e),K_[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function CA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function wA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;s.uniform2fv(this.addr,e),gn(i,e)}}function DA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(mn(i,e))return;s.uniform3fv(this.addr,e),gn(i,e)}}function UA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;s.uniform4fv(this.addr,e),gn(i,e)}}function LA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,r))return;$_.set(r),s.uniformMatrix2fv(this.addr,!1,$_),gn(i,r)}}function NA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,r))return;J_.set(r),s.uniformMatrix3fv(this.addr,!1,J_),gn(i,r)}}function OA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,r))return;Q_.set(r),s.uniformMatrix4fv(this.addr,!1,Q_),gn(i,r)}}function PA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function zA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;s.uniform2iv(this.addr,e),gn(i,e)}}function IA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;s.uniform3iv(this.addr,e),gn(i,e)}}function FA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;s.uniform4iv(this.addr,e),gn(i,e)}}function BA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function HA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;s.uniform2uiv(this.addr,e),gn(i,e)}}function GA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;s.uniform3uiv(this.addr,e),gn(i,e)}}function VA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;s.uniform4uiv(this.addr,e),gn(i,e)}}function kA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?($h.compareFunction=i.isReversedDepthBuffer()?_p:gp,u=$h):u=ux,i.setTexture2D(e||u,l)}function XA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||fx,l)}function WA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||dx,l)}function qA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||cx,l)}function YA(s){switch(s){case 5126:return CA;case 35664:return wA;case 35665:return DA;case 35666:return UA;case 35674:return LA;case 35675:return NA;case 35676:return OA;case 5124:case 35670:return PA;case 35667:case 35671:return zA;case 35668:case 35672:return IA;case 35669:case 35673:return FA;case 5125:return BA;case 36294:return HA;case 36295:return GA;case 36296:return VA;case 35678:case 36198:case 36298:case 36306:case 35682:return kA;case 35679:case 36299:case 36307:return XA;case 35680:case 36300:case 36308:case 36293:return WA;case 36289:case 36303:case 36311:case 36292:return qA}}function jA(s,e){s.uniform1fv(this.addr,e)}function ZA(s,e){const i=Xs(e,this.size,2);s.uniform2fv(this.addr,i)}function KA(s,e){const i=Xs(e,this.size,3);s.uniform3fv(this.addr,i)}function QA(s,e){const i=Xs(e,this.size,4);s.uniform4fv(this.addr,i)}function JA(s,e){const i=Xs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function $A(s,e){const i=Xs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function eR(s,e){const i=Xs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function tR(s,e){s.uniform1iv(this.addr,e)}function nR(s,e){s.uniform2iv(this.addr,e)}function iR(s,e){s.uniform3iv(this.addr,e)}function aR(s,e){s.uniform4iv(this.addr,e)}function rR(s,e){s.uniform1uiv(this.addr,e)}function sR(s,e){s.uniform2uiv(this.addr,e)}function oR(s,e){s.uniform3uiv(this.addr,e)}function lR(s,e){s.uniform4uiv(this.addr,e)}function uR(s,e,i){const r=this.cache,l=e.length,u=dc(i,l);mn(r,u)||(s.uniform1iv(this.addr,u),gn(r,u));let f;this.type===s.SAMPLER_2D_SHADOW?f=$h:f=ux;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||f,u[h])}function cR(s,e,i){const r=this.cache,l=e.length,u=dc(i,l);mn(r,u)||(s.uniform1iv(this.addr,u),gn(r,u));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||fx,u[f])}function fR(s,e,i){const r=this.cache,l=e.length,u=dc(i,l);mn(r,u)||(s.uniform1iv(this.addr,u),gn(r,u));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||dx,u[f])}function dR(s,e,i){const r=this.cache,l=e.length,u=dc(i,l);mn(r,u)||(s.uniform1iv(this.addr,u),gn(r,u));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||cx,u[f])}function hR(s){switch(s){case 5126:return jA;case 35664:return ZA;case 35665:return KA;case 35666:return QA;case 35674:return JA;case 35675:return $A;case 35676:return eR;case 5124:case 35670:return tR;case 35667:case 35671:return nR;case 35668:case 35672:return iR;case 35669:case 35673:return aR;case 5125:return rR;case 36294:return sR;case 36295:return oR;case 36296:return lR;case 35678:case 36198:case 36298:case 36306:case 35682:return uR;case 35679:case 36299:case 36307:return cR;case 35680:case 36300:case 36308:case 36293:return fR;case 36289:case 36303:case 36311:case 36292:return dR}}class pR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=YA(i.type)}}class mR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=hR(i.type)}}class gR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,f=l.length;u!==f;++u){const h=l[u];h.setValue(e,i[h.id],r)}}}const nh=/(\w+)(\])?(\[|\.)?/g;function ev(s,e){s.seq.push(e),s.map[e.id]=e}function _R(s,e,i){const r=s.name,l=r.length;for(nh.lastIndex=0;;){const u=nh.exec(r),f=nh.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){ev(i,p===void 0?new pR(h,s,e):new mR(h,s,e));break}else{let g=i.map[h];g===void 0&&(g=new gR(h),ev(i,g)),i=g}}}class $u{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<r;++f){const h=e.getActiveUniform(i,f),m=e.getUniformLocation(i,h.name);_R(h,m,this)}const l=[],u=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):u.push(f);l.length>0&&(this.seq=l.concat(u))}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,f=i.length;u!==f;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const f=e[l];f.id in i&&r.push(f)}return r}}function tv(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const vR=37297;let xR=0;function SR(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let f=l;f<u;f++){const h=f+1;r.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return r.join(`
`)}const nv=new ft;function yR(s){Tt._getMatrix(nv,Tt.workingColorSpace,s);const e=`mat3( ${nv.elements.map(i=>i.toFixed(4))} )`;switch(Tt.getTransfer(s)){case tc:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function iv(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),u=(s.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const f=/ERROR: 0:(\d+)/.exec(u);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+u+`

`+SR(s.getShaderSource(e),h)}else return u}function MR(s,e){const i=yR(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const ER={[Ov]:"Linear",[Pv]:"Reinhard",[zv]:"Cineon",[up]:"ACESFilmic",[Fv]:"AgX",[Bv]:"Neutral",[Iv]:"Custom"};function bR(s,e){const i=ER[e];return i===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Xu=new le;function TR(){Tt.getLuminanceCoefficients(Xu);const s=Xu.x.toFixed(4),e=Xu.y.toFixed(4),i=Xu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function AR(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ko).join(`
`)}function RR(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function CR(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(e,l),f=u.name;let h=1;u.type===s.FLOAT_MAT2&&(h=2),u.type===s.FLOAT_MAT3&&(h=3),u.type===s.FLOAT_MAT4&&(h=4),i[f]={type:u.type,location:s.getAttribLocation(e,f),locationSize:h}}return i}function Ko(s){return s!==""}function av(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rv(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wR=/^[ \t]*#include +<([\w\d./]+)>/gm;function ep(s){return s.replace(wR,UR)}const DR=new Map;function UR(s,e){let i=dt[e];if(i===void 0){const r=DR.get(e);if(r!==void 0)i=dt[r],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return ep(i)}const LR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sv(s){return s.replace(LR,NR)}function NR(s,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function ov(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const OR={[ju]:"SHADOWMAP_TYPE_PCF",[jo]:"SHADOWMAP_TYPE_VSM"};function PR(s){return OR[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const zR={[Pr]:"ENVMAP_TYPE_CUBE",[Is]:"ENVMAP_TYPE_CUBE",[lc]:"ENVMAP_TYPE_CUBE_UV"};function IR(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":zR[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const FR={[Is]:"ENVMAP_MODE_REFRACTION"};function BR(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":FR[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const HR={[Nv]:"ENVMAP_BLENDING_MULTIPLY",[TE]:"ENVMAP_BLENDING_MIX",[AE]:"ENVMAP_BLENDING_ADD"};function GR(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":HR[s.combine]||"ENVMAP_BLENDING_NONE"}function VR(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function kR(s,e,i,r){const l=s.getContext(),u=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=PR(i),p=IR(i),_=BR(i),g=GR(i),x=VR(i),M=AR(i),b=RR(u),T=l.createProgram();let y,v,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Ko).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Ko).join(`
`),v.length>0&&(v+=`
`)):(y=[ov(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ko).join(`
`),v=[ov(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ki?"#define TONE_MAPPING":"",i.toneMapping!==ki?dt.tonemapping_pars_fragment:"",i.toneMapping!==ki?bR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,MR("linearToOutputTexel",i.outputColorSpace),TR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ko).join(`
`)),f=ep(f),f=av(f,i),f=rv(f,i),h=ep(h),h=av(h,i),h=rv(h,i),f=sv(f),h=sv(h),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===x_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===x_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const D=w+y+f,O=w+v+h,P=tv(l,l.VERTEX_SHADER,D),F=tv(l,l.FRAGMENT_SHADER,O);l.attachShader(T,P),l.attachShader(T,F),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function I(V){if(s.debug.checkShaderErrors){const ae=l.getProgramInfoLog(T)||"",ee=l.getShaderInfoLog(P)||"",pe=l.getShaderInfoLog(F)||"",ce=ae.trim(),U=ee.trim(),B=pe.trim();let $=!0,ne=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,T,P,F);else{const fe=iv(l,P,"vertex"),N=iv(l,F,"fragment");Ct("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ce+`
`+fe+`
`+N)}else ce!==""?st("WebGLProgram: Program Info Log:",ce):(U===""||B==="")&&(ne=!1);ne&&(V.diagnostics={runnable:$,programLog:ce,vertexShader:{log:U,prefix:y},fragmentShader:{log:B,prefix:v}})}l.deleteShader(P),l.deleteShader(F),K=new $u(l,T),C=CR(l,T)}let K;this.getUniforms=function(){return K===void 0&&I(this),K};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let L=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=l.getProgramParameter(T,vR)),L},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=xR++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=P,this.fragmentShader=F,this}let XR=0;class WR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new qR(e),i.set(e,r)),r}}class qR{constructor(e){this.id=XR++,this.code=e,this.usedTimes=0}}function YR(s,e,i,r,l,u,f){const h=new Qv,m=new WR,p=new Set,_=[],g=new Map,x=l.logarithmicDepthBuffer;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return p.add(C),C===0?"uv":`uv${C}`}function y(C,L,V,ae,ee){const pe=ae.fog,ce=ee.geometry,U=C.isMeshStandardMaterial?ae.environment:null,B=(C.isMeshStandardMaterial?i:e).get(C.envMap||U),$=B&&B.mapping===lc?B.image.height:null,ne=b[C.type];C.precision!==null&&(M=l.getMaxPrecision(C.precision),M!==C.precision&&st("WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const fe=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,N=fe!==void 0?fe.length:0;let Z=0;ce.morphAttributes.position!==void 0&&(Z=1),ce.morphAttributes.normal!==void 0&&(Z=2),ce.morphAttributes.color!==void 0&&(Z=3);let me,be,Te,Q;if(ne){const bt=Bi[ne];me=bt.vertexShader,be=bt.fragmentShader}else me=C.vertexShader,be=C.fragmentShader,m.update(C),Te=m.getVertexShaderID(C),Q=m.getFragmentShaderID(C);const oe=s.getRenderTarget(),we=s.state.buffers.depth.getReversed(),Ve=ee.isInstancedMesh===!0,He=ee.isBatchedMesh===!0,ht=!!C.map,$t=!!C.matcap,_t=!!B,pt=!!C.aoMap,wt=!!C.lightMap,ot=!!C.bumpMap,en=!!C.normalMap,G=!!C.displacementMap,jt=!!C.emissiveMap,Et=!!C.metalnessMap,Nt=!!C.roughnessMap,je=C.anisotropy>0,z=C.clearcoat>0,E=C.dispersion>0,W=C.iridescence>0,_e=C.sheen>0,ye=C.transmission>0,he=je&&!!C.anisotropyMap,Ke=z&&!!C.clearcoatMap,Ue=z&&!!C.clearcoatNormalMap,We=z&&!!C.clearcoatRoughnessMap,nt=W&&!!C.iridescenceMap,Ee=W&&!!C.iridescenceThicknessMap,Re=_e&&!!C.sheenColorMap,Be=_e&&!!C.sheenRoughnessMap,Ie=!!C.specularMap,Le=!!C.specularColorMap,ut=!!C.specularIntensityMap,X=ye&&!!C.transmissionMap,Oe=ye&&!!C.thicknessMap,Ce=!!C.gradientMap,Fe=!!C.alphaMap,Me=C.alphaTest>0,Se=!!C.alphaHash,De=!!C.extensions;let it=ki;C.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(it=s.toneMapping);const zt={shaderID:ne,shaderType:C.type,shaderName:C.name,vertexShader:me,fragmentShader:be,defines:C.defines,customVertexShaderID:Te,customFragmentShaderID:Q,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:He,batchingColor:He&&ee._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&ee.instanceColor!==null,instancingMorph:Ve&&ee.morphTexture!==null,outputColorSpace:oe===null?s.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Bs,alphaToCoverage:!!C.alphaToCoverage,map:ht,matcap:$t,envMap:_t,envMapMode:_t&&B.mapping,envMapCubeUVHeight:$,aoMap:pt,lightMap:wt,bumpMap:ot,normalMap:en,displacementMap:G,emissiveMap:jt,normalMapObjectSpace:en&&C.normalMapType===DE,normalMapTangentSpace:en&&C.normalMapType===wE,metalnessMap:Et,roughnessMap:Nt,anisotropy:je,anisotropyMap:he,clearcoat:z,clearcoatMap:Ke,clearcoatNormalMap:Ue,clearcoatRoughnessMap:We,dispersion:E,iridescence:W,iridescenceMap:nt,iridescenceThicknessMap:Ee,sheen:_e,sheenColorMap:Re,sheenRoughnessMap:Be,specularMap:Ie,specularColorMap:Le,specularIntensityMap:ut,transmission:ye,transmissionMap:X,thicknessMap:Oe,gradientMap:Ce,opaque:C.transparent===!1&&C.blending===Os&&C.alphaToCoverage===!1,alphaMap:Fe,alphaTest:Me,alphaHash:Se,combine:C.combine,mapUv:ht&&T(C.map.channel),aoMapUv:pt&&T(C.aoMap.channel),lightMapUv:wt&&T(C.lightMap.channel),bumpMapUv:ot&&T(C.bumpMap.channel),normalMapUv:en&&T(C.normalMap.channel),displacementMapUv:G&&T(C.displacementMap.channel),emissiveMapUv:jt&&T(C.emissiveMap.channel),metalnessMapUv:Et&&T(C.metalnessMap.channel),roughnessMapUv:Nt&&T(C.roughnessMap.channel),anisotropyMapUv:he&&T(C.anisotropyMap.channel),clearcoatMapUv:Ke&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:Be&&T(C.sheenRoughnessMap.channel),specularMapUv:Ie&&T(C.specularMap.channel),specularColorMapUv:Le&&T(C.specularColorMap.channel),specularIntensityMapUv:ut&&T(C.specularIntensityMap.channel),transmissionMapUv:X&&T(C.transmissionMap.channel),thicknessMapUv:Oe&&T(C.thicknessMap.channel),alphaMapUv:Fe&&T(C.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(en||je),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!ce.attributes.uv&&(ht||Fe),fog:!!pe,useFog:C.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:we,skinning:ee.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:Z,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:it,decodeVideoTexture:ht&&C.map.isVideoTexture===!0&&Tt.getTransfer(C.map.colorSpace)===Ht,decodeVideoTextureEmissive:jt&&C.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(C.emissiveMap.colorSpace)===Ht,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Hi,flipSided:C.side===In,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:De&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&C.extensions.multiDraw===!0||He)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return zt.vertexUv1s=p.has(1),zt.vertexUv2s=p.has(2),zt.vertexUv3s=p.has(3),p.clear(),zt}function v(C){const L=[];if(C.shaderID?L.push(C.shaderID):(L.push(C.customVertexShaderID),L.push(C.customFragmentShaderID)),C.defines!==void 0)for(const V in C.defines)L.push(V),L.push(C.defines[V]);return C.isRawShaderMaterial===!1&&(w(L,C),D(L,C),L.push(s.outputColorSpace)),L.push(C.customProgramCacheKey),L.join()}function w(C,L){C.push(L.precision),C.push(L.outputColorSpace),C.push(L.envMapMode),C.push(L.envMapCubeUVHeight),C.push(L.mapUv),C.push(L.alphaMapUv),C.push(L.lightMapUv),C.push(L.aoMapUv),C.push(L.bumpMapUv),C.push(L.normalMapUv),C.push(L.displacementMapUv),C.push(L.emissiveMapUv),C.push(L.metalnessMapUv),C.push(L.roughnessMapUv),C.push(L.anisotropyMapUv),C.push(L.clearcoatMapUv),C.push(L.clearcoatNormalMapUv),C.push(L.clearcoatRoughnessMapUv),C.push(L.iridescenceMapUv),C.push(L.iridescenceThicknessMapUv),C.push(L.sheenColorMapUv),C.push(L.sheenRoughnessMapUv),C.push(L.specularMapUv),C.push(L.specularColorMapUv),C.push(L.specularIntensityMapUv),C.push(L.transmissionMapUv),C.push(L.thicknessMapUv),C.push(L.combine),C.push(L.fogExp2),C.push(L.sizeAttenuation),C.push(L.morphTargetsCount),C.push(L.morphAttributeCount),C.push(L.numDirLights),C.push(L.numPointLights),C.push(L.numSpotLights),C.push(L.numSpotLightMaps),C.push(L.numHemiLights),C.push(L.numRectAreaLights),C.push(L.numDirLightShadows),C.push(L.numPointLightShadows),C.push(L.numSpotLightShadows),C.push(L.numSpotLightShadowsWithMaps),C.push(L.numLightProbes),C.push(L.shadowMapType),C.push(L.toneMapping),C.push(L.numClippingPlanes),C.push(L.numClipIntersection),C.push(L.depthPacking)}function D(C,L){h.disableAll(),L.instancing&&h.enable(0),L.instancingColor&&h.enable(1),L.instancingMorph&&h.enable(2),L.matcap&&h.enable(3),L.envMap&&h.enable(4),L.normalMapObjectSpace&&h.enable(5),L.normalMapTangentSpace&&h.enable(6),L.clearcoat&&h.enable(7),L.iridescence&&h.enable(8),L.alphaTest&&h.enable(9),L.vertexColors&&h.enable(10),L.vertexAlphas&&h.enable(11),L.vertexUv1s&&h.enable(12),L.vertexUv2s&&h.enable(13),L.vertexUv3s&&h.enable(14),L.vertexTangents&&h.enable(15),L.anisotropy&&h.enable(16),L.alphaHash&&h.enable(17),L.batching&&h.enable(18),L.dispersion&&h.enable(19),L.batchingColor&&h.enable(20),L.gradientMap&&h.enable(21),C.push(h.mask),h.disableAll(),L.fog&&h.enable(0),L.useFog&&h.enable(1),L.flatShading&&h.enable(2),L.logarithmicDepthBuffer&&h.enable(3),L.reversedDepthBuffer&&h.enable(4),L.skinning&&h.enable(5),L.morphTargets&&h.enable(6),L.morphNormals&&h.enable(7),L.morphColors&&h.enable(8),L.premultipliedAlpha&&h.enable(9),L.shadowMapEnabled&&h.enable(10),L.doubleSided&&h.enable(11),L.flipSided&&h.enable(12),L.useDepthPacking&&h.enable(13),L.dithering&&h.enable(14),L.transmission&&h.enable(15),L.sheen&&h.enable(16),L.opaque&&h.enable(17),L.pointsUvs&&h.enable(18),L.decodeVideoTexture&&h.enable(19),L.decodeVideoTextureEmissive&&h.enable(20),L.alphaToCoverage&&h.enable(21),C.push(h.mask)}function O(C){const L=b[C.type];let V;if(L){const ae=Bi[L];V=ab.clone(ae.uniforms)}else V=C.uniforms;return V}function P(C,L){let V=g.get(L);return V!==void 0?++V.usedTimes:(V=new kR(s,L,C,u),_.push(V),g.set(L,V)),V}function F(C){if(--C.usedTimes===0){const L=_.indexOf(C);_[L]=_[_.length-1],_.pop(),g.delete(C.cacheKey),C.destroy()}}function I(C){m.remove(C)}function K(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:O,acquireProgram:P,releaseProgram:F,releaseShaderCache:I,programs:_,dispose:K}}function jR(){let s=new WeakMap;function e(f){return s.has(f)}function i(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function r(f){s.delete(f)}function l(f,h,m){s.get(f)[h]=m}function u(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function ZR(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function lv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function uv(){const s=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function f(g,x,M,b,T,y){let v=s[e];return v===void 0?(v={id:g.id,object:g,geometry:x,material:M,groupOrder:b,renderOrder:g.renderOrder,z:T,group:y},s[e]=v):(v.id=g.id,v.object=g,v.geometry=x,v.material=M,v.groupOrder=b,v.renderOrder=g.renderOrder,v.z=T,v.group=y),e++,v}function h(g,x,M,b,T,y){const v=f(g,x,M,b,T,y);M.transmission>0?r.push(v):M.transparent===!0?l.push(v):i.push(v)}function m(g,x,M,b,T,y){const v=f(g,x,M,b,T,y);M.transmission>0?r.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function p(g,x){i.length>1&&i.sort(g||ZR),r.length>1&&r.sort(x||lv),l.length>1&&l.sort(x||lv)}function _(){for(let g=e,x=s.length;g<x;g++){const M=s[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:_,sort:p}}function KR(){let s=new WeakMap;function e(r,l){const u=s.get(r);let f;return u===void 0?(f=new uv,s.set(r,[f])):l>=u.length?(f=new uv,u.push(f)):f=u[l],f}function i(){s=new WeakMap}return{get:e,dispose:i}}function QR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new le,color:new St};break;case"SpotLight":i={position:new le,direction:new le,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new le,color:new St,distance:0,decay:0};break;case"HemisphereLight":i={direction:new le,skyColor:new St,groundColor:new St};break;case"RectAreaLight":i={color:new St,position:new le,halfWidth:new le,halfHeight:new le};break}return s[e.id]=i,i}}}function JR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let $R=0;function eC(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function tC(s){const e=new QR,i=JR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new le);const l=new le,u=new Jt,f=new Jt;function h(p){let _=0,g=0,x=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let M=0,b=0,T=0,y=0,v=0,w=0,D=0,O=0,P=0,F=0,I=0;p.sort(eC);for(let C=0,L=p.length;C<L;C++){const V=p[C],ae=V.color,ee=V.intensity,pe=V.distance;let ce=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Fs?ce=V.shadow.map.texture:ce=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)_+=ae.r*ee,g+=ae.g*ee,x+=ae.b*ee;else if(V.isLightProbe){for(let U=0;U<9;U++)r.probe[U].addScaledVector(V.sh.coefficients[U],ee);I++}else if(V.isDirectionalLight){const U=e.get(V);if(U.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const B=V.shadow,$=i.get(V);$.shadowIntensity=B.intensity,$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,r.directionalShadow[M]=$,r.directionalShadowMap[M]=ce,r.directionalShadowMatrix[M]=V.shadow.matrix,w++}r.directional[M]=U,M++}else if(V.isSpotLight){const U=e.get(V);U.position.setFromMatrixPosition(V.matrixWorld),U.color.copy(ae).multiplyScalar(ee),U.distance=pe,U.coneCos=Math.cos(V.angle),U.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),U.decay=V.decay,r.spot[T]=U;const B=V.shadow;if(V.map&&(r.spotLightMap[P]=V.map,P++,B.updateMatrices(V),V.castShadow&&F++),r.spotLightMatrix[T]=B.matrix,V.castShadow){const $=i.get(V);$.shadowIntensity=B.intensity,$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,r.spotShadow[T]=$,r.spotShadowMap[T]=ce,O++}T++}else if(V.isRectAreaLight){const U=e.get(V);U.color.copy(ae).multiplyScalar(ee),U.halfWidth.set(V.width*.5,0,0),U.halfHeight.set(0,V.height*.5,0),r.rectArea[y]=U,y++}else if(V.isPointLight){const U=e.get(V);if(U.color.copy(V.color).multiplyScalar(V.intensity),U.distance=V.distance,U.decay=V.decay,V.castShadow){const B=V.shadow,$=i.get(V);$.shadowIntensity=B.intensity,$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,$.shadowCameraNear=B.camera.near,$.shadowCameraFar=B.camera.far,r.pointShadow[b]=$,r.pointShadowMap[b]=ce,r.pointShadowMatrix[b]=V.shadow.matrix,D++}r.point[b]=U,b++}else if(V.isHemisphereLight){const U=e.get(V);U.skyColor.copy(V.color).multiplyScalar(ee),U.groundColor.copy(V.groundColor).multiplyScalar(ee),r.hemi[v]=U,v++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ze.LTC_FLOAT_1,r.rectAreaLTC2=ze.LTC_FLOAT_2):(r.rectAreaLTC1=ze.LTC_HALF_1,r.rectAreaLTC2=ze.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=g,r.ambient[2]=x;const K=r.hash;(K.directionalLength!==M||K.pointLength!==b||K.spotLength!==T||K.rectAreaLength!==y||K.hemiLength!==v||K.numDirectionalShadows!==w||K.numPointShadows!==D||K.numSpotShadows!==O||K.numSpotMaps!==P||K.numLightProbes!==I)&&(r.directional.length=M,r.spot.length=T,r.rectArea.length=y,r.point.length=b,r.hemi.length=v,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=O,r.spotShadowMap.length=O,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=O+P-F,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=I,K.directionalLength=M,K.pointLength=b,K.spotLength=T,K.rectAreaLength=y,K.hemiLength=v,K.numDirectionalShadows=w,K.numPointShadows=D,K.numSpotShadows=O,K.numSpotMaps=P,K.numLightProbes=I,r.version=$R++)}function m(p,_){let g=0,x=0,M=0,b=0,T=0;const y=_.matrixWorldInverse;for(let v=0,w=p.length;v<w;v++){const D=p[v];if(D.isDirectionalLight){const O=r.directional[g];O.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(y),g++}else if(D.isSpotLight){const O=r.spot[M];O.position.setFromMatrixPosition(D.matrixWorld),O.position.applyMatrix4(y),O.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(y),M++}else if(D.isRectAreaLight){const O=r.rectArea[b];O.position.setFromMatrixPosition(D.matrixWorld),O.position.applyMatrix4(y),f.identity(),u.copy(D.matrixWorld),u.premultiply(y),f.extractRotation(u),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),O.halfWidth.applyMatrix4(f),O.halfHeight.applyMatrix4(f),b++}else if(D.isPointLight){const O=r.point[x];O.position.setFromMatrixPosition(D.matrixWorld),O.position.applyMatrix4(y),x++}else if(D.isHemisphereLight){const O=r.hemi[T];O.direction.setFromMatrixPosition(D.matrixWorld),O.direction.transformDirection(y),T++}}}return{setup:h,setupView:m,state:r}}function cv(s){const e=new tC(s),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function u(_){i.push(_)}function f(_){r.push(_)}function h(){e.setup(i)}function m(_){e.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:f}}function nC(s){let e=new WeakMap;function i(l,u=0){const f=e.get(l);let h;return f===void 0?(h=new cv(s),e.set(l,[h])):u>=f.length?(h=new cv(s),f.push(h)):h=f[u],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const iC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,rC=[new le(1,0,0),new le(-1,0,0),new le(0,1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1)],sC=[new le(0,-1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1),new le(0,-1,0),new le(0,-1,0)],fv=new Jt,Yo=new le,ih=new le;function oC(s,e,i){let r=new xp;const l=new Pt,u=new Pt,f=new an,h=new vb,m=new xb,p={},_=i.maxTextureSize,g={[ya]:In,[In]:ya,[Hi]:Hi},x=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:iC,fragmentShader:aC}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const b=new yi;b.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new xi(b,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ju;let v=this.type;this.render=function(F,I,K){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;F.type===sE&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),F.type=ju);const C=s.getRenderTarget(),L=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),ae=s.state;ae.setBlending(va),ae.buffers.depth.getReversed()===!0?ae.buffers.color.setClear(0,0,0,0):ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const ee=v!==this.type;ee&&I.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach(ce=>ce.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,ce=F.length;pe<ce;pe++){const U=F[pe],B=U.shadow;if(B===void 0){st("WebGLShadowMap:",U,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const $=B.getFrameExtents();if(l.multiply($),u.copy(B.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/$.x),l.x=u.x*$.x,B.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/$.y),l.y=u.y*$.y,B.mapSize.y=u.y)),B.map===null||ee===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===jo){if(U.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Xi(l.x,l.y,{format:Fs,type:Ma,minFilter:On,magFilter:On,generateMipmaps:!1}),B.map.texture.name=U.name+".shadowMap",B.map.depthTexture=new nl(l.x,l.y,Gi),B.map.depthTexture.name=U.name+".shadowMapDepth",B.map.depthTexture.format=Ea,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=wn,B.map.depthTexture.magFilter=wn}else{U.isPointLight?(B.map=new rx(l.x),B.map.depthTexture=new gb(l.x,qi)):(B.map=new Xi(l.x,l.y),B.map.depthTexture=new nl(l.x,l.y,qi)),B.map.depthTexture.name=U.name+".shadowMap",B.map.depthTexture.format=Ea;const fe=s.state.buffers.depth.getReversed();this.type===ju?(B.map.depthTexture.compareFunction=fe?_p:gp,B.map.depthTexture.minFilter=On,B.map.depthTexture.magFilter=On):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=wn,B.map.depthTexture.magFilter=wn)}B.camera.updateProjectionMatrix()}const ne=B.map.isWebGLCubeRenderTarget?6:1;for(let fe=0;fe<ne;fe++){if(B.map.isWebGLCubeRenderTarget)s.setRenderTarget(B.map,fe),s.clear();else{fe===0&&(s.setRenderTarget(B.map),s.clear());const N=B.getViewport(fe);f.set(u.x*N.x,u.y*N.y,u.x*N.z,u.y*N.w),ae.viewport(f)}if(U.isPointLight){const N=B.camera,Z=B.matrix,me=U.distance||N.far;me!==N.far&&(N.far=me,N.updateProjectionMatrix()),Yo.setFromMatrixPosition(U.matrixWorld),N.position.copy(Yo),ih.copy(N.position),ih.add(rC[fe]),N.up.copy(sC[fe]),N.lookAt(ih),N.updateMatrixWorld(),Z.makeTranslation(-Yo.x,-Yo.y,-Yo.z),fv.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),B._frustum.setFromProjectionMatrix(fv,N.coordinateSystem,N.reversedDepth)}else B.updateMatrices(U);r=B.getFrustum(),O(I,K,B.camera,U,this.type)}B.isPointLightShadow!==!0&&this.type===jo&&w(B,K),B.needsUpdate=!1}v=this.type,y.needsUpdate=!1,s.setRenderTarget(C,L,V)};function w(F,I){const K=e.update(T);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Xi(l.x,l.y,{format:Fs,type:Ma})),x.uniforms.shadow_pass.value=F.map.depthTexture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(I,null,K,x,T,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(I,null,K,M,T,null)}function D(F,I,K,C){let L=null;const V=K.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(V!==void 0)L=V;else if(L=K.isPointLight===!0?m:h,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const ae=L.uuid,ee=I.uuid;let pe=p[ae];pe===void 0&&(pe={},p[ae]=pe);let ce=pe[ee];ce===void 0&&(ce=L.clone(),pe[ee]=ce,I.addEventListener("dispose",P)),L=ce}if(L.visible=I.visible,L.wireframe=I.wireframe,C===jo?L.side=I.shadowSide!==null?I.shadowSide:I.side:L.side=I.shadowSide!==null?I.shadowSide:g[I.side],L.alphaMap=I.alphaMap,L.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,L.map=I.map,L.clipShadows=I.clipShadows,L.clippingPlanes=I.clippingPlanes,L.clipIntersection=I.clipIntersection,L.displacementMap=I.displacementMap,L.displacementScale=I.displacementScale,L.displacementBias=I.displacementBias,L.wireframeLinewidth=I.wireframeLinewidth,L.linewidth=I.linewidth,K.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const ae=s.properties.get(L);ae.light=K}return L}function O(F,I,K,C,L){if(F.visible===!1)return;if(F.layers.test(I.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&L===jo)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,F.matrixWorld);const ee=e.update(F),pe=F.material;if(Array.isArray(pe)){const ce=ee.groups;for(let U=0,B=ce.length;U<B;U++){const $=ce[U],ne=pe[$.materialIndex];if(ne&&ne.visible){const fe=D(F,ne,C,L);F.onBeforeShadow(s,F,I,K,ee,fe,$),s.renderBufferDirect(K,null,ee,fe,F,$),F.onAfterShadow(s,F,I,K,ee,fe,$)}}}else if(pe.visible){const ce=D(F,pe,C,L);F.onBeforeShadow(s,F,I,K,ee,ce,null),s.renderBufferDirect(K,null,ee,ce,F,null),F.onAfterShadow(s,F,I,K,ee,ce,null)}}const ae=F.children;for(let ee=0,pe=ae.length;ee<pe;ee++)O(ae[ee],I,K,C,L)}function P(F){F.target.removeEventListener("dispose",P);for(const K in p){const C=p[K],L=F.target.uuid;L in C&&(C[L].dispose(),delete C[L])}}}const lC={[lh]:uh,[ch]:hh,[fh]:ph,[zs]:dh,[uh]:lh,[hh]:ch,[ph]:fh,[dh]:zs};function uC(s,e){function i(){let X=!1;const Oe=new an;let Ce=null;const Fe=new an(0,0,0,0);return{setMask:function(Me){Ce!==Me&&!X&&(s.colorMask(Me,Me,Me,Me),Ce=Me)},setLocked:function(Me){X=Me},setClear:function(Me,Se,De,it,zt){zt===!0&&(Me*=it,Se*=it,De*=it),Oe.set(Me,Se,De,it),Fe.equals(Oe)===!1&&(s.clearColor(Me,Se,De,it),Fe.copy(Oe))},reset:function(){X=!1,Ce=null,Fe.set(-1,0,0,0)}}}function r(){let X=!1,Oe=!1,Ce=null,Fe=null,Me=null;return{setReversed:function(Se){if(Oe!==Se){const De=e.get("EXT_clip_control");Se?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),Oe=Se;const it=Me;Me=null,this.setClear(it)}},getReversed:function(){return Oe},setTest:function(Se){Se?oe(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(Se){Ce!==Se&&!X&&(s.depthMask(Se),Ce=Se)},setFunc:function(Se){if(Oe&&(Se=lC[Se]),Fe!==Se){switch(Se){case lh:s.depthFunc(s.NEVER);break;case uh:s.depthFunc(s.ALWAYS);break;case ch:s.depthFunc(s.LESS);break;case zs:s.depthFunc(s.LEQUAL);break;case fh:s.depthFunc(s.EQUAL);break;case dh:s.depthFunc(s.GEQUAL);break;case hh:s.depthFunc(s.GREATER);break;case ph:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Fe=Se}},setLocked:function(Se){X=Se},setClear:function(Se){Me!==Se&&(Oe&&(Se=1-Se),s.clearDepth(Se),Me=Se)},reset:function(){X=!1,Ce=null,Fe=null,Me=null,Oe=!1}}}function l(){let X=!1,Oe=null,Ce=null,Fe=null,Me=null,Se=null,De=null,it=null,zt=null;return{setTest:function(bt){X||(bt?oe(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(bt){Oe!==bt&&!X&&(s.stencilMask(bt),Oe=bt)},setFunc:function(bt,Dn,Mi){(Ce!==bt||Fe!==Dn||Me!==Mi)&&(s.stencilFunc(bt,Dn,Mi),Ce=bt,Fe=Dn,Me=Mi)},setOp:function(bt,Dn,Mi){(Se!==bt||De!==Dn||it!==Mi)&&(s.stencilOp(bt,Dn,Mi),Se=bt,De=Dn,it=Mi)},setLocked:function(bt){X=bt},setClear:function(bt){zt!==bt&&(s.clearStencil(bt),zt=bt)},reset:function(){X=!1,Oe=null,Ce=null,Fe=null,Me=null,Se=null,De=null,it=null,zt=null}}}const u=new i,f=new r,h=new l,m=new WeakMap,p=new WeakMap;let _={},g={},x=new WeakMap,M=[],b=null,T=!1,y=null,v=null,w=null,D=null,O=null,P=null,F=null,I=new St(0,0,0),K=0,C=!1,L=null,V=null,ae=null,ee=null,pe=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,B=0;const $=s.getParameter(s.VERSION);$.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec($)[1]),U=B>=1):$.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),U=B>=2);let ne=null,fe={};const N=s.getParameter(s.SCISSOR_BOX),Z=s.getParameter(s.VIEWPORT),me=new an().fromArray(N),be=new an().fromArray(Z);function Te(X,Oe,Ce,Fe){const Me=new Uint8Array(4),Se=s.createTexture();s.bindTexture(X,Se),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let De=0;De<Ce;De++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Oe,0,s.RGBA,1,1,Fe,0,s.RGBA,s.UNSIGNED_BYTE,Me):s.texImage2D(Oe+De,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Me);return Se}const Q={};Q[s.TEXTURE_2D]=Te(s.TEXTURE_2D,s.TEXTURE_2D,1),Q[s.TEXTURE_CUBE_MAP]=Te(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[s.TEXTURE_2D_ARRAY]=Te(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Q[s.TEXTURE_3D]=Te(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),h.setClear(0),oe(s.DEPTH_TEST),f.setFunc(zs),ot(!1),en(p_),oe(s.CULL_FACE),pt(va);function oe(X){_[X]!==!0&&(s.enable(X),_[X]=!0)}function we(X){_[X]!==!1&&(s.disable(X),_[X]=!1)}function Ve(X,Oe){return g[X]!==Oe?(s.bindFramebuffer(X,Oe),g[X]=Oe,X===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Oe),X===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Oe),!0):!1}function He(X,Oe){let Ce=M,Fe=!1;if(X){Ce=x.get(Oe),Ce===void 0&&(Ce=[],x.set(Oe,Ce));const Me=X.textures;if(Ce.length!==Me.length||Ce[0]!==s.COLOR_ATTACHMENT0){for(let Se=0,De=Me.length;Se<De;Se++)Ce[Se]=s.COLOR_ATTACHMENT0+Se;Ce.length=Me.length,Fe=!0}}else Ce[0]!==s.BACK&&(Ce[0]=s.BACK,Fe=!0);Fe&&s.drawBuffers(Ce)}function ht(X){return b!==X?(s.useProgram(X),b=X,!0):!1}const $t={[Ur]:s.FUNC_ADD,[lE]:s.FUNC_SUBTRACT,[uE]:s.FUNC_REVERSE_SUBTRACT};$t[cE]=s.MIN,$t[fE]=s.MAX;const _t={[dE]:s.ZERO,[hE]:s.ONE,[pE]:s.SRC_COLOR,[sh]:s.SRC_ALPHA,[SE]:s.SRC_ALPHA_SATURATE,[vE]:s.DST_COLOR,[gE]:s.DST_ALPHA,[mE]:s.ONE_MINUS_SRC_COLOR,[oh]:s.ONE_MINUS_SRC_ALPHA,[xE]:s.ONE_MINUS_DST_COLOR,[_E]:s.ONE_MINUS_DST_ALPHA,[yE]:s.CONSTANT_COLOR,[ME]:s.ONE_MINUS_CONSTANT_COLOR,[EE]:s.CONSTANT_ALPHA,[bE]:s.ONE_MINUS_CONSTANT_ALPHA};function pt(X,Oe,Ce,Fe,Me,Se,De,it,zt,bt){if(X===va){T===!0&&(we(s.BLEND),T=!1);return}if(T===!1&&(oe(s.BLEND),T=!0),X!==oE){if(X!==y||bt!==C){if((v!==Ur||O!==Ur)&&(s.blendEquation(s.FUNC_ADD),v=Ur,O=Ur),bt)switch(X){case Os:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ns:s.blendFunc(s.ONE,s.ONE);break;case m_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case g_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ct("WebGLState: Invalid blending: ",X);break}else switch(X){case Os:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ns:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case m_:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case g_:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",X);break}w=null,D=null,P=null,F=null,I.set(0,0,0),K=0,y=X,C=bt}return}Me=Me||Oe,Se=Se||Ce,De=De||Fe,(Oe!==v||Me!==O)&&(s.blendEquationSeparate($t[Oe],$t[Me]),v=Oe,O=Me),(Ce!==w||Fe!==D||Se!==P||De!==F)&&(s.blendFuncSeparate(_t[Ce],_t[Fe],_t[Se],_t[De]),w=Ce,D=Fe,P=Se,F=De),(it.equals(I)===!1||zt!==K)&&(s.blendColor(it.r,it.g,it.b,zt),I.copy(it),K=zt),y=X,C=!1}function wt(X,Oe){X.side===Hi?we(s.CULL_FACE):oe(s.CULL_FACE);let Ce=X.side===In;Oe&&(Ce=!Ce),ot(Ce),X.blending===Os&&X.transparent===!1?pt(va):pt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),u.setMask(X.colorWrite);const Fe=X.stencilWrite;h.setTest(Fe),Fe&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),jt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?oe(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function ot(X){L!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),L=X)}function en(X){X!==aE?(oe(s.CULL_FACE),X!==V&&(X===p_?s.cullFace(s.BACK):X===rE?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),V=X}function G(X){X!==ae&&(U&&s.lineWidth(X),ae=X)}function jt(X,Oe,Ce){X?(oe(s.POLYGON_OFFSET_FILL),(ee!==Oe||pe!==Ce)&&(s.polygonOffset(Oe,Ce),ee=Oe,pe=Ce)):we(s.POLYGON_OFFSET_FILL)}function Et(X){X?oe(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function Nt(X){X===void 0&&(X=s.TEXTURE0+ce-1),ne!==X&&(s.activeTexture(X),ne=X)}function je(X,Oe,Ce){Ce===void 0&&(ne===null?Ce=s.TEXTURE0+ce-1:Ce=ne);let Fe=fe[Ce];Fe===void 0&&(Fe={type:void 0,texture:void 0},fe[Ce]=Fe),(Fe.type!==X||Fe.texture!==Oe)&&(ne!==Ce&&(s.activeTexture(Ce),ne=Ce),s.bindTexture(X,Oe||Q[X]),Fe.type=X,Fe.texture=Oe)}function z(){const X=fe[ne];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(X){Ct("WebGLState:",X)}}function W(){try{s.compressedTexImage3D(...arguments)}catch(X){Ct("WebGLState:",X)}}function _e(){try{s.texSubImage2D(...arguments)}catch(X){Ct("WebGLState:",X)}}function ye(){try{s.texSubImage3D(...arguments)}catch(X){Ct("WebGLState:",X)}}function he(){try{s.compressedTexSubImage2D(...arguments)}catch(X){Ct("WebGLState:",X)}}function Ke(){try{s.compressedTexSubImage3D(...arguments)}catch(X){Ct("WebGLState:",X)}}function Ue(){try{s.texStorage2D(...arguments)}catch(X){Ct("WebGLState:",X)}}function We(){try{s.texStorage3D(...arguments)}catch(X){Ct("WebGLState:",X)}}function nt(){try{s.texImage2D(...arguments)}catch(X){Ct("WebGLState:",X)}}function Ee(){try{s.texImage3D(...arguments)}catch(X){Ct("WebGLState:",X)}}function Re(X){me.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),me.copy(X))}function Be(X){be.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),be.copy(X))}function Ie(X,Oe){let Ce=p.get(Oe);Ce===void 0&&(Ce=new WeakMap,p.set(Oe,Ce));let Fe=Ce.get(X);Fe===void 0&&(Fe=s.getUniformBlockIndex(Oe,X.name),Ce.set(X,Fe))}function Le(X,Oe){const Fe=p.get(Oe).get(X);m.get(Oe)!==Fe&&(s.uniformBlockBinding(Oe,Fe,X.__bindingPointIndex),m.set(Oe,Fe))}function ut(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},ne=null,fe={},g={},x=new WeakMap,M=[],b=null,T=!1,y=null,v=null,w=null,D=null,O=null,P=null,F=null,I=new St(0,0,0),K=0,C=!1,L=null,V=null,ae=null,ee=null,pe=null,me.set(0,0,s.canvas.width,s.canvas.height),be.set(0,0,s.canvas.width,s.canvas.height),u.reset(),f.reset(),h.reset()}return{buffers:{color:u,depth:f,stencil:h},enable:oe,disable:we,bindFramebuffer:Ve,drawBuffers:He,useProgram:ht,setBlending:pt,setMaterial:wt,setFlipSided:ot,setCullFace:en,setLineWidth:G,setPolygonOffset:jt,setScissorTest:Et,activeTexture:Nt,bindTexture:je,unbindTexture:z,compressedTexImage2D:E,compressedTexImage3D:W,texImage2D:nt,texImage3D:Ee,updateUBOMapping:Ie,uniformBlockBinding:Le,texStorage2D:Ue,texStorage3D:We,texSubImage2D:_e,texSubImage3D:ye,compressedTexSubImage2D:he,compressedTexSubImage3D:Ke,scissor:Re,viewport:Be,reset:ut}}function cC(s,e,i,r,l,u,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Pt,_=new WeakMap;let g;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(z,E){return M?new OffscreenCanvas(z,E):ic("canvas")}function T(z,E,W){let _e=1;const ye=je(z);if((ye.width>W||ye.height>W)&&(_e=W/Math.max(ye.width,ye.height)),_e<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const he=Math.floor(_e*ye.width),Ke=Math.floor(_e*ye.height);g===void 0&&(g=b(he,Ke));const Ue=E?b(he,Ke):g;return Ue.width=he,Ue.height=Ke,Ue.getContext("2d").drawImage(z,0,0,he,Ke),st("WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+he+"x"+Ke+")."),Ue}else return"data"in z&&st("WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),z;return z}function y(z){return z.generateMipmaps}function v(z){s.generateMipmap(z)}function w(z){return z.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?s.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(z,E,W,_e,ye=!1){if(z!==null){if(s[z]!==void 0)return s[z];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let he=E;if(E===s.RED&&(W===s.FLOAT&&(he=s.R32F),W===s.HALF_FLOAT&&(he=s.R16F),W===s.UNSIGNED_BYTE&&(he=s.R8)),E===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(he=s.R8UI),W===s.UNSIGNED_SHORT&&(he=s.R16UI),W===s.UNSIGNED_INT&&(he=s.R32UI),W===s.BYTE&&(he=s.R8I),W===s.SHORT&&(he=s.R16I),W===s.INT&&(he=s.R32I)),E===s.RG&&(W===s.FLOAT&&(he=s.RG32F),W===s.HALF_FLOAT&&(he=s.RG16F),W===s.UNSIGNED_BYTE&&(he=s.RG8)),E===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(he=s.RG8UI),W===s.UNSIGNED_SHORT&&(he=s.RG16UI),W===s.UNSIGNED_INT&&(he=s.RG32UI),W===s.BYTE&&(he=s.RG8I),W===s.SHORT&&(he=s.RG16I),W===s.INT&&(he=s.RG32I)),E===s.RGB_INTEGER&&(W===s.UNSIGNED_BYTE&&(he=s.RGB8UI),W===s.UNSIGNED_SHORT&&(he=s.RGB16UI),W===s.UNSIGNED_INT&&(he=s.RGB32UI),W===s.BYTE&&(he=s.RGB8I),W===s.SHORT&&(he=s.RGB16I),W===s.INT&&(he=s.RGB32I)),E===s.RGBA_INTEGER&&(W===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),W===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),W===s.UNSIGNED_INT&&(he=s.RGBA32UI),W===s.BYTE&&(he=s.RGBA8I),W===s.SHORT&&(he=s.RGBA16I),W===s.INT&&(he=s.RGBA32I)),E===s.RGB&&(W===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),W===s.UNSIGNED_INT_10F_11F_11F_REV&&(he=s.R11F_G11F_B10F)),E===s.RGBA){const Ke=ye?tc:Tt.getTransfer(_e);W===s.FLOAT&&(he=s.RGBA32F),W===s.HALF_FLOAT&&(he=s.RGBA16F),W===s.UNSIGNED_BYTE&&(he=Ke===Ht?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function O(z,E){let W;return z?E===null||E===qi||E===el?W=s.DEPTH24_STENCIL8:E===Gi?W=s.DEPTH32F_STENCIL8:E===$o&&(W=s.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===qi||E===el?W=s.DEPTH_COMPONENT24:E===Gi?W=s.DEPTH_COMPONENT32F:E===$o&&(W=s.DEPTH_COMPONENT16),W}function P(z,E){return y(z)===!0||z.isFramebufferTexture&&z.minFilter!==wn&&z.minFilter!==On?Math.log2(Math.max(E.width,E.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?E.mipmaps.length:1}function F(z){const E=z.target;E.removeEventListener("dispose",F),K(E),E.isVideoTexture&&_.delete(E)}function I(z){const E=z.target;E.removeEventListener("dispose",I),L(E)}function K(z){const E=r.get(z);if(E.__webglInit===void 0)return;const W=z.source,_e=x.get(W);if(_e){const ye=_e[E.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&C(z),Object.keys(_e).length===0&&x.delete(W)}r.remove(z)}function C(z){const E=r.get(z);s.deleteTexture(E.__webglTexture);const W=z.source,_e=x.get(W);delete _e[E.__cacheKey],f.memory.textures--}function L(z){const E=r.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),r.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(E.__webglFramebuffer[_e]))for(let ye=0;ye<E.__webglFramebuffer[_e].length;ye++)s.deleteFramebuffer(E.__webglFramebuffer[_e][ye]);else s.deleteFramebuffer(E.__webglFramebuffer[_e]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[_e])}else{if(Array.isArray(E.__webglFramebuffer))for(let _e=0;_e<E.__webglFramebuffer.length;_e++)s.deleteFramebuffer(E.__webglFramebuffer[_e]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let _e=0;_e<E.__webglColorRenderbuffer.length;_e++)E.__webglColorRenderbuffer[_e]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[_e]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=z.textures;for(let _e=0,ye=W.length;_e<ye;_e++){const he=r.get(W[_e]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),f.memory.textures--),r.remove(W[_e])}r.remove(z)}let V=0;function ae(){V=0}function ee(){const z=V;return z>=l.maxTextures&&st("WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+l.maxTextures),V+=1,z}function pe(z){const E=[];return E.push(z.wrapS),E.push(z.wrapT),E.push(z.wrapR||0),E.push(z.magFilter),E.push(z.minFilter),E.push(z.anisotropy),E.push(z.internalFormat),E.push(z.format),E.push(z.type),E.push(z.generateMipmaps),E.push(z.premultiplyAlpha),E.push(z.flipY),E.push(z.unpackAlignment),E.push(z.colorSpace),E.join()}function ce(z,E){const W=r.get(z);if(z.isVideoTexture&&Et(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&W.__version!==z.version){const _e=z.image;if(_e===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{Q(W,z,E);return}}else z.isExternalTexture&&(W.__webglTexture=z.sourceTexture?z.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+E)}function U(z,E){const W=r.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&W.__version!==z.version){Q(W,z,E);return}else z.isExternalTexture&&(W.__webglTexture=z.sourceTexture?z.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+E)}function B(z,E){const W=r.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&W.__version!==z.version){Q(W,z,E);return}i.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+E)}function $(z,E){const W=r.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&W.__version!==z.version){oe(W,z,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+E)}const ne={[_h]:s.REPEAT,[ga]:s.CLAMP_TO_EDGE,[vh]:s.MIRRORED_REPEAT},fe={[wn]:s.NEAREST,[RE]:s.NEAREST_MIPMAP_NEAREST,[Eu]:s.NEAREST_MIPMAP_LINEAR,[On]:s.LINEAR,[Ad]:s.LINEAR_MIPMAP_NEAREST,[Nr]:s.LINEAR_MIPMAP_LINEAR},N={[UE]:s.NEVER,[zE]:s.ALWAYS,[LE]:s.LESS,[gp]:s.LEQUAL,[NE]:s.EQUAL,[_p]:s.GEQUAL,[OE]:s.GREATER,[PE]:s.NOTEQUAL};function Z(z,E){if(E.type===Gi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===On||E.magFilter===Ad||E.magFilter===Eu||E.magFilter===Nr||E.minFilter===On||E.minFilter===Ad||E.minFilter===Eu||E.minFilter===Nr)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(z,s.TEXTURE_WRAP_S,ne[E.wrapS]),s.texParameteri(z,s.TEXTURE_WRAP_T,ne[E.wrapT]),(z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY)&&s.texParameteri(z,s.TEXTURE_WRAP_R,ne[E.wrapR]),s.texParameteri(z,s.TEXTURE_MAG_FILTER,fe[E.magFilter]),s.texParameteri(z,s.TEXTURE_MIN_FILTER,fe[E.minFilter]),E.compareFunction&&(s.texParameteri(z,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(z,s.TEXTURE_COMPARE_FUNC,N[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===wn||E.minFilter!==Eu&&E.minFilter!==Nr||E.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");s.texParameterf(z,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function me(z,E){let W=!1;z.__webglInit===void 0&&(z.__webglInit=!0,E.addEventListener("dispose",F));const _e=E.source;let ye=x.get(_e);ye===void 0&&(ye={},x.set(_e,ye));const he=pe(E);if(he!==z.__cacheKey){ye[he]===void 0&&(ye[he]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,W=!0),ye[he].usedTimes++;const Ke=ye[z.__cacheKey];Ke!==void 0&&(ye[z.__cacheKey].usedTimes--,Ke.usedTimes===0&&C(E)),z.__cacheKey=he,z.__webglTexture=ye[he].texture}return W}function be(z,E,W){return Math.floor(Math.floor(z/W)/E)}function Te(z,E,W,_e){const he=z.updateRanges;if(he.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,W,_e,E.data);else{he.sort((Ee,Re)=>Ee.start-Re.start);let Ke=0;for(let Ee=1;Ee<he.length;Ee++){const Re=he[Ke],Be=he[Ee],Ie=Re.start+Re.count,Le=be(Be.start,E.width,4),ut=be(Re.start,E.width,4);Be.start<=Ie+1&&Le===ut&&be(Be.start+Be.count-1,E.width,4)===Le?Re.count=Math.max(Re.count,Be.start+Be.count-Re.start):(++Ke,he[Ke]=Be)}he.length=Ke+1;const Ue=s.getParameter(s.UNPACK_ROW_LENGTH),We=s.getParameter(s.UNPACK_SKIP_PIXELS),nt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Ee=0,Re=he.length;Ee<Re;Ee++){const Be=he[Ee],Ie=Math.floor(Be.start/4),Le=Math.ceil(Be.count/4),ut=Ie%E.width,X=Math.floor(Ie/E.width),Oe=Le,Ce=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ut),s.pixelStorei(s.UNPACK_SKIP_ROWS,X),i.texSubImage2D(s.TEXTURE_2D,0,ut,X,Oe,Ce,W,_e,E.data)}z.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ue),s.pixelStorei(s.UNPACK_SKIP_PIXELS,We),s.pixelStorei(s.UNPACK_SKIP_ROWS,nt)}}function Q(z,E,W){let _e=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(_e=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(_e=s.TEXTURE_3D);const ye=me(z,E),he=E.source;i.bindTexture(_e,z.__webglTexture,s.TEXTURE0+W);const Ke=r.get(he);if(he.version!==Ke.__version||ye===!0){i.activeTexture(s.TEXTURE0+W);const Ue=Tt.getPrimaries(Tt.workingColorSpace),We=E.colorSpace===ar?null:Tt.getPrimaries(E.colorSpace),nt=E.colorSpace===ar||Ue===We?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let Ee=T(E.image,!1,l.maxTextureSize);Ee=Nt(E,Ee);const Re=u.convert(E.format,E.colorSpace),Be=u.convert(E.type);let Ie=D(E.internalFormat,Re,Be,E.colorSpace,E.isVideoTexture);Z(_e,E);let Le;const ut=E.mipmaps,X=E.isVideoTexture!==!0,Oe=Ke.__version===void 0||ye===!0,Ce=he.dataReady,Fe=P(E,Ee);if(E.isDepthTexture)Ie=O(E.format===Or,E.type),Oe&&(X?i.texStorage2D(s.TEXTURE_2D,1,Ie,Ee.width,Ee.height):i.texImage2D(s.TEXTURE_2D,0,Ie,Ee.width,Ee.height,0,Re,Be,null));else if(E.isDataTexture)if(ut.length>0){X&&Oe&&i.texStorage2D(s.TEXTURE_2D,Fe,Ie,ut[0].width,ut[0].height);for(let Me=0,Se=ut.length;Me<Se;Me++)Le=ut[Me],X?Ce&&i.texSubImage2D(s.TEXTURE_2D,Me,0,0,Le.width,Le.height,Re,Be,Le.data):i.texImage2D(s.TEXTURE_2D,Me,Ie,Le.width,Le.height,0,Re,Be,Le.data);E.generateMipmaps=!1}else X?(Oe&&i.texStorage2D(s.TEXTURE_2D,Fe,Ie,Ee.width,Ee.height),Ce&&Te(E,Ee,Re,Be)):i.texImage2D(s.TEXTURE_2D,0,Ie,Ee.width,Ee.height,0,Re,Be,Ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){X&&Oe&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,Ie,ut[0].width,ut[0].height,Ee.depth);for(let Me=0,Se=ut.length;Me<Se;Me++)if(Le=ut[Me],E.format!==Li)if(Re!==null)if(X){if(Ce)if(E.layerUpdates.size>0){const De=V_(Le.width,Le.height,E.format,E.type);for(const it of E.layerUpdates){const zt=Le.data.subarray(it*De/Le.data.BYTES_PER_ELEMENT,(it+1)*De/Le.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,it,Le.width,Le.height,1,Re,zt)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,0,Le.width,Le.height,Ee.depth,Re,Le.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Me,Ie,Le.width,Le.height,Ee.depth,0,Le.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Ce&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,0,Le.width,Le.height,Ee.depth,Re,Be,Le.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Me,Ie,Le.width,Le.height,Ee.depth,0,Re,Be,Le.data)}else{X&&Oe&&i.texStorage2D(s.TEXTURE_2D,Fe,Ie,ut[0].width,ut[0].height);for(let Me=0,Se=ut.length;Me<Se;Me++)Le=ut[Me],E.format!==Li?Re!==null?X?Ce&&i.compressedTexSubImage2D(s.TEXTURE_2D,Me,0,0,Le.width,Le.height,Re,Le.data):i.compressedTexImage2D(s.TEXTURE_2D,Me,Ie,Le.width,Le.height,0,Le.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Ce&&i.texSubImage2D(s.TEXTURE_2D,Me,0,0,Le.width,Le.height,Re,Be,Le.data):i.texImage2D(s.TEXTURE_2D,Me,Ie,Le.width,Le.height,0,Re,Be,Le.data)}else if(E.isDataArrayTexture)if(X){if(Oe&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,Ie,Ee.width,Ee.height,Ee.depth),Ce)if(E.layerUpdates.size>0){const Me=V_(Ee.width,Ee.height,E.format,E.type);for(const Se of E.layerUpdates){const De=Ee.data.subarray(Se*Me/Ee.data.BYTES_PER_ELEMENT,(Se+1)*Me/Ee.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Se,Ee.width,Ee.height,1,Re,Be,De)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Re,Be,Ee.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Ie,Ee.width,Ee.height,Ee.depth,0,Re,Be,Ee.data);else if(E.isData3DTexture)X?(Oe&&i.texStorage3D(s.TEXTURE_3D,Fe,Ie,Ee.width,Ee.height,Ee.depth),Ce&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Re,Be,Ee.data)):i.texImage3D(s.TEXTURE_3D,0,Ie,Ee.width,Ee.height,Ee.depth,0,Re,Be,Ee.data);else if(E.isFramebufferTexture){if(Oe)if(X)i.texStorage2D(s.TEXTURE_2D,Fe,Ie,Ee.width,Ee.height);else{let Me=Ee.width,Se=Ee.height;for(let De=0;De<Fe;De++)i.texImage2D(s.TEXTURE_2D,De,Ie,Me,Se,0,Re,Be,null),Me>>=1,Se>>=1}}else if(ut.length>0){if(X&&Oe){const Me=je(ut[0]);i.texStorage2D(s.TEXTURE_2D,Fe,Ie,Me.width,Me.height)}for(let Me=0,Se=ut.length;Me<Se;Me++)Le=ut[Me],X?Ce&&i.texSubImage2D(s.TEXTURE_2D,Me,0,0,Re,Be,Le):i.texImage2D(s.TEXTURE_2D,Me,Ie,Re,Be,Le);E.generateMipmaps=!1}else if(X){if(Oe){const Me=je(Ee);i.texStorage2D(s.TEXTURE_2D,Fe,Ie,Me.width,Me.height)}Ce&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Re,Be,Ee)}else i.texImage2D(s.TEXTURE_2D,0,Ie,Re,Be,Ee);y(E)&&v(_e),Ke.__version=he.version,E.onUpdate&&E.onUpdate(E)}z.__version=E.version}function oe(z,E,W){if(E.image.length!==6)return;const _e=me(z,E),ye=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+W);const he=r.get(ye);if(ye.version!==he.__version||_e===!0){i.activeTexture(s.TEXTURE0+W);const Ke=Tt.getPrimaries(Tt.workingColorSpace),Ue=E.colorSpace===ar?null:Tt.getPrimaries(E.colorSpace),We=E.colorSpace===ar||Ke===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);const nt=E.isCompressedTexture||E.image[0].isCompressedTexture,Ee=E.image[0]&&E.image[0].isDataTexture,Re=[];for(let Se=0;Se<6;Se++)!nt&&!Ee?Re[Se]=T(E.image[Se],!0,l.maxCubemapSize):Re[Se]=Ee?E.image[Se].image:E.image[Se],Re[Se]=Nt(E,Re[Se]);const Be=Re[0],Ie=u.convert(E.format,E.colorSpace),Le=u.convert(E.type),ut=D(E.internalFormat,Ie,Le,E.colorSpace),X=E.isVideoTexture!==!0,Oe=he.__version===void 0||_e===!0,Ce=ye.dataReady;let Fe=P(E,Be);Z(s.TEXTURE_CUBE_MAP,E);let Me;if(nt){X&&Oe&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Fe,ut,Be.width,Be.height);for(let Se=0;Se<6;Se++){Me=Re[Se].mipmaps;for(let De=0;De<Me.length;De++){const it=Me[De];E.format!==Li?Ie!==null?X?Ce&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De,0,0,it.width,it.height,Ie,it.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De,ut,it.width,it.height,0,it.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Ce&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De,0,0,it.width,it.height,Ie,Le,it.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De,ut,it.width,it.height,0,Ie,Le,it.data)}}}else{if(Me=E.mipmaps,X&&Oe){Me.length>0&&Fe++;const Se=je(Re[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Fe,ut,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Ee){X?Ce&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Re[Se].width,Re[Se].height,Ie,Le,Re[Se].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ut,Re[Se].width,Re[Se].height,0,Ie,Le,Re[Se].data);for(let De=0;De<Me.length;De++){const zt=Me[De].image[Se].image;X?Ce&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De+1,0,0,zt.width,zt.height,Ie,Le,zt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De+1,ut,zt.width,zt.height,0,Ie,Le,zt.data)}}else{X?Ce&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ie,Le,Re[Se]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ut,Ie,Le,Re[Se]);for(let De=0;De<Me.length;De++){const it=Me[De];X?Ce&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De+1,0,0,Ie,Le,it.image[Se]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De+1,ut,Ie,Le,it.image[Se])}}}y(E)&&v(s.TEXTURE_CUBE_MAP),he.__version=ye.version,E.onUpdate&&E.onUpdate(E)}z.__version=E.version}function we(z,E,W,_e,ye,he){const Ke=u.convert(W.format,W.colorSpace),Ue=u.convert(W.type),We=D(W.internalFormat,Ke,Ue,W.colorSpace),nt=r.get(E),Ee=r.get(W);if(Ee.__renderTarget=E,!nt.__hasExternalTextures){const Re=Math.max(1,E.width>>he),Be=Math.max(1,E.height>>he);ye===s.TEXTURE_3D||ye===s.TEXTURE_2D_ARRAY?i.texImage3D(ye,he,We,Re,Be,E.depth,0,Ke,Ue,null):i.texImage2D(ye,he,We,Re,Be,0,Ke,Ue,null)}i.bindFramebuffer(s.FRAMEBUFFER,z),jt(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,ye,Ee.__webglTexture,0,G(E)):(ye===s.TEXTURE_2D||ye>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,_e,ye,Ee.__webglTexture,he),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ve(z,E,W){if(s.bindRenderbuffer(s.RENDERBUFFER,z),E.depthBuffer){const _e=E.depthTexture,ye=_e&&_e.isDepthTexture?_e.type:null,he=O(E.stencilBuffer,ye),Ke=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;jt(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,G(E),he,E.width,E.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,G(E),he,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,he,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ke,s.RENDERBUFFER,z)}else{const _e=E.textures;for(let ye=0;ye<_e.length;ye++){const he=_e[ye],Ke=u.convert(he.format,he.colorSpace),Ue=u.convert(he.type),We=D(he.internalFormat,Ke,Ue,he.colorSpace);jt(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,G(E),We,E.width,E.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,G(E),We,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,We,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function He(z,E,W){const _e=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,z),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ye=r.get(E.depthTexture);if(ye.__renderTarget=E,(!ye.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),_e){if(ye.__webglInit===void 0&&(ye.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),ye.__webglTexture===void 0){ye.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,ye.__webglTexture),Z(s.TEXTURE_CUBE_MAP,E.depthTexture);const nt=u.convert(E.depthTexture.format),Ee=u.convert(E.depthTexture.type);let Re;E.depthTexture.format===Ea?Re=s.DEPTH_COMPONENT24:E.depthTexture.format===Or&&(Re=s.DEPTH24_STENCIL8);for(let Be=0;Be<6;Be++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,Re,E.width,E.height,0,nt,Ee,null)}}else ce(E.depthTexture,0);const he=ye.__webglTexture,Ke=G(E),Ue=_e?s.TEXTURE_CUBE_MAP_POSITIVE_X+W:s.TEXTURE_2D,We=E.depthTexture.format===Or?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ea)jt(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,We,Ue,he,0,Ke):s.framebufferTexture2D(s.FRAMEBUFFER,We,Ue,he,0);else if(E.depthTexture.format===Or)jt(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,We,Ue,he,0,Ke):s.framebufferTexture2D(s.FRAMEBUFFER,We,Ue,he,0);else throw new Error("Unknown depthTexture format")}function ht(z){const E=r.get(z),W=z.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==z.depthTexture){const _e=z.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),_e){const ye=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,_e.removeEventListener("dispose",ye)};_e.addEventListener("dispose",ye),E.__depthDisposeCallback=ye}E.__boundDepthTexture=_e}if(z.depthTexture&&!E.__autoAllocateDepthBuffer)if(W)for(let _e=0;_e<6;_e++)He(E.__webglFramebuffer[_e],z,_e);else{const _e=z.texture.mipmaps;_e&&_e.length>0?He(E.__webglFramebuffer[0],z,0):He(E.__webglFramebuffer,z,0)}else if(W){E.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[_e]),E.__webglDepthbuffer[_e]===void 0)E.__webglDepthbuffer[_e]=s.createRenderbuffer(),Ve(E.__webglDepthbuffer[_e],z,!1);else{const ye=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=E.__webglDepthbuffer[_e];s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,he)}}else{const _e=z.texture.mipmaps;if(_e&&_e.length>0?i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Ve(E.__webglDepthbuffer,z,!1);else{const ye=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,he)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function $t(z,E,W){const _e=r.get(z);E!==void 0&&we(_e.__webglFramebuffer,z,z.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&ht(z)}function _t(z){const E=z.texture,W=r.get(z),_e=r.get(E);z.addEventListener("dispose",I);const ye=z.textures,he=z.isWebGLCubeRenderTarget===!0,Ke=ye.length>1;if(Ke||(_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture()),_e.__version=E.version,f.memory.textures++),he){W.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[Ue]=[];for(let We=0;We<E.mipmaps.length;We++)W.__webglFramebuffer[Ue][We]=s.createFramebuffer()}else W.__webglFramebuffer[Ue]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let Ue=0;Ue<E.mipmaps.length;Ue++)W.__webglFramebuffer[Ue]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(Ke)for(let Ue=0,We=ye.length;Ue<We;Ue++){const nt=r.get(ye[Ue]);nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture(),f.memory.textures++)}if(z.samples>0&&jt(z)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Ue=0;Ue<ye.length;Ue++){const We=ye[Ue];W.__webglColorRenderbuffer[Ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[Ue]);const nt=u.convert(We.format,We.colorSpace),Ee=u.convert(We.type),Re=D(We.internalFormat,nt,Ee,We.colorSpace,z.isXRRenderTarget===!0),Be=G(z);s.renderbufferStorageMultisample(s.RENDERBUFFER,Be,Re,z.width,z.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,W.__webglColorRenderbuffer[Ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),z.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),Ve(W.__webglDepthRenderbuffer,z,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){i.bindTexture(s.TEXTURE_CUBE_MAP,_e.__webglTexture),Z(s.TEXTURE_CUBE_MAP,E);for(let Ue=0;Ue<6;Ue++)if(E.mipmaps&&E.mipmaps.length>0)for(let We=0;We<E.mipmaps.length;We++)we(W.__webglFramebuffer[Ue][We],z,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,We);else we(W.__webglFramebuffer[Ue],z,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);y(E)&&v(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ke){for(let Ue=0,We=ye.length;Ue<We;Ue++){const nt=ye[Ue],Ee=r.get(nt);let Re=s.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Re=z.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Re,Ee.__webglTexture),Z(Re,nt),we(W.__webglFramebuffer,z,nt,s.COLOR_ATTACHMENT0+Ue,Re,0),y(nt)&&v(Re)}i.unbindTexture()}else{let Ue=s.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Ue=z.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ue,_e.__webglTexture),Z(Ue,E),E.mipmaps&&E.mipmaps.length>0)for(let We=0;We<E.mipmaps.length;We++)we(W.__webglFramebuffer[We],z,E,s.COLOR_ATTACHMENT0,Ue,We);else we(W.__webglFramebuffer,z,E,s.COLOR_ATTACHMENT0,Ue,0);y(E)&&v(Ue),i.unbindTexture()}z.depthBuffer&&ht(z)}function pt(z){const E=z.textures;for(let W=0,_e=E.length;W<_e;W++){const ye=E[W];if(y(ye)){const he=w(z),Ke=r.get(ye).__webglTexture;i.bindTexture(he,Ke),v(he),i.unbindTexture()}}}const wt=[],ot=[];function en(z){if(z.samples>0){if(jt(z)===!1){const E=z.textures,W=z.width,_e=z.height;let ye=s.COLOR_BUFFER_BIT;const he=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ke=r.get(z),Ue=E.length>1;if(Ue)for(let nt=0;nt<E.length;nt++)i.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer);const We=z.texture.mipmaps;We&&We.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let nt=0;nt<E.length;nt++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(ye|=s.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(ye|=s.STENCIL_BUFFER_BIT)),Ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ke.__webglColorRenderbuffer[nt]);const Ee=r.get(E[nt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ee,0)}s.blitFramebuffer(0,0,W,_e,0,0,W,_e,ye,s.NEAREST),m===!0&&(wt.length=0,ot.length=0,wt.push(s.COLOR_ATTACHMENT0+nt),z.depthBuffer&&z.resolveDepthBuffer===!1&&(wt.push(he),ot.push(he),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ot)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,wt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ue)for(let nt=0;nt<E.length;nt++){i.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.RENDERBUFFER,Ke.__webglColorRenderbuffer[nt]);const Ee=r.get(E[nt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.TEXTURE_2D,Ee,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&m){const E=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function G(z){return Math.min(l.maxSamples,z.samples)}function jt(z){const E=r.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Et(z){const E=f.render.frame;_.get(z)!==E&&(_.set(z,E),z.update())}function Nt(z,E){const W=z.colorSpace,_e=z.format,ye=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||W!==Bs&&W!==ar&&(Tt.getTransfer(W)===Ht?(_e!==Li||ye!==ai)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",W)),E}function je(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(p.width=z.naturalWidth||z.width,p.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(p.width=z.displayWidth,p.height=z.displayHeight):(p.width=z.width,p.height=z.height),p}this.allocateTextureUnit=ee,this.resetTextureUnits=ae,this.setTexture2D=ce,this.setTexture2DArray=U,this.setTexture3D=B,this.setTextureCube=$,this.rebindTextures=$t,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=we,this.useMultisampledRTT=jt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function fC(s,e){function i(r,l=ar){let u;const f=Tt.getTransfer(l);if(r===ai)return s.UNSIGNED_BYTE;if(r===fp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===dp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===kv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Xv)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Gv)return s.BYTE;if(r===Vv)return s.SHORT;if(r===$o)return s.UNSIGNED_SHORT;if(r===cp)return s.INT;if(r===qi)return s.UNSIGNED_INT;if(r===Gi)return s.FLOAT;if(r===Ma)return s.HALF_FLOAT;if(r===Wv)return s.ALPHA;if(r===qv)return s.RGB;if(r===Li)return s.RGBA;if(r===Ea)return s.DEPTH_COMPONENT;if(r===Or)return s.DEPTH_STENCIL;if(r===Yv)return s.RED;if(r===hp)return s.RED_INTEGER;if(r===Fs)return s.RG;if(r===pp)return s.RG_INTEGER;if(r===mp)return s.RGBA_INTEGER;if(r===Zu||r===Ku||r===Qu||r===Ju)if(f===Ht)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Zu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ku)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Qu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ju)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Zu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ku)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Qu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ju)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===xh||r===Sh||r===yh||r===Mh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===xh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Sh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===yh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Mh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Eh||r===bh||r===Th||r===Ah||r===Rh||r===Ch||r===wh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Eh||r===bh)return f===Ht?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Th)return f===Ht?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===Ah)return u.COMPRESSED_R11_EAC;if(r===Rh)return u.COMPRESSED_SIGNED_R11_EAC;if(r===Ch)return u.COMPRESSED_RG11_EAC;if(r===wh)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Dh||r===Uh||r===Lh||r===Nh||r===Oh||r===Ph||r===zh||r===Ih||r===Fh||r===Bh||r===Hh||r===Gh||r===Vh||r===kh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Dh)return f===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Uh)return f===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Lh)return f===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Nh)return f===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Oh)return f===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ph)return f===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===zh)return f===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ih)return f===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Fh)return f===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Bh)return f===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Hh)return f===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Gh)return f===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Vh)return f===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===kh)return f===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Xh||r===Wh||r===qh)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Xh)return f===Ht?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Wh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===qh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Yh||r===jh||r===Zh||r===Kh)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Yh)return u.COMPRESSED_RED_RGTC1_EXT;if(r===jh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Zh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Kh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===el?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const dC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class pC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new sx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Yn({vertexShader:dC,fragmentShader:hC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new xi(new cc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mC extends ks{constructor(e,i){super();const r=this;let l=null,u=1,f=null,h="local-floor",m=1,p=null,_=null,g=null,x=null,M=null,b=null;const T=typeof XRWebGLBinding<"u",y=new pC,v={},w=i.getContextAttributes();let D=null,O=null;const P=[],F=[],I=new Pt;let K=null;const C=new ii;C.viewport=new an;const L=new ii;L.viewport=new an;const V=[C,L],ae=new bb;let ee=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let oe=P[Q];return oe===void 0&&(oe=new Zd,P[Q]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Q){let oe=P[Q];return oe===void 0&&(oe=new Zd,P[Q]=oe),oe.getGripSpace()},this.getHand=function(Q){let oe=P[Q];return oe===void 0&&(oe=new Zd,P[Q]=oe),oe.getHandSpace()};function ce(Q){const oe=F.indexOf(Q.inputSource);if(oe===-1)return;const we=P[oe];we!==void 0&&(we.update(Q.inputSource,Q.frame,p||f),we.dispatchEvent({type:Q.type,data:Q.inputSource}))}function U(){l.removeEventListener("select",ce),l.removeEventListener("selectstart",ce),l.removeEventListener("selectend",ce),l.removeEventListener("squeeze",ce),l.removeEventListener("squeezestart",ce),l.removeEventListener("squeezeend",ce),l.removeEventListener("end",U),l.removeEventListener("inputsourceschange",B);for(let Q=0;Q<P.length;Q++){const oe=F[Q];oe!==null&&(F[Q]=null,P[Q].disconnect(oe))}ee=null,pe=null,y.reset();for(const Q in v)delete v[Q];e.setRenderTarget(D),M=null,x=null,g=null,l=null,O=null,Te.stop(),r.isPresenting=!1,e.setPixelRatio(K),e.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){u=Q,r.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){h=Q,r.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(D=e.getRenderTarget(),l.addEventListener("select",ce),l.addEventListener("selectstart",ce),l.addEventListener("selectend",ce),l.addEventListener("squeeze",ce),l.addEventListener("squeezestart",ce),l.addEventListener("squeezeend",ce),l.addEventListener("end",U),l.addEventListener("inputsourceschange",B),w.xrCompatible!==!0&&await i.makeXRCompatible(),K=e.getPixelRatio(),e.getSize(I),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Ve=null,He=null;w.depth&&(He=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,we=w.stencil?Or:Ea,Ve=w.stencil?el:qi);const ht={colorFormat:i.RGBA8,depthFormat:He,scaleFactor:u};g=this.getBinding(),x=g.createProjectionLayer(ht),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),O=new Xi(x.textureWidth,x.textureHeight,{format:Li,type:ai,depthTexture:new nl(x.textureWidth,x.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const we={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,we),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),O=new Xi(M.framebufferWidth,M.framebufferHeight,{format:Li,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Te.setContext(l),Te.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function B(Q){for(let oe=0;oe<Q.removed.length;oe++){const we=Q.removed[oe],Ve=F.indexOf(we);Ve>=0&&(F[Ve]=null,P[Ve].disconnect(we))}for(let oe=0;oe<Q.added.length;oe++){const we=Q.added[oe];let Ve=F.indexOf(we);if(Ve===-1){for(let ht=0;ht<P.length;ht++)if(ht>=F.length){F.push(we),Ve=ht;break}else if(F[ht]===null){F[ht]=we,Ve=ht;break}if(Ve===-1)break}const He=P[Ve];He&&He.connect(we)}}const $=new le,ne=new le;function fe(Q,oe,we){$.setFromMatrixPosition(oe.matrixWorld),ne.setFromMatrixPosition(we.matrixWorld);const Ve=$.distanceTo(ne),He=oe.projectionMatrix.elements,ht=we.projectionMatrix.elements,$t=He[14]/(He[10]-1),_t=He[14]/(He[10]+1),pt=(He[9]+1)/He[5],wt=(He[9]-1)/He[5],ot=(He[8]-1)/He[0],en=(ht[8]+1)/ht[0],G=$t*ot,jt=$t*en,Et=Ve/(-ot+en),Nt=Et*-ot;if(oe.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Nt),Q.translateZ(Et),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),He[10]===-1)Q.projectionMatrix.copy(oe.projectionMatrix),Q.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const je=$t+Et,z=_t+Et,E=G-Nt,W=jt+(Ve-Nt),_e=pt*_t/z*je,ye=wt*_t/z*je;Q.projectionMatrix.makePerspective(E,W,_e,ye,je,z),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function N(Q,oe){oe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(oe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let oe=Q.near,we=Q.far;y.texture!==null&&(y.depthNear>0&&(oe=y.depthNear),y.depthFar>0&&(we=y.depthFar)),ae.near=L.near=C.near=oe,ae.far=L.far=C.far=we,(ee!==ae.near||pe!==ae.far)&&(l.updateRenderState({depthNear:ae.near,depthFar:ae.far}),ee=ae.near,pe=ae.far),ae.layers.mask=Q.layers.mask|6,C.layers.mask=ae.layers.mask&3,L.layers.mask=ae.layers.mask&5;const Ve=Q.parent,He=ae.cameras;N(ae,Ve);for(let ht=0;ht<He.length;ht++)N(He[ht],Ve);He.length===2?fe(ae,C,L):ae.projectionMatrix.copy(C.projectionMatrix),Z(Q,ae,Ve)};function Z(Q,oe,we){we===null?Q.matrix.copy(oe.matrixWorld):(Q.matrix.copy(we.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(oe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(oe.projectionMatrix),Q.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Qh*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return ae},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(Q){m=Q,x!==null&&(x.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(ae)},this.getCameraTexture=function(Q){return v[Q]};let me=null;function be(Q,oe){if(_=oe.getViewerPose(p||f),b=oe,_!==null){const we=_.views;M!==null&&(e.setRenderTargetFramebuffer(O,M.framebuffer),e.setRenderTarget(O));let Ve=!1;we.length!==ae.cameras.length&&(ae.cameras.length=0,Ve=!0);for(let _t=0;_t<we.length;_t++){const pt=we[_t];let wt=null;if(M!==null)wt=M.getViewport(pt);else{const en=g.getViewSubImage(x,pt);wt=en.viewport,_t===0&&(e.setRenderTargetTextures(O,en.colorTexture,en.depthStencilTexture),e.setRenderTarget(O))}let ot=V[_t];ot===void 0&&(ot=new ii,ot.layers.enable(_t),ot.viewport=new an,V[_t]=ot),ot.matrix.fromArray(pt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(pt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(wt.x,wt.y,wt.width,wt.height),_t===0&&(ae.matrix.copy(ot.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale)),Ve===!0&&ae.cameras.push(ot)}const He=l.enabledFeatures;if(He&&He.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){g=r.getBinding();const _t=g.getDepthInformation(we[0]);_t&&_t.isValid&&_t.texture&&y.init(_t,l.renderState)}if(He&&He.includes("camera-access")&&T){e.state.unbindTexture(),g=r.getBinding();for(let _t=0;_t<we.length;_t++){const pt=we[_t].camera;if(pt){let wt=v[pt];wt||(wt=new sx,v[pt]=wt);const ot=g.getCameraImage(pt);wt.sourceTexture=ot}}}}for(let we=0;we<P.length;we++){const Ve=F[we],He=P[we];Ve!==null&&He!==void 0&&He.update(Ve,oe,p||f)}me&&me(Q,oe),oe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:oe}),b=null}const Te=new lx;Te.setAnimationLoop(be),this.setAnimationLoop=function(Q){me=Q},this.dispose=function(){}}}const wr=new ba,gC=new Jt;function _C(s,e){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,nx(s)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,w,D,O){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(y,v):v.isMeshToonMaterial?(u(y,v),g(y,v)):v.isMeshPhongMaterial?(u(y,v),_(y,v)):v.isMeshStandardMaterial?(u(y,v),x(y,v),v.isMeshPhysicalMaterial&&M(y,v,O)):v.isMeshMatcapMaterial?(u(y,v),b(y,v)):v.isMeshDepthMaterial?u(y,v):v.isMeshDistanceMaterial?(u(y,v),T(y,v)):v.isMeshNormalMaterial?u(y,v):v.isLineBasicMaterial?(f(y,v),v.isLineDashedMaterial&&h(y,v)):v.isPointsMaterial?m(y,v,w,D):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===In&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===In&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const w=e.get(v),D=w.envMap,O=w.envMapRotation;D&&(y.envMap.value=D,wr.copy(O),wr.x*=-1,wr.y*=-1,wr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),y.envMapRotation.value.setFromMatrix4(gC.makeRotationFromEuler(wr)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function f(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function h(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,w,D){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*w,y.scale.value=D*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function _(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function g(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function x(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function M(y,v,w){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===In&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=w.texture,y.transmissionSamplerSize.value.set(w.width,w.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,v){v.matcap&&(y.matcap.value=v.matcap)}function T(y,v){const w=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(w.matrixWorld),y.nearDistance.value=w.shadow.camera.near,y.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function vC(s,e,i,r){let l={},u={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,D){const O=D.program;r.uniformBlockBinding(w,O)}function p(w,D){let O=l[w.id];O===void 0&&(b(w),O=_(w),l[w.id]=O,w.addEventListener("dispose",y));const P=D.program;r.updateUBOMapping(w,P);const F=e.render.frame;u[w.id]!==F&&(x(w),u[w.id]=F)}function _(w){const D=g();w.__bindingPointIndex=D;const O=s.createBuffer(),P=w.__size,F=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,O),s.bufferData(s.UNIFORM_BUFFER,P,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,O),O}function g(){for(let w=0;w<h;w++)if(f.indexOf(w)===-1)return f.push(w),w;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(w){const D=l[w.id],O=w.uniforms,P=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let F=0,I=O.length;F<I;F++){const K=Array.isArray(O[F])?O[F]:[O[F]];for(let C=0,L=K.length;C<L;C++){const V=K[C];if(M(V,F,C,P)===!0){const ae=V.__offset,ee=Array.isArray(V.value)?V.value:[V.value];let pe=0;for(let ce=0;ce<ee.length;ce++){const U=ee[ce],B=T(U);typeof U=="number"||typeof U=="boolean"?(V.__data[0]=U,s.bufferSubData(s.UNIFORM_BUFFER,ae+pe,V.__data)):U.isMatrix3?(V.__data[0]=U.elements[0],V.__data[1]=U.elements[1],V.__data[2]=U.elements[2],V.__data[3]=0,V.__data[4]=U.elements[3],V.__data[5]=U.elements[4],V.__data[6]=U.elements[5],V.__data[7]=0,V.__data[8]=U.elements[6],V.__data[9]=U.elements[7],V.__data[10]=U.elements[8],V.__data[11]=0):(U.toArray(V.__data,pe),pe+=B.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ae,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(w,D,O,P){const F=w.value,I=D+"_"+O;if(P[I]===void 0)return typeof F=="number"||typeof F=="boolean"?P[I]=F:P[I]=F.clone(),!0;{const K=P[I];if(typeof F=="number"||typeof F=="boolean"){if(K!==F)return P[I]=F,!0}else if(K.equals(F)===!1)return K.copy(F),!0}return!1}function b(w){const D=w.uniforms;let O=0;const P=16;for(let I=0,K=D.length;I<K;I++){const C=Array.isArray(D[I])?D[I]:[D[I]];for(let L=0,V=C.length;L<V;L++){const ae=C[L],ee=Array.isArray(ae.value)?ae.value:[ae.value];for(let pe=0,ce=ee.length;pe<ce;pe++){const U=ee[pe],B=T(U),$=O%P,ne=$%B.boundary,fe=$+ne;O+=ne,fe!==0&&P-fe<B.storage&&(O+=P-fe),ae.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=O,O+=B.storage}}}const F=O%P;return F>0&&(O+=P-F),w.__size=O,w.__cache={},this}function T(w){const D={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(D.boundary=4,D.storage=4):w.isVector2?(D.boundary=8,D.storage=8):w.isVector3||w.isColor?(D.boundary=16,D.storage=12):w.isVector4?(D.boundary=16,D.storage=16):w.isMatrix3?(D.boundary=48,D.storage=48):w.isMatrix4?(D.boundary=64,D.storage=64):w.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):st("WebGLRenderer: Unsupported uniform value type.",w),D}function y(w){const D=w.target;D.removeEventListener("dispose",y);const O=f.indexOf(D.__bindingPointIndex);f.splice(O,1),s.deleteBuffer(l[D.id]),delete l[D.id],delete u[D.id]}function v(){for(const w in l)s.deleteBuffer(l[w]);f=[],l={},u={}}return{bind:m,update:p,dispose:v}}const xC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fi=null;function SC(){return Fi===null&&(Fi=new cb(xC,16,16,Fs,Ma),Fi.name="DFG_LUT",Fi.minFilter=On,Fi.magFilter=On,Fi.wrapS=ga,Fi.wrapT=ga,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}class yC{constructor(e={}){const{canvas:i=IE(),context:r=null,depth:l=!0,stencil:u=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1,outputBufferType:M=ai}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=f;const T=M,y=new Set([mp,pp,hp]),v=new Set([ai,qi,$o,el,fp,dp]),w=new Uint32Array(4),D=new Int32Array(4);let O=null,P=null;const F=[],I=[];let K=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let L=!1;this._outputColorSpace=gi;let V=0,ae=0,ee=null,pe=-1,ce=null;const U=new an,B=new an;let $=null;const ne=new St(0);let fe=0,N=i.width,Z=i.height,me=1,be=null,Te=null;const Q=new an(0,0,N,Z),oe=new an(0,0,N,Z);let we=!1;const Ve=new xp;let He=!1,ht=!1;const $t=new Jt,_t=new le,pt=new an,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function en(){return ee===null?me:1}let G=r;function jt(R,q){return i.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${lp}`),i.addEventListener("webglcontextlost",it,!1),i.addEventListener("webglcontextrestored",zt,!1),i.addEventListener("webglcontextcreationerror",bt,!1),G===null){const q="webgl2";if(G=jt(q,R),G===null)throw jt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Ct("WebGLRenderer: "+R.message),R}let Et,Nt,je,z,E,W,_e,ye,he,Ke,Ue,We,nt,Ee,Re,Be,Ie,Le,ut,X,Oe,Ce,Fe,Me;function Se(){Et=new SA(G),Et.init(),Ce=new fC(G,Et),Nt=new fA(G,Et,e,Ce),je=new uC(G,Et),Nt.reversedDepthBuffer&&x&&je.buffers.depth.setReversed(!0),z=new EA(G),E=new jR,W=new cC(G,Et,je,E,Nt,Ce,z),_e=new hA(C),ye=new xA(C),he=new Rb(G),Fe=new uA(G,he),Ke=new yA(G,he,z,Fe),Ue=new TA(G,Ke,he,z),ut=new bA(G,Nt,W),Be=new dA(E),We=new YR(C,_e,ye,Et,Nt,Fe,Be),nt=new _C(C,E),Ee=new KR,Re=new nC(Et),Le=new lA(C,_e,ye,je,Ue,b,m),Ie=new oC(C,Ue,Nt),Me=new vC(G,z,Nt,je),X=new cA(G,Et,z),Oe=new MA(G,Et,z),z.programs=We.programs,C.capabilities=Nt,C.extensions=Et,C.properties=E,C.renderLists=Ee,C.shadowMap=Ie,C.state=je,C.info=z}Se(),T!==ai&&(K=new RA(T,i.width,i.height,l,u));const De=new mC(C,G);this.xr=De,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=Et.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Et.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(R){R!==void 0&&(me=R,this.setSize(N,Z,!1))},this.getSize=function(R){return R.set(N,Z)},this.setSize=function(R,q,ue=!0){if(De.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}N=R,Z=q,i.width=Math.floor(R*me),i.height=Math.floor(q*me),ue===!0&&(i.style.width=R+"px",i.style.height=q+"px"),K!==null&&K.setSize(i.width,i.height),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(N*me,Z*me).floor()},this.setDrawingBufferSize=function(R,q,ue){N=R,Z=q,me=ue,i.width=Math.floor(R*ue),i.height=Math.floor(q*ue),this.setViewport(0,0,R,q)},this.setEffects=function(R){if(T===ai){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let q=0;q<R.length;q++)if(R[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}K.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(U)},this.getViewport=function(R){return R.copy(Q)},this.setViewport=function(R,q,ue,re){R.isVector4?Q.set(R.x,R.y,R.z,R.w):Q.set(R,q,ue,re),je.viewport(U.copy(Q).multiplyScalar(me).round())},this.getScissor=function(R){return R.copy(oe)},this.setScissor=function(R,q,ue,re){R.isVector4?oe.set(R.x,R.y,R.z,R.w):oe.set(R,q,ue,re),je.scissor(B.copy(oe).multiplyScalar(me).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(R){je.setScissorTest(we=R)},this.setOpaqueSort=function(R){be=R},this.setTransparentSort=function(R){Te=R},this.getClearColor=function(R){return R.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,ue=!0){let re=0;if(R){let J=!1;if(ee!==null){const Ne=ee.texture.format;J=y.has(Ne)}if(J){const Ne=ee.texture.type,Ge=v.has(Ne),Pe=Le.getClearColor(),ke=Le.getClearAlpha(),qe=Pe.r,$e=Pe.g,Ye=Pe.b;Ge?(w[0]=qe,w[1]=$e,w[2]=Ye,w[3]=ke,G.clearBufferuiv(G.COLOR,0,w)):(D[0]=qe,D[1]=$e,D[2]=Ye,D[3]=ke,G.clearBufferiv(G.COLOR,0,D))}else re|=G.COLOR_BUFFER_BIT}q&&(re|=G.DEPTH_BUFFER_BIT),ue&&(re|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",it,!1),i.removeEventListener("webglcontextrestored",zt,!1),i.removeEventListener("webglcontextcreationerror",bt,!1),Le.dispose(),Ee.dispose(),Re.dispose(),E.dispose(),_e.dispose(),ye.dispose(),Ue.dispose(),Fe.dispose(),Me.dispose(),We.dispose(),De.dispose(),De.removeEventListener("sessionstart",Fr),De.removeEventListener("sessionend",Ys),Ni.stop()};function it(R){R.preventDefault(),y_("WebGLRenderer: Context Lost."),L=!0}function zt(){y_("WebGLRenderer: Context Restored."),L=!1;const R=z.autoReset,q=Ie.enabled,ue=Ie.autoUpdate,re=Ie.needsUpdate,J=Ie.type;Se(),z.autoReset=R,Ie.enabled=q,Ie.autoUpdate=ue,Ie.needsUpdate=re,Ie.type=J}function bt(R){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Dn(R){const q=R.target;q.removeEventListener("dispose",Dn),Mi(q)}function Mi(R){fl(R),E.remove(R)}function fl(R){const q=E.get(R).programs;q!==void 0&&(q.forEach(function(ue){We.releaseProgram(ue)}),R.isShaderMaterial&&We.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,ue,re,J,Ne){q===null&&(q=wt);const Ge=J.isMesh&&J.matrixWorld.determinant()<0,Pe=sr(R,q,ue,re,J);je.setMaterial(re,Ge);let ke=ue.index,qe=1;if(re.wireframe===!0){if(ke=Ke.getWireframeAttribute(ue),ke===void 0)return;qe=2}const $e=ue.drawRange,Ye=ue.attributes.position;let et=$e.start*qe,Dt=($e.start+$e.count)*qe;Ne!==null&&(et=Math.max(et,Ne.start*qe),Dt=Math.min(Dt,(Ne.start+Ne.count)*qe)),ke!==null?(et=Math.max(et,0),Dt=Math.min(Dt,ke.count)):Ye!=null&&(et=Math.max(et,0),Dt=Math.min(Dt,Ye.count));const Zt=Dt-et;if(Zt<0||Zt===1/0)return;Fe.setup(J,re,Pe,ue,ke);let Wt,Ot=X;if(ke!==null&&(Wt=he.get(ke),Ot=Oe,Ot.setIndex(Wt)),J.isMesh)re.wireframe===!0?(je.setLineWidth(re.wireframeLinewidth*en()),Ot.setMode(G.LINES)):Ot.setMode(G.TRIANGLES);else if(J.isLine){let Qe=re.linewidth;Qe===void 0&&(Qe=1),je.setLineWidth(Qe*en()),J.isLineSegments?Ot.setMode(G.LINES):J.isLineLoop?Ot.setMode(G.LINE_LOOP):Ot.setMode(G.LINE_STRIP)}else J.isPoints?Ot.setMode(G.POINTS):J.isSprite&&Ot.setMode(G.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)tl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ot.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Et.get("WEBGL_multi_draw"))Ot.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Qe=J._multiDrawStarts,Ut=J._multiDrawCounts,at=J._multiDrawCount,Sn=ke?he.get(ke).bytesPerElement:1,Yi=E.get(re).currentProgram.getUniforms();for(let yn=0;yn<at;yn++)Yi.setValue(G,"_gl_DrawID",yn),Ot.render(Qe[yn]/Sn,Ut[yn])}else if(J.isInstancedMesh)Ot.renderInstances(et,Zt,J.count);else if(ue.isInstancedBufferGeometry){const Qe=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Ut=Math.min(ue.instanceCount,Qe);Ot.renderInstances(et,Zt,Ut)}else Ot.render(et,Zt)};function Ws(R,q,ue){R.transparent===!0&&R.side===Hi&&R.forceSinglePass===!1?(R.side=In,R.needsUpdate=!0,Hr(R,q,ue),R.side=ya,R.needsUpdate=!0,Hr(R,q,ue),R.side=Hi):Hr(R,q,ue)}this.compile=function(R,q,ue=null){ue===null&&(ue=R),P=Re.get(ue),P.init(q),I.push(P),ue.traverseVisible(function(J){J.isLight&&J.layers.test(q.layers)&&(P.pushLight(J),J.castShadow&&P.pushShadow(J))}),R!==ue&&R.traverseVisible(function(J){J.isLight&&J.layers.test(q.layers)&&(P.pushLight(J),J.castShadow&&P.pushShadow(J))}),P.setupLights();const re=new Set;return R.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Ne=J.material;if(Ne)if(Array.isArray(Ne))for(let Ge=0;Ge<Ne.length;Ge++){const Pe=Ne[Ge];Ws(Pe,ue,J),re.add(Pe)}else Ws(Ne,ue,J),re.add(Ne)}),P=I.pop(),re},this.compileAsync=function(R,q,ue=null){const re=this.compile(R,q,ue);return new Promise(J=>{function Ne(){if(re.forEach(function(Ge){E.get(Ge).currentProgram.isReady()&&re.delete(Ge)}),re.size===0){J(R);return}setTimeout(Ne,10)}Et.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Ir=null;function qs(R){Ir&&Ir(R)}function Fr(){Ni.stop()}function Ys(){Ni.start()}const Ni=new lx;Ni.setAnimationLoop(qs),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(R){Ir=R,De.setAnimationLoop(R),R===null?Ni.stop():Ni.start()},De.addEventListener("sessionstart",Fr),De.addEventListener("sessionend",Ys),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;const ue=De.enabled===!0&&De.isPresenting===!0,re=K!==null&&(ee===null||ue)&&K.begin(C,ee);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(K===null||K.isCompositing()===!1)&&(De.cameraAutoUpdate===!0&&De.updateCamera(q),q=De.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,q,ee),P=Re.get(R,I.length),P.init(q),I.push(P),$t.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ve.setFromProjectionMatrix($t,Vi,q.reversedDepth),ht=this.localClippingEnabled,He=Be.init(this.clippingPlanes,ht),O=Ee.get(R,F.length),O.init(),F.push(O),De.enabled===!0&&De.isPresenting===!0){const Ge=C.xr.getDepthSensingMesh();Ge!==null&&ri(Ge,q,-1/0,C.sortObjects)}ri(R,q,0,C.sortObjects),O.finish(),C.sortObjects===!0&&O.sort(be,Te),ot=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,ot&&Le.addToRenderList(O,R),this.info.render.frame++,He===!0&&Be.beginShadows();const J=P.state.shadowsArray;if(Ie.render(J,R,q),He===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(re&&K.hasRenderPass())===!1){const Ge=O.opaque,Pe=O.transmissive;if(P.setupLights(),q.isArrayCamera){const ke=q.cameras;if(Pe.length>0)for(let qe=0,$e=ke.length;qe<$e;qe++){const Ye=ke[qe];xn(Ge,Pe,R,Ye)}ot&&Le.render(R);for(let qe=0,$e=ke.length;qe<$e;qe++){const Ye=ke[qe];on(O,R,Ye,Ye.viewport)}}else Pe.length>0&&xn(Ge,Pe,R,q),ot&&Le.render(R),on(O,R,q)}ee!==null&&ae===0&&(W.updateMultisampleRenderTarget(ee),W.updateRenderTargetMipmap(ee)),re&&K.end(C),R.isScene===!0&&R.onAfterRender(C,R,q),Fe.resetDefaultState(),pe=-1,ce=null,I.pop(),I.length>0?(P=I[I.length-1],He===!0&&Be.setGlobalState(C.clippingPlanes,P.state.camera)):P=null,F.pop(),F.length>0?O=F[F.length-1]:O=null};function ri(R,q,ue,re){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)ue=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)P.pushLight(R),R.castShadow&&P.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ve.intersectsSprite(R)){re&&pt.setFromMatrixPosition(R.matrixWorld).applyMatrix4($t);const Ge=Ue.update(R),Pe=R.material;Pe.visible&&O.push(R,Ge,Pe,ue,pt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ve.intersectsObject(R))){const Ge=Ue.update(R),Pe=R.material;if(re&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),pt.copy(R.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),pt.copy(Ge.boundingSphere.center)),pt.applyMatrix4(R.matrixWorld).applyMatrix4($t)),Array.isArray(Pe)){const ke=Ge.groups;for(let qe=0,$e=ke.length;qe<$e;qe++){const Ye=ke[qe],et=Pe[Ye.materialIndex];et&&et.visible&&O.push(R,Ge,et,ue,pt.z,Ye)}}else Pe.visible&&O.push(R,Ge,Pe,ue,pt.z,null)}}const Ne=R.children;for(let Ge=0,Pe=Ne.length;Ge<Pe;Ge++)ri(Ne[Ge],q,ue,re)}function on(R,q,ue,re){const{opaque:J,transmissive:Ne,transparent:Ge}=R;P.setupLightsView(ue),He===!0&&Be.setGlobalState(C.clippingPlanes,ue),re&&je.viewport(U.copy(re)),J.length>0&&Ei(J,q,ue),Ne.length>0&&Ei(Ne,q,ue),Ge.length>0&&Ei(Ge,q,ue),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function xn(R,q,ue,re){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[re.id]===void 0){const et=Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[re.id]=new Xi(1,1,{generateMipmaps:!0,type:et?Ma:ai,minFilter:Nr,samples:Nt.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Ne=P.state.transmissionRenderTarget[re.id],Ge=re.viewport||U;Ne.setSize(Ge.z*C.transmissionResolutionScale,Ge.w*C.transmissionResolutionScale);const Pe=C.getRenderTarget(),ke=C.getActiveCubeFace(),qe=C.getActiveMipmapLevel();C.setRenderTarget(Ne),C.getClearColor(ne),fe=C.getClearAlpha(),fe<1&&C.setClearColor(16777215,.5),C.clear(),ot&&Le.render(ue);const $e=C.toneMapping;C.toneMapping=ki;const Ye=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),P.setupLightsView(re),He===!0&&Be.setGlobalState(C.clippingPlanes,re),Ei(R,ue,re),W.updateMultisampleRenderTarget(Ne),W.updateRenderTargetMipmap(Ne),Et.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Dt=0,Zt=q.length;Dt<Zt;Dt++){const Wt=q[Dt],{object:Ot,geometry:Qe,material:Ut,group:at}=Wt;if(Ut.side===Hi&&Ot.layers.test(re.layers)){const Sn=Ut.side;Ut.side=In,Ut.needsUpdate=!0,Br(Ot,ue,re,Qe,Ut,at),Ut.side=Sn,Ut.needsUpdate=!0,et=!0}}et===!0&&(W.updateMultisampleRenderTarget(Ne),W.updateRenderTargetMipmap(Ne))}C.setRenderTarget(Pe,ke,qe),C.setClearColor(ne,fe),Ye!==void 0&&(re.viewport=Ye),C.toneMapping=$e}function Ei(R,q,ue){const re=q.isScene===!0?q.overrideMaterial:null;for(let J=0,Ne=R.length;J<Ne;J++){const Ge=R[J],{object:Pe,geometry:ke,group:qe}=Ge;let $e=Ge.material;$e.allowOverride===!0&&re!==null&&($e=re),Pe.layers.test(ue.layers)&&Br(Pe,q,ue,ke,$e,qe)}}function Br(R,q,ue,re,J,Ne){R.onBeforeRender(C,q,ue,re,J,Ne),R.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),J.onBeforeRender(C,q,ue,re,R,Ne),J.transparent===!0&&J.side===Hi&&J.forceSinglePass===!1?(J.side=In,J.needsUpdate=!0,C.renderBufferDirect(ue,q,re,J,R,Ne),J.side=ya,J.needsUpdate=!0,C.renderBufferDirect(ue,q,re,J,R,Ne),J.side=Hi):C.renderBufferDirect(ue,q,re,J,R,Ne),R.onAfterRender(C,q,ue,re,J,Ne)}function Hr(R,q,ue){q.isScene!==!0&&(q=wt);const re=E.get(R),J=P.state.lights,Ne=P.state.shadowsArray,Ge=J.state.version,Pe=We.getParameters(R,J.state,Ne,q,ue),ke=We.getProgramCacheKey(Pe);let qe=re.programs;re.environment=R.isMeshStandardMaterial?q.environment:null,re.fog=q.fog,re.envMap=(R.isMeshStandardMaterial?ye:_e).get(R.envMap||re.environment),re.envMapRotation=re.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,qe===void 0&&(R.addEventListener("dispose",Dn),qe=new Map,re.programs=qe);let $e=qe.get(ke);if($e!==void 0){if(re.currentProgram===$e&&re.lightsStateVersion===Ge)return js(R,Pe),$e}else Pe.uniforms=We.getUniforms(R),R.onBeforeCompile(Pe,C),$e=We.acquireProgram(Pe,ke),qe.set(ke,$e),re.uniforms=Pe.uniforms;const Ye=re.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ye.clippingPlanes=Be.uniform),js(R,Pe),re.needsLights=Aa(R),re.lightsStateVersion=Ge,re.needsLights&&(Ye.ambientLightColor.value=J.state.ambient,Ye.lightProbe.value=J.state.probe,Ye.directionalLights.value=J.state.directional,Ye.directionalLightShadows.value=J.state.directionalShadow,Ye.spotLights.value=J.state.spot,Ye.spotLightShadows.value=J.state.spotShadow,Ye.rectAreaLights.value=J.state.rectArea,Ye.ltc_1.value=J.state.rectAreaLTC1,Ye.ltc_2.value=J.state.rectAreaLTC2,Ye.pointLights.value=J.state.point,Ye.pointLightShadows.value=J.state.pointShadow,Ye.hemisphereLights.value=J.state.hemi,Ye.directionalShadowMap.value=J.state.directionalShadowMap,Ye.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ye.spotShadowMap.value=J.state.spotShadowMap,Ye.spotLightMatrix.value=J.state.spotLightMatrix,Ye.spotLightMap.value=J.state.spotLightMap,Ye.pointShadowMap.value=J.state.pointShadowMap,Ye.pointShadowMatrix.value=J.state.pointShadowMatrix),re.currentProgram=$e,re.uniformsList=null,$e}function dl(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=$u.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function js(R,q){const ue=E.get(R);ue.outputColorSpace=q.outputColorSpace,ue.batching=q.batching,ue.batchingColor=q.batchingColor,ue.instancing=q.instancing,ue.instancingColor=q.instancingColor,ue.instancingMorph=q.instancingMorph,ue.skinning=q.skinning,ue.morphTargets=q.morphTargets,ue.morphNormals=q.morphNormals,ue.morphColors=q.morphColors,ue.morphTargetsCount=q.morphTargetsCount,ue.numClippingPlanes=q.numClippingPlanes,ue.numIntersection=q.numClipIntersection,ue.vertexAlphas=q.vertexAlphas,ue.vertexTangents=q.vertexTangents,ue.toneMapping=q.toneMapping}function sr(R,q,ue,re,J){q.isScene!==!0&&(q=wt),W.resetTextureUnits();const Ne=q.fog,Ge=re.isMeshStandardMaterial?q.environment:null,Pe=ee===null?C.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Bs,ke=(re.isMeshStandardMaterial?ye:_e).get(re.envMap||Ge),qe=re.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,$e=!!ue.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Ye=!!ue.morphAttributes.position,et=!!ue.morphAttributes.normal,Dt=!!ue.morphAttributes.color;let Zt=ki;re.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Zt=C.toneMapping);const Wt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Ot=Wt!==void 0?Wt.length:0,Qe=E.get(re),Ut=P.state.lights;if(He===!0&&(ht===!0||R!==ce)){const En=R===ce&&re.id===pe;Be.setState(re,R,En)}let at=!1;re.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Ut.state.version||Qe.outputColorSpace!==Pe||J.isBatchedMesh&&Qe.batching===!1||!J.isBatchedMesh&&Qe.batching===!0||J.isBatchedMesh&&Qe.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Qe.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Qe.instancing===!1||!J.isInstancedMesh&&Qe.instancing===!0||J.isSkinnedMesh&&Qe.skinning===!1||!J.isSkinnedMesh&&Qe.skinning===!0||J.isInstancedMesh&&Qe.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Qe.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Qe.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Qe.instancingMorph===!1&&J.morphTexture!==null||Qe.envMap!==ke||re.fog===!0&&Qe.fog!==Ne||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Be.numPlanes||Qe.numIntersection!==Be.numIntersection)||Qe.vertexAlphas!==qe||Qe.vertexTangents!==$e||Qe.morphTargets!==Ye||Qe.morphNormals!==et||Qe.morphColors!==Dt||Qe.toneMapping!==Zt||Qe.morphTargetsCount!==Ot)&&(at=!0):(at=!0,Qe.__version=re.version);let Sn=Qe.currentProgram;at===!0&&(Sn=Hr(re,q,J));let Yi=!1,yn=!1,si=!1;const It=Sn.getUniforms(),Mn=Qe.uniforms;if(je.useProgram(Sn.program)&&(Yi=!0,yn=!0,si=!0),re.id!==pe&&(pe=re.id,yn=!0),Yi||ce!==R){je.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),It.setValue(G,"projectionMatrix",R.projectionMatrix),It.setValue(G,"viewMatrix",R.matrixWorldInverse);const bn=It.map.cameraPosition;bn!==void 0&&bn.setValue(G,_t.setFromMatrixPosition(R.matrixWorld)),Nt.logarithmicDepthBuffer&&It.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&It.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),ce!==R&&(ce=R,yn=!0,si=!0)}if(Qe.needsLights&&(Ut.state.directionalShadowMap.length>0&&It.setValue(G,"directionalShadowMap",Ut.state.directionalShadowMap,W),Ut.state.spotShadowMap.length>0&&It.setValue(G,"spotShadowMap",Ut.state.spotShadowMap,W),Ut.state.pointShadowMap.length>0&&It.setValue(G,"pointShadowMap",Ut.state.pointShadowMap,W)),J.isSkinnedMesh){It.setOptional(G,J,"bindMatrix"),It.setOptional(G,J,"bindMatrixInverse");const En=J.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),It.setValue(G,"boneTexture",En.boneTexture,W))}J.isBatchedMesh&&(It.setOptional(G,J,"batchingTexture"),It.setValue(G,"batchingTexture",J._matricesTexture,W),It.setOptional(G,J,"batchingIdTexture"),It.setValue(G,"batchingIdTexture",J._indirectTexture,W),It.setOptional(G,J,"batchingColorTexture"),J._colorsTexture!==null&&It.setValue(G,"batchingColorTexture",J._colorsTexture,W));const hn=ue.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&ut.update(J,ue,Sn),(yn||Qe.receiveShadow!==J.receiveShadow)&&(Qe.receiveShadow=J.receiveShadow,It.setValue(G,"receiveShadow",J.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Mn.envMap.value=ke,Mn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&q.environment!==null&&(Mn.envMapIntensity.value=q.environmentIntensity),Mn.dfgLUT!==void 0&&(Mn.dfgLUT.value=SC()),yn&&(It.setValue(G,"toneMappingExposure",C.toneMappingExposure),Qe.needsLights&&Zs(Mn,si),Ne&&re.fog===!0&&nt.refreshFogUniforms(Mn,Ne),nt.refreshMaterialUniforms(Mn,re,me,Z,P.state.transmissionRenderTarget[R.id]),$u.upload(G,dl(Qe),Mn,W)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&($u.upload(G,dl(Qe),Mn,W),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&It.setValue(G,"center",J.center),It.setValue(G,"modelViewMatrix",J.modelViewMatrix),It.setValue(G,"normalMatrix",J.normalMatrix),It.setValue(G,"modelMatrix",J.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const En=re.uniformsGroups;for(let bn=0,Gr=En.length;bn<Gr;bn++){const bi=En[bn];Me.update(bi,Sn),Me.bind(bi,Sn)}}return Sn}function Zs(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Aa(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return ae},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(R,q,ue){const re=E.get(R);re.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),E.get(R.texture).__webglTexture=q,E.get(R.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ue,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const ue=E.get(R);ue.__webglFramebuffer=q,ue.__useDefaultFramebuffer=q===void 0};const Ra=G.createFramebuffer();this.setRenderTarget=function(R,q=0,ue=0){ee=R,V=q,ae=ue;let re=null,J=!1,Ne=!1;if(R){const Pe=E.get(R);if(Pe.__useDefaultFramebuffer!==void 0){je.bindFramebuffer(G.FRAMEBUFFER,Pe.__webglFramebuffer),U.copy(R.viewport),B.copy(R.scissor),$=R.scissorTest,je.viewport(U),je.scissor(B),je.setScissorTest($),pe=-1;return}else if(Pe.__webglFramebuffer===void 0)W.setupRenderTarget(R);else if(Pe.__hasExternalTextures)W.rebindTextures(R,E.get(R.texture).__webglTexture,E.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const $e=R.depthTexture;if(Pe.__boundDepthTexture!==$e){if($e!==null&&E.has($e)&&(R.width!==$e.image.width||R.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(R)}}const ke=R.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ne=!0);const qe=E.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(qe[q])?re=qe[q][ue]:re=qe[q],J=!0):R.samples>0&&W.useMultisampledRTT(R)===!1?re=E.get(R).__webglMultisampledFramebuffer:Array.isArray(qe)?re=qe[ue]:re=qe,U.copy(R.viewport),B.copy(R.scissor),$=R.scissorTest}else U.copy(Q).multiplyScalar(me).floor(),B.copy(oe).multiplyScalar(me).floor(),$=we;if(ue!==0&&(re=Ra),je.bindFramebuffer(G.FRAMEBUFFER,re)&&je.drawBuffers(R,re),je.viewport(U),je.scissor(B),je.setScissorTest($),J){const Pe=E.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+q,Pe.__webglTexture,ue)}else if(Ne){const Pe=q;for(let ke=0;ke<R.textures.length;ke++){const qe=E.get(R.textures[ke]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+ke,qe.__webglTexture,ue,Pe)}}else if(R!==null&&ue!==0){const Pe=E.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Pe.__webglTexture,ue)}pe=-1},this.readRenderTargetPixels=function(R,q,ue,re,J,Ne,Ge,Pe=0){if(!(R&&R.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ge!==void 0&&(ke=ke[Ge]),ke){je.bindFramebuffer(G.FRAMEBUFFER,ke);try{const qe=R.textures[Pe],$e=qe.format,Ye=qe.type;if(!Nt.textureFormatReadable($e)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Nt.textureTypeReadable(Ye)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-re&&ue>=0&&ue<=R.height-J&&(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Pe),G.readPixels(q,ue,re,J,Ce.convert($e),Ce.convert(Ye),Ne))}finally{const qe=ee!==null?E.get(ee).__webglFramebuffer:null;je.bindFramebuffer(G.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(R,q,ue,re,J,Ne,Ge,Pe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ge!==void 0&&(ke=ke[Ge]),ke)if(q>=0&&q<=R.width-re&&ue>=0&&ue<=R.height-J){je.bindFramebuffer(G.FRAMEBUFFER,ke);const qe=R.textures[Pe],$e=qe.format,Ye=qe.type;if(!Nt.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Nt.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,et),G.bufferData(G.PIXEL_PACK_BUFFER,Ne.byteLength,G.STREAM_READ),R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Pe),G.readPixels(q,ue,re,J,Ce.convert($e),Ce.convert(Ye),0);const Dt=ee!==null?E.get(ee).__webglFramebuffer:null;je.bindFramebuffer(G.FRAMEBUFFER,Dt);const Zt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await FE(G,Zt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,et),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ne),G.deleteBuffer(et),G.deleteSync(Zt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,ue=0){const re=Math.pow(2,-ue),J=Math.floor(R.image.width*re),Ne=Math.floor(R.image.height*re),Ge=q!==null?q.x:0,Pe=q!==null?q.y:0;W.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,ue,0,0,Ge,Pe,J,Ne),je.unbindTexture()};const or=G.createFramebuffer(),Ca=G.createFramebuffer();this.copyTextureToTexture=function(R,q,ue=null,re=null,J=0,Ne=null){Ne===null&&(J!==0?(tl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ne=J,J=0):Ne=0);let Ge,Pe,ke,qe,$e,Ye,et,Dt,Zt;const Wt=R.isCompressedTexture?R.mipmaps[Ne]:R.image;if(ue!==null)Ge=ue.max.x-ue.min.x,Pe=ue.max.y-ue.min.y,ke=ue.isBox3?ue.max.z-ue.min.z:1,qe=ue.min.x,$e=ue.min.y,Ye=ue.isBox3?ue.min.z:0;else{const hn=Math.pow(2,-J);Ge=Math.floor(Wt.width*hn),Pe=Math.floor(Wt.height*hn),R.isDataArrayTexture?ke=Wt.depth:R.isData3DTexture?ke=Math.floor(Wt.depth*hn):ke=1,qe=0,$e=0,Ye=0}re!==null?(et=re.x,Dt=re.y,Zt=re.z):(et=0,Dt=0,Zt=0);const Ot=Ce.convert(q.format),Qe=Ce.convert(q.type);let Ut;q.isData3DTexture?(W.setTexture3D(q,0),Ut=G.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(W.setTexture2DArray(q,0),Ut=G.TEXTURE_2D_ARRAY):(W.setTexture2D(q,0),Ut=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);const at=G.getParameter(G.UNPACK_ROW_LENGTH),Sn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Yi=G.getParameter(G.UNPACK_SKIP_PIXELS),yn=G.getParameter(G.UNPACK_SKIP_ROWS),si=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Wt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Wt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,qe),G.pixelStorei(G.UNPACK_SKIP_ROWS,$e),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ye);const It=R.isDataArrayTexture||R.isData3DTexture,Mn=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const hn=E.get(R),En=E.get(q),bn=E.get(hn.__renderTarget),Gr=E.get(En.__renderTarget);je.bindFramebuffer(G.READ_FRAMEBUFFER,bn.__webglFramebuffer),je.bindFramebuffer(G.DRAW_FRAMEBUFFER,Gr.__webglFramebuffer);for(let bi=0;bi<ke;bi++)It&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(R).__webglTexture,J,Ye+bi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(q).__webglTexture,Ne,Zt+bi)),G.blitFramebuffer(qe,$e,Ge,Pe,et,Dt,Ge,Pe,G.DEPTH_BUFFER_BIT,G.NEAREST);je.bindFramebuffer(G.READ_FRAMEBUFFER,null),je.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(J!==0||R.isRenderTargetTexture||E.has(R)){const hn=E.get(R),En=E.get(q);je.bindFramebuffer(G.READ_FRAMEBUFFER,or),je.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ca);for(let bn=0;bn<ke;bn++)It?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,hn.__webglTexture,J,Ye+bn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,hn.__webglTexture,J),Mn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,En.__webglTexture,Ne,Zt+bn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,En.__webglTexture,Ne),J!==0?G.blitFramebuffer(qe,$e,Ge,Pe,et,Dt,Ge,Pe,G.COLOR_BUFFER_BIT,G.NEAREST):Mn?G.copyTexSubImage3D(Ut,Ne,et,Dt,Zt+bn,qe,$e,Ge,Pe):G.copyTexSubImage2D(Ut,Ne,et,Dt,qe,$e,Ge,Pe);je.bindFramebuffer(G.READ_FRAMEBUFFER,null),je.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Mn?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(Ut,Ne,et,Dt,Zt,Ge,Pe,ke,Ot,Qe,Wt.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D(Ut,Ne,et,Dt,Zt,Ge,Pe,ke,Ot,Wt.data):G.texSubImage3D(Ut,Ne,et,Dt,Zt,Ge,Pe,ke,Ot,Qe,Wt):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ne,et,Dt,Ge,Pe,Ot,Qe,Wt.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ne,et,Dt,Wt.width,Wt.height,Ot,Wt.data):G.texSubImage2D(G.TEXTURE_2D,Ne,et,Dt,Ge,Pe,Ot,Qe,Wt);G.pixelStorei(G.UNPACK_ROW_LENGTH,at),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Sn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Yi),G.pixelStorei(G.UNPACK_SKIP_ROWS,yn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,si),Ne===0&&q.generateMipmaps&&G.generateMipmap(Ut),je.unbindTexture()},this.initRenderTarget=function(R){E.get(R).__webglFramebuffer===void 0&&W.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?W.setTextureCube(R,0):R.isData3DTexture?W.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?W.setTexture2DArray(R,0):W.setTexture2D(R,0),je.unbindTexture()},this.resetState=function(){V=0,ae=0,ee=null,je.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Tt._getUnpackColorSpace()}}const MC=({sensitivity:s=2,smoothing:e=.8,idle:i=!0,initialSettings:r={colorDeep:"#001433",colorMid:"#0084ff",colorBright:"#00ffe1",size:1}})=>{const l=j.useRef(null),u=j.useRef(null),f=j.useCallback(h=>{const m=new ub;m.background=null;const p=new ii(75,h.clientWidth/h.clientHeight,.1,100);p.position.z=2.4;const _=new yC({antialias:!0,alpha:!0});_.setSize(h.clientWidth,h.clientHeight),_.setPixelRatio(Math.min(window.devicePixelRatio,2)),_.toneMapping=up,_.toneMappingExposure=.9,h.appendChild(_.domElement);const g=new Zo;m.add(g);const x=`
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
    `,M=new Eb(35071,2,10);g.add(M);const b=new ac(1,64,64),T={vertexShader:`
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        void main(){
          vNormal=normalize(normalMatrix*normal);
          vec4 mv=modelViewMatrix*vec4(position,1.0);
          vViewPosition=-mv.xyz;
          gl_Position=projectionMatrix*mv;
        }
      `,fragmentShader:`
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        uniform vec3 uColor;
        uniform float uOpacity;
        void main(){
          float fresnel=pow(1.0-dot(normalize(vNormal),normalize(vViewPosition)),2.5);
          gl_FragColor=vec4(uColor,fresnel*uOpacity);
        }
      `},y=new Yn({vertexShader:T.vertexShader,fragmentShader:T.fragmentShader,uniforms:{uColor:{value:new St(85)},uOpacity:{value:.3}},transparent:!0,blending:Ns,side:In,depthWrite:!1}),v=new Yn({vertexShader:T.vertexShader,fragmentShader:T.fragmentShader,uniforms:{uColor:{value:new St(26367)},uOpacity:{value:.41}},transparent:!0,blending:Ns,side:ya,depthWrite:!1});g.add(new xi(b,y)),g.add(new xi(b,v));const w=new ac(.998,128,128),D=new Yn({uniforms:{uTime:{value:0},uScale:{value:.1404*r.size},uBrightness:{value:1.31},uThreshold:{value:.072},uColorDeep:{value:new St(r.colorDeep)},uColorMid:{value:new St(r.colorMid)},uColorBright:{value:new St(r.colorBright)},uAudioLevel:{value:0}},vertexShader:`
        uniform float uAudioLevel;
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        ${x}
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
      `,fragmentShader:`
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
        ${x}
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
      `,transparent:!0,blending:Ns,side:Hi,depthWrite:!1}),O=new xi(w,D);g.add(O);const P=g.children.filter(Te=>Te.isMesh&&(Te.material===y||Te.material===v)),F=600,I=new Float32Array(F*3),K=new Float32Array(F),C=.95;for(let Te=0;Te<F;Te++){const Q=C*Math.cbrt(Math.random()),oe=Math.random()*Math.PI*2,we=Math.acos(2*Math.random()-1);I[Te*3]=Q*Math.sin(we)*Math.cos(oe),I[Te*3+1]=Q*Math.sin(we)*Math.sin(oe),I[Te*3+2]=Q*Math.cos(we),K[Te]=Math.random()}const L=new yi;L.setAttribute("position",new _i(I,3)),L.setAttribute("aSize",new _i(K,1));const V=new Yn({uniforms:{uTime:{value:0},uColor:{value:new St(r.colorBright)},uAudioLevel:{value:0}},vertexShader:`
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
      `,fragmentShader:`
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
      `,transparent:!0,blending:Ns,depthWrite:!1}),ae=new mb(L,V);g.add(ae);let ee=null,pe=null,ce=null,U=null,B=0;(async()=>{try{U&&U.getTracks().forEach(oe=>oe.stop()),U=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}}),ee&&ee.close(),ee=new(window.AudioContext||window.webkitAudioContext);const Te=ee.createMediaStreamSource(U),Q=ee.createGain();Q.gain.value=20,Te.connect(Q),pe=ee.createAnalyser(),Q.connect(pe),pe.fftSize=256,pe.smoothingTimeConstant=e,ce=new Uint8Array(pe.frequencyBinCount)}catch(Te){console.warn("Microphone access denied or error.",Te)}})();const ne=()=>{if(!pe||!ce)return 0;pe.getByteFrequencyData(ce);let Te=0;for(let we=0;we<ce.length;we++)Te+=ce[we];let oe=Te/ce.length/255*s;return oe<.05?oe=0:oe=(oe-.05)/(1-.05),Math.min(oe,1)},fe=()=>{ee&&ee.state==="suspended"&&(ee.resume(),console.log("AudioContext resumed"))};window.addEventListener("click",fe),window.addEventListener("touchstart",fe);const N=new Tb;let Z=null;const me=()=>{Z=requestAnimationFrame(me);const Te=N.getElapsedTime();let Q=ne();i&&Q<.01&&(Q=.02+Math.sin(Te*1)*.01),B+=(Q-B)*.1;const oe=B,we=.4+oe*.12;D.uniforms.uTime.value=Te*we,D.uniforms.uAudioLevel.value=oe,V.uniforms.uTime.value=Te,V.uniforms.uAudioLevel.value=oe;const Ve=1;P.forEach(ht=>{ht.scale.setScalar(Ve)}),v.uniforms.uOpacity.value=.41+oe*.5,O.rotation.y=Te*.08;const He=1+oe*.05;g.rotation.x+=.002*He,g.rotation.y+=.005*He,oe>.1?(g.position.x=(Math.random()-.5)*oe*2e-4,g.position.y=(Math.random()-.5)*oe*2e-4):(g.position.x=0,g.position.y=0),_.render(m,p)},be=()=>{const Te=h.clientWidth,Q=h.clientHeight;p.aspect=Te/Q,p.updateProjectionMatrix(),_.setSize(Te,Q)};return window.addEventListener("resize",be),me(),()=>{window.removeEventListener("resize",be),window.removeEventListener("click",fe),window.removeEventListener("touchstart",fe),Z&&cancelAnimationFrame(Z),U&&U.getTracks().forEach(Te=>Te.stop()),ee&&ee.close(),_.dispose(),b.dispose(),w.dispose(),L.dispose(),y.dispose(),v.dispose(),D.dispose(),V.dispose(),h.contains(_.domElement)&&h.removeChild(_.domElement)}},[s,e,i,r]);return j.useEffect(()=>{const h=l.current;if(h)return u.current=f(h),()=>{u.current&&u.current()}},[f]),Ae.jsx("div",{ref:l,style:{width:"100%",height:"100%",position:"relative",background:"transparent",overflow:"hidden"}})},EC="http://localhost:3001",bC=({onFinal:s,onInterim:e,onStatus:i})=>{const[r,l]=j.useState(!1),u=j.useRef(null),f=j.useRef(null),h=j.useRef(null),m=j.useRef(null),p=j.useRef(!1),_=j.useRef(s),g=j.useRef(e),x=j.useRef(i);j.useEffect(()=>{_.current=s,g.current=e,x.current=i},[s,e,i]);const M=j.useCallback(()=>{p.current=!1,u.current&&(u.current.readyState===WebSocket.OPEN&&u.current.close(),u.current=null),f.current&&(f.current.state!=="inactive"&&f.current.stop(),f.current=null),h.current&&(h.current.getTracks().forEach(y=>y.stop()),h.current=null),m.current&&(clearInterval(m.current),m.current=null),l(!1)},[]),b=j.useCallback(async()=>{if(!(p.current||u.current&&u.current.readyState!==WebSocket.CLOSED))try{p.current=!0,M(),x.current?.("Connecting...");const y=await fetch(`${EC}/api/deepgram-token`);if(!y.ok)throw new Error("Failed to get Deepgram token");const{key:v}=await y.json();if(!v)throw new Error("No API key returned");const w="wss://api.deepgram.com/v1/listen?smart_format=true&model=nova-2&language=en-US&interim_results=true&endpointing=3000",D=new WebSocket(w,["token",v]);u.current=D,p.current=!1,D.onopen=async()=>{x.current?.("Listening"),l(!0);try{const O=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}});h.current=O;const P=new MediaRecorder(O,{mimeType:"audio/webm"});f.current=P,P.addEventListener("dataavailable",F=>{F.data.size>0&&D.readyState===1&&D.send(F.data)}),P.start(250),m.current=setInterval(()=>{D.readyState===1&&D.send(JSON.stringify({type:"KeepAlive"}))},3e3)}catch(O){console.error("Microphone error:",O),x.current?.("Mic Error"),D.close()}},D.onmessage=O=>{const P=JSON.parse(O.data);if(P.channel&&P.channel.alternatives[0]){const F=P.channel.alternatives[0].transcript;F&&P.is_final?F.trim().length>0&&_.current?.(F):F&&g.current?.(F)}},D.onclose=()=>{console.log("Deepgram connection closed"),l(!1)},D.onerror=O=>{console.error("Deepgram WebSocket error:",O),x.current?.("Connection Error")}}catch(y){p.current=!1,console.error("Error starting Deepgram:",y),x.current?.("Connection Failed"),M()}},[M]),T=j.useCallback(()=>{M(),x.current?.("Stopped")},[M]);return j.useEffect(()=>()=>M(),[M]),{start:b,stop:T,isListening:r}},dv="http://localhost:3001",TC=()=>{const[s,e]=j.useState([]),[i,r]=j.useState(""),[l,u]=j.useState("STANDBY"),[f,h]=j.useState(!1),m=j.useRef(null);j.useRef(!1);const p=j.useRef(null),_=j.useRef(null),g=j.useRef(!1),{settings:x}=oc(),[M,b]=j.useState(()=>{const ne=localStorage.getItem("terminalPosition");return ne?JSON.parse(ne):{x:window.innerWidth-420,y:80}}),[T,y]=j.useState(()=>{const ne=localStorage.getItem("terminalSize");return ne?JSON.parse(ne):{width:400,height:300}}),[v,w]=j.useState(!1),[D,O]=j.useState(!1),[P,F]=j.useState(null),I=j.useRef({x:0,y:0}),K=ne=>{e(fe=>[...fe.slice(-30),ne])},C=ne=>{u(fe=>(fe!==ne&&e(N=>N[N.length-1]===`>> SYSTEM: ${ne}`?N:[...N.slice(-30),`>> SYSTEM: ${ne}`]),ne))},L=()=>{p.current&&(p.current.pause(),p.current.currentTime=0,p.current=null,g.current=!1),_.current&&(_.current.abort(),_.current=null)},V=ne=>{ne.target.closest(".terminal-drag-handle")&&(w(!0),I.current={x:ne.clientX-M.x,y:ne.clientY-M.y},ne.preventDefault())},ae=(ne,fe)=>{ne.stopPropagation(),O(!0),F(fe)};j.useEffect(()=>{const ne=N=>{if(v){const Z=Math.max(0,Math.min(window.innerWidth-200,N.clientX-I.current.x)),me=Math.max(0,Math.min(window.innerHeight-100,N.clientY-I.current.y));b({x:Z,y:me})}if(D){if(P==="width"||P==="corner"){const Z=Math.max(300,Math.min(800,N.clientX-M.x));y(me=>({...me,width:Z}))}if(P==="height"||P==="corner"){const Z=Math.max(150,Math.min(600,N.clientY-M.y));y(me=>({...me,height:Z}))}}},fe=()=>{v&&(w(!1),localStorage.setItem("terminalPosition",JSON.stringify(M))),D&&(O(!1),F(null),localStorage.setItem("terminalSize",JSON.stringify(T)))};return(v||D)&&(document.addEventListener("mousemove",ne),document.addEventListener("mouseup",fe)),()=>{document.removeEventListener("mousemove",ne),document.removeEventListener("mouseup",fe)}},[v,D,P,M,T]);const ee=async ne=>{if(!x.controls?.speaker)return;const fe=ne.replace(/\*/g,"");try{const N=await fetch(`${dv}/api/tts`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:fe})});if(N.ok){const Z=await N.blob(),me=URL.createObjectURL(Z),be=new Audio(me);p.current=be,g.current=!0,be.onended=()=>{g.current=!1},be.play()}}catch(N){console.error("TTS playback error:",N)}},pe=async ne=>{L(),h(!0),K(">> JARVIS: Thinking..."),_.current=new AbortController;try{const N=await(await fetch(`${dv}/api/chat`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:ne}),signal:_.current.signal})).json();e(Z=>[...Z.filter(be=>be!==">> JARVIS: Thinking..."),`>> JARVIS: ${N.response}`]),ee(N.response)}catch(fe){if(fe.name==="AbortError"){e(N=>N.filter(Z=>Z!==">> JARVIS: Thinking..."));return}e(N=>[...N.filter(me=>me!==">> JARVIS: Thinking..."),">> JARVIS: I apologize, I could not connect to my systems."])}finally{h(!1)}},ce=j.useRef({text:"",time:0}),{start:U,stop:B,isListening:$}=bC({onFinal:ne=>{L();const fe=be=>be.toLowerCase().replace(/[^a-z0-9]/g,""),N=fe(ne),Z=fe(ce.current.text),me=Date.now();if(Z&&me-ce.current.time<3e3&&N===Z){console.log("Ignored duplicate transcript (exact match):",ne);return}N&&(ce.current={text:ne,time:me},r(""),K(`>> USER: ${ne}`),pe(ne))},onInterim:ne=>{g.current&&L(),r(ne)},onStatus:C});return j.useEffect(()=>{if(x.controls?.mic===!1){$&&B(),C("Mic Disabled");return}$||U()},[x.controls?.mic,$,U,B]),j.useEffect(()=>{const ne=()=>{x.controls?.mic!==!1&&!$&&U()};return window.addEventListener("click",ne),()=>window.removeEventListener("click",ne)},[$,x.controls?.mic,U]),j.useEffect(()=>{m.current?.scrollIntoView({behavior:"smooth"})},[s,i]),Ae.jsxs("div",{className:`transcript-terminal ${v?"dragging":""} ${D?"resizing":""}`,style:{left:M.x,top:M.y,width:T.width,height:T.height},onMouseDown:V,children:[Ae.jsx("div",{className:"terminal-resize-handle resize-right",onMouseDown:ne=>ae(ne,"width")}),Ae.jsx("div",{className:"terminal-resize-handle resize-bottom",onMouseDown:ne=>ae(ne,"height")}),Ae.jsx("div",{className:"terminal-resize-handle resize-corner",onMouseDown:ne=>ae(ne,"corner")}),Ae.jsxs("div",{className:"terminal-header terminal-drag-handle",children:[Ae.jsx("span",{className:"drag-dots",children:"⋮⋮"}),Ae.jsx("span",{className:"status-indicator",style:{background:l==="Listening"?"#00ff88":l.includes("off")?"#ff4444":f?"#00aaff":"#ffaa00"}}),"TERMINAL_v2.0.4 // ",f?"Processing...":l]}),Ae.jsxs("div",{className:"terminal-content",children:[s.map((ne,fe)=>{let N="terminal-line";return ne.includes("USER:")?N+=" user-line":ne.includes("JARVIS:")?N+=" jarvis-line":ne.includes("SYSTEM:")&&(N+=" system-line"),Ae.jsx("div",{className:N,children:ne},fe)}),i&&Ae.jsxs("div",{className:"terminal-line interim",children:[">> USER (listening): ",i]}),Ae.jsx("div",{ref:m})]})]})},AC=()=>{const[s,e]=j.useState(new Date),[i,r]=j.useState(null),[l,u]=j.useState({city:"Ranchi",country:"India"}),[f,h]=j.useState(!0),{settings:m}=oc(),[p,_]=j.useState(()=>{const U=localStorage.getItem("infoPanelPosition");return U?JSON.parse(U):{x:20,y:80}}),[g,x]=j.useState(!1),[M,b]=j.useState(()=>localStorage.getItem("infoPanelCompact")==="true"),[T,y]=j.useState(()=>{const U=localStorage.getItem("infoPanelWidth");return U?parseInt(U):220}),[v,w]=j.useState(()=>{const U=localStorage.getItem("infoPanelHeight");return U?parseInt(U):0}),[D,O]=j.useState(!1),[P,F]=j.useState(null),I=j.useRef({x:0,y:0}),K=j.useRef(null);j.useEffect(()=>{const U=setInterval(()=>{e(new Date)},1e3);return()=>clearInterval(U)},[]),j.useEffect(()=>{if(!m.controls?.location){h(!1);return}"geolocation"in navigator?navigator.geolocation.getCurrentPosition(async U=>{try{const{latitude:B,longitude:$}=U.coords,fe=await(await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${B}&lon=${$}`)).json(),N=fe.address.city||fe.address.town||fe.address.village||fe.address.county||"Ranchi",Z=fe.address.country||"India";u({city:N,country:Z})}catch(B){console.error("Error fetching location details:",B)}finally{h(!1)}},U=>{console.error("Geolocation error:",U),h(!1)}):h(!1)},[]),j.useEffect(()=>{const U=async()=>{try{const fe=(await(await fetch(`https://wttr.in/${l.city}?format=j1`)).json()).current_condition[0];r({temp:fe.temp_C,desc:fe.weatherDesc[0].value,humidity:fe.humidity,feelsLike:fe.FeelsLikeC,icon:V(fe.weatherCode)})}catch($){console.error("Weather fetch error:",$),r({temp:"--",desc:"Unavailable",icon:"🌤️"})}};U();const B=setInterval(U,6e5);return()=>clearInterval(B)},[l.city]);const C=U=>{U.target.closest(".panel-drag-handle")&&(x(!0),I.current={x:U.clientX-p.x,y:U.clientY-p.y},U.preventDefault())};j.useEffect(()=>{const U=$=>{if(g){const ne=Math.max(0,Math.min(window.innerWidth-300,$.clientX-I.current.x)),fe=Math.max(0,Math.min(window.innerHeight-100,$.clientY-I.current.y));_({x:ne,y:fe})}if(D){if(P==="width"||P==="corner"){const ne=Math.max(200,Math.min(500,$.clientX-p.x));y(ne)}if(P==="height"||P==="corner"){const ne=Math.max(150,Math.min(600,$.clientY-p.y));w(ne)}}},B=()=>{g&&(x(!1),localStorage.setItem("infoPanelPosition",JSON.stringify(p))),D&&(O(!1),F(null),localStorage.setItem("infoPanelWidth",T.toString()),localStorage.setItem("infoPanelHeight",v.toString()))};return(g||D)&&(document.addEventListener("mousemove",U),document.addEventListener("mouseup",B)),()=>{document.removeEventListener("mousemove",U),document.removeEventListener("mouseup",B)}},[g,D,P,p,T,v]);const L=(U,B)=>{U.stopPropagation(),O(!0),F(B)},V=U=>{const B=parseInt(U);return B===113?"☀️":B===116?"⛅":[119,122].includes(B)?"☁️":[176,263,266,293,296,299,302,305,308,311,314].includes(B)?"🌧️":[200,386,389,392,395].includes(B)?"⛈️":[179,182,185,227,230,323,326,329,332,335,338,350,368,371,374,377].includes(B)?"❄️":[143,248,260].includes(B)?"🌫️":"🌤️"},ae=U=>{const B={weekday:"long",year:"numeric",month:"long",day:"numeric"};return U.toLocaleDateString("en-IN",B)},ee=U=>U.toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0}),pe=()=>{const U=s.getHours();return U<12?"Good Morning":U<17?"Good Afternoon":U<21?"Good Evening":"Good Night"},ce=()=>{const U=!M;b(U),localStorage.setItem("infoPanelCompact",U.toString())};return Ae.jsxs("div",{ref:K,className:`info-panel ${g?"dragging":""} ${M?"compact":""} ${D?"resizing":""}`,style:{left:p.x,top:p.y,width:M?"auto":T,height:M?"auto":v>0?v:"auto"},onMouseDown:C,children:[Ae.jsx("div",{className:"panel-resize-handle resize-right",onMouseDown:U=>L(U,"width")}),Ae.jsx("div",{className:"panel-resize-handle resize-bottom",onMouseDown:U=>L(U,"height")}),Ae.jsx("div",{className:"panel-resize-handle resize-corner",onMouseDown:U=>L(U,"corner")}),Ae.jsxs("div",{className:"panel-drag-handle",children:[Ae.jsx("span",{className:"drag-dots",children:"⋮⋮"}),Ae.jsx("span",{className:"info-greeting",children:M?ee(s):`${pe()}, Sir`}),Ae.jsx("button",{className:"panel-resize-btn",onClick:ce,title:M?"Expand":"Compact",children:M?"⬜":"➖"})]}),!M&&Ae.jsxs(Ae.Fragment,{children:[Ae.jsxs("div",{className:"info-time-section",children:[Ae.jsx("div",{className:"info-time",children:ee(s)}),Ae.jsx("div",{className:"info-date",children:ae(s)})]}),Ae.jsxs("div",{className:"info-row",children:[Ae.jsxs("span",{className:"info-location",children:["📍 ",m.controls?.location?l.city:"Location Off"]}),Ae.jsxs("span",{className:"info-status-mini",children:[Ae.jsx("span",{className:"status-dot-mini"}),"Online"]}),i&&Ae.jsxs("div",{className:"info-weather-compact",children:[Ae.jsxs("span",{className:"weather-temp-row",children:[Ae.jsx("span",{className:"weather-emoji",children:i.icon}),i.temp,"°C"]}),Ae.jsx("span",{className:"weather-desc-row",children:i.desc})]})]})]})]})},RC=()=>{const{settings:s}=oc();return Ae.jsxs("div",{className:"landing-container",children:[Ae.jsx(AC,{}),Ae.jsx("div",{className:"plasma-container",children:Ae.jsx(MC,{initialSettings:s})}),Ae.jsx(TC,{})]})},CC=()=>Ae.jsxs("nav",{className:"navbar",children:[Ae.jsx("div",{className:"nav-logo",children:"J.A.R.V.I.S"}),Ae.jsxs("ul",{className:"nav-links",children:[Ae.jsx("li",{children:Ae.jsx(Qo,{to:"/",className:"nav-link",children:"HOME"})}),Ae.jsx("li",{children:Ae.jsx("a",{href:"#systems",className:"nav-link",children:"SYSTEMS"})}),Ae.jsx("li",{children:Ae.jsx(Qo,{to:"/controls",className:"nav-link",children:"CONTROLS"})}),Ae.jsx("li",{children:Ae.jsx(Qo,{to:"/settings",className:"nav-link",children:"SETTINGS"})}),Ae.jsx("li",{children:Ae.jsx("a",{href:"#about",className:"nav-link",children:"ABOUT"})})]}),Ae.jsx("div",{className:"nav-actions",children:Ae.jsx("button",{className:"nav-btn",children:"LOGIN"})})]}),wC=()=>{const{settings:s,toggleControl:e}=oc();return ip(),Ae.jsxs("div",{className:"settings-container",children:[Ae.jsx("h1",{className:"settings-title",children:"SYSTEM CONTROLS"}),Ae.jsxs("div",{className:"settings-panel",children:[Ae.jsxs("div",{className:"settings-section",children:[Ae.jsx("h2",{children:"CONTROL"}),Ae.jsxs("div",{className:"control-group",children:[Ae.jsx("label",{children:"Microphone Access"}),Ae.jsxs("label",{className:"toggle-switch",children:[Ae.jsx("input",{type:"checkbox",checked:s.controls?.mic??!0,onChange:()=>e("mic")}),Ae.jsx("span",{className:"slider round"})]})]}),Ae.jsxs("div",{className:"control-group",children:[Ae.jsx("label",{children:"Location Services"}),Ae.jsxs("label",{className:"toggle-switch",children:[Ae.jsx("input",{type:"checkbox",checked:s.controls?.location??!0,onChange:()=>e("location")}),Ae.jsx("span",{className:"slider round"})]})]}),Ae.jsxs("div",{className:"control-group",children:[Ae.jsx("label",{children:"System Audio (TTS)"}),Ae.jsxs("label",{className:"toggle-switch",children:[Ae.jsx("input",{type:"checkbox",checked:s.controls?.speaker??!0,onChange:()=>e("speaker")}),Ae.jsx("span",{className:"slider round"})]})]})]}),Ae.jsx("div",{className:"settings-actions",children:Ae.jsx("button",{className:"save-btn",onClick:()=>window.location.href="/",children:"RETURN TO SYSTEM"})})]})]})},DC=()=>(ip(),Ae.jsxs("div",{className:"settings-container",children:[Ae.jsx("h1",{className:"settings-title",children:"SETTINGS"}),Ae.jsxs("div",{className:"settings-panel",children:[Ae.jsxs("div",{className:"settings-section",children:[Ae.jsx("h2",{children:"GENERAL"}),Ae.jsx("p",{style:{color:"#00f3ff",textAlign:"center",padding:"20px"},children:"System settings configuration module coming soon..."})]}),Ae.jsx("div",{className:"settings-actions",children:Ae.jsx("button",{className:"save-btn",onClick:()=>window.location.href="/",children:"RETURN TO SYSTEM"})})]})]}));function UC(){return Ae.jsx(iE,{children:Ae.jsx(YM,{children:Ae.jsxs("div",{className:"App",children:[Ae.jsx(CC,{}),Ae.jsxs(EM,{children:[Ae.jsx(Wu,{path:"/",element:Ae.jsx(RC,{})}),Ae.jsx(Wu,{path:"/controls",element:Ae.jsx(wC,{})}),Ae.jsx(Wu,{path:"/settings",element:Ae.jsx(DC,{})})]})]})})})}Ay.createRoot(document.getElementById("root")).render(Ae.jsx(UC,{}));
