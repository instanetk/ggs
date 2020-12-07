import React from 'react';
import NavBar from './components/NavBar';
import Categories from './components/Categories';
import Popular from './components/Popular';

function App() {
  return (
    <div id="App" className="min-h-screen antialiasing bg-gray-200">
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
        <Categories />
        <Popular />
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
