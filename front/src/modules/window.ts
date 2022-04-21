import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { ApplicationTypes } from "../enum/applicationTypes";

export type WindowState = {
    windowName: string;
    windowType: ApplicationTypes;
    windowId?: number;
    position: {x: number, y: number},
}

const initialWindow: {windowList: WindowState[], windowCounter: number} = {
    windowList: [],
    windowCounter: 0,
}

export const windowSlice = createSlice({
    name: 'application',
    initialState: initialWindow,
    reducers: {
        addWindow: (state, action: PayloadAction<WindowState>) => {
            state.windowList.push({...action.payload, windowId: state.windowCounter});
            ++state.windowCounter;
        },
        removeWindow: (state, action: PayloadAction<number>) => {
            state.windowList.filter( el => el.windowId !== action.payload);
            --state.windowCounter;
        },
        moveWindow: (state, action: PayloadAction<{id: number, x: number, y: number}>) => {
            const window = state.windowList.find( el => el.windowId === action.payload.id);
            if (window) {
                window.position = action.payload;
            }
        }
    }
})

export const {addWindow, removeWindow} = windowSlice.actions;
export default windowSlice.reducer;