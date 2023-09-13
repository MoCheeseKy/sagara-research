import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../helper/api';

const GetWhitepapersList = createAsyncThunk(
  'get/whitepapersList',
  async (payload, { rejectWithValue }) => {
    const { search, page } = payload;
    try {
      return API.get({
        url: `whitepapers/?page_size=5&page=${page}&search=${search}`,
      });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const GetRecentWhitepapersList = createAsyncThunk(
  'get/recentWhitepapersList',
  async (payload, { rejectWithValue }) => {
    try {
      return API.get({
        url: `whitepapers/?latest=true`,
      });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const GetPopularWhitepapersList = createAsyncThunk(
  'get/popularWhitepapersList',
  async (payload, { rejectWithValue }) => {
    try {
      return API.get({
        url: `whitepapers/?latest=true`,
      });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const GetHighlightWhitepaper = createAsyncThunk(
  'get/highlightWhitepapersList',
  async (payload, { rejectWithValue }) => {
    try {
      return API.get({
        url: `whitepapers/?is_insight=true`,
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
        url: `whitepapers/${slug}/`,
      });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const DownloadWhitepaper = createAsyncThunk(
  'post/downloadWhitepaper',
  async (data, { rejectWithValue }) => {
    const { slug, formData } = data;
    try {
      return API.post({
        url: `user-download/${slug}/`,
        payload: formData,
        isForm: true,
      });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const Whitepapers = {
  GetWhitepapersList,
  GetRecentWhitepapersList,
  GetPopularWhitepapersList,
  GetHighlightWhitepaper,
  GetWhitepaperDetail,
  DownloadWhitepaper,
};

export default Whitepapers;
