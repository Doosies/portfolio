import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "./application";
import windowReducer from "./window";
import appCounter from './appCounter'

export const store = configureStore({
    reducer: {
        application: applicationReducer,
        window: windowReducer,
        appCounter: appCounter,
    }, 
    devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;