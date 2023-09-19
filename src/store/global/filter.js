import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  author: '',
  topic: '',
  language: '',
};

export const filterSlicer = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    searchHandler: (state, action) => {
      state.search = action.payload;
    },
    authorHandler: (state, action) => {
      state.author = action.payload;
    },
    topicHandler: (state, action) => {
      state.topic = action.payload;
    },
    languageHandler: (state, action) => {
      state.language = action.payload;
    },
    resetFilter: (state) => {
      state.search = '';
      state.author = '';
      state.topic = '';
      state.language = '';
    },
  },
});

export const {
  searchHandler,
  authorHandler,
  topicHandler,
  languageHandler,
  resetFilter,
} = filterSlicer.actions;

export default filterSlicer.reducer;
