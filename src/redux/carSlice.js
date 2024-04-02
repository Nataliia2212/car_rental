import { createSlice } from '@reduxjs/toolkit';
import { fetchDataRentalCarThunk } from './operations';

const initialState = {
  cars: [],
  model: [],
  favorites: [],
  filter: {
    make: [],
    rentalPrice: [],
  },
  params: {
    page: 1,
    limit: 12,
  },
  error: null,
  loading: false,
  refresh: false,
};

const carsSlice = createSlice({
  name: 'carRental',
  initialState,
  selectors: {
    selectCars: state => state.cars,
    selectFavorites: state => state.favorites,
    selectMakeCars: state => state.filter.make,
    selectRentalPrice: state => state.filter.rentalPrice,
    selectParams: state => state.params,
  },
  reducers: {
    toggleFavorites: (state, { payload }) => {
      const carIndex = state.favorites.findIndex(
        favorite => favorite.id === payload.id
      );
      if (carIndex > -1) {
        state.favorites.splice(carIndex, 1);
      } else {
        state.favorites.push(payload);
      }
    },
    loadMore: state => {
      state.params.page += 1;
    },
    refresh: state => {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchDataRentalCarThunk.fulfilled, (state, { payload }) => {
      state.cars = payload;
      state.filter.make = payload.map(car => car.make);
      state.filter.rentalPrice = payload.map(car => car.rentalPrice);

      state.loading = false;
    });
    // .addCase(refreshThunk.fulfilled, (state, { payload }) => {

    //   state.loading = false;
    //   return initialState
    // });
  },
});

export const carsReducer = carsSlice.reducer;
export const { toggleFavorites, loadMore, refresh } = carsSlice.actions;
export const {
  selectCars,
  selectFavorites,
  selectMakeCars,
  selectRentalPrice,
  selectParams,
} = carsSlice.selectors;
