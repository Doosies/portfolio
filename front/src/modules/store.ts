import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "./application";
import windowReducer from "./window";
import routeReducer from './route';
import contentsReducer from './contents';
import authReducer from './auth';

export const store = configureStore({
    reducer: {
        application: applicationReducer,
        window: windowReducer,
        route: routeReducer,
        contents: contentsReducer,
        auth: authReducer,
    }, 
    devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;