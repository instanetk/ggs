import React from 'react';
import { useTranslation } from 'react-i18next';

const Testimonial = () => {
  const { t } = useTranslation();
  return (
    <div id="testimonial" className="mt-8 flex-col bg-white p-4 rounded-lg shadow-md select-none">
      <span className="text-xs text-gray-300 font-semibold uppercase tracking-wider hidden">Testimonial</span>
      <h3 className="font-serif italic text-2xl text-gray-800">&ldquo;{t('testimonial.text')}&rdquo;</h3>
      <div className="flex justify-end items-baseline p-2 text-sm text-gray-800">
        — Beth Harmon, <span className="flex ml-2 items-baseline text-xs">Orlando, FL</span>
      </div>
    </div>
  );
};

export default Testimonial;
