import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../helper/api';

const GetWhitepapersList = createAsyncThunk(
  'get/whitepapersList',
  async (payload, { rejectWithValue }) => {
    try {
      return API.get({
        url: `whitepapers/`,
        payload,
      });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const Whitepapers = {
  GetWhitepapersList,
};

export default Whitepapers;
