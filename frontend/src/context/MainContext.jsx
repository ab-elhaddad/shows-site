import React from 'react';
import PageContext from './PageContext';
import PageCountContext from './PageCountContext';
import SearchContext from './SearchContext';
import ShowsContextProvider from './ShowsContext';
import CategoriesContext from './CategoriesContext';

const MainContext = ({ children }) => {
  return (
    <>
      <CategoriesContext>
        <PageContext>
          <PageCountContext>
            <SearchContext>
              <ShowsContextProvider>{children}</ShowsContextProvider>
            </SearchContext>
          </PageCountContext>
        </PageContext>
      </CategoriesContext>
    </>
  );
};

export default MainContext;
