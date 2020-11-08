import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavDropdown
} from 'react-bootstrap';
import {
  Home
} from './pages';

import './index.css';
import './App.css';

const App = () => (
  <BrowserRouter>
    
    {/* Navigation Bar */}
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Navbar.Brand as={Link} to='/home'>.:mistral studio:.</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link as={Link} to='/home'>Home</Nav.Link>
          <NavDropdown title='Portfolio' id='collasible-nav-dropdown'>
            <NavDropdown.Item as={Link} to='/portfolio/all'>All</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to='/portfolio/category1'>Category 1</NavDropdown.Item>
            <NavDropdown.Item as={Link} to='/portfolio/category2'>Category 1</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to='/fieldnotes'>Field Notes</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to='/about'>About</Nav.Link>
          <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    {/* Content */}
    <div>
      <Route exact path='/' component={() => <Redirect to='/home' />} />
      <Route path='/home' component={Home} />
      <Route path='/portfolio/all' component={() =>
        <h3 class='text-center'>Portfolio All</h3>
      } />
      <Route path='/portfolio/category1' component={() =>
        <h3 class='text-center'>Portfolio Category 1</h3>
      } />
      <Route path='/portfolio/category2' component={() =>
        <h3 class='text-center'>Portfolio Category 2</h3>
      } />
      <Route path='/fieldnotes' component={() =>
        <h3 class='text-center'>Field Notes</h3>
      } />
      <Route path='/about' component={() =>
        <h3 class='text-center'>About</h3>
      } />
      <Route path='/contact' component={() =>
        <h3 class='text-center'>Contact</h3>
      } />
    </div>

  </BrowserRouter>
)

export default App;