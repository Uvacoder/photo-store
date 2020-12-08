import React from 'react';
import SidebarItem from './sidebar-components/SidebarItem';

const SidebarMenu = ({
  onSelect
}) => (

  <React.Fragment>
    <SidebarItem to="/portfolio/all">Portfolio</SidebarItem>
    <SidebarItem to="/about">About</SidebarItem>
    <SidebarItem to="/contact">Contact</SidebarItem>
  </React.Fragment>
);

export default SidebarMenu;