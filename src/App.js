import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'rsuite/dist/styles/rsuite-default.css';

import Logo from './components/Logo/Logo.js'
import Sidebar from './components/Sidebar/Sidebar.js';
import PageContent from './pages';

import './index.css';
import './App.css';

const App = () => (
  <div style={{ width: "100%", display: "table"}}>
    <div style={{ display: "table-row"}}>
      <BrowserRouter>

        <div style={{ width: 200, display: "table-cell" }}>
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

export default App;