import { createSlice } from '@reduxjs/toolkit';
import { Whitepapers } from '../../service';

const initialState = {
  whitepapersList: [],
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
