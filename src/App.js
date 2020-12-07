import React from 'react';
import NavBar from './components/common/NavBar';
import Categories from './components/Categories';

function App() {
  const categories = [
    {
      name: 'Floor installation',
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
      name: 'Wood & Laminate Floors',
      image:
        'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
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
    <div id="App" className="min-h-screen antialiasing bg-gray-100">
      <NavBar />
      <main className="p-4">
        <div>
          <div className="flex justify-between">
            <div className="flex items-center bg-yellow-300 rounded w-32 px-2">
              <span className="ml-1 text-xs uppercase text-yellow-800 font-bold">Free Estimates!</span>
            </div>
            <div className="flex items-center bg-green-300 rounded w-24 px-2">
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
              <span className="ml-1 text-xs uppercase text-green-700 font-bold">Get $40</span>
            </div>
          </div>
          <div className="relative mt-2">
            <img
              alt=""
              className="rounded-lg shadow sm:w-1/2"
              src="https://images.unsplash.com/photo-1589530006797-d67347f18caa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            />
          </div>
          <div className="relative px-2 sm:w-1/2">
            <div className="-mt-20 rounded-md ">
              <h2 className="text-white text-center px-2 py-1 text-3xl font-extrabold">
                Home projects and remodeling services
              </h2>
            </div>
          </div>
        </div>
        <Categories name="Browse by category" categories={categories} />
        <Categories name="Popular services" categories={popular} />
        <div className="mt-6 text-gray-800 tracking-wide text-justify">
          <p className="mt-2">
            For over 15 years, <span className="font-bold">General Global Services</span> has brought remodeling
            services to the Central Florida area. Over the years, we’ve had the privilege of serving hundreds of homes,
            business and customers in every home remodeling need ranging from flooring installation, bathroom
            remodeling, landscaping, gardening and more.
          </p>
          <p className="mt-2">
            Our quality of service has always been superior, but our craft has evolved. We are passionate to share our
            knowledge and expertise in the field to help our customers make cost effective decisions and create long
            lasting results. Use not only of state-of-the-art tools and new technologies, but also best practices and
            solutions.
          </p>
          <p className="mt-2">
            Our philosophy is at the forefront of our work and growth. Going above and beyond our customer expectations
            and earning their testimony and referrals. We are grateful for all our customers who have made us known to
            their friends and family. We promise to make good on the good word you have put for us!
          </p>
          <p className="mt-2">Let us earn your business and trust by scheduling a phone call or an estimate.</p>
        </div>
        <div className="flex w-full my-6">
          <button className="w-full justify-center bg-green-500 hover:bg-green-600 text-green-50 text-3xl p-2 text-center font-extrabold uppercase rounded-lg transition delay-150 duration-300 ease-in-out">
            Call now!
          </button>
        </div>
        <div className="flex-col bg-white p-4 rounded-lg shadow-lg">
          <h3 className="font-serif italic text-2xl text-gray-900">
            &ldquo; My home feels like new after General Global Services renovated my kitchen and bathrooms. They were
            honest, kind and professional. I would recommend them to everyone!&rdquo;
          </h3>
          <div className="flex justify-end items-baseline p-2 text-sm text-gray-800">
            — Isabela Smith, <span className="flex ml-2 items-baseline text-xs">Orlando, FL</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
