import React from 'react';
import styled from 'styled-components';
import { colors } from '../../global';

const IconDiv = styled.div`
  margin: 5px;
  position: relative;
  height: 32px;
  width: 32px;
`;

const IconSvgMaker = props => {
  const {icon, ...p} = props;
  return React.createElement(icon, {...p});
}

const IconSvg = styled(IconSvgMaker)`
  position: absolute;
  top: 0;
  left: 0;
  width: 32px;
  fill: ${colors.socialMediaIconLinkColor};
`;

const IconHoverSvg = styled(IconSvgMaker)`
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

const IconLink = ({
  href,
  icon,
  iconHover
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <IconDiv>
      <IconSvg icon={icon} />
      <IconHoverSvg icon={iconHover} />
    </IconDiv>
  </a>
)

export default IconLink;