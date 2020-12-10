import React from 'react';

const Menu = ({ isOpen }) => {
  return (
    <div id="submenu" className={`${isOpen ? 'animate-down' : 'hidden'} sm:mt-2 sm:block `}>
      <div className="w-full flex flex-nowrap justify-between px-4 py-3 bg-gray-800 sm:bg-transparent sm:flex-col sm:flex-shrink-0">
        <div className="flex flex-col justify-center items-center select-none text-white hover:text-indigo-400 sm:mt-6 sm:flex-row sm:bg-transparent sm:hover:bg-gray-900 sm:rounded-md sm:justify-start sm:ml-2 sm:items-center sm:p-2 cursor-pointer ">
          <svg
            className="h-7 w-7 sm:block flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.25}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="mt-2 text-xs uppercase opacity-80 font-semibold tracking-wider content-center sm:mt-0 sm:ml-4 sm:items-center sm:text-base sm:normal-case">
            Schedule
          </span>
        </div>

        <div className="flex flex-col justify-center items-center select-none text-white hover:text-indigo-400 sm:mt-6 sm:flex-row sm:bg-transparent sm:hover:bg-gray-900 sm:rounded-md sm:justify-start sm:ml-2 sm:items-center sm:p-2 cursor-pointer ">
          <svg
            className="h-7 w-7 sm:block flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.25}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
            />
          </svg>
          <span className="mt-2 text-xs uppercase opacity-80 font-semibold tracking-wider content-center sm:mt-0 sm:ml-4 sm:items-center sm:text-base sm:normal-case">
            Services
          </span>
        </div>
        <div className="flex flex-col justify-center items-center select-none text-white hover:text-indigo-400 sm:mt-6 sm:flex-row sm:bg-transparent sm:hover:bg-gray-900 sm:rounded-md sm:justify-start sm:ml-2 sm:items-center sm:p-2 cursor-pointer ">
          <div id="online" className="relative h-2 w-2 ml-7 -mb-2 sm:hidden">
            <span class="flex h-1 w-1">
              <span class="animate-ping absolute inline-flex h-1 w-1 rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-1 w-1 bg-green-500"></span>
            </span>
          </div>
          <svg
            className="h-7 w-7 sm:block flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.25}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <div id="online-sm" className="hidden sm:block relative h-2 w-2 -ml-0 -mt-5">
            <span class="flex h-1 w-1">
              <span class="animate-ping absolute inline-flex h-1 w-1 rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-1 w-1 bg-green-500"></span>
            </span>
          </div>
          <span className="mt-2 text-xs uppercase opacity-80 font-semibold tracking-wider content-center sm:mt-0 sm:ml-2 sm:items-center sm:text-base sm:normal-case">
            Chat
          </span>
        </div>
        <div className="flex flex-col justify-center items-center select-none text-white hover:text-indigo-400 sm:mt-6 sm:flex-row sm:bg-transparent sm:hover:bg-gray-900 sm:rounded-md sm:justify-start sm:ml-2 sm:items-center sm:p-2 cursor-pointer ">
          <svg
            className="h-7 w-7 sm:block flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.25}
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="mt-2 text-xs uppercase opacity-80 font-semibold tracking-wider content-center sm:mt-0 sm:ml-4 sm:items-center sm:text-base sm:normal-case">
            Sign in
          </span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
