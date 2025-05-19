import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import NowPlaying from './components/NowPlaying';
import MobileNavigation from './components/MobileNavigation';
import MobileSidebar from './components/MobileSidebar';
import { PlayerProvider } from './context/PlayerContext';

function App() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <PlayerProvider>
      <div className="h-screen flex flex-col bg-background text-textPrimary">
        <div className="flex-1 flex overflow-hidden">
          <Sidebar />
          <MainContent />
          <MobileSidebar 
            isOpen={isMobileSidebarOpen} 
            onClose={() => setIsMobileSidebarOpen(false)} 
          />
        </div>
        <NowPlaying />
        <MobileNavigation onMenuClick={() => setIsMobileSidebarOpen(true)} />
      </div>
    </PlayerProvider>
  );
}

export default App;
