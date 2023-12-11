import React, { createContext, useState } from 'react';

export const pageContext = createContext(1);
const PageContext = ({ children }) => {
  const [page, setPage] = useState(1);
  return (
    <>
      <pageContext.Provider value={{ page, setPage }}>
        {children}
      </pageContext.Provider>
    </>
  );
};

export default PageContext;
