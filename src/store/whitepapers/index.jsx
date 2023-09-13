import { createSlice } from '@reduxjs/toolkit';
import { Whitepapers } from '../../service';

const initialState = {
  whitepapersList: [],
  recentWhitepaperList: [],
  popularWhitepaperList: [],
  highlightWhitepaperList: [],
  whitepapersDetail: [],
  loading: false,
};

export const whitepaperSlice = createSlice({
  name: 'whitepapers',
  initialState,
  extraReducers: (builder) => {
    // Get List
    builder.addCase(Whitepapers.GetWhitepapersList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      Whitepapers.GetWhitepapersList.fulfilled,
      (state, action) => {
        state.loading = false;
        state.whitepapersList = action.payload.data;
      }
    );
    builder.addCase(Whitepapers.GetWhitepapersList.rejected, (state) => {
      state.loading = false;
    });

    // Get Recent List
    builder.addCase(Whitepapers.GetRecentWhitepapersList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      Whitepapers.GetRecentWhitepapersList.fulfilled,
      (state, action) => {
        state.loading = false;
        state.recentWhitepaperList = action.payload.data;
      }
    );
    builder.addCase(Whitepapers.GetRecentWhitepapersList.rejected, (state) => {
      state.loading = false;
    });

    // Get Popular List
    builder.addCase(Whitepapers.GetPopularWhitepapersList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      Whitepapers.GetPopularWhitepapersList.fulfilled,
      (state, action) => {
        state.loading = false;
        state.popularWhitepaperList = action.payload.data;
      }
    );
    builder.addCase(Whitepapers.GetPopularWhitepapersList.rejected, (state) => {
      state.loading = false;
    });

    // Get Highlight List
    builder.addCase(Whitepapers.GetHighlightWhitepaper.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      Whitepapers.GetHighlightWhitepaper.fulfilled,
      (state, action) => {
        state.loading = false;
        state.highlightWhitepaperList = action.payload.data;
      }
    );
    builder.addCase(Whitepapers.GetHighlightWhitepaper.rejected, (state) => {
      state.loading = false;
    });

    // Get Detail
    builder.addCase(Whitepapers.GetWhitepaperDetail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      Whitepapers.GetWhitepaperDetail.fulfilled,
      (state, action) => {
        state.loading = false;
        state.whitepapersDetail = action.payload.data;
      }
    );
    builder.addCase(Whitepapers.GetWhitepaperDetail.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default whitepaperSlice.reducer;
