import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { categoriesContext } from '../../context/CategoriesContext';
import { pageContext } from '../../context/PageContext';

const CategoriesButton = ({ category }) => {
  const { setCurrCategory } = useContext(categoriesContext);
  const { setPage } = useContext(pageContext);
  async function categoryHandler(e) {
    if (category === 'All') setPage(1);
    setCurrCategory(category);
  }
  return (
    <>
      <Button className="cat-btn" onClick={categoryHandler}>
        {category}
      </Button>
    </>
  );
};

export default CategoriesButton;
