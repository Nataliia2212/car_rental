import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import NavBar from '../NavBar/NavBar';

import s from '../NavBar/NavBar.module.css';

const Layout = () => {
  return (
    <div>
      <header className={s.wrapper}>
        <div className="container">
          {' '}
          <NavBar />
        </div>
      </header>

      <Suspense fallback={<h1>Load page....</h1>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
