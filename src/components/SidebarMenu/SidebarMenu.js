import './SidebarMenu.css';
import React, { useState } from 'react';
import Logo from '../Logo';
import Sidebar, { SidebarItem } from './sidebar-components/Sidebar';
import { contactInfo } from '../../global';
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';

const SidebarMenu = ({
  className,
  onSelect,
  isMobile,
}) => {

  const [isAboutSubOpen, setIsAboutSubOpen] = useState(false);

  const handleClick = (path => {
    setIsAboutSubOpen(path ==="/about"
                    || path === "/recognition"
                    || path === "/awards");
  });

  return (
    <div {...{className}}>
      <div className={isMobile ? "scroll-mobile" : "scroll"}>
        <Sidebar isMobile={isMobile} onPick={handleClick}>
          
          {isMobile && <div className="sidebar-spacer" />}
          {isMobile
            ? <SidebarItem to="/home" content="Home" />
            : <SidebarItem  to="/home" content={<Logo />} />
          }

          <SidebarItem to="/engagements" content="Engagements" />
          <SidebarItem to="/maternity" content="Maternity" />
          <SidebarItem to="/family" content="Family" />
          <SidebarItem to="/portraits" content="Portraits" />
          <SidebarItem to="/adventurelifestyle" content="Adventure + Lifestyle" />

          <div className="sidebar-spacer" />

          <SidebarItem to="/ourprocess" content="Our Process" />

          <SidebarItem  to="/about" styles={{marginRight: "0px !important"}}
                        isSubHeader={true}
                        isSubOpen={isAboutSubOpen}
                        content="Behind the Lens"
          >
            <SidebarItem to="/recognition" content="Recognition" />
            <SidebarItem to="/awards" content="Awards" />
          </SidebarItem>

          <SidebarItem to="/contact" content="Get In Touch" />

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
        </Sidebar>
      </div>
    </div>
  );
}

export default SidebarMenu;