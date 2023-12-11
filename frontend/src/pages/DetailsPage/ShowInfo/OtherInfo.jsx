import React from 'react';
import { IconContext } from 'react-icons';
import { FaStar, FaLanguage } from 'react-icons/fa';
import { BiSolidCameraMovie } from 'react-icons/bi';
import { IoLayers } from 'react-icons/io5';

const OtherInfo = ({ movie }) => {
  return (
    <>
      <IconContext.Provider
        value={{ color: 'var(--dark-color)', className: 'icn', size: '1.2em' }}
      >
        <p className="mv-o-info">
          <b>
            {' '}
            <FaStar /> Rating:
          </b>{' '}
          {movie?.rating.average}
          <br />
          <b>
            <IoLayers />
            Genres:{' '}
          </b>
          {movie?.genres.map(
            (el, i) => el + (i !== movie?.genres.length - 1 ? ', ' : '')
          )}
          <br />
          <b>
            {' '}
            <FaLanguage />
            Language:{' '}
          </b>{' '}
          {movie?.language}
          <br />
          <b>
            <BiSolidCameraMovie />
            Network:{' '}
          </b>{' '}
          {movie?.network.name}
        </p>
      </IconContext.Provider>
    </>
  );
};

export default OtherInfo;
