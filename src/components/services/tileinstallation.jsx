import React from 'react';
import { useTranslation } from 'react-i18next';
import SecondaryHero from '../common/secondaryHero';
import ServiceAddress from '../serviceAddress';

const Tiles = () => {
  const { t } = useTranslation();

  return (
    <main className="h-screen">
      <div className="-mt-6 sm:mt-0">
        <SecondaryHero
          text1={t('tileinstallation.1')}
          text2={t('tileinstallation.2')}
          tagline={t('secondaryHero.tagline2')}
          color="text-yellow-700"
          image="srvTiles"
        />
      </div>
      <div>
        <div className="-mt-10 sm:mt-0 sm:ml-5 sm:flex-col sm:justify-center sm:px-14"></div>
        <div className="px-4 sm:-mt-0 sm:px-20 h-96">
          <div className="mt-6 pb-12 text-gray-800 tracking-wide text-justify text-lg select-none">
            <ServiceAddress />
            {/* <GoogleMaps /> */}
            {/* <p className="mt-2 flex-wrap">{t('coverings.text')}</p> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Tiles;
