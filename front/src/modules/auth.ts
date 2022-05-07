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
    myId: string;
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
    myId: '',
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
        dispatch(changeRoute({route: RoutePages.Main, windowId: user.windowId}));
        return response.data;
    }catch (error: any) {
        console.log(error);
        if (error.response.status === 400) {
            alert("아이디 혹은 비밀번호를 확인해주세요")
        }else {
            alert ("서버에 일시적으로 문제가 생겼습니다. 잠시후 다시 시도해주세요.")
        }
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
        await axios.post(`${url}/board/create`, {
        boardTitle: board.title,
        boardContent: board.content,},{ 
        withCredentials: true,
        headers: {
            Authorization: auth.token,
        },
    }).then(res => {

        dispatch(changeRoute({route:RoutePages.Main, windowId: board.windowId}));
        return res;
    })
    }catch (err: any) {
        const response = err.response;
        if (response.status === 401 && response.data.code === "Tk401"){
                console.log("토큰 발급 요청")
                const res = await  axios.post(`${url}/token/getAccessToken`, {},{
                    withCredentials: true,
                    // headers: {
                    //     Authorization: auth.token,
                    // },
                }).catch(async(e) => {
                    console.log("와라 토큰아")
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
                    console.log("토큰발급받음")
                    await axios.post(`${url}/board/create`, {
                        boardTitle: board.title,
                        boardContent: board.content,},{ 
                        withCredentials: true,
                        headers: {
                            Authorization: auth.token,
                    }});
                    dispatch(changeRoute({route:RoutePages.Main, windowId: board.windowId}));
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
            state.myId = action.payload.message;
        });
        builder.addCase(join.fulfilled, (state, action) => {
            state.loading = false;
            state.myId = action.payload.message;
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

export const {login, logout, setToken} = authSlice.actions;
export default authSlice.reducer;