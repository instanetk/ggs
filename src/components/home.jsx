import React from 'react';
import { useTranslation } from 'react-i18next';
import Categories from './common/categories';
import Hero from './common/hero';
import img from '../services/imgService';

const Home = () => {
  const { t } = useTranslation();

  const categories = [
    {
      name: t('cat.coverings'),
      image: img.catCovering,
      weight: 10,
      featured: false,
    },
    {
      name: t('cat.landscape'),
      image: img.catLandscaping,
      weight: 20,
      featured: true,
    },
    {
      name: t('cat.remodel'),
      image: img.catRemodeling,
      weight: 30,
      featured: true,
    },
    {
      name: t('cat.painting'),
      image: img.catPainting,
      weight: 40,
      featured: true,
    },
    {
      name: t('cat.cleaning'),
      image: img.catCleaning,
      weight: 50,
      featured: true,
    },
    {
      name: t('cat.plumbing'),
      image: img.catPlumbing,
      weight: 60,
      featured: true,
    },
    {
      name: t('cat.pavers'),
      image: img.catPavers,
      weight: 70,
      featured: true,
    },
    {
      name: t('cat.granite'),
      image: img.catGranite,
      weight: 80,
      featured: true,
    },
    {
      name: t('cat.pool'),
      image: img.catPool,
      weight: 90,
      featured: true,
    },
  ];

  const popular = [
    {
      name: t('services.bathroom'),
      image: img.srvBathroom,
      weight: 30,
      featured: true,
    },
    {
      name: t('services.kitchen'),
      image: img.srvKitchen,
      weight: 40,
      featured: true,
    },
    {
      name: t('services.tiles'),
      image: img.srvTiles,
      weight: 10,
      featured: true,
    },
    {
      name: t('services.laminate'),
      image: img.srvLaminate,
      weight: 20,
      featured: true,
    },
    {
      name: t('services.carpet'),
      image: img.srvCarpet,
      weight: 50,
      featured: true,
    },
    {
      name: t('services.carpetclean'),
      image: img.srvCarpetClean,
      weight: 60,
      featured: true,
    },
    {
      name: t('services.handyman'),
      image: img.srvHandyman,
      weight: 70,
      featured: true,
    },
    {
      name: t('services.electrical'),
      image: img.srvElectrical,
      weight: 80,
      featured: true,
    },
    {
      name: t('services.cleaning'),
      image: img.srvCleaning,
      weight: 90,
      featured: true,
    },
    {
      name: t('services.backsplash'),
      image: img.srvBacksplash,
      weight: 100,
      featured: true,
    },
  ];

  return (
    <main>
      <div className="p-4 sm:flex sm:justify-center">
        <div className="">
          <div className="flex justify-between sm:hidden">
            <div className="flex items-center bg-yellow-300 rounded-sm px-1">
              <span className="ml-1 text-xs uppercase text-yellow-800 font-bold select-none">{t('home.pill1')}</span>
            </div>
            <div className="flex items-center bg-green-300 rounded-sm px-1">
              <svg
                className="w-4 h-4 text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                />
              </svg>
              <span className="ml-1 text-xs uppercase text-green-700 font-bold select-none">{t('home.pill2')}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="-mt-14 py-1 sm:-mt-28">
        <Hero />
      </div>
      <div className="sm:flex-col sm:justify-center sm:px-14">
        <Categories name={t('home.category')} slug="services" categories={categories} />
        <Categories name={t('home.services')} slug="schedule" categories={popular} />
      </div>
      <div className="px-4 sm:px-14">
        <div id="testimonial" className="mt-8 flex-col bg-white p-4 rounded-lg shadow-md select-none">
          <span className="text-xs text-gray-300 font-semibold uppercase tracking-wider hidden">Testimonial</span>
          <h3 className="font-serif italic text-2xl text-gray-800">&ldquo;{t('home.testimonial')}&rdquo;</h3>
          <div className="flex justify-end items-baseline p-2 text-sm text-gray-800">
            — Beth Harmon, <span className="flex ml-2 items-baseline text-xs">Orlando, FL</span>
          </div>
        </div>
        <div className="mt-6 text-gray-800 tracking-wide text-justify text-lg select-none">
          <p className="mt-2 flex-wrap">{t('home.p.1')}</p>
          <p className="mt-2">{t('home.p.2')}</p>
          <p className="mt-2">{t('home.p.3')}</p>
          <p className="mt-2">
            {t('home.p.4')} <span className="font-medium">{t('home.p.4-span')}</span>.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col w-full m-6 text-2xl sm:w-48 sm:text-xl">
            <form action="tel:407-801-3447">
              <button
                type="submit"
                className="sm:hidden w-full bg-green-500 hover:bg-green-600 text-green-50  p-2 text-center font-extrabold uppercase rounded-lg select-none">
                {t('home.button')}
              </button>

              <button
                type="submit"
                className="hidden sm:block w-full bg-green-500 hover:bg-green-600 text-green-50  p-2 text-center font-extrabold uppercase rounded-lg select-none">
                407-801-3447
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
