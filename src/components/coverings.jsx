import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getServices } from '../services/getService';
import Categories from './common/categories';

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
      <div className="h-screen p-4 sm:flex sm:justify-center">
        <Categories name={t('cat.coverings')} slug="services" categories={useService} />
      </div>
    </main>
  );
};

export default Coverings;
