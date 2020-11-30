import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { slide as SlideMenu } from 'react-burger-menu';
import Modal from 'react-modal';

import Logo from './components/Logo/Logo.js'
import Sidebar from './components/Sidebar/Sidebar.js';
import PageContent from './pages';

import './index.css';
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

  render() {

    const { width } = this.state;
    const isMobile = width <= 500;

    return isMobile ? (
      <div style={{width: "100%", zIndex: 0}}>
        <BrowserRouter>
          <SlideMenu right={true}
                     isOpen={this.state.slideMenuOpen}
                     onStateChange={(state) => this.setState({ slideMenuOpen: state.isOpen })}
          >
            <Sidebar onSelect={() => this.setState({ slideMenuOpen: false })} />
          </SlideMenu>
          <div style={{height: "96px"}}/>
          <PageContent/>
        </BrowserRouter>
      </div>
    ) : (
      <div class="main-div">
        <BrowserRouter>
          <div class="sidebar">
            <Logo/>
            <Sidebar/>
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