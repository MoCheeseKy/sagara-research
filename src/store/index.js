import { configureStore } from '@reduxjs/toolkit';

import loginReducer from './user';
import whitepaperReducer from './whitepapers';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    whitepaper: whitepaperReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
