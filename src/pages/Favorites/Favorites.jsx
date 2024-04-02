import React from 'react';
import { useSelector } from 'react-redux';

import CarsList from '../../components/CarsList/CarsList';

import { selectFavorites } from '../../redux/carSlice';

const Favorites = () => {
  const favoritesCars = useSelector(selectFavorites);

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
