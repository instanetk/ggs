import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <div class="px-4 sm:block sm:relative sm:bg-white sm:overflow-hidden sm:-mt-16 md:-mt-1 select-none">
        <div class="max-w-7xl mx-auto xl:max-w-6xl">
          <div class="relative z-10 sm:bg-white sm:pb-16 md:pb-20 lg:max-w-sm lg:w-full lg:pb-8 xl:pb-15 xl:max-w-2xl">
            <svg
              class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2 sm:translate-x-2/4"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true">
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div class="relative pt-6 px-4 sm:px-6 lg:px-8"></div>

            <main class="mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:relative lg:z-20 lg:mt-20 lg:px-8">
              <div class="sm:text-center lg:text-left xl:py-6">
                <div class="hidden sm:block mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  <h1 class="hidden sm:block sm:mt-0 sm:mb-0 text-3xl leading-7 tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span class="block xl:inline text-white sm:text-black">{t('hero.1')}</span>
                    <span class="block text-white sm:text-indigo-600 xl:inline">{t('hero.2')}</span>
                  </h1>
                  <span className="flex tracking-widest mt-4 py-1 sm:justify-center lg:justify-start">
                    ⭐️⭐️⭐️⭐️⭐️
                  </span>
                  <span>{t('hero.tagline')}</span>
                </div>
                <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div class="hidden sm:block rounded-md shadow">
                    <NavLink to="schedule">
                      <span
                        href="https://generalglobalservices.com"
                        class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                        {t('hero.button')}
                      </span>
                    </NavLink>
                  </div>
                  <div class="mt-3 sm:mt-0 sm:ml-3">
                    {/* <a
                      href="#"
                      class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                      Live demo
                    </a> */}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div class="sm:inset-y-0 sm:bottom-0 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 xl:-mr-10">
          <img
            class="rounded-sm shadow object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1589530006797-d67347f18caa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            alt=""
          />
        </div>
        <h1 class="-mt-16 ml-4 sm:hidden sm:mt-0 sm:mb-0 text-3xl leading-7 tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span class="block xl:inline text-white sm:text-black">{t('hero.1')}</span>
          <span class="block text-white sm:text-indigo-600 xl:inline">{t('hero.2')}</span>
        </h1>
      </div>
    </React.Fragment>
  );
};

export default Hero;
