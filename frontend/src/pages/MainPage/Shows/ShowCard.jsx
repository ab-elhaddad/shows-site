import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { BiSolidCameraMovie } from 'react-icons/bi';
import SmLoadingSpinner from './../../../components/SmLoadingSpinner';

const ShowCard = ({ movie }) => {
  const { image, name, rating, network } = movie;
  const [imgLoading, setImgLoading] = useState(true);
  const handleImgLoading = () => {
    setImgLoading(false);
  };
  return (
    <>
      <Col sm="3" className="my-1 main-card" style={{ position: 'relative' }}>
        <Link to={`/movie/${movie?.id}`}>
          <img
            src={image.original}
            className="movie-card"
            alt="Show's poster"
            onLoad={handleImgLoading}
          />
          <div className="text-overlay">
            {!imgLoading ? (
              <div className="text-overlay-info">
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
            ) : (
              <div className="sm-spinner-container">
                <SmLoadingSpinner />
              </div>
            )}
          </div>
        </Link>
      </Col>
    </>
  );
};

export default ShowCard;
