import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../helper/api';

const GetUpcomingEvent = createAsyncThunk(
  'get/upcomingEvent',
  async (payload, { rejectWithValue }) => {
    try {
      return await API.get({
        url: 'upcoming_event',
        payload,
      });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const Event = {
    GetUpcomingEvent
}

export default Event
