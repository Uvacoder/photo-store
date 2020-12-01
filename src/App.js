import React from 'react';
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

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      isMobile: false,
      slideMenuOpen: false
    };
  }
  
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
    // Initial determination of window size
    this.handleWindowSizeChange();
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  
  handleWindowSizeChange = () => {
    // FYI: URL bar on mobile browsers resizes window so this is called
    // quite a bit whenever URL bar appears/disapperas
    // Only update state when necessary
    if (window.innerWidth <= 500) {
      if (!this.state.isMobile) {
        this.setState({ isMobile: true })
      }
    } else {
      if (this.state.isMobile) {
        this.setState({ isMobile: false })
      }
    }
  };

  setSlideMenu = open => {this.setState({ slideMenuOpen: open })}
  openSlideMenu = () => {this.setSlideMenu(true)}
  closeSlideMenu = () => {this.setSlideMenu(false)}

  render() {
    return this.state.isMobile ? (
      <div style={{width: "100%", zIndex: 0}}>
        <BrowserRouter>
          <SlideMenu right={true}
                     isOpen={this.state.slideMenuOpen}
                     onStateChange={(state) => this.setSlideMenu(state.isOpen)}
          >
            <SidebarMenu onSelect={() => this.closeSlideMenu()} />
          </SlideMenu>
          <PageContent/>
          <MobileTray onBurgerClick={() => this.openSlideMenu()} />
        </BrowserRouter>
      </div>
    ) : (
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
    )
  }
}

export default App;