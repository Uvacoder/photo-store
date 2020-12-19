import React from 'react';
export { default as SidebarItem } from './SidebarItem';

export default ({
  children,
  isMobile,
  onPick
}) => (
  <React.Fragment>
    {React.Children.toArray(children).map(c => React.cloneElement(c, {isMobile, onPick}))}
  </React.Fragment>
)
