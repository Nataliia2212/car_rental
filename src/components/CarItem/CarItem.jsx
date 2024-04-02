import React from 'react';
import clsx from 'clsx';

import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites, toggleFavorites } from '../../redux/carSlice';
import s from './CarItem.module.css';
import sprite from '../../img/sprite.svg';

const CarItem = ({ car, handleOpenModal }) => {
  const address = car.address.split(', ');
  const dispatch = useDispatch();
  const favoritesCars = useSelector(selectFavorites);
  const fav = favoritesCars.find(fav => fav.id === car.id);

  const handleClick = obj => {
    dispatch(toggleFavorites(obj));
  };
  return (
    <>
      <div className={s.wrap}>
        <button onClick={() => handleClick(car)} className={s.btnHeart}>
          <svg
            width="18"
            height="18"
            className={fav ? 'btnHeartFav' : 'btnHeart'}
          >
            <use href={`${sprite}#icon-heart`}></use>
          </svg>
        </button>
        <img src={car.img} alt={car.make} className={s.imgCar} />
      </div>
      <div className={s.wrapTitle}>
        <h2 className={s.title}>
          {car.make} <span className={s.span}>{car.model}</span>, {car.year}
        </h2>{' '}
        <p>{car.rentalPrice}</p>
      </div>
      <div className={s.wrapText}>
        <p className={s.text}>{address[1]}</p>
        <p className={s.text}>{address[2]}</p>
        <p className={s.text}>{car.rentalCompany}</p>
      </div>
      <div className={s.wrapText}>
        <p className={s.text}> {car.type}</p>
        <p className={s.text}>{car.mileage}</p>
        <p className={s.text}>{car.accessories[0]}</p>
      </div>

      <button
        className={clsx('btn', s.cardBtn)}
        onClick={() => handleOpenModal(car)}
      >
        Learn more
      </button>
    </>
  );
};

export default CarItem;
