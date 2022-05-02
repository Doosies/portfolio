import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type routeState = {
    nowRoute: string;
    nowPage: number;
}

const initialRouteState = {
    // prevPage: 'main',
    nowRoute: 'main',
    nowPage: 1, 
}

const routeSlice = createSlice({
    name: 'route',
    initialState: initialRouteState,
    reducers: {
        changeRoute: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                nowRoute: action.payload,
            };
        },
        changePage: (state, action: PayloadAction<number>) => {
            return {
                ...state,
                nowPage: action.payload,
            };
        },
    }
});


export const {changeRoute} = routeSlice.actions;
export default routeSlice.reducer;