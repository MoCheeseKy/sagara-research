import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../helper/api';

const GetWhitepapersList = createAsyncThunk(
  'get/whitepapersList',
  async (payload, { rejectWithValue }) => {
    const {
      search,
      page,
      author,
      theme,
      ordering,
      publish_date_after,
      publish_date_before
    } = payload;
    try {
      return API.get({
        url: `whitepapers/?page_size=5&page=${page}&search=${search}&author=${author}&theme=${theme}&ordering=${ordering}&publish_date_before=${publish_date_before}&publish_date_after=${publish_date_after}`,
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
        url: `whitepapers/?latest=true?sort=`,
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
        url: `whitepapers/?top_downloads=true`,
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
