import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Home from './Home/Home.js';
import Portfolio from './Portfolio/Portfolio.js';
import About from './About/About.js';
import Contact from './Contact/Contact.js';

const PageContent = ({
  className
}) => (
  <div {...{className}}>
    <Route exact path='/'              component={() => <Redirect to='/home' />} />
    <Route path='/home'                component={Home} />
    <Route path='/engagements'         component={() => <Portfolio photoGroup="va"/>} />
    <Route path='/maternity'           component={() => <Portfolio photoGroup="cp"/>} />
    <Route path='/family'              component={() => <Portfolio photoGroup="all"/>} />
    <Route path='/portraits'           component={() => <Portfolio photoGroup="all"/>} />
    <Route path='/adventurelifestyle'  component={() => <Portfolio photoGroup="all"/>} />
    <Route path='/ourprocess'          component={() => <h3 style={{textAlign: "center"}}>Our Process</h3>} />
    <Route path='/about'               component={About} />
    <Route path='/recognition'         component={() => <h3 style={{textAlign: "center"}}>Recognition</h3>} />
    <Route path='/awards'              component={() => <h3 style={{textAlign: "center"}}>Awards</h3>} />
    <Route path='/contact'             component={Contact} />
  </div>
)

export default PageContent;