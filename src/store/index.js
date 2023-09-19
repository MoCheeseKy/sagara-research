import { configureStore } from '@reduxjs/toolkit';

import loginReducer from './user';
import whitepaperReducer from './whitepapers';
import eventReducer from './event';
import filterReducer from './global/filter';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    whitepaper: whitepaperReducer,
    event: eventReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
