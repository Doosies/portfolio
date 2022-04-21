import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "./application";

export const store = configureStore({
    reducer: {
        application: applicationReducer,
    }, 
    devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;