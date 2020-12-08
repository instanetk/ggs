import React from 'react';

const Menu = ({ isOpen }) => {
  return (
    <div id="submenu" className={`${isOpen ? '' : 'hidden'} sm:mt-2 sm:block `}>
      <div className="w-full flex flex-nowrap justify-between px-4 py-3 bg-gray-800 sm:flex-col">
        <div className="flex flex-col justify-center items-center select-none text-white hover:text-indigo-400 sm:mt-6 sm:flex-row sm:bg-transparent sm:hover:bg-gray-900 sm:rounded-md sm:justify-start sm:ml-2 sm:items-center sm:p-2">
          <svg
            className="h-7 w-7 fill-current sm:hidden"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              className=""
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            className="h-7 w-7 hidden sm:block"
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
          <span className="mt-2 text-xs uppercase font-bold tracking-wider content-center sm:mt-0 sm:ml-4 sm:items-center sm:text-base sm:normal-case">
            Schedule
          </span>
        </div>

        <div className="flex flex-col justify-center items-center select-none text-white hover:text-indigo-400 sm:mt-6 sm:flex-row sm:bg-transparent sm:hover:bg-gray-900 sm:rounded-md sm:justify-start sm:ml-2 sm:items-center sm:p-2">
          <svg
            className="h-7 w-7 fill-current sm:hidden"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path
              fillRule="evenodd"
              d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            className="h-7 w-7 hidden sm:block"
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
          <span className="mt-2 text-xs uppercase font-bold tracking-wider content-center sm:mt-0 sm:ml-4 sm:items-center sm:text-base sm:normal-case">
            Services
          </span>
        </div>
        <div className="flex flex-col justify-center items-center select-none text-white hover:text-indigo-400 sm:mt-6 sm:flex-row sm:bg-transparent sm:hover:bg-gray-900 sm:rounded-md sm:justify-start sm:ml-2 sm:items-center sm:p-2">
          <div id="online" className="relative h-2 w-2 ml-6 -mb-2 sm:hidden">
            <span class="flex h-1 w-1">
              <span class="animate-ping absolute inline-flex h-1 w-1 rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-1 w-1 bg-green-500"></span>
            </span>
          </div>
          <svg
            className="h-7 w-7 fill-current sm:hidden"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            className="h-7 w-7 hidden sm:block"
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
          <span className="mt-2 text-xs uppercase font-bold tracking-wider content-center sm:mt-0 sm:ml-4 sm:items-center sm:text-base sm:normal-case">
            Chat
          </span>
        </div>
        <div className="flex flex-col justify-center items-center select-none text-white hover:text-indigo-400 sm:mt-6 sm:flex-row sm:bg-transparent sm:hover:bg-gray-900 sm:rounded-md sm:justify-start sm:ml-2 sm:items-center sm:p-2">
          <svg
            className="h-7 w-7 fill-current sm:hidden"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            className="h-7 w-7 hidden sm:block"
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
          <span className="mt-2 text-xs uppercase font-bold tracking-wider content-center sm:mt-0 sm:ml-4 sm:items-center sm:text-base sm:normal-case">
            Sign in
          </span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
