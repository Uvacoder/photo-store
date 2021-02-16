import React from 'react';
import styled from 'styled-components';
import { colors } from '../../global';
import { NavLink } from 'react-router-dom';

const SidebarItemContainer = styled.div`
  text-align: right;
  font-size: 1rem;
  ${p => p.isMobile && 'text-align: center;'}
  ${p => p.isMobile && 'font-size: 1.5rem;'}
  ${p => p.isMobile && 'height: unset;'}
  ${p => p.isMobile && 'opacity: 1;'}
  > a {
    ${p => p.isActive || p.isActiveSubHeader ? 'margin-right: 10px;' : 'margin-right: 25px;'}
    ${p => p.isMobile && 'margin-right: 0px;'}
    transition: margin-right 0.2s ease;
    &:link, &:visited {
      text-decoration: none;
      ${p => p.isActive ? 'color: '+colors.linkColorSelected+';' : 'color: '+colors.linkColor+';'}
      transition: color 0.6s ease;
    }
    &:hover {
      text-decoration: none;
      color: ${colors.linkColorHover};
      transition: color 50ms;
    }
  }
`;

const SidebarSubItemContainer = styled(SidebarItemContainer)`
  font-size: 0.75rem;
  height: 18px;
  opacity: 1;
  transition: height 0.4s ease,
              opacity 0.4s ease;
  ${p => !p.isSubOpen && 'height: 0;'}
  ${p => !p.isSubOpen && 'opacity: 0;'}
`;

const SidebarItem = ({
  children,
  locPath,
  isMobile,
  to,
  onPick,
  isSubHeader=false,
  isSubOpen=false,
  content
}) => (
  <SidebarItemContainer
    isMobile={isMobile}
    isActive={locPath === to}
    isActiveSubHeader={isSubHeader && isSubOpen}
  >
    <NavLink activeClassName='active' to={to} onClick={() => onPick?.(to)}>
      {content}
    </NavLink>

    {children &&
      React.Children.toArray(children).map(c => (
        <SidebarSubItemContainer
          isMobile={isMobile}
          isSubOpen={isSubOpen}
          isActive={locPath === c.props.to}
        >
          <NavLink activeClassName='active' to={c.props.to} onClick={() => onPick?.(to)}>
            {c.props.content}
          </NavLink>
        </SidebarSubItemContainer>
      ))
    }

  </SidebarItemContainer>
)

export default SidebarItem;