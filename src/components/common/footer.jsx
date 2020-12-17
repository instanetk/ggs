import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <footer className="flex flex-col justify-center bg-gray-200 pb-10 sm:py-5">
      <div className="text-xs text-center my-2 ">
        <a href="/terms" className="text-blue-500 px-2 hover:text-blue-700 select-none">
          Terms
        </a>
        <a href="/privacy" className="text-blue-500 px-2 hover:text-blue-700 select-none">
          Privacy
        </a>
        <a href="/legal" className="text-blue-500 px-2 hover:text-blue-700 select-none">
          Legal
        </a>
      </div>
      <div className="text-xs text-center select-none">
        <span className="hidden">
          HomeWorks<sup>&trade;</sup> is a registered trademark.
        </span>
        General Global Services, LLC &bull; &copy; {new Date(Date.now()).getFullYear()}
      </div>

      <div className="text-xs text-center select-none">Made in Orlando, FL</div>
      <div className="flex justify-center">
        <button type="button" onClick={() => handleClick('es')} className="bg-gray-800 text-white m-2 p-2 rounded">
          Español
        </button>
        <button type="button" onClick={() => handleClick('en')} className="bg-gray-800 text-white m-2 p-2 rounded">
          English
        </button>
      </div>
      <div className="text-xs text-center opacity-20 select-none flex justify-center">
        <span className="hidden italic font-serif mr-1">(x)</span>
        <span className="hidden">wavefunction</span>
        <span className="hidden flex-col text-xs text-white bg-black opacity-20 rounded-sm px-1" title="app by">
          app by
        </span>
      </div>
    </footer>
  );
};

export default Footer;
