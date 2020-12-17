import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Translate = () => {
  const [isOpen, setOpen] = useState(false);

  const { i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
    setOpen(!isOpen);
  }

  return (
    <div className="invisible sm:visible sm:m-0 sm:fixed sm:right-2 sm:bottom-2">
      <div className="select-none">
        <div className="flex items-center">
          <svg
            onClick={() => setOpen(!isOpen)}
            className="flex text-white h-10 w-8 bg-purple-900 rounded px-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
            />
          </svg>
          <div className={isOpen ? 'flex' : 'hidden'}>
            <button
              type="button"
              onClick={() => handleClick('es')}
              className="bg-purple-800 hover:bg-purple-600 text-white ml-2 p-2 rounded">
              Español
            </button>
            <button
              type="button"
              onClick={() => handleClick('en')}
              className="bg-purple-800 hover:bg-purple-600 text-white ml-2 p-2 rounded">
              English
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Translate;
