import React, { useContext } from 'react';
import { ShowsContext } from './../context/ShowsContext';
import Shows from './MainPage/Shows.jsx';
import PaginationComp from './MainPage/Shows/PaginationComp';
import Categories from './MainPage/Categories.jsx';

const MainPage = () => {
  const { shows } = useContext(ShowsContext);
  return (
    <>
      <Categories />
      <Shows />
      {shows.length ? <PaginationComp /> : null}
    </>
  );
};

export default MainPage;
