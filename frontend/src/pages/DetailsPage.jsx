import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import getShow from './../utils/getShow';
import { useParams } from 'react-router-dom';
import ShowCard from './DetailsPage/ShowCard';
import ShowInfo from './DetailsPage/ShowInfo';
import LoadingSpinner from './../components/LoadingSpinner';

const DetailsPage = () => {
  const { id } = useParams();
  const [movie, setShow] = useState();
  useEffect(() => {
    async function setShowHandler() {
      const data = await getShow(id);
      setShow(data);
    }
    setShowHandler();
  }, [id]);
  return (
    <>
      <Container>
        {movie ? (
          <Row className="py-3">
            <Col sm={4}>
              <ShowCard movie={movie} />
            </Col>
            <Col sm={1}></Col>
            <Col sm={7}>
              <ShowInfo movie={movie} />
            </Col>
          </Row>
        ) : (
          <LoadingSpinner />
        )}
      </Container>
    </>
  );
};

export default DetailsPage;
