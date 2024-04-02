import React from 'react';

import css from './Filter.module.css';
import makes from '../../data/make.json';
import { useDispatch, useSelector } from 'react-redux';
import { selectParams } from '../../redux/carSlice';
import { fetchDataRentalCarThunk } from '../../redux/operations';

export default function Filter() {
  const dispatch = useDispatch();
  const params = useSelector(selectParams);
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.value);
    dispatch(fetchDataRentalCarThunk(params));
  };
  return (
    <form className={css.wrap} onSubmit={handleSubmit}>
      <label></label>
      <select name="makeCars">
        {makes?.map(make => (
          <option value={make} key={make}>
            {make}
          </option>
        ))}
      </select>
      <button>Search</button>
    </form>
  );
}
