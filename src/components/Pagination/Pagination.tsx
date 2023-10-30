import React from 'react';
// import ReactPaginate from 'react-paginate';
import './scss/Pagination.scss';

export const Pagination = () => {
  const handlePagination = (pageNumber: number) => {
    // eslint-disable-next-line no-console
    console.log('logika paginacji', pageNumber);
  };

  const pages = 4;

  const buttons = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= pages; i++) {
    buttons.push(
      <button
        className="pagination_button"
        type="button"
        key={i}
        onClick={() => handlePagination(i)}
      >
        <p className="pagination_number">{i}</p>
      </button>,
    );
  }

  return (
    <div className="pagination">
      <button className="pagination_arrow--transform" type="button">
        <p />
      </button>
      {buttons}
      <button className="pagination_arrow" type="button">
        <p />
      </button>
    </div>
  );
};
