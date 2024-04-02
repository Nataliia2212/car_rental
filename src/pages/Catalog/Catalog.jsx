import React from 'react';
import CarsList from '../../components/CarsList/CarsList';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadMore,
  nextPage,
  prevPage,
  selectCars,
  selectLimit,
  selectPage,
  selectParams,
  selectSkip,
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
    console.log(number);
    dispatch(selectedPage(number));
  };

  // const handleClick = () => {
  //   dispatch(loadMore());
  // };

  return (
    <section className="section">
      <div className="container">
        <h1 className="visually-hidden">Car rental</h1>
        <Filter />
        <CarsList cars={cars} />
        {/* <button onClick={handleClick}>Load more</button> */}
        <div>
          <button disabled={page === 1} onClick={onPrevPage}>
            prev
          </button>
          {Array(pageCount)
            .fill('')
            .map((_, index) => (
              <button onClick={() => handleSelectPage(index + 1)} key={index}>
                {index + 1}
              </button>
            ))}
          <button disabled={page === pageCount} onClick={onNextPage}>
            next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
