import { combineReducers } from "redux";
import application from './application';
import window from './window'

const rootReducer = combineReducers({
    application,
    window,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;