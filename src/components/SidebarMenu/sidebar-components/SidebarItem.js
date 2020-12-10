import './SidebarItem.css';
import { NavLink } from 'react-router-dom';

const SidebarItem = ({
  className,
  children,
  to
}) => (
  <div className={className}>
    <NavLink activeClassName='active' to={to}>
      {children}
    </NavLink>
  </div>
);

export default SidebarItem;