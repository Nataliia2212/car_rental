import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={s.wrapper}>
      <NavLink to="/" className="link">
        Home
      </NavLink>

      <NavLink to="/catalog" className="link">
        Car rental
      </NavLink>

      <NavLink to="/favorites" className="link">
        Favorites
      </NavLink>
    </nav>
  );
};

export default NavBar;
