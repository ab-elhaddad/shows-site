import React, { createContext, useState } from 'react';

export const pageCountContext = createContext(10);
const PageCountContext = ({ children }) => {
  const [pageCount, setPageCount] = useState(10);
  return (
    <>
      <pageCountContext.Provider value={{ pageCount, setPageCount }}>
        {children}
      </pageCountContext.Provider>
    </>
  );
};

export default PageCountContext;
