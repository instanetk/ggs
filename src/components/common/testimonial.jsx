import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Review from '../common/review';
import TestimonyThanks from './testimonyThanks';

const Testimonial = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [submitted, setState] = useState(false);

  const sayThanks = () => {
    setState(!submitted);
  };

  const show = () => {
    setVisible(!visible);
  };
  console.log(submitted);
  return (
    <div>
      <div className={visible ? '' : 'hidden'}>
        {submitted ? <TestimonyThanks onClose={show} /> : <Review onClose={show} sayThanks={sayThanks} />}
      </div>
      <div id="testimonial" className="mt-8 flex-col bg-white p-4 rounded-lg shadow-md select-none">
        <span className="text-xs text-gray-300 font-semibold uppercase tracking-wider hidden">Testimonial</span>
        <h3 className="font-serif italic text-2xl text-gray-800">&ldquo;{t('testimonial.text')}&rdquo;</h3>
        <div className="flex justify-end items-baseline p-2 text-sm text-gray-800">
          — Beth Harmon, <span className="flex ml-2 items-baseline text-xs">Orlando, FL</span>
        </div>
      </div>
      <div className="flex justify-end mt-1 mr-1">
        <span
          className="font-light text-left text-xs text-indigo-600 cursor-pointer border border-dotted border-t-0 border-l-0 border-r-0 border-indigo-600"
          onClick={() => show()}>
          {t('testimonial.write')}
        </span>
      </div>
    </div>
  );
};

export default Testimonial;
