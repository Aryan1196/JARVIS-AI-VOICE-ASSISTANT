import { useBlob } from '../context/BlobContext';
import VoiceReactivePlasma from './VoiceReactivePlasma';
import TranscriptTerminal from './TranscriptTerminal';
import InfoPanel from './InfoPanel';
import './LandingPage.css';

const LandingPage = () => {
    const { settings } = useBlob();

    return (
        <div className="landing-container">
            <InfoPanel />
            <div className="plasma-container">
                <VoiceReactivePlasma initialSettings={settings} />
            </div>
            <TranscriptTerminal />
        </div>
    );
};

export default LandingPage;

