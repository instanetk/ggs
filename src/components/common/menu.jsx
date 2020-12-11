import React from 'react';
import MenuItem from './menuItem';

const Menu = ({ isOpen }) => {
  return (
    <div id="submenu" className={`${isOpen ? 'animate-down' : 'hidden'} sm:mt-2 sm:block `}>
      <div className="w-full flex flex-nowrap justify-between px-4 py-3 bg-gray-800 sm:bg-transparent sm:flex-col sm:flex-shrink-0">
        <MenuItem label="Schedule" />
        <MenuItem label="Services" />
        <MenuItem label="Chat" />
        <MenuItem label="Log in" />
      </div>
    </div>
  );
};

export default Menu;
