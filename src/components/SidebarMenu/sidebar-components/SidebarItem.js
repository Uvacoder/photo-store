import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';

const SidebarItem = ({
  children,
  className,
  isMobile,
  to,
  onPick,
  isSubHeader=false,
  isSubOpen=false,
  content
}) => {

  const cl = isMobile
    ? "sidebar-item-container sic-mobile"
    : "sidebar-item-container"
  ;
  const clSubOpen = cl + " sidebar-item-sub-header";
  const clSub = cl + " sidebar-subitem-container" + (isSubOpen ? "" : " sidebar-subitem-hidden");

  const clName = className || ((isSubHeader&&isSubOpen) ? clSubOpen : cl);

  return (
    <div className={clName}>
      <NavLink activeClassName='active' to={to} onClick={() => onPick?.(to)}>
        {content}
      </NavLink>
      {children &&
        React.Children.toArray(children).map(c => React.cloneElement(c, {
          className: clSub,
          isMobile: isMobile,
          isSubOpen: isSubOpen,
          onPick: onPick
        }))
      }
    </div>
  );
}

export default SidebarItem;