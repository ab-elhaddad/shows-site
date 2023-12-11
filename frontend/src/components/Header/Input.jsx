import React, { useContext, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { ShowsContext } from '../../context/ShowsContext';
import { searchContext } from '../../context/SearchContext';
import getShows from './../../utils/getShows';

const Input = () => {
  const { setShows } = useContext(ShowsContext);
  const { search, setSearch } = useContext(searchContext);
  const searchHandler = (e) => {
    const word = e.target.value;
    setSearch(word);
  };
  useEffect(() => {
    async function getSearchShows() {
      const data = await getShows(1, search);
      setShows(data);
    }
    getSearchShows();
  }, [search, setShows]);
  return (
    <>
      <Navbar.Collapse id="navbarScroll" className="d-flex justify-content-end">
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-5 srch-bar"
            onChange={searchHandler}
          />
        </Form>
      </Navbar.Collapse>
    </>
  );
};

export default Input;
