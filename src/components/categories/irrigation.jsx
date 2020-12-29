import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getServices } from '../../services/getService';
import CardScroll from '../common/cardScroll';
import SecondaryHero from '../common/secondaryHero';
import Testimonial from '../common/testimonial';

const Irrigation = () => {
  const { t } = useTranslation();
  const [useService, setService] = useState([]);

  useEffect(() => {
    async function fetchServices() {
      const { data } = await getServices('irrigation');
      setService(data);
    }
    fetchServices();
  }, []);

  return (
    <main>
      <div className="-mt-6 sm:mt-0">
        <SecondaryHero
          text1={t('irrigation.1')}
          text2={t('irrigation.2')}
          color="text-green-400"
          image="catLandscaping"
        />
      </div>
      <div>
        <div className="-mt-10 sm:mt-0 sm:ml-5 sm:flex-col sm:justify-center sm:px-14">
          <CardScroll categories={useService} />
        </div>
        <div className="px-4 sm:-mt-8 sm:px-20">
          <Testimonial />
          <div className="mt-6 pb-12 text-gray-800 tracking-wide text-justify text-lg select-none">
            <p className="mt-2 flex-wrap">{t('irrigation.text')}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Irrigation;
