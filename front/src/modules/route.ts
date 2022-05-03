import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum RoutePages {'Main', 'SignIn', 'SignUp', 'Edit', 'Contents'};
type RouteState = {
        nowRoute: RoutePages;
        nowPage: number;
        windowId: number;
}

const initialRouteState: RouteState[] = [];

const routeSlice = createSlice({
    name: 'route',
    initialState: initialRouteState,
    reducers: {
        addRouteWindow: (state: RouteState[], action: PayloadAction<{route: RoutePages, windowId: number}>) => {
            state.push({
                nowPage: 1,
                nowRoute: action.payload.route,
                windowId: action.payload.windowId,  
            })
        },
        removeRouteWindow: (state: RouteState[], action: PayloadAction<number>) => {
            return state.filter(el => el.windowId !== action.payload);
        }
        ,
        changeRoute: (state: RouteState[], action: PayloadAction<{route: RoutePages, windowId: number}>) => {
            const nowApp = state.find( el => el.windowId === action.payload.windowId);
            if (nowApp)
                nowApp.nowRoute = action.payload.route;
        },
        changePage: (state: RouteState[], action: PayloadAction<{page: number, windowId: number}>) => {
            const nowApp = state.find( el => el.windowId === action.payload.windowId);
            if (nowApp) 
                nowApp.nowPage = action.payload.page;
        },
    }
});


export const {addRouteWindow, removeRouteWindow, changeRoute, changePage} = routeSlice.actions;
export default routeSlice.reducer;