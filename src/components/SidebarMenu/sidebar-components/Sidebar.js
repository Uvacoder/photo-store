import React from 'react';
export { default as SidebarItem } from './SidebarItem';

const Sidebar = ({
  children,
  isMobile,
  onPick
}) => (
  <React.Fragment>
    {React.Children.toArray(children).map(c => React.cloneElement(c, {isMobile, onPick}))}
  </React.Fragment>
);

export default Sidebar;