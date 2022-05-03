import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ContentsState = {
    id: number;
    title:string;
    nickname:string;
    content: string;
}
const initialContentsState: ContentsState = {
    id: 0,
    title: '',
    content: '',
    nickname: '',
}

const contentsSlice = createSlice({
    name: 'contents',
    initialState: initialContentsState,
    reducers: {
        changeContents: (state: ContentsState, action: PayloadAction<ContentsState>) => {
            return action.payload;
        },
    }
});


export const {changeContents} = contentsSlice.actions;
export default contentsSlice.reducer;