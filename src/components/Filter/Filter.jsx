import React from 'react';

import css from './Filter.module.css';
import makes from '../../data/make.json';

export default function Filter() {
  return (
    <div className={css.wrap}>
      <label></label>
      <select name="makeCars">
        {makes.map(make => (
          <option value={make} key={make}>
            {make}
          </option>
        ))}
      </select>
    </div>
  );
}
