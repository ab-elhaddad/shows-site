import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { BiSolidCameraMovie } from 'react-icons/bi';

const ShowCard = ({ movie }) => {
  const { image, name, rating, network } = movie;
  return (
    <>
      <Col sm="3" className="my-1 main-card" style={{ position: 'relative' }}>
        <Link to={`/movie/${movie?.id}`}>
          <img
            src={image.original}
            className="movie-card"
            alt="Show's poster"
          />
          <div className="text-overlay">
            <p className="mov-title">{name}</p>
            <div className="mov-info-container">
              <p className="mov-info">
                <FaStar className="icn" />: {rating?.average}
              </p>
              <p className="mov-info">
                <BiSolidCameraMovie className="icn" />: {network?.name}
              </p>
            </div>
          </div>
        </Link>
      </Col>
    </>
  );
};

export default ShowCard;
