import React, { createContext, useState } from 'react';

export const categoriesContext = createContext([]);
const CategoriesContext = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [currCategory, setCurrCategory] = useState('All');
  return (
    <>
      <categoriesContext.Provider
        value={{ categories, setCategories, currCategory, setCurrCategory }}
      >
        {children}
      </categoriesContext.Provider>
    </>
  );
};

export default CategoriesContext;
