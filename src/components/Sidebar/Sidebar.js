import React from 'react';
import { Link } from 'react-router-dom';
import { Sidenav, Nav, Icon, Dropdown } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

const Sidebar = props => (

  <Sidenav onSelect={props.onSelect}>
    <Sidenav.Body>
      <Nav>
        <Nav.Item componentClass={Link} to='/home'
                  icon={<Icon icon="tree" />}>
          Home
        </Nav.Item>
        <Dropdown eventKey="2" title="Portfolio" icon={<Icon icon="folder-open" />}>
          <Dropdown.Item componentClass={Link} to='/portfolio/all'>
            All
          </Dropdown.Item>
          <Dropdown.Item divider />
          <Dropdown.Item componentClass={Link} to='/portfolio/category1'>
            Category 1
          </Dropdown.Item>
          <Dropdown.Item componentClass={Link} to='/portfolio/category2'>
            Category 2
          </Dropdown.Item>
        </Dropdown>
        <Nav.Item componentClass={Link} to='/fieldnotes'
                  icon={<Icon icon="map-o" />}>
          Field Notes
        </Nav.Item>
        <Nav.Item componentClass={Link} to='/about'
                  icon={<Icon icon="question" />}>
          About
        </Nav.Item>
        <Nav.Item componentClass={Link} to='/contact'
                  icon={<Icon icon="id-card-o" />}>
          Contact
        </Nav.Item>
      </Nav>
    </Sidenav.Body>
  </Sidenav>
);

export default Sidebar;