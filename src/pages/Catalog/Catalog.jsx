import React from 'react';
import CarsList from '../../components/CarsList/CarsList';
import { useDispatch, useSelector } from 'react-redux';
import { loadMore, selectCars } from '../../redux/carSlice';
import Filter from '../../components/Filter/Filter';

const Catalog = () => {
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(loadMore());
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="visually-hidden">Car rental</h1>
        <Filter />
        <CarsList cars={cars} />
        <button onClick={handleClick}>Load more</button>
      </div>
    </section>
  );
};

export default Catalog;
