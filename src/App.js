import React, { useState } from 'react';

function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div id="App" className="antialiasing bg-gray-100">
      <header className="p-4 bg-gray-900 flex justify-between items-center">
        <h1 className="text-lg items-center text-white font-sans tracking-wide font-bold select-none">
          🌐 General Global Services
        </h1>
        <div className="flex">
          <button
            type="button"
            onClick={() => setOpen(!isOpen)}
            className="px-2 focus:outline-none focus:shadow-ouline">
            <svg
              className="h-6 w-6 fill-current text-white hover:text-blue-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                className={isOpen ? 'hidden' : ''}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                className={isOpen ? '' : 'hidden'}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </header>
      <div className={` ${isOpen ? '' : 'hidden'} p-4 bg-blue-900 flex flex-nowrap justify-between`}>
        <div className="flex flex-col justify-center items-center select-none text-white hover:text-white">
          <svg
            className="h-8 w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          <span className="mt-2 text-xs uppercase font-bold tracking-wider">Home</span>
        </div>
        <div className="flex flex-col justify-center items-center select-none text-white hover:text-white">
          <svg
            className="h-8 w-8  fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clipRule="evenodd"
            />
          </svg>
          <span className="mt-2 text-xs uppercase font-bold tracking-wider content-center">Schedule</span>
        </div>

        <div className="flex flex-col justify-center items-center select-none text-white hover:text-white">
          <svg
            className="h-8 w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path
              fillRule="evenodd"
              d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="mt-2 text-xs uppercase font-bold tracking-wider content-center">Services</span>
        </div>
        <div className="flex flex-col justify-center items-center select-none text-white hover:text-white">
          <svg
            className="h-8 w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
              clipRule="evenodd"
            />
          </svg>
          <span className="mt-2 text-xs uppercase font-bold tracking-wider content-center">Chat</span>
        </div>
        <div className="flex flex-col justify-center items-center select-none text-white🌐 hover:text-white">
          <svg
            className="h-8 w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
          <span className="mt-2 text-xs uppercase font-bold tracking-wider content-center">Sign in</span>
        </div>
      </div>

      <main className="p-4">
        <div>
          <div className="relative ">
            <img
              alt=""
              className="rounded shadow sm:w-1/2"
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
        <div className="mt-6">
          <h3 className="text-black font-bold text-xl">Browse by category</h3>
          <div className="overflow-x-auto">
            <div className="-ml-4 inline-flex">
              <div className="w-28 text-center ml-4 flex-shrink-0 px-4 py-2 pb-6">
                <div className="flex flex-col justify-center items-center ">
                  <img
                    alt=""
                    className="h-16 w-16 border-white border-2  rounded-full shadow-md object-cover"
                    src="https://images.unsplash.com/photo-1563219125-1db796e20ff2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
                  />
                  <span className="mt-2 font-bold leading-5">Floor Installation</span>
                </div>
              </div>
              <div className="w-28 text-center ml-4 flex-shrink-0 px-4 py-2 pb-6">
                <div className="flex flex-col flex-wrap justify-center items-center ">
                  <img
                    alt=""
                    className="h-16 w-16 border-white border-2 rounded-full shadow-md object-cover"
                    src="https://images.unsplash.com/photo-1554663565-f60b88adfa08?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  />
                  <span className="mt-2 font-bold leading-5">Landscape, Gardening & Irrigation</span>
                </div>
              </div>
              <div className="w-28 text-center ml-4 flex-shrink-0 px-4 py-2 pb-6">
                <div className="flex flex-col justify-center items-center ">
                  <img
                    alt=""
                    className="h-16 w-16 border-white border-2 rounded-full shadow-md object-cover"
                    src="https://images.unsplash.com/photo-1542621334-a254cf47733d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                  />
                  <span className="mt-2 font-bold leading-5">Additions & Remodels</span>
                </div>
              </div>
              <div className="w-28 text-center ml-4 flex-shrink-0 px-4 py-2 pb-6">
                <div className="flex flex-col justify-center items-center ">
                  <img
                    alt=""
                    className="h-16 w-16 border-white border-2 rounded-full shadow-md object-cover"
                    src="https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
                  />
                  <span className="mt-2 font-bold leading-5">Painting</span>
                </div>
              </div>
              <div className="w-28 text-center ml-4 flex-shrink-0 px-4 py-2 pb-6">
                <div className="flex flex-col justify-center items-center ">
                  <img
                    alt=""
                    className="h-16 w-16 border-white border-2 rounded-full shadow-md object-cover"
                    src="https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                  />
                  <span className="mt-2 font-bold leading-5">Cleaning</span>
                </div>
              </div>
              <div className="ml-4 flex-shrink-0 p-2">
                <div className="flex flex-col justify-center items-center">
                  <img
                    alt=""
                    className="h-16 w-16 border-white border-2 rounded-full shadow-md object-cover"
                    src="https://images.unsplash.com/photo-1577678923709-758495cb4497?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80"
                  />
                  <span className="mt-2 font-bold leading-5">Plumbing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-black font-bold text-xl">Popular services</h3>
          <div className="overflow-x-auto">
            <div className="-ml-4 inline-flex">
              <div className="w-28 text-center ml-4 flex-shrink-0 px-4 py-2 pb-6">
                <div className="flex flex-col justify-center items-center">
                  <img
                    alt=""
                    className="h-16 w-16 border-white border-2 rounded-lg shadow-md object-cover"
                    src="https://images.unsplash.com/flagged/photo-1600002368144-444430d3f3ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                  />
                  <span className="mt-2 font-bold leading-5">Bathroom Remodel</span>
                </div>
              </div>
              <div className="w-28 text-center ml-4 flex-shrink-0 px-4 py-2 pb-6">
                <div className="flex flex-col justify-center items-center">
                  <img
                    alt=""
                    className="h-16 w-16 border-white border-2 rounded-lg shadow-md object-cover"
                    src="https://images.unsplash.com/photo-1574621974239-00deab554d60?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1599&q=80"
                  />
                  <span className="mt-2 font-bold leading-5">Kitchen Remodel</span>
                </div>
              </div>
              <div className="w-28 text-center ml-4 flex-shrink-0 px-4 py-2 pb-6">
                <div className="flex flex-col justify-center items-center">
                  <img
                    alt=""
                    className="h-16 w-16 border-white border-2 rounded-lg shadow-md object-cover"
                    src="https://images.unsplash.com/photo-1599209250635-26c180f28419?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                  />
                  <span className="mt-2 font-bold leading-5">Tile Installation</span>
                </div>
              </div>
              <div className="w-28 text-center ml-4 flex-shrink-0 px-4 py-2 pb-6">
                <div className="flex flex-col justify-center items-center">
                  <img
                    alt=""
                    className="h-16 w-16 border-white border-2 rounded-lg shadow-md object-cover"
                    src="https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                  />
                  <span className="mt-2 font-bold leading-5">Wood & Laminate Installation</span>
                </div>
              </div>
              <div className="w-28 text-center ml-4 flex-shrink-0 px-4 py-2 pb-6">
                <div className="flex flex-col justify-center items-center">
                  <img
                    alt=""
                    className="h-16 w-16 border-white border-2 rounded-lg shadow-md object-cover"
                    src="https://images.unsplash.com/photo-1509453721491-c3af5961df76?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  />
                  <span className="mt-2 font-bold leading-5">Handyman Services</span>
                </div>
              </div>
              <div className="w-28 text-center ml-4 flex-shrink-0 px-4 py-2 pb-6">
                <div className="flex flex-col justify-center items-center">
                  <img
                    alt=""
                    className="h-16 w-16 border-white border-2 rounded-lg shadow-md object-cover"
                    src="https://images.unsplash.com/photo-1462041866295-e4af004a32ef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1566&q=80"
                  />
                  <span className="mt-2 font-bold leading-5">Minor Electrical</span>
                </div>
              </div>
              <div className="w-28 text-center ml-4 flex-shrink-0 px-4 py-2 pb-6">
                <div className="flex flex-col justify-center items-center">
                  <img
                    alt=""
                    className="h-16 w-16 border-white border-2 rounded-lg shadow-md object-cover"
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                  />
                  <span className="mt-2 font-bold leading-5">One-Time Cleaning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
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
        <h2>[CALL NOW]</h2>
        <h2>[SCHEDULE ESTIMATE OR CALL -- autofill FL addresses ]</h2>
        <section>## Photo Project 1 ##</section>
        <h3>% TESTIMONIAL %</h3>% services offered % % service description % % picture %<h3>% TESTIMONIAL %</h3>
        <h2>% CONTACT FORM %</h2>
        <ul>
          <li>% HOW-TO KB %</li>
        </ul>
        <div>
          <h4>[ ARE YOU A CONTRACTOR? ]</h4>
          Submit your company’s bond and insurance along with your occupational license and join our team of highly
          skilled service providers. State your range of movement in miles radius.
        </div>
      </main>
    </div>
  );
}

export default App;
