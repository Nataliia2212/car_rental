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
    make: null,
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
    selectPage: state => state.params.page,
    selectLimit: state => state.params.limit,
    selectLoading: state => state.loading,
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
    filter: (state, { payload }) => {
      state.params.make = payload;
    },
    nextPage: state => {
      state.params.page = state.params.page + 1;
    },
    prevPage: state => {
      state.params.page = state.params.page - 1;
    },
    selectedPage: (state, { payload }) => {
      state.params.page = payload;
    },
    reset: state => {
      state.params = {
        page: 1,
        limit: 12,
        make: null,
      };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchDataRentalCarThunk.fulfilled, (state, { payload }) => {
        state.cars = payload;
        state.filter.make = payload.map(car => car.make);
        state.filter.rentalPrice = payload.map(car => car.rentalPrice);

        state.loading = false;
      })
      .addCase(fetchDataRentalCarThunk.pending, (state, { payload }) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchDataRentalCarThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      });
  },
});

export const carsReducer = carsSlice.reducer;
export const {
  toggleFavorites,
  nextPage,
  prevPage,
  selectedPage,
  filter,
  reset,
} = carsSlice.actions;
export const {
  selectCars,
  selectFavorites,
  selectMakeCars,
  selectRentalPrice,
  selectParams,
  selectPage,
  selectLimit,
  selectLoading,
} = carsSlice.selectors;
