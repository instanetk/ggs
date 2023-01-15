import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/bg.css';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="flex flex-col justify-center text-gray-100 bg-gray-800 sm:py-5 bgfloor">
      <div className="sm:flex">
        <div className=" sm:mx-36 mx-4 mt-8 sm:mt-8 rounded-lg text-md px-4 sm:px-20 py-6 text-justify bg-gray-900 bg-opacity-70 select-none">
          <b>{t('contact.hoursOfOperation')}</b> <br />
          <span>{t('contact.schedule')}</span>
          <br /> <br />
          <b>{t('contact.saturdayAndSunday')}</b>
          <br />
          <span className="text-justify text-sm">{t('contact.message')}</span>
          <div className="text-xl mt-4 text-center">
            <span>407-930-3447</span>
            <br />
            <span>
              <a href="mailto:main@generalglobalservices.com?subject=GGS Inquiry">main@generalglobalservices.com</a>
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <div className="h-24 mt-4">
          <div className="text-xs text-center my-2">
            <a href="/terms" className="text-blue-300 px-2 hover:text-blue-500 select-none">
              {t('footer.terms')}
            </a>
            <a href="/privacy" className="text-blue-300 px-2 hover:text-blue-500 select-none">
              {t('footer.privacy')}
            </a>
            <a href="/legal" className="hidden text-blue-500 px-2 hover:text-blue-700 select-none">
              {t('footer.legal')}
            </a>
            <a href="/providers" className="hidden text-blue-500 px-2 hover:text-blue-700 select-none">
              {t('footer.providers')}
            </a>
          </div>
          <div className=" text-xs text-center select-none">
            <span className="hidden">
              HomeWorks<sup>&trade;</sup> is a registered trademark.
            </span>
            <span>
              {t('footer.company')} &bull; &copy; {new Date(Date.now()).getFullYear()}
            </span>
            <span className="flex flex-col py-2">
              <span> {t('footer.addressStreet')}</span>
              <span> {t('footer.cityAndState')}</span>
            </span>
          </div>
          <div className="text-xs text-center select-none"> {t('footer.made')}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
