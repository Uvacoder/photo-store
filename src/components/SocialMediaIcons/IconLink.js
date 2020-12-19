import React from 'react';
import './SocialMediaIcons.css';

export default ({
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