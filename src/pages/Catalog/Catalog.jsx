import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CarsList from '../../components/CarsList/CarsList';

import s from './Catalog.module.css';

import {
  nextPage,
  prevPage,
  selectCars,
  selectLimit,
  selectPage,
  selectedPage,
} from '../../redux/carSlice';
import Filter from '../../components/Filter/Filter';

const Catalog = () => {
  const cars = useSelector(selectCars);
  const page = useSelector(selectPage);
  const limit = useSelector(selectLimit);

  const dispatch = useDispatch();

  const pageCount = Math.round(50 / limit);

  const onNextPage = () => {
    dispatch(nextPage());
  };
  const onPrevPage = () => {
    dispatch(prevPage());
  };

  const handleSelectPage = number => {
    dispatch(selectedPage(number));
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="visually-hidden">Car rental</h1>
        <Filter />
        <CarsList cars={cars} />
        <div className={s.btnWrap}>
          <button className={s.btn} disabled={page === 1} onClick={onPrevPage}>
            prev
          </button>
          {Array(pageCount)
            .fill('')
            .map((_, index) => (
              <button
                onClick={() => handleSelectPage(index + 1)}
                key={index}
                className={s.btn}
              >
                {index + 1}
              </button>
            ))}
          <button
            className={s.btn}
            disabled={page === pageCount}
            onClick={onNextPage}
          >
            next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
