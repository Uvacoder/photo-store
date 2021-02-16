import React, { useState } from 'react';
import styled from 'styled-components';
import { mobileTrayHeight } from '../../global';
import Sidebar from './Sidebar';
import SidebarItem from './SidebarItem';
import { contactInfo } from '../../global';
import { Logo, SocialMediaIcons } from '../';

const ContactStyle = styled.div`
  text-align: center;
  margin: 0;
`;
const PhoneStyle = styled(ContactStyle)`font-size: 0.75rem;`;
const EmailStyle = styled(ContactStyle)`font-size: 0.65rem;`;

const SidebarSpacer = styled.div`height: 24px`;
const MobileCenteringSpacer = styled.div`${'height: '+mobileTrayHeight+';'}`;

const SidebarContainer = styled.div`
  ${p => !p.isMobile && 'height: 100%;'}
  overflow: auto;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

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
      <SidebarContainer isMobile={isMobile}>
        <Sidebar isMobile={isMobile} onPick={handleClick}>
          
          {isMobile && <SidebarSpacer/>}

          {isMobile
            ? <SidebarItem to="/home" content="Home" />
            : <SidebarItem  to="/home" content={<Logo />} />
          }

          <SidebarItem to="/engagements" content="Engagements" />
          <SidebarItem to="/maternity" content="Maternity" />
          <SidebarItem to="/family" content="Family" />
          <SidebarItem to="/portraits" content="Portraits" />
          <SidebarItem to="/adventurelifestyle" content="Adventure + Lifestyle" />

          <SidebarSpacer/>

          <SidebarItem to="/ourprocess" content="Our Process" />

          <SidebarItem to="/about" content="Behind the Lens"
                       isSubHeader={true}
                       isSubOpen={isAboutSubOpen}        
          >
            <SidebarItem to="/recognition" content="Recognition" />
            <SidebarItem to="/awards" content="Awards" />
          </SidebarItem>

          <SidebarItem to="/contact" content="Get In Touch" />

          <SidebarSpacer/>

          {!isMobile &&
            <React.Fragment>
              <PhoneStyle>{contactInfo.phone}</PhoneStyle>
              <EmailStyle>{contactInfo.email}</EmailStyle>
              <IconsContainer>
                <SocialMediaIcons />
              </IconsContainer>
            </React.Fragment>
          }

          {isMobile && <MobileCenteringSpacer/>}

        </Sidebar>
      </SidebarContainer>
    </div>
  );
}

export default SidebarMenu;