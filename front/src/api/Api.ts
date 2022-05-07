import axios from "axios";
import { getAccessTokenCookie } from "../utility/cookie";
// import { getCookie, setAccessTokenCookie } from "../utility/cookie";
// import { response } from "express";
// import Cookies from "js-cookie";
// import { getAccessToken, setAccessToken } from "../utility/token";

const url = 'http://localhost:8080/api/v1';
interface UserType {
    userId: string;
    userPw: string;
}

interface TokenType {    
    status: number;
    token: string;
}


// 유저 존재하는지 확인
export const checkId = async (userId: string) => 
    await axios.get(`${url}/get?userId=${userId}`);

// acess 토큰 재발급받음.
export const issueToken = () => 
    axios.post(`${url}/token/getAccessToken`,{
    },
    { 
        withCredentials: true,
        // headers: {
        //     Authorization: token,
        // }
    }
);