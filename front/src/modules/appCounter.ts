import { createSlice, PayloadAction} from "@reduxjs/toolkit";


type AppCounterState = {
    windowCounter: number;
    applicationCounter: number;
}

const initialAppCounter: AppCounterState = {
    windowCounter: 0,
    applicationCounter: 0,
};

export const appCounterSlice = createSlice({
    name: 'appCounter',
    initialState: initialAppCounter,
    reducers: {
        incrementWindowCounter: (state) => {++state.windowCounter},
        decrementWindowCounter: (state) => {--state.windowCounter},
        incrementApplicationCounter: (state) => {++state.applicationCounter},
        decrementApplicationCounter: (state) => {--state.applicationCounter},
    }
})


export const {
    decrementApplicationCounter, 
    decrementWindowCounter, 
    incrementApplicationCounter, 
    incrementWindowCounter
} = appCounterSlice.actions;
export default appCounterSlice.reducer;