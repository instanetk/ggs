import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuItem from './menuItem';

const Menu = ({ isOpen, setOpen }) => {
  return (
    <div id="submenu" className={`${isOpen ? '' : 'hidden'} sm:mt-2 sm:block `}>
      <div className="w-full flex flex-nowrap justify-between px-4 py-3 bg-gray-800 sm:bg-transparent sm:flex-col sm:flex-shrink-0">
        <NavLink className="menu" to="/services">
          <MenuItem label="Services" />
        </NavLink>
        <NavLink className="menu" to="/schedule">
          <MenuItem label="Schedule" />
        </NavLink>
        <NavLink className="menu" to="pinboard">
          <MenuItem label="Pinboard" />
        </NavLink>
        <NavLink className="menu" to="login" onClick={() => setOpen(!isOpen)}>
          <MenuItem label="My account" />
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;
