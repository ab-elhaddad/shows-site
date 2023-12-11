import React from 'react';
import { Col } from 'react-bootstrap';

const ShowCard = ({ movie }) => {
  return (
    <>
      <Col sm="4">
        <img
          src={movie?.image.original}
          alt="Show's poster"
          className="mv-img"
        />
      </Col>
    </>
  );
};

export default ShowCard;
