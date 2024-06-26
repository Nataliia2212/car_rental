import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import Favorites from './pages/Favorites/Favorites';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataRentalCarThunk } from './redux/operations';
import { selectLoading, selectParams } from './redux/carSlice';
import { Preloader } from './components/Preloader/Preloader';

export default function App() {
  const dispatch = useDispatch();
  const params = useSelector(selectParams);
  const isLoading = useSelector(selectLoading);
  useEffect(() => {
    dispatch(fetchDataRentalCarThunk(params));
  }, [dispatch, params]);

  return isLoading ? (
    <Preloader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
