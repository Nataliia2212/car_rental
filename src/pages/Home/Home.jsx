import React from 'react';
import sprite from '../../img/sprite.svg';
import s from './Home.module.css';
import clsx from 'clsx';

const Home = () => {
  return (
    <section className={clsx('section', s.homeSection)}>
      <div className="container">
        <h1 className={s.title}>Car rental</h1>
        <h2 className={s.subTitle}>Why us?</h2>
        <ul className={clsx('list', s.listAdvantages)}>
          <li className={s.listItem}>
            <div className={s.wrapIcon}>
              <svg width="76" height="76">
                <use href={`${sprite}#icon-diversity`}></use>
              </svg>
            </div>
            <h3>Great selection</h3>
            <p>
              With us, you'll always find the perfect car for your trip thanks
              to offers from 800 rental companies.
            </p>
          </li>
          <li className={s.listItem}>
            <div className={s.wrapIcon}>
              <svg width="76" height="76">
                <use href={`${sprite}#icon-discount`}></use>
              </svg>
            </div>
            <h3>Quality at an affordable price</h3>
            <p>
              We offer our customers the best car rental prices thanks to
              discounts provided by rental companies.
            </p>
          </li>
          <li className={s.listItem}>
            <div className={s.wrapIcon}>
              <svg width="76" height="76">
                <use href={`${sprite}#icon-cup`}></use>
              </svg>
            </div>
            <h3>Experience and professionalism</h3>
            <p>
              With over a decade in the market, we are one of the most
              experienced and reliable experts in the car rental industry.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Home;
