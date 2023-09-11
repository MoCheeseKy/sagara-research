import { createSlice } from '@reduxjs/toolkit';
import { Event } from '../../service';

const initialState = {
  loading: false,
  upcomingEvent: [],
};

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(Event.GetUpcomingEvent.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(Event.GetUpcomingEvent.fulfilled, (state, action) => {
      state.loading = false;
      state.upcomingEvent = action.payload.data;
    });
    builder.addCase(Event.GetUpcomingEvent.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default eventSlice.reducer;
