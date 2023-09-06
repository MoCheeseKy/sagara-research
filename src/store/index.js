import { configureStore } from '@reduxjs/toolkit';

import loginReducer from './user'

export const store = configureStore({
    reducer: {
        login: loginReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
})