import React from 'react';
import { useTranslation } from 'react-i18next';
import CardScroll from '../common/cardScroll';
import SecondaryHero from '../common/secondaryHero';
import Testimonial from '../common/testimonial';

const Granite = () => {
  const { t } = useTranslation();

  return (
    <main>
      <div className="-mt-6 sm:mt-0">
        <SecondaryHero
          text1={t('granite.1')}
          text2={t('granite.2')}
          tagline={t('secondaryHero.tagline')}
          color="text-yellow-400"
          image="catGranite"
        />
      </div>
      <div>
        <div className="-mt-10 sm:mt-0 sm:ml-5 sm:flex-col sm:justify-center sm:px-14">
          <CardScroll which="useService" category="granite" />
        </div>
        <div className="px-4 sm:-mt-8 sm:px-20">
          <Testimonial />
          <div className="mt-6 pb-12 text-gray-800 tracking-wide text-justify text-lg select-none">
            <p className="mt-2 flex-wrap">{t('pavers.text')}</p>
          </div>
        </div>
      </div>
      <div className="py-10 -mt-20 sm:ml-20">
        <CardScroll name={t('home.category')} which="useCategories" />
      </div>
    </main>
  );
};

export default Granite;
