import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCars } from '../../redux/carSlice';
import CarItem from '../CarItem/CarItem';
import { useModal } from '../../hooks/useModal';

import Modal from '../Modal/Modal';
import CarDescription from '../CarDescription/CarDescription';
import s from './CarsList.module.css';

const CarsList = ({ cars }) => {
  const { isOpen, toggle } = useModal();
  const [content, setContent] = useState('');

  const handleOpenModal = content => {
    toggle();
    setContent(content);
  };

  return (
    <ul className={s.list}>
      {cars?.map(car => (
        <li className={s.listItem} key={car.id}>
          <CarItem
            handleOpenModal={() => handleOpenModal(car)}
            car={car}
            toggle={toggle}
            content={content}
          />
        </li>
      ))}
      {isOpen && (
        <Modal closeModal={toggle}>
          <CarDescription car={content} closeModal={toggle} />
        </Modal>
      )}
    </ul>
  );
};

export default CarsList;
