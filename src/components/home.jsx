import React from 'react';
import Categories from './common/categories';
import Hero from './common/hero';
import Footer from './common/footer';

const Home = ({ lang }) => {
  const categories = [
    {
      name: 'Floor Installation',
      image: 'https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    },
    {
      name: 'Landscape & Irrigation',
      image:
        'https://images.unsplash.com/photo-1554663565-f60b88adfa08?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    },
    {
      name: 'Additions & Remodels',
      image:
        'https://images.unsplash.com/photo-1542621334-a254cf47733d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    },
    {
      name: 'Painting',
      image:
        'https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80',
    },
    {
      name: 'Cleaning',
      image: 'https://images.pexels.com/photos/4021256/pexels-photo-4021256.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
      name: 'Plumbing',
      image:
        'https://images.unsplash.com/photo-1577678923709-758495cb4497?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80',
    },
  ];

  const popular = [
    {
      name: 'Bathroom Remodel',
      image:
        'https://images.unsplash.com/flagged/photo-1600002368144-444430d3f3ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    },
    {
      name: 'Kitchen Remodel',
      image:
        'https://images.unsplash.com/photo-1574621974239-00deab554d60?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1599&q=80',
    },
    {
      name: 'Tile Installation',
      image:
        'https://images.unsplash.com/photo-1599209250635-26c180f28419?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    },
    {
      name: 'Hardwood & Laminate Floors',
      image:
        'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    },
    {
      name: 'Carpet Installation',
      image:
        'https://images.pexels.com/photos/5872378/pexels-photo-5872378.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      name: 'Carpet Cleaning',
      image:
        'https://images.pexels.com/photos/38325/vacuum-cleaner-carpet-cleaner-housework-housekeeping-38325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      name: 'Handyman Services',
      image:
        'https://images.unsplash.com/photo-1509453721491-c3af5961df76?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    },
    {
      name: 'Minor Electrical',
      image:
        'https://images.unsplash.com/photo-1462041866295-e4af004a32ef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1566&q=80',
    },
    {
      name: 'One-Time Cleaning',
      image:
        'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    },
  ];

  return (
    <div className="sm:flex-col sm:w-4/5 ">
      <main>
        <div className="hidden sm:block">
          <Hero />
        </div>
        <div className="p-4 sm:flex sm:justify-center">
          <div className="sm:w-2/3">
            <div className="flex justify-between sm:hidden">
              <div className="flex items-center bg-yellow-300 rounded-sm px-1">
                <span className="ml-1 text-xs uppercase text-yellow-800 font-bold select-none">
                  {lang === 'es' ? '¡Estimados Gratis!' : 'Free Estimates!'}
                </span>
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
                <span className="ml-1 text-xs uppercase text-green-700 font-bold select-none">
                  {lang === 'es' ? 'Recibe $40' : 'Get $40'}
                </span>
              </div>
            </div>
            <div className="relative mt-2 select-none sm:hidden">
              <img
                alt=""
                className="rounded-sm shadow"
                src="https://images.unsplash.com/photo-1589530006797-d67347f18caa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              />
            </div>
            <div className="relative px-2 sm:w-1/2">
              <div className="-mt-16 rounded-md sm:hidden">
                <h2 className="text-white leading-6 px-2 py-2 text-2xl font-extrabold select-none">
                  {lang === 'es'
                    ? 'Proyectos del hogar y servicios de remodelación'
                    : 'Home projects and remodeling services'}
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:-mt-6 sm:ml-2">
          <Categories name="Browse by category" categories={categories} />
          <Categories name="Popular services" categories={popular} />
        </div>
        <div className="px-3 sm:ml-12 sm:mr-11">
          <div id="testimonial" className="mt-8 flex-col bg-white p-4 rounded-lg shadow-md select-none">
            <span className="text-xs text-gray-300 font-semibold uppercase tracking-wider hidden">Testimonial</span>
            <h3 className="font-serif italic text-2xl text-gray-800">
              &ldquo; My home feels like new after General Global Services renovated my kitchen and bathrooms. They were
              honest, kind and professional. I would recommend them to anyone!&rdquo;
            </h3>
            <div className="flex justify-end items-baseline p-2 text-sm text-gray-800">
              — Paige Wagner, <span className="flex ml-2 items-baseline text-xs">Orlando, FL</span>
            </div>
          </div>
          <div className="mt-6 text-gray-800 tracking-wide text-justify text-lg select-none">
            <p className="mt-2 flex-wrap">
              For over a decade <span className="font-bold">General Global Services</span> has brought professional
              remodeling services to our customers in the Central Florida area. Over the years, we’ve had the privilege
              of serving hundreds of family homes, businesses and customers in many ways, ranging from tile and flooring
              installation, bathroom remodeling, landscaping, irrigation, gardening and more...
            </p>
            <p className="mt-2">
              Our quality of service has always been superior, but our craft has evolved. We are passionate to share our
              knowledge and expertise in the field to help our customers make cost effective decisions and create the
              beautiful long-lasting results they've envisioned — using only state-of-the-art tools, premium quality
              materials and the best practices in the industry.
            </p>
            <p className="mt-2">
              Our philosophy remains at the forefront of our work and growth. To go above and beyond our customer
              expectations and earn their valued testimony and referrals. We are grateful for all our customers who have
              referred us to their friends and family. We promise to deliver our best work and keep the good word you
              have put for us!
            </p>
            <p className="mt-2">
              Let us earn your business by scheduling a phone call for a free estimate, or choose a job type from the
              categories above to <span className="font-medium">begin now</span>.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col w-full my-6 text-3xl sm:w-48 sm:text-xl">
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-green-50  p-2 text-center font-extrabold uppercase rounded-lg select-none">
                Call now!
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
