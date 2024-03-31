import { createSlice } from '@reduxjs/toolkit';
import { fetchDataRentalCarThunk } from './operations';

const initialState = {
  cars: [],
  model: [],
  favorites: [],
  error: null,
  loading: false,
};

const carsSlice = createSlice({
  name: 'carRental',
  initialState,
  selectors: {
    selectCars: state => state.cars,
  },
  redusers: {
    togleFavorites: (state, { payload }) => {
      console.log(payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchDataRentalCarThunk.fulfilled, (state, { payload }) => {
      state.cars = payload;
      // state.model = payload.model;
      state.loading = false;
    });
  },
});

export const carsReducer = carsSlice.reducer;
export const { togleFavorites } = carsSlice.actions;
export const { selectCars } = carsSlice.selectors;
