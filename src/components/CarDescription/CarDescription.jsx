import React from 'react';

import s from './CarDescription.module.css';

const CarDescription = ({ car }) => {
  const address = car.address.split(', ');
  const rentalConditions = car.rentalConditions.split('\n');

  return (
    <div>
      <img src={car.img} alt={car.make} className={s.imgCar} />
      <h2 className={s.title}>
        {car.make}{' '}
        <span className={s.span}>
          {car.model}, {car.year}
        </span>
      </h2>{' '}
      <div className={s.wrapText}>
        {' '}
        <p className={s.text}>{address[1]}</p>
        <p className={s.text}>{address[2]}</p>
        <p className={s.text}>Id: {car.id}</p>
        <p className={s.text}>Year: {car.year}</p>
        <p className={s.text}> {car.type}</p>
      </div>
      <div className={s.wrapText}>
        <p className={s.text}>Fuel Consumption: {car.fuelConsumption}</p>
        <p className={s.text}>Engine Size: {car.engineSize}</p>
      </div>
      <p className={s.description}>{car.description}</p>
      <h3 className={s.subTitle}>Accessories and functionalities:</h3>
      <div className={s.wrapText}>
        {car.accessories.map(accessory => (
          <p key={accessory} className={s.text}>
            {accessory}
          </p>
        ))}
      </div>
      <div className={s.wrapText}>
        {car.functionalities.map(functionality => (
          <p key={functionality} className={s.text}>
            {functionality}
          </p>
        ))}
      </div>
      <h3 className={s.subTitle}>Rental Conditions: </h3>
      <div className={s.wrapText}>
        {rentalConditions.map(rentalCondition => (
          <p key={rentalCondition} className={s.textOption}>
            {rentalCondition}
          </p>
        ))}
        <p className={s.textOption}>Mileage: {car.mileage}</p>{' '}
        <p className={s.textOption}>Price: {car.rentalPrice}</p>
      </div>
      <button className="btn">Rental car</button>
    </div>
  );
};

export default CarDescription;
