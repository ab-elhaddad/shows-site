import React from 'react';

const ShowCard = ({ movie }) => {
  return (
    <>
      <img src={movie?.image.original} alt="Show's poster" className="mv-img" />
    </>
  );
};

export default ShowCard;
