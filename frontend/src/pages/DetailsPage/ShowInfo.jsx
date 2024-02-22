import React from 'react';
import OtherInfo from './ShowInfo/OtherInfo';
import Buttons from './ShowInfo/Buttons';

const ShowInfo = ({ movie }) => {
  return (
    <>
      <div className="mv-info">
        <p className="mv-title">{movie?.name}</p>
        <p
          className="mv-summ"
          dangerouslySetInnerHTML={{ __html: movie?.summary }}
        ></p>
        <OtherInfo movie={movie} />
        <Buttons link={movie?.url} />
      </div>
    </>
  );
};

export default ShowInfo;
