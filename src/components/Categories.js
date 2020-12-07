import React from 'react';

const Categories = () => {
  return (
    <div className="mt-6">
      <h3 className="text-gray-800 font-bold text-xl">Browse by category</h3>
      <div className="overflow-x-auto">
        <div className="-ml-4 inline-flex">
          <div className="w-28 text-center ml-4 flex-shrink-0 px-4 py-2 pb-6">
            <div className="flex flex-col justify-center items-center ">
              <img
                alt=""
                className="h-16 w-16 border-white border-2  rounded-full shadow-md object-cover"
                src="https://images.unsplash.com/photo-1563219125-1db796e20ff2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
              />
              <span className="mt-2 font-bold leading-5 text-gray-900">Floor Installation</span>
            </div>
          </div>
          <div className="w-28 text-center ml-4 flex-shrink-0 px-4 py-2 pb-6">
            <div className="flex flex-col flex-wrap justify-center items-center ">
              <img
                alt=""
                className="h-16 w-16 border-white border-2 rounded-full shadow-md object-cover"
                src="https://images.unsplash.com/photo-1554663565-f60b88adfa08?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              />
              <span className="mt-2 font-bold leading-5 text-gray-900">Landscape, Gardening & Irrigation</span>
            </div>
          </div>
          <div className="w-28 text-center ml-4 flex-shrink-0 px-4 py-2 pb-6">
            <div className="flex flex-col justify-center items-center ">
              <img
                alt=""
                className="h-16 w-16 border-white border-2 rounded-full shadow-md object-cover"
                src="https://images.unsplash.com/photo-1542621334-a254cf47733d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              />
              <span className="mt-2 font-bold leading-5 text-gray-900">Additions & Remodels</span>
            </div>
          </div>
          <div className="w-28 text-center ml-4 flex-shrink-0 px-4 py-2 pb-6">
            <div className="flex flex-col justify-center items-center ">
              <img
                alt=""
                className="h-16 w-16 border-white border-2 rounded-full shadow-md object-cover"
                src="https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
              />
              <span className="mt-2 font-bold leading-5 text-gray-900">Painting</span>
            </div>
          </div>
          <div className="w-28 text-center ml-4 flex-shrink-0 px-4 py-2 pb-6">
            <div className="flex flex-col justify-center items-center ">
              <img
                alt=""
                className="h-16 w-16 border-white border-2 rounded-full shadow-md object-cover"
                src="https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              />
              <span className="mt-2 font-bold leading-5 text-gray-900">Cleaning</span>
            </div>
          </div>
          <div className="ml-4 flex-shrink-0 p-2">
            <div className="flex flex-col justify-center items-center">
              <img
                alt=""
                className="h-16 w-16 border-white border-2 rounded-full shadow-md object-cover"
                src="https://images.unsplash.com/photo-1577678923709-758495cb4497?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80"
              />
              <span className="mt-2 font-bold leading-5 text-gray-900">Plumbing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
