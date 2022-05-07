import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type BoardState = {
    boards: [{
        writter: string;
        title:string;
        // content: string;
    }],
    startPage: number;
    nowPage: number;
    lastPage: number;
    pageLimit: number;
}
const initialContentsState: BoardState = {
    boards: [{ writter: '', title: ''}],
    startPage: 0,
    nowPage: 0,
    lastPage: 0,
    pageLimit: 20,
}
const url = 'http://localhost:8080/api/v1/board';
export const getBoardLists = createAsyncThunk("BOARD_LIST_READ", async ( _,{getState,dispatch}) => {
    try {
        const {board } = getState() as {board: BoardState};
        const response = await axios.get(`${url}/readBoardLists`, {
            params: {
                startPage: board.startPage,
                pageNum: board.pageLimit,
            }
        });
        // console.log(response);
        return response.data.data;
        // return response.data;
    }catch (error: any) {
        return error?.response;
    }
});
const contentsSlice = createSlice({
    name: 'contents',
    initialState: initialContentsState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getBoardLists.fulfilled, (state, action) => {
            state.boards = action.payload;
            console.log(action.payload);
        });
    }
});


export const {} = contentsSlice.actions;
export default contentsSlice.reducer;