import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { createUser, signIn } from "../api/Api";
// import { useAppDispatch } from "./hooks";
// import {API} from '../api/Api';
import axios from "axios";
import { issueToken } from "../api/Api";
import { changeRoute, RoutePages } from "./route";

type WindowId = {windowId: number};
type AuthState = {
    loading: boolean;
    logged: boolean;
    token: string;
}

type UserType = {
    userId: string;
    userPw: string;
} & WindowId;

type BoardType = {
    title: string;
    content: string;
} & WindowId;

const initialAuthState: AuthState = {
    loading: false,
    logged: false,
    token: '',
}

const url = 'http://localhost:8080/api/v1';
// 로그인
export const loginUser = createAsyncThunk("LOGIN_USER", async (user: UserType & {windowId: number}, {rejectWithValue, getState, dispatch}) => {

    try {
        const response = await axios.post(`${url}/login`, {
            userId: user.userId,
            userPw: user.userPw,},{ 
            withCredentials: true,
        });
        dispatch(login(response.data.data));
        dispatch(changeRoute({route: RoutePages.Main, windowId: user.windowId}))
        return response.data;
    }catch (error: any) {
        return error?.response;
    }
});
// 회원가입
export const join = createAsyncThunk("JOIN_USER", async (user: UserType, {rejectWithValue, getState, dispatch}) => {

    try {
        const response = await axios.post(`${url}/join`, {
            userId: user.userId,
            userPw: user.userPw,},{ 
            withCredentials: true,
        });
        dispatch(login(response.data.data));
        dispatch(changeRoute({route: RoutePages.Main, windowId: user.windowId}))
        alert("회원가입 성공!");
        return response.data;
    }catch (error: any) {
        return error?.response;
    }
});
// 로그아웃
export const logoutUser = createAsyncThunk("LOGOUT_USER", async (_,{dispatch}) => {

    try {
        const response = await axios.post(`${url}/logout`, {},{ 
            withCredentials: true,
        });
        if (response.status === 200 && response.data.success) {
            dispatch(logout());
        }else {
            
        }
        return response.data;
    }catch (error: any) {
        return error?.response;
    }
});
// 보드 생성!!
export const createBoard = createAsyncThunk(
    "CREATE_BOARD", 
    async (board: BoardType & {windowId: number}, 
    {rejectWithValue, getState, dispatch}) => 
    {
    // try {
    const {auth} = getState() as {auth: AuthState};
    try {
        const response = await axios.post(`${url}/board/create`, {
        boardTitle: board.title,
        boardContent: board.content,},{ 
        withCredentials: true,
        headers: {
            Authorization: auth.token,
        },
    })
    }catch (err: any) {
        console.log(err)
        const response = err.response;
        if (response.status === 401 && response.data.code === "Tk401"){
                console.log("토큰 발급 요청")
                const res = await  axios.post(`${url}/token/getAccessToken`, {},{
                    withCredentials: true,
                    headers: {
                        Authorization: auth.token,
                    },
                }).catch(async(e) => {
                    const response = e.response;
                    if (response.status === 401 && response.data.code === "Tk401"){
                        alert("로그인 시간이 만료되어 자동으로 로그아웃 합니다.");
                        dispatch(logout());
                        dispatch(changeRoute({route:RoutePages.Main, windowId: board.windowId}));
                        return e;
                    }
                });

                if (res.status === 200 && res.data.success) {
                    dispatch(setToken(res.data.data));
                }
            }
        }
    }
);



const authSlice = createSlice({
    name: 'contents',
    initialState: initialAuthState,
    reducers: {
        login: (state: AuthState, action: PayloadAction<string>) => ({
            ...state,
            logged: true,
            token: action.payload,
        }),
        logout: (state: AuthState,) => ({
            ...state,
            ...initialAuthState,
        }),
        setToken: (state: AuthState, action: PayloadAction<string>) => ({
            ...state,
            token: action.payload
        })
    },
    extraReducers: (builder) => {
        // Handling peding state
        builder.addCase(loginUser.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
        });


        builder.addCase(createBoard.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(createBoard.fulfilled, (state, action) => {
            state.loading = false;
        });

        builder.addCase(logoutUser.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(logoutUser.fulfilled, (state, action) => {
            state.loading = false;
        });
    }
});

const {login, logout, setToken} = authSlice.actions;
export default authSlice.reducer;