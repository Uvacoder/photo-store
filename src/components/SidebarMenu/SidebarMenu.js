import './SidebarMenu.css';
import React from 'react';
import Logo from '../Logo/Logo';
import SidebarItem from './sidebar-components/SidebarItem';
import { contactInfo } from '../../global';

const SidebarMenu = ({
  onSelect,
  isMobile
}) => (

  <div className="sidebar-menu">

    {!isMobile &&
      <SidebarItem to="/home"><Logo /></SidebarItem>
    }

    <SidebarItem to="/engagements">Engagements</SidebarItem>
    <SidebarItem to="/maternity">Maternity</SidebarItem>
    <SidebarItem to="/family">Family</SidebarItem>
    <SidebarItem to="/portraits">Portraits</SidebarItem>
    <SidebarItem to="/adventurelifestyle">Adventure + Lifestyle</SidebarItem>

    <div className="sidebar-spacer" />

    <SidebarItem to="/ourprocess">Our Process</SidebarItem>
    <SidebarItem to="/about">Behind the Lens</SidebarItem>
    <SidebarItem to="/recognition">Recognition</SidebarItem>
    <SidebarItem to="/awards">Awards</SidebarItem>
    <SidebarItem to="/contact">Get In Touch</SidebarItem>

    <div className="sidebar-spacer" />

    <p className="contact phone">{contactInfo.phone}</p>
    <p className="contact email">{contactInfo.email}</p>
    
  </div>
);

export default SidebarMenu;