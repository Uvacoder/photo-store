import './SidebarMenu.css';
import React from 'react';
import Logo from '../Logo/Logo';
import SidebarItem from './sidebar-components/SidebarItem';
import { contactInfo } from '../../global';
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';

const SidebarMenu = ({
  className,
  onSelect,
  isMobile,
}) => {

  const cl = isMobile
    ? "sidebar-item-container sic-mobile"
    : "sidebar-item-container"
  ;

  return (
    <div {...{className}}>
      <div className={isMobile ? "scroll-mobile" : "scroll"}>
        {isMobile ? (
          <React.Fragment>
            <div className="sidebar-spacer" />
            <SidebarItem className={cl} to="/home">Home</SidebarItem>
          </React.Fragment>
        ) : (
          <SidebarItem className={cl} to="/home"><Logo /></SidebarItem>
        )}

        <SidebarItem className={cl} to="/engagements">Engagements</SidebarItem>
        <SidebarItem className={cl} to="/maternity">Maternity</SidebarItem>
        <SidebarItem className={cl} to="/family">Family</SidebarItem>
        <SidebarItem className={cl} to="/portraits">Portraits</SidebarItem>
        <SidebarItem className={cl} to="/adventurelifestyle">Adventure + Lifestyle</SidebarItem>

        <div className="sidebar-spacer" />

        <SidebarItem className={cl} to="/ourprocess">Our Process</SidebarItem>
        <SidebarItem className={cl} to="/about">Behind the Lens</SidebarItem>
        <SidebarItem className={cl} to="/recognition">Recognition</SidebarItem>
        <SidebarItem className={cl} to="/awards">Awards</SidebarItem>
        <SidebarItem className={cl} to="/contact">Get In Touch</SidebarItem>

        <div className="sidebar-spacer" />

        {!isMobile &&
          <React.Fragment>
            <p className="contact phone">{contactInfo.phone}</p>
            <p className="contact email">{contactInfo.email}</p>
            <div className="sidebar-icons-container">
              <SocialMediaIcons />
            </div>
          </React.Fragment>
        }

        {isMobile &&
          <div className="mobile-centering-spacer" />
        }

      </div>
    </div>
  );
}

export default SidebarMenu;