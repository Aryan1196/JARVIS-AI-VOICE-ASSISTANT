import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import ControlsPage from './components/ControlsPage';
import SettingsPage from './components/SettingsPage';
import UserManual from './components/UserManual';
import AboutPage from './components/AboutPage';
import { BlobProvider } from './context/BlobContext';


function App() {
  return (
    <BlobProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/controls" element={<ControlsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/manual" element={<UserManual />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </BlobProvider>
  );
}

export default App;
