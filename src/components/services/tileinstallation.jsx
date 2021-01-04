import React from 'react';
import { useTranslation } from 'react-i18next';
import SecondaryHero from '../common/secondaryHero';
import ServiceAddress from '../serviceAddress';
import CardScroll from '../common/cardScroll';

const Tiles = () => {
  const { t } = useTranslation();

  const style = {
    hero: '-mt-6 sm:mt-0',
    address: 'py-10 -mt-0 sm:ml-0',
    categories: 'py-10 -mt-0 sm:ml-20',
  };

  return (
    <main>
      <div id="hero" className={style.hero}>
        <SecondaryHero
          text1={t('tileinstallation.1')}
          text2={t('tileinstallation.2')}
          tagline={t('secondaryHero.tagline2')}
          color="text-yellow-700"
          image="srvTiles"
        />
      </div>
      <div id="address" className={style.address}>
        <ServiceAddress />
      </div>
      <div id="categories" className={style.categories}>
        <CardScroll which={'useCategories'} slug="/services" name="Back to Categories" />
      </div>
    </main>
  );
};

export default Tiles;
