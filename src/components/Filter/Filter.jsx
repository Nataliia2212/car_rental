import React from 'react';

import s from './Filter.module.css';
import makes from '../../data/make.json';
import { useDispatch, useSelector } from 'react-redux';
import { filter, reset, selectParams } from '../../redux/carSlice';
import { fetchDataRentalCarThunk } from '../../redux/operations';

export default function Filter() {
  const dispatch = useDispatch();
  const params = useSelector(selectParams);
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(filter(e.currentTarget.makeCars.value));
    dispatch(fetchDataRentalCarThunk(params));
  };
  return (
    <div className={s.wrap}>
      <form onSubmit={handleSubmit}>
        <label></label>
        <select name="makeCars" className={s.select}>
          {makes?.map(make => (
            <option value={make} key={make}>
              {make}
            </option>
          ))}
        </select>
        <button className="btn" type="submit">
          Search
        </button>
      </form>
      <button className="btn" onClick={() => dispatch(reset())}>
        Reset
      </button>
    </div>
  );
}
