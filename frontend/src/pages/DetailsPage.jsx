import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import getShow from './../utils/getShow';
import { useParams } from 'react-router-dom';
import ShowCard from './DetailsPage/ShowCard';
import ShowInfo from './DetailsPage/ShowInfo';

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
        <Row className="py-3">
          <ShowCard movie={movie} />
          <ShowInfo movie={movie} />
        </Row>
      </Container>
    </>
  );
};

export default DetailsPage;
