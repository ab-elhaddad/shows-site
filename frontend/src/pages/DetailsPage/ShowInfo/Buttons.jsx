import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Buttons = ({ link }) => {
  return (
    <>
      <Row className="mt-5">
        <Col sm="6" className="d-flex justify-content-center">
          <Link to={'/'}>
            <button
              className="btn btn-dark mv-btn"
              style={{ backgroundColor: 'var(--dark-color)' }}
            >
              {' '}
              Go to Home
            </button>
          </Link>
        </Col>
        <Col sm="6" className="d-flex justify-content-center">
          <Link to={link}>
            <button className="btn btn-primary mv-btn">Watch </button>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default Buttons;
