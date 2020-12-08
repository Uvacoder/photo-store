import './SidebarItem.css';
import { NavLink } from 'react-router-dom';

const SidebarItem = ({
  children,
  to
}) => (
  <div className="sidebar-item-container">
    <NavLink activeClassName='active' to={to}>
      {children}
    </NavLink>
  </div>
);

export default SidebarItem;