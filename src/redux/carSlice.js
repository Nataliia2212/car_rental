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
  skip: 0,
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
    selectSkip: state => state.skip,
    selectPage: state => state.params.page,
    selectLimit: state => state.params.limit,
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
    nextPage: state => {
      state.params.page = state.params.page + 1;
    },
    prevPage: state => {
      console.log(state.params.page);
      state.params.page = state.params.page - 1;
    },
    selectedPage: (state, { payload }) => {
      state.params.page = payload;
      console.log(payload);
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
export const {
  toggleFavorites,
  loadMore,
  refresh,
  nextPage,
  prevPage,
  selectedPage,
} = carsSlice.actions;
export const {
  selectCars,
  selectFavorites,
  selectMakeCars,
  selectRentalPrice,
  selectParams,
  selectSkip,
  selectPage,
  selectLimit,
} = carsSlice.selectors;
