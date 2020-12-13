import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuItem from './menuItem';

const Menu = ({ isOpen, setOpen }) => {
  return (
    <div id="submenu" className={`${isOpen ? '' : 'hidden'} sm:mt-2 sm:block `}>
      <div className="w-full flex flex-nowrap justify-between px-4 py-3 bg-gray-800 sm:bg-transparent sm:flex-col sm:flex-shrink-0">
        <NavLink className="menu" to="/services" onClick={() => setOpen(!isOpen)}>
          <MenuItem label="Services" />
        </NavLink>
        <NavLink className="menu" to="/schedule" onClick={() => setOpen(!isOpen)}>
          <MenuItem label="Schedule" />
        </NavLink>
        <NavLink className="menu" to="pinboard" onClick={() => setOpen(!isOpen)}>
          <MenuItem label="Pinboard" />
        </NavLink>
        <NavLink className="menu" to="login" onClick={() => setOpen(!isOpen)}>
          <MenuItem label="Log in" />
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;
