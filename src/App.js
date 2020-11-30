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
      width: window.innerWidth,
      slideMenuOpen: false
    };
  }
  
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  setSlideMenu = open => {this.setState({ slideMenuOpen: open })}
  openSlideMenu = () => {this.setSlideMenu(true)}
  closeSlideMenu = () => {this.setSlideMenu(false)}

  render() {

    const { width } = this.state;
    const isMobile = width <= 500;

    return isMobile ? (
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