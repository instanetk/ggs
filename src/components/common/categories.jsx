import React, { useState } from 'react';
import Category from './category';

const Categories = ({ name, categories }) => {
  // eslint-disable-next-line
  const [useName, setName] = useState(name);
  // eslint-disable-next-line
  const [useCat, setCat] = useState(categories);

  return (
    <div className="mt-6">
      <h3 className="px-4 text-gray-700 font-bold text-md uppercase select-none sm:ml-10">{useName}</h3>
      <div className="overflow-x-auto">
        <div className="-ml-4 inline-flex sm:flex sm:flex-wrap sm:ml-6">
          {useCat.map((cat) => {
            return <Category name={cat.name} image={cat.image} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
