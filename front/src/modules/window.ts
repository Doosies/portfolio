import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { ApplicationTypes } from "../enum/applicationTypes";

export type WindowState = {
    windowName: string;
    windowType: ApplicationTypes;
    windowId: number;
    zindex: number;
    isActive: boolean;
    animationPosition: {x: number, y: number};
}

const initialWindow: {windowList: WindowState[], activeWindowName: string, nextId: number} = {
    windowList: [],
    activeWindowName: '탐색기',
    nextId: 1,
}
// let nextId = 1;
export const windowSlice = createSlice({
    name: 'application',
    initialState: initialWindow,
    reducers: {
        addWindow: (state, action: PayloadAction<WindowState>) => {
            // 모든 리스트의 isActive를 false로 바꿔줌
            state.windowList = state.windowList.map( el => ({
                ...el,
                isActive: false,
            }))
            // 그 후에 새로운 window를 추가해줌
            .concat({...action.payload, windowId: state.nextId, zindex: state.nextId});
            state.activeWindowName = action.payload.windowName;
            ++state.nextId;

        },
        removeWindow: (state, action: PayloadAction<number|undefined>) => {
            const clickedWindow = state.windowList.find ( el => el.windowId === action.payload);
            if (clickedWindow) {
                state.windowList = state.windowList.filter( el => el.windowId !== action.payload);
            }
            --state.nextId;
            state.activeWindowName = "탐색기";
        },
        moveWindow: (state, action: PayloadAction<{id: number, x: number, y: number}>) => {
            
        },
        mouseDownWindow: (state, action:PayloadAction<number>) => {
            const clickedWindow = state.windowList.find( el => el.windowId === action.payload);
            if (clickedWindow) {
                state.windowList = state.windowList.map( el =>
                    ({
                        ...el,
                        isActive: el.windowId === action.payload ? true : false,
                        zindex: 
                            // 리스트의 zindex가 클릭한 zindex보다 크면 -1해줌
                            el.zindex > clickedWindow.zindex ? el.zindex - 1 :
                            // 만약 리스트의 id가 클릭한 id라면 zindex를 제일 위로 올려줌
                            el.windowId === clickedWindow.windowId ? state.nextId -1 : el.zindex
                    })
                );
                state.activeWindowName = clickedWindow.windowName;
            }
        }
    }
})

export const {addWindow, removeWindow, mouseDownWindow, moveWindow} = windowSlice.actions;
export default windowSlice.reducer;