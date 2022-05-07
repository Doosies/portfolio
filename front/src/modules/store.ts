import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import applicationReducer from "./application";
import windowReducer from "./window";
import routeReducer from './route';
import contentsReducer from './contents';
import authReducer from './auth';
import boardReducer from './board'

export const store = configureStore({
    reducer: {
        application: applicationReducer,
        window: windowReducer,
        route: routeReducer,
        contents: contentsReducer,
        auth: authReducer,
        board: boardReducer,
    }, 
    // middleware: [thunk],
    devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;