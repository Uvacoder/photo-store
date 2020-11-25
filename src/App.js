import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { slide as SlideMenu } from 'react-burger-menu';

import Logo from './components/Logo/Logo.js'
import Sidebar from './components/Sidebar/Sidebar.js';
import PageContent from './pages';

import './index.css';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
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
      <div style={{width: "100%"}}>
        <BrowserRouter>
          <SlideMenu right={true}>
            <Sidebar/>
          </SlideMenu>
          <div style={{height: "96px"}}/>
          <PageContent/>
        </BrowserRouter>
      </div>
    ) : (
      <div style={{width: "100%", display: "table"}}>
        <div style={{display: "table-row"}}>
          <BrowserRouter>
            <div style={{width: 200, display: "table-cell", verticalAlign: "top"}}>
              <Logo/>
              <Sidebar/>
            </div>
            <div style={{display: "table-cell"}}>
              <PageContent/>
            </div>
          </BrowserRouter>
        </div>
      </div>
    )
  }
}

export default App;