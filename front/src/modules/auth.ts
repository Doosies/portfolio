import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
    logged: boolean;
    id: string;
    token: {
        accessToken: string;
        refreshToken: string;
    }
}
const initialAuthState: AuthState = {
    logged: false,
    id: '',
    token: {
        accessToken: '',
        refreshToken: '',
    }
}

const authSlice = createSlice({
    name: 'contents',
    initialState: initialAuthState,
    reducers: {
        login: (state: AuthState, action: PayloadAction<{id: string, token: {accessToken: string, refreshToken: string}}>) => ({
            ...state,
            logged: true,
            id: action.payload.id,
            token: action.payload.token,
        }),
        logout: (state: AuthState) => ({
            ...state,
            ...initialAuthState,
        }),
    }
});


export const {login, logout} = authSlice.actions;
export default authSlice.reducer;