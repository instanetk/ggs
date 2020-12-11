import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuItem from './menuItem';

const Menu = ({ isOpen, label }) => {
  return (
    <div id="submenu" className={`${isOpen ? '' : 'hidden'} sm:mt-2 sm:block `}>
      <div className="w-full flex flex-nowrap justify-between px-6 py-3 bg-gray-800 sm:bg-transparent sm:flex-col sm:flex-shrink-0">
        <NavLink to="/schedule">
          <MenuItem label="Schedule" />
        </NavLink>
        <NavLink to="/services">
          <MenuItem label="Services" />
        </NavLink>
        <NavLink to="chat">
          <MenuItem label="Chat" />
        </NavLink>
        <NavLink to="login">
          <MenuItem label="Log in" />
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;
