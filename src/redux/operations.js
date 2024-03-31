import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65e78ac853d564627a8efc70.mockapi.io/';

export const fetchDataRentalCarThunk = createAsyncThunk(
  'fetchDataRentalCar',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('adverts');
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
