import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Home from './Home/Home.js';
import Portfolio from './Portfolio/Portfolio.js';

const PageContent = () => (
  <div>
    <Route exact path='/'              component={() => <Redirect to='/home' />} />
    <Route path='/home'                component={Home} />
    <Route path='/portfolio/all'       component={() => <Portfolio photoGroup="all"/>} />
    <Route path='/portfolio/category1' component={() => <Portfolio photoGroup="va"/>} />
    <Route path='/portfolio/category2' component={() => <Portfolio photoGroup="cp"/>} />
    <Route path='/fieldnotes'          component={() => <h3>Field Notes</h3>} />
    <Route path='/about'               component={() => <h3>About</h3>} />
    <Route path='/contact'             component={() => <h3>Contact</h3>} />
  </div>
)

export default PageContent;