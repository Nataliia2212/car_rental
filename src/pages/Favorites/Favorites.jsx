import React, { useEffect, useState } from 'react';
import { selectFavorites } from '../../redux/carSlice';
import { useSelector } from 'react-redux';
import { useModal } from '../../hooks/useModal';
import CarItem from '../../components/CarItem/CarItem';
import CarsList from '../../components/CarsList/CarsList';

const Favorites = () => {
  const favoritesCars = useSelector(selectFavorites);

  // useEffect(() => {}, [favoritesCars]);

  return (
    <section className="section">
      <div className="container">
        {favoritesCars.length > 0 ? (
          <CarsList cars={favoritesCars} />
        ) : (
          <h2>Your list of selected cars is empty </h2>
        )}
      </div>
    </section>
  );
};

export default Favorites;
