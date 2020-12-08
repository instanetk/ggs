import React, { useState } from 'react';
import Menu from './Menu';

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <React.Fragment>
      <header className="bg-gray-900 items-center sm:w-1/5 lg:w-4/12 sm:bg-gray-800">
        <div>
          <div className="sm:px-4 sm:py-1 sm:bg-gray-900">
            <div id="brand" className="flex justify-between">
              <div>
                <div className="px-4 py-2 flex items-baseline select-none">
                  <span className="text-3xl select-none">🏡</span>
                  <h1 className="ml-2 text-lg items-baseline text-white font-sans tracking-wide font-bold select-none">
                    HomeWorks
                  </h1>
                </div>
                <div className="flex-col ml-5 -mt-4 pb-2">
                  <span className="text-xs text-gray-500 font-normal uppercase select-none">
                    By General Global Services, LLC
                  </span>
                </div>
              </div>
              <div id="control" className="flex mr-4 items-center sm:hidden">
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
            </div>
          </div>
          <Menu isOpen={isOpen} />
        </div>
      </header>

      <div className="bg-purple-400 p-px flex sm:hidden"></div>
    </React.Fragment>
  );
};

export default NavBar;
