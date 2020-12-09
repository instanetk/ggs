import React from 'react';

const Category = ({ name, image }) => {
  return (
    <div className="w-56 text-center ml-4 flex-shrink-0 px-4 py-2 pb-2 select-none sm:w-64 sm:ml-3 cursor-pointer ">
      <div className="flex flex-col justify-center items-center select-none">
        <img
          alt={name}
          className="h-28 w-48 border-white border-t-2 border-l-2 border-r-2 rounded-t-lg shadow-md object-cover sm:h-36 sm:w-56"
          src={image}
        />
        <span className="h-16 w-48 py-3 px-2 flex justify-center items-center bg-white rounded-b-lg font-bold leading-6 text-gray-800 shadow-sm sm:w-56">
          {name}
        </span>
      </div>
    </div>
  );
};

export default Category;
