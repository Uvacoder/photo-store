import React from 'react';
import './SocialMediaIcons.css';

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
}) => (
  <a  href={href}
      target="_blank"
      rel="noopener noreferrer"
  >
    <div className="sm-icon-div">
      {React.createElement(icon, {
        className: "sm-icon-svg"
      })}
      {React.createElement(iconHover, {
        className: "sm-icon-svg sm-hover-svg"
      })}
    </div>
  </a>
);

const SocialMediaIcons = () => (
  <div className="icon-container">
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
  </div>
);

export default SocialMediaIcons;