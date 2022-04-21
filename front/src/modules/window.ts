import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { ApplicationTypes } from "../enum/applicationTypes";

export type WindowState = {
    windowName: string;
    windowType: ApplicationTypes;
    windowId: number;
    zindex: number;
}

const initialWindow: {windowList: WindowState[]} = {//, nextId: number} = {
    windowList: [],
    // nextId: 1,
}
let nextId = 1;
export const windowSlice = createSlice({
    name: 'application',
    initialState: initialWindow,
    reducers: {
        addWindow: (state, action: PayloadAction<WindowState>) => {
            state.windowList.push({...action.payload, windowId: nextId, zindex: nextId});
            ++nextId;//state.nextId;
        },
        removeWindow: (state, action: PayloadAction<number|undefined>) => {
            const clickedWindow = state.windowList.find ( el => el.windowId === action.payload);
            if (clickedWindow) {
                state.windowList = state.windowList.filter( el => el.windowId !== action.payload);
            }
        },
        moveWindow: (state, action: PayloadAction<{id: number, x: number, y: number}>) => {
            
        },
        mouseDownWindow: (state, action:PayloadAction<number>) => {
            const clickedWindow = state.windowList.find( el => el.windowId === action.payload);
            if (clickedWindow) {
                state.windowList = state.windowList.map( 
                    el => el.zindex > clickedWindow.zindex 
                    ? {...el, zindex: el.zindex-1}
                    : el
                );
                clickedWindow.zindex = nextId-1;
            }
        }
    }
})

export const {addWindow, removeWindow, mouseDownWindow, moveWindow} = windowSlice.actions;
export default windowSlice.reducer;