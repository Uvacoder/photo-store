import React from 'react';
import { useLocation } from 'react-router-dom';

const Sidebar = ({
  children,
  isMobile,
  onPick
}) => {

  const locPath = useLocation().pathname;

  return (
    <React.Fragment>
      {/* TODO: don't pass props to div spacers */}
      {React.Children.toArray(children).map(c => React.cloneElement(c, {isMobile, onPick, locPath}))}
    </React.Fragment>
  );
}

export default Sidebar;