import React, { useState } from 'react';
import './SocialMediaIcons.css';
// import useHover from 'react-use-hover';
import useHover from '../../hooks/useHover';

import { ReactComponent as FacebookIcon } from '../../assets/images/icons/Facebook.svg';
import { ReactComponent as FacebookIconHover } from '../../assets/images/icons/FacebookInverted.svg';
import { ReactComponent as InstagramIcon } from '../../assets/images/icons/Instagram.svg';
import { ReactComponent as InstagramIconHover } from '../../assets/images/icons/InstagramInverted.svg';
import { ReactComponent as PinterestIcon } from '../../assets/images/icons/Pinterest.svg';
import { ReactComponent as PinterestIconHover } from '../../assets/images/icons/PinterestInverted.svg';

const IconLink = ({
  href,
  icon,
  iconHover
}) => {
  
  const [isHovered, hoverProps] = useHover();

  const iconProps = {
    className: "social-media-icon",
    // ...hoverProps
  }
  const Icon = () => React.createElement(icon, iconProps);
  const IconHover = () => iconHover ? React.createElement(iconHover, iconProps) : <Icon/>;

  return (
    <a  href={href}
        target="_blank"
        rel="noopener noreferrer"
    >
      
      <div {...hoverProps} style={{width:32, height:32}}>
        {isHovered ? <IconHover/> : <Icon/>}
      </div>
    </a>
  );
}

const SocialMediaIcons = () => (
  <div className="icon-container">
    <IconLink icon={FacebookIcon}
              iconHover={FacebookIconHover}
              href="https://www.facebook.com/atelier.mistral.photo/"
    />
    <IconLink icon={InstagramIcon}
              iconHover={InstagramIconHover}
              href="https://www.instagram.com/atelier.mistral/"
    />
    <IconLink icon={PinterestIcon}
              iconHover={PinterestIconHover}
              href="https://www.pinterest.com/ateliermistralphoto/"
    />
  </div>
);

export default SocialMediaIcons;