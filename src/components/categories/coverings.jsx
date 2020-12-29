import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getServices } from '../../services/getService';
import CardScroll from '../common/cardScroll';
import HeroCoverings from './heroCoverings';
import Testimonial from '../common/testimonial';
import '../../styles/bg.css';

const Coverings = ({ hero, category, testimonial, text }) => {
  const { t } = useTranslation();
  const [useService, setService] = useState([]);

  useEffect(() => {
    async function fetchServices() {
      const { data } = await getServices('coverings');
      setService(data);
    }
    fetchServices();
  }, []);

  return (
    <main>
      <div className="-mt-6 sm:mt-0">
        <HeroCoverings />
      </div>
      <div>
        <div className="-mt-10 sm:mt-0 sm:ml-5 sm:flex-col sm:justify-center sm:px-14">
          <CardScroll categories={useService} />
        </div>
        <div className="px-4 sm:-mt-8 sm:px-20">
          <Testimonial />
          <div className="mt-6 pb-12 text-gray-800 tracking-wide text-justify text-lg select-none">
            <p className="mt-2 flex-wrap">
              The choice of flooring sets the stage for the atmosphere of your interior design. From the firmness and
              openness of ceramic and porcelain tile floors to the warmth and coziness of hardwood and laminate, you can
              choose the right covering to go for the different spaces of your home; whether it be the living areas,
              bedrooms, or exteriors.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Coverings;
