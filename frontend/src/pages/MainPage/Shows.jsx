import React, { useContext, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import ShowCard from './Shows/ShowCard.jsx';
import { ShowsContext } from '../../context/ShowsContext.jsx';
import getShows from '../../utils/getShows.js';
import NoShows from './Shows/NoShows.jsx';
import { pageContext } from '../../context/PageContext.jsx';
import { searchContext } from '../../context/SearchContext.jsx';
import { pageCountContext } from '../../context/PageCountContext.jsx';
import { categoriesContext } from './../../context/CategoriesContext';
import extractCategories from '../../utils/extractCategories.js';
import getCategory from './../../utils/getCategory';

const Shows = () => {
  const { shows, setShows } = useContext(ShowsContext);
  const { page } = useContext(pageContext);
  const { search } = useContext(searchContext);
  const { setPageCount } = useContext(pageCountContext);
  const { setCategories, currCategory } = useContext(categoriesContext);
  useEffect(() => {
    async function setShowsHandler() {
      if (currCategory === 'All') {
        const { data, cnt } = await getShows(page, search);
        const categories = extractCategories(data);
        setCategories(categories);
        setPageCount(cnt);
        setShows(data);
      } else {
        const { data, cnt } = await getCategory(page, currCategory);
        setCategories([currCategory]);
        setPageCount(cnt);
        setShows(data);
      }
    }
    setShowsHandler();
  }, [setShows, setPageCount, setCategories, page, search, currCategory]);
  return (
    <>
      <Container className="my-3">
        <Row>
          {
            shows.length ? ( // The data returned containing shows to display
              shows.map((movie) =>
                movie ? <ShowCard movie={movie} key={movie.id} /> : null
              )
            ) : shows.length === 0 ? ( // The data returned with 0 shows
              <NoShows />
            ) : null // No data returned at all [Promise pending]
          }
        </Row>
      </Container>
    </>
  );
};

export default Shows;
