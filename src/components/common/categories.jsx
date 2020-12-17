import React from 'react';
import Category from './categoryItem';

const Categories = ({ name, slug, categories }) => {
  return (
    <div className="mt-6">
      <h3 className="p-4 text-gray-700 font-bold text-md uppercase select-none sm:-ml-4">{name}</h3>
      <div className="overflow-x-auto">
        <div className="-ml-4 inline-flex sm:flex sm:flex-wrap sm:flex-grow">
          {categories
            .sort(function (a, b) {
              return a.weight - b.weight;
            })
            .map((cat) => {
              return <Category name={cat.name} slug={slug} image={cat.image} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
