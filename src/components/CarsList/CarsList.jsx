import React from 'react';
import { useSelector } from 'react-redux';
import { selectCars } from '../../redux/carSlice';
import CarItem from '../CarItem/CarItem';
import { useModal } from '../../hooks/useModal';

import Modal from '../Modal/Modal';
import CarDescription from '../CarDescription/CarDescription';

const CarsList = () => {
  const { isOpen, toggle } = useModal();
  const cars = useSelector(selectCars);
  const content = 'dfghjklkjhgfdfghjk';
  return (
    <ul>
      {cars.map(car => (
        <CarItem key={car.id} {...car} />
      ))}
      {isOpen && (
        <Modal closeModal={toggle}>
          <CarDescription content={content} toggle={toggle} />
        </Modal>
      )}
    </ul>
  );
};

export default CarsList;
