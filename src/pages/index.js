import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Home from './Home/Home.js';
import {
  PortfolioAll,
  Portfolio1,
  Portfolio2
} from './Portfolio/Portfolio.js';

const PageContent = () => (
  <div>
    <Route exact path='/'              component={() => <Redirect to='/home' />} />
    <Route path='/home'                component={Home} />
    <Route path='/portfolio/all'       component={PortfolioAll} />
    <Route path='/portfolio/category1' component={Portfolio1} />
    <Route path='/portfolio/category2' component={Portfolio2} />
    <Route path='/fieldnotes'          component={() => <h3 class='text-center'>Field Notes</h3>} />
    <Route path='/about'               component={() => <h3 class='text-center'>About</h3>} />
    <Route path='/contact'             component={() => <h3 class='text-center'>Contact</h3>} />
  </div>
)

export default PageContent;