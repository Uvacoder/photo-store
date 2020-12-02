import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { slide as SlideMenu } from 'react-burger-menu';
import Modal from 'react-modal';
import Logo from './components/Logo/Logo.js'
import SidebarMenu from './components/SidebarMenu/SidebarMenu.js';
import PageContent from './pages';
import SocialMediaTray from './components/SocialMediaTray/SocialMediaTray.js';
import MobileTray from './components/MobileTray/MobileTray.js';

import './App.css';

Modal.setAppElement(document.getElementById('root'));

const App = () => {

  const [isMobile, setIsMobile] = useState(false);
  const [slideMenuOpen, setSlideMenuOpen] = useState(false);

  const handleWindowSizeChange = () => {
    // FYI: URL bar on mobile browsers resizes window so this is called
    // quite a bit whenever URL bar appears/disapperas
    // Only update state when necessary
    if (window.innerWidth <= 500) {
      if (!isMobile) {
        setIsMobile(true);
      }
    } else {
      if (isMobile) {
        setIsMobile(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    // Initial determination of window size
    handleWindowSizeChange();

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  });

  const renderNormal = () => (
    <div class="main-div">
      <BrowserRouter>
        <div class="sidebar">
          <Logo/>
          <SidebarMenu/>
          <SocialMediaTray/>
        </div>
        <div class="page-content">
          <PageContent/>
        </div>
      </BrowserRouter>
    </div>
  );

  const renderMobile = () => (
    <div class="main-div-mobile">
      <BrowserRouter>
        <SlideMenu right={true}
                    isOpen={slideMenuOpen}
                    onStateChange={(state) => setSlideMenuOpen(state.isOpen)}
        >
          <SidebarMenu onSelect={() => setSlideMenuOpen(false)} />
        </SlideMenu>
        <PageContent/>
        <MobileTray onBurgerClick={() => setSlideMenuOpen(true)} />
      </BrowserRouter>
    </div>
  );

  return isMobile ? renderMobile() : renderNormal();
}

export default App;