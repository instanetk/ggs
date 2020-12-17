import React from 'react';
import { useTranslation } from 'react-i18next';
import Categories from './common/categories';
import Hero from './common/hero';

const Home = () => {
  const { t } = useTranslation();

  const categories = [
    {
      name: 'Floor Coverings',
      image:
        'http://nebula.wsimg.com/34f2c373cdaed55592801775e35af063?AccessKeyId=56F7F3315B18AFDB68AF&disposition=0&alloworigin=1',
      weight: 10,
      featured: false,
    },
    {
      name: 'Landscape & Irrigation',
      image:
        'https://images.unsplash.com/photo-1554663565-f60b88adfa08?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      weight: 20,
      featured: true,
    },
    {
      name: 'Additions & Remodels',
      image:
        'https://images.unsplash.com/photo-1542621334-a254cf47733d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
      weight: 30,
      featured: true,
    },
    {
      name: 'Painting',
      image:
        'https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80',
      weight: 40,
      featured: true,
    },
    {
      name: 'Cleaning',
      image: 'https://images.pexels.com/photos/4021256/pexels-photo-4021256.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      weight: 50,
      featured: true,
    },
    {
      name: 'Plumbing',
      image:
        'https://images.unsplash.com/photo-1577678923709-758495cb4497?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80',
      weight: 60,
      featured: true,
    },
    {
      name: 'Pavers & Stones',
      image: 'https://www.carolinaartificiallawns.com/wp-content/uploads/2017/10/shutterstock_458022232.jpg',
      weight: 70,
      featured: true,
    },
    {
      name: 'Granite Countertops',
      image:
        'https://images.pexels.com/photos/3935337/pexels-photo-3935337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      weight: 80,
      featured: true,
    },
    {
      name: 'Pool Service',
      image:
        'https://images.pexels.com/photos/261045/pexels-photo-261045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      weight: 90,
      featured: true,
    },
  ];

  const popular = [
    {
      name: 'Bathroom Remodel',
      image:
        'https://images.unsplash.com/flagged/photo-1600002368144-444430d3f3ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
      weight: 30,
      featured: true,
    },
    {
      name: 'Kitchen Remodel',
      image:
        'https://images.unsplash.com/photo-1574621974239-00deab554d60?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1599&q=80',
      weight: 40,
      featured: true,
    },
    {
      name: 'Tile Installation',
      image:
        'https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      weight: 10,
      featured: true,
    },
    {
      name: 'Hardwood & Laminate Floors',
      image:
        'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
      weight: 20,
      featured: true,
    },
    {
      name: 'Carpet Installation',
      image:
        'https://images.pexels.com/photos/5872378/pexels-photo-5872378.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      weight: 50,
      featured: true,
    },
    {
      name: 'Carpet Cleaning',
      image:
        'https://images.pexels.com/photos/38325/vacuum-cleaner-carpet-cleaner-housework-housekeeping-38325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      weight: 60,
      featured: true,
    },
    {
      name: 'Handyman Services',
      image: 'https://image.shutterstock.com/image-photo/hands-handyman-tool-belt-600w-366462815.jpg',
      weight: 70,
      featured: true,
    },
    {
      name: 'Minor Electrical',
      image:
        'https://images.unsplash.com/photo-1462041866295-e4af004a32ef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1566&q=80',
      weight: 80,
      featured: true,
    },
    {
      name: 'One-Time Cleaning',
      image:
        'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
      weight: 90,
      featured: true,
    },
    {
      name: 'Backsplash',
      image: 'https://image.shutterstock.com/image-photo/chicago-il-usa-january-26-600w-1675447636.jpg',
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
          <p className="mt-2 flex-wrap">
            For over a decade <span className="font-bold">General Global Services</span> has brought professional
            remodeling services to our customers in the Central Florida area. Over the years, we’ve had the privilege of
            serving hundreds of family homes, businesses and customers, ranging from tile and flooring installation,
            bathroom remodeling, landscaping, irrigation, gardening and more...
          </p>
          <p className="mt-2">
            Our quality of service has always been superior, but our craft has evolved. We are passionate to share our
            knowledge and expertise in the field to help our customers make cost effective decisions and create the
            beautiful long-lasting results they've envisioned — using only state-of-the-art tools, premium quality
            materials and the best practices in the industry.
          </p>
          <p className="mt-2">
            Our philosophy remains at the forefront of our work and growth. To go above and beyond our customer
            expectations and earn their valued testimony and referrals. We are grateful to all our customers who have
            referred us to their friends and family. We promise to deliver our best work and keep the good word you have
            put for us!
          </p>
          <p className="mt-2">
            Let us earn your business by scheduling a phone call for a free estimate, or choose a job type from the
            categories above to <span className="font-medium">begin now</span>.
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
