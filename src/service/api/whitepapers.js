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
const GetWhitepaperDetail = createAsyncThunk(
  'get/whitepaperDetail',
  async (slug, { rejectWithValue }) => {
    try {
      return API.get({
        url: `whitepapers/${slug}`,
      });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const DownloadWhitepaper = createAsyncThunk(
  'post/downloadWhitepaper',
  async (data, {rejectWithValue}) => {
    const {slug, formData} = data
    try {
      return API.post({
        url: `user-download/${slug}/`,
        payload: formData,
        isForm: true
      })
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const Whitepapers = {
  GetWhitepapersList,
  GetWhitepaperDetail,
  DownloadWhitepaper
};

export default Whitepapers;
