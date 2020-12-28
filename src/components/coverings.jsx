import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getServices } from '../services/getService';
import CardScroll from './common/cardScroll';

const Coverings = () => {
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
      <div className="h-screen flex align-middle">
        {/* <div className="w-full h-84 "></div> */}
        <div className="flex align-middle rounded sm:flex-col sm:justify-center sm:px-14">
          <CardScroll name={t('cat.coverings')} slug="services" categories={useService} />
        </div>
      </div>
    </main>
  );
};

export default Coverings;
