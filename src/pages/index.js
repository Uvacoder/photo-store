import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Home from './Home/Home.js';
import Portfolio from './Portfolio/Portfolio.js';
import About from './About/About.js';
import Contact from './Contact/Contact.js';

import PhotoGridTestPage from '../tests/PhotoGridTestPage.js';

const PageContent = ({
  className,
  isMobile
}) => (
  <div {...{className}}>

    <Route  path='/home'                
            component={Home}
    />
    <Route  exact path='/'
            component={() => <Redirect to='/home' />}
    />
    <Route  path='/engagements'
            component={() => (
              <Portfolio photoGroup="engagements"
                         isMobile={isMobile}
            />)}
    />
    <Route  path='/maternity'
            component={() => (
              <Portfolio photoGroup="maternity"
                         isMobile={isMobile}
            />)}
    />
    <Route  path='/family'
            component={() => (
              <Portfolio photoGroup="all"
                         isMobile={isMobile}
            />)}
    />
    <Route  path='/portraits'
            component={() => (
              <Portfolio photoGroup="all"
                         isMobile={isMobile}
            />)}
    />
    <Route  path='/adventurelifestyle'
            component={() => (
              <Portfolio photoGroup="all"
                         isMobile={isMobile}
            />)}
    />
    <Route  path='/ourprocess'
            component={() => <h3 style={{textAlign: "center"}}>Our Process</h3>}
    />
    <Route  path='/about'
            component={About} />
    <Route  path='/recognition'
            component={() => <h3 style={{textAlign: "center"}}>Recognition</h3>}
    />
    <Route  path='/awards'
            component={() => <h3 style={{textAlign: "center"}}>Awards</h3>}
    />
    <Route  path='/contact'
            component={Contact}
    />

    {/* TESTS */}
    <Route  path='/photogridtest'
            component={PhotoGridTestPage}
    />
  </div>
)

export default PageContent;