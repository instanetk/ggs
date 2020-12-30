import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getServices } from '../../services/getService';
import { getCategories } from '../../services/categoryService';
import CardScroll from '../common/cardScroll';
import SecondaryHero from '../common/secondaryHero';
import Testimonial from '../common/testimonial';

const Cleaning = () => {
  const { t } = useTranslation();
  const [useService, setService] = useState([]);
  const [useCategories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const { data } = await getCategories();
      setCategories(data);
    }
    fetchCategories();
    async function fetchServices() {
      const { data } = await getServices('cleaning');
      setService(data);
    }
    fetchServices();
  }, []);

  return (
    <main>
      <div className="-mt-6 sm:mt-0">
        <SecondaryHero text1={t('cleaning.1')} color="text-red-500" image="catCleaning" />
      </div>
      <div>
        <div className="-mt-10 sm:mt-0 sm:ml-5 sm:flex-col sm:justify-center sm:px-14">
          <CardScroll categories={useService} />
        </div>
        <div className="px-4 sm:-mt-8 sm:px-20">
          <Testimonial />
          <div className="mt-6 pb-12 text-gray-800 tracking-wide text-justify text-lg select-none">
            <p className="mt-2 flex-wrap">{t('cleaning.text')}</p>
          </div>
        </div>
      </div>
      <div className="py-10 -mt-20 sm:ml-20">
        <CardScroll name={t('home.category')} categories={useCategories} />
      </div>
    </main>
  );
};

export default Cleaning;
