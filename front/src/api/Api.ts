import axios from "axios";

const url = 'http://localhost:8080';
interface UserType {
    userId: string;
    userPw: string;
}
export const createUser = (user: UserType) => axios.post(`${url}/signUp`,{
    userId: user.userId,
    userPw: user.userPw,
});

export const checkId = (userId: string) => axios.post(`${url}/checkId`,{
    userId,
});