import React, { useState } from 'react';
import Category from './common/Category';

const Categories = ({ name, categories }) => {
  const [useName, setName] = useState(name);
  const [useCat, setCat] = useState(categories);

  return (
    <div className="mt-6">
      <h3 className="text-gray-700 font-bold text-md uppercase">{useName}</h3>
      <div className="overflow-x-auto">
        <div className="-ml-4 inline-flex">
          {useCat.map((cat) => {
            return <Category name={cat.name} image={cat.image} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
