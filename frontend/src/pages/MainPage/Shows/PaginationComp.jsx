import React, { useContext } from 'react';
import ReactPaginate from 'react-paginate';
import { pageContext } from '../../../context/PageContext';
import { pageCountContext } from '../../../context/PageCountContext';

const PaginationComp = () => {
  const { setPage } = useContext(pageContext);
  const { pageCount } = useContext(pageCountContext);
  const pageChangeHandler = (e) => {
    setPage(e.selected + 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <>
      <ReactPaginate
        onPageChange={pageChangeHandler}
        pageCount={pageCount}
        breakLabel="..."
        nextLabel="next >"
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination justify-content-center px-3 pg"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        activeClassName="active"
      />
    </>
  );
};

export default PaginationComp;
