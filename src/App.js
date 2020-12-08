import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Logo from './components/Logo/Logo.js'
import SidebarMenu from './components/SidebarMenu/SidebarMenu.js';
import PageContent from './pages';
import SocialMediaIcons from './components/SocialMediaIcons/SocialMediaIcons.js';
import { slide as SlideMenu } from 'react-burger-menu';
import MobileTray from './components/MobileTray/MobileTray.js';

import './App.css';

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
    <div className="main-div">
      <div className="sidebar">
        <Logo/>
        <SidebarMenu/>
        <SocialMediaIcons/>
      </div>
      <div className="page-content">
        <PageContent/>
      </div>
    </div>
  );

  const renderMobile = () => (
    <div className="main-div-mobile">
      <SlideMenu right={true}
                  isOpen={slideMenuOpen}
                  onStateChange={(state) => setSlideMenuOpen(state.isOpen)}
      >
        <SidebarMenu onSelect={() => setSlideMenuOpen(false)} />
      </SlideMenu>
      <PageContent/>
      <MobileTray onBurgerClick={() => setSlideMenuOpen(true)} />
    </div>
  );

  return (
    <BrowserRouter>
      {isMobile ? renderMobile() : renderNormal()}
    </BrowserRouter>
  );
}

export default App;