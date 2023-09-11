import { configureStore } from '@reduxjs/toolkit';

import loginReducer from './user';
import whitepaperReducer from './whitepapers';
import eventReducer from './event';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    whitepaper: whitepaperReducer,
    event: eventReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
