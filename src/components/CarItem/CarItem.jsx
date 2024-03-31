import React from 'react';

const CarItem = ({
  img,
  make,
  model,
  year,
  rentalPrice,
  address,
  rentalCompany,
  type,
  mileage,
  functionalities,
  toggle,
}) => {
  return (
    <div>
      <img src={img} alt="" width={100} />
      <h2>
        {make}{' '}
        <span>
          {model}, {year}
        </span>
      </h2>{' '}
      <p>{rentalPrice}</p>
      <p>{address}</p>
      <p>{rentalCompany}</p>
      <p> {type}</p> <p></p> <p>{mileage}</p> <p>{functionalities[0]}</p>
      <button onClick={toggle()}>Learn more</button>
    </div>
  );
};

export default CarItem;
