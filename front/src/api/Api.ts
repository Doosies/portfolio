import axios from "axios";

const url = 'http://localhost:8080/api/v1';
interface UserType {
    userId: string;
    userPw: string;
}


export const createUser =  (user: UserType) => 
    axios.post(`${url}/join`,{
        userId: user.userId,
        userPw: user.userPw,},
    { withCredentials: true, }
);

export const signIn = (user: UserType) =>
    axios.post(`${url}/login`,{
        userId: user.userId,
        userPw: user.userPw,},
    { withCredentials: true, }
);

export const checkId = async (userId: string) => 
    await axios.get(`${url}/get?userId=${userId}`);


export const test = (accessToken: string) =>
        axios.get(`${url}/test`,{
            headers: {'accessToken':accessToken}
        });