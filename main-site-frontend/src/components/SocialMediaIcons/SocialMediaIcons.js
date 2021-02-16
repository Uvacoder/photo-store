import React from 'react';
import styled from 'styled-components';
import IconLink from './IconLink';

import { ReactComponent as FacebookIcon } from '../../assets/images/icons/Facebook.svg';
import { ReactComponent as FacebookIconHover } from '../../assets/images/icons/FacebookInverted.svg';
import { ReactComponent as InstagramIcon } from '../../assets/images/icons/Instagram.svg';
import { ReactComponent as InstagramIconHover } from '../../assets/images/icons/InstagramInverted.svg';
import { ReactComponent as PinterestIcon } from '../../assets/images/icons/Pinterest.svg';
import { ReactComponent as PinterestIconHover } from '../../assets/images/icons/PinterestInverted.svg';

const IconContainer = styled.div`
  display: flex;
  width: 126px;
`;

const SocialMediaIcons = () => (
  <IconContainer>
    <IconLink icon={FacebookIcon}
              iconHover={FacebookIconHover}
              href="https://www.facebook.com/atelier.mistral.photography/"
    />
    <IconLink icon={InstagramIcon}
              iconHover={InstagramIconHover}
              href="https://www.instagram.com/atelier.mistral/"
    />
    <IconLink icon={PinterestIcon}
              iconHover={PinterestIconHover}
              href="https://www.pinterest.com/ateliermistralphoto/"
    />
  </IconContainer>
);

export default SocialMediaIcons;