/* eslint-disable no-plusplus */
import React, { useState } from 'react';
import './scss/Pagination.scss';

export const Pagination = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedPage, setSelectedPage] = useState(1);
  const [start, setStart] = useState(1);
  const [stop, setStop] = useState(4);
  const [arrowLeftDis, setArrowLeftDis] = useState(true);
  const [arrowRightDis, setArrowRightDis] = useState(false);
  let currentPage = selectedPage;

  const handlePagination = (pageNumber: number) => {
    currentPage = pageNumber;
    // tutaj dodamy logike wyswietlajaca okreslona strone
    //  po kliknieciu w numer strony

    return currentPage;
  };
  // zamiast "8" dodamy podpiecie pod info o ilosci stron z API

  const numberOfPages = 8;

  const buttons = [];

  // eslint-disable-next-line no-plusplus
  for (let i = start; i <= stop; i++) {
    buttons.push(
      <button
        // eslint-disable-next-line max-len
        className={(isSelected && selectedPage === i) ? 'pagination_button--selected' : 'pagination_button'}
        type="button"
        key={i}
        onClick={
          () => {
            handlePagination(i);
            setSelectedPage(i);
            setIsSelected(true);
          }
        }
      >
        <p className="pagination_number">{i}</p>
      </button>,
    );
  }

  return (
    <div className="pagination">
      <button
        // eslint-disable-next-line max-len
        className={!arrowLeftDis ? 'pagination_arrow--transform' : 'pagination_arrow--transform--dis'}
        type="button"
        onClick={
          () => {
            if (start === 2) {
              setArrowLeftDis(true);
            }

            if (start > 1) {
              setStart(start - 1);
              setStop(stop - 1);
              setArrowRightDis(false);
            }
          }
        }
      >
        <p />
      </button>
      {buttons}
      <button
        // eslint-disable-next-line max-len
        className={!arrowRightDis ? 'pagination_arrow' : 'pagination_arrow--dis'}
        type="button"
        onClick={
          () => {
            if (stop === numberOfPages - 1) {
              setArrowRightDis(true);
            }

            if (stop < numberOfPages) {
              setStart(start + 1);
              setStop(stop + 1);
              setArrowLeftDis(false);
            }
          }
        }
      >
        <p />
      </button>
    </div>
  );
};
