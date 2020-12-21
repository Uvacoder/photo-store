import React from 'react';
import styled from 'styled-components';
import { mobileTrayHeight } from 'global';
import { SocialMediaIcons, BurgerIcon } from '.';

const PhantomTray = styled.div`
  display: block;
  height: ${mobileTrayHeight};
  width: 100%;
`;

const TrayContainer = styled.div`
  z-index: 9000;
  background-color: white;
  border-color: gray;
  border-top-style: solid;
  border-width: 1px;
  position: fixed;
  left: 0;
  bottom: 0;
  height: ${mobileTrayHeight};
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 56px;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: "sm-icons bm-bars";
`;

const IconsContainer = styled.div`
  grid-area: "sm-icons";
  display: flex;
  align-items: center;
`;

const BurgerBarsContainer = styled.div`
  grid-area: "bm-bars";
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MobileTray = ({
  onBurgerClick,
  menuOpen
}) => (
  <div>
    <PhantomTray/>
    <TrayContainer>
      <IconsContainer>
        <SocialMediaIcons />
      </IconsContainer>
      <BurgerBarsContainer>
        <BurgerIcon isOpen={menuOpen}
                    onClick={onBurgerClick}
        />
      </BurgerBarsContainer>
    </TrayContainer>
  </div>
);

export default MobileTray;