import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setOpen] = useState(true);

  return (
    <React.Fragment>
      <header className="px-4 py-2 bg-gray-900 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-3xl">🏡</span>
          <h1 className="ml-2 text-md items-center text-white font-sans tracking-wide font-bold uppercase select-none">
            General Global Services
          </h1>
        </div>
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => setOpen(!isOpen)}
            className="px-0 focus:outline-none focus:shadow-ouline">
            <svg
              className="h-6 w-6 fill-current text-white hover:text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                className={isOpen ? 'hidden' : ''}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                className={isOpen ? '' : 'hidden'}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </header>
      <div className={` ${isOpen ? '' : 'hidden'} px-4 py-2 bg-gray-800 flex flex-nowrap justify-between`}>
        {/* <div className="flex flex-col justify-center items-center select-none text-white hover:text-white">
      <svg
        className="h-8 w-8 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
      <span className="mt-2 text-xs uppercase font-bold tracking-wider">Home</span>
    </div> */}
        <div className="flex flex-col justify-center items-center select-none text-white hover:text-green-400">
          <svg
            className="h-7 w-7  fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clipRule="evenodd"
            />
          </svg>
          <span className="mt-2 text-xs uppercase font-bold tracking-wider content-center">Schedule</span>
        </div>

        <div className="flex flex-col justify-center items-center select-none text-white hover:text-green-400">
          <svg
            className="h-7 w-7 fill-current"
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
          <span className="mt-2 text-xs uppercase font-bold tracking-wider content-center">Services</span>
        </div>
        <div className="flex flex-col justify-center items-center select-none text-white hover:text-green-400">
          <div id="online" className="relative h-2 w-2 ml-6 -mb-2">
            <span class="flex h-1 w-1">
              <span class="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-1 w-1 bg-green-500"></span>
            </span>
          </div>
          <svg
            className="h-7 w-7 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
              clipRule="evenodd"
            />
          </svg>

          <span className="mt-2 text-xs uppercase font-bold tracking-wider content-center">Chat</span>
        </div>
        <div className="flex flex-col justify-center items-center select-none text-white hover:text-green-400">
          <svg
            className="h-7 w-7 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
          <span className="mt-2 text-xs uppercase font-bold tracking-wider content-center">Sign in</span>
        </div>
      </div>
      <div className=" bg-purple-500 p-px animate-pulse flex"></div>
    </React.Fragment>
  );
};

export default NavBar;
