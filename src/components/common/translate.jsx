import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Translate = () => {
  const { i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="flex justify-end select-none w-56">
      <svg
        onClick={() => setOpen(!isOpen)}
        className="text-white h-10 w-8 bg-purple-900 rounded p-1 m-1"
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
      <div className={isOpen ? '-mt-1' : 'hidden'}>
        <button
          type="button"
          onClick={() => handleClick('es')}
          className=" bg-gradient-to-br from-yellow-400 to-red-600 text-white m-2 p-2 rounded">
          Español
        </button>
        <button
          type="button"
          onClick={() => handleClick('en')}
          className="bg-gradient-to-br from-blue-400 to-red-400 text-white m-2 p-2 rounded">
          English
        </button>
      </div>
    </div>
  );
};

export default Translate;
