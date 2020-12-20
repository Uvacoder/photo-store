import React from 'react';
import styled from 'styled-components';
import { colors } from '../../global';

const IconDiv = styled.div`
  margin: 5px;
  position: relative;
  height: 32px;
  width: 32px;
`;

// TODO: figure out how to put this here
// const IconSvg = (icon => styled(p => React.createElement(icon, {...p}))`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 32px;
//   fill: ${colors.socialMediaIconLinkColor};
// `);

const IconLink = ({
  href,
  icon,
  iconHover
}) => {

  const IconSvg = styled(p => React.createElement(icon, {...p}))`
    position: absolute;
    top: 0;
    left: 0;
    width: 32px;
    fill: ${colors.socialMediaIconLinkColor};
  `;

  const IconHoverSvg = styled(p => React.createElement(iconHover, {...p}))`
    position: absolute;
    top: 0;
    left: 0;
    width: 32px;
    fill: ${colors.socialMediaIconLinkColorHover};
    display: none;
    ${IconDiv}:hover & {
      display: unset
    }
  `;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconDiv>
        <IconSvg icon={icon} />
        <IconHoverSvg/>
      </IconDiv>
  </a>
  );
}

export default IconLink;