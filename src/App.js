import React, { useState } from 'react';

function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div id="App" className="antialiasing">
      <header className="bg-gray-900 sm:flex sm:justify-between sm:items-center">
        <h1 className="text-xl bold text-white">🧱 General Global Services</h1>
        <div className="flex">
          <button
            type="button"
            onClick={() => setOpen(!isOpen)}
            className="px-2 focus:outline-none focus:shadow-ouline">
            <svg
              className="h-6 w-6 fill-current text-white hover:text-green-500"
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
      <main>
        <p className="text-gray-800">
          For over 15 years, General Global Services has brought remodeling services to the Central Florida area.
        </p>
        <p className="text-gray-800">
          Over the years, we’ve had the privilege of serving hundreds of homes, business and customers in every home
          remodeling need ranging from flooring installation, bathroom remodeling, landscaping, gardening and more.
        </p>
        <p className="text-gray-800">
          Our quality of service has always been superior, but our craft has evolved. We are passionate to share our
          knowledge and expertise in the field to help our customers make cost effective decisions and create long
          lasting results. Use not only of state-of-the-art tools and new technologies, but also best practices and
          solutions.
        </p>
        Our philosophy is at the forefront of our work and growth. Going above and beyond our customer expectations and
        earning their testimony and referrals. We are grateful for all our customers who have made us known to their
        friends and family. We promise to make good on the good word you have put for us!
        <p className="text-gray-800">Let us earn your business and trust by scheduling a phone call or an estimate.</p>
        <h2>[CALL NOW]</h2>
        <h2>[SCHEDULE ESTIMATE OR CALL]</h2>
        <section>## Photo Project 1 ##</section>
        <h3>% TESTIMONIAL %</h3>% services offered % % service description % % picture %<h3>% TESTIMONIAL %</h3>
        <h2>% CONTACT FORM %</h2>
        <ul>
          <li>% HOW-TO KB %</li>
        </ul>
        <div>
          <h4>[ ARE YOU A CONTRACTOR? ]</h4>
          Submit your company’s bond and insurance along with your business license and join our team of highly skilled
          service providers. State your range of movement in miles radius.
        </div>
      </main>
    </div>
  );
}

export default App;
