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
    // console.log("loginuser");
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
    // console.log("loginuser");
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
    // console.log("loginuser");
    try {
        const response = await axios.post(`${url}/logout`, {},{ 
            withCredentials: true,
        });
        if (response.status === 200 && response.data.success) {
            dispatch(logout());
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
    console.log(auth.token);
    try {
        const response = await axios.post(`${url}/board/create`, {
        boardTitle: board.title,
        boardContent: board.content,},{ 
        withCredentials: true,
        headers: {
            Authorization: auth.token,
        },
    })
    // .then(res =>{
        // console.log(res);
        // return res;
    // }).catch( async(e) => {
        // 액세스 토큰이 만료됐을 경우
        // console.log(response);
        
        // return e;
    // });
    // console.log(response);
    // console.log("결과: ");
    // return response;
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
                });
                console.log("재발급 리퀘스트 도착")
                console.log(res);
                if (res.status === 200 && res.data.success) {
                    dispatch(setToken(res.data.data));
                }
            }
        }
    }
);

    // }catch (error: any) {
    //     return error?.response.data;
    // }

// const createBoard = (board: BoardType) => 
// axios.post(`${url}/board/create`,{
//     boardTitle: board.title,
//     boardContent: board.content,
// },
// { 
//     withCredentials: true,
// }
// ).then (response => {
//     if (response.status === 200) {
//         return response;
//     }else {
//         alert("서버에 일시적으로 문제가 생겼습니다. 다시 시도해주세요.");
//     }
// }).catch (async(errorResponse) => {
// const res = errorResponse.response;
// // 만약 액세스 토큰이 문제가 생겼으면 재발급 요청
// if (res.status === 401 && res.data.code === "Tk401") {
//     // 토큰을 재발급 받음
//     issueToken();
// }
// });


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

// export async function loginUser(userId: string, userPw: string) {
//     const response =  await signIn({userId, userPw});
//     // 로그인 성공
//     if (response.status === 200 && response.data.data) {
//         console.log("로그인!");
//         login(response.data.data);
        
//     }
// }
// export fetch

const {login, logout, setToken} = authSlice.actions;
// export const {login, logout} = authSlice.actions;
export default authSlice.reducer;