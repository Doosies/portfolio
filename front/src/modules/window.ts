import { createSlice, PayloadAction} from "@reduxjs/toolkit";

type WindowState = {
    windowName: string;
    windowType: string;
    windowKey: string;
    nowPosition: {x: number, y: number},
    clickStartPosition: {x: number, y: number},
}

const initialWindow: WindowState[] = [];

export const windowSlice = createSlice({
    name: 'application',
    initialState: initialWindow,
    reducers: {
        addWindow: (state, action: PayloadAction<WindowState>) => {
            state.push(action.payload);
        },
        removeWindow: (state, action: PayloadAction<string>) => {
            state.filter( el => el.windowKey !== action.payload);
        }
    }
})

export const {addWindow, removeWindow} = windowSlice.actions;
export default windowSlice.reducer;