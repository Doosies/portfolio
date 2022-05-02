import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "./application";
import windowReducer from "./window";
import routeReducer from './route'

export const store = configureStore({
    reducer: {
        application: applicationReducer,
        window: windowReducer,
        route: routeReducer,
        
    }, 
    devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;