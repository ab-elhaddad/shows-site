import React, { createContext, useState } from 'react';

export const ShowsContext = createContext();
const ShowsContextProvider = ({ children }) => {
  const [shows, setShows] = useState(null);
  return (
    <>
      <ShowsContext.Provider value={{ shows, setShows }}>
        {children}
      </ShowsContext.Provider>
    </>
  );
};

export default ShowsContextProvider;
