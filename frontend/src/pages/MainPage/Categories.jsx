import React, { useContext } from 'react';
import { categoriesContext } from '../../context/CategoriesContext';
import CategoriesButton from './CategoriesButton';

const Categories = () => {
  const { categories } = useContext(categoriesContext);
  return (
    <div className="cats">
      <CategoriesButton category="All" />
      {categories.map((el) => (
        <CategoriesButton category={el} key={el} />
      ))}
    </div>
  );
};

export default Categories;
