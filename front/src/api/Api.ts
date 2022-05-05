import axios from "axios";

const url = 'http://localhost:8080/api/v1';
interface UserType {
    userId: string;
    userPw: string;
}
export const createUser = async (user: UserType) => await axios.post(`${url}/join`,{
    userId: user.userId,
    userPw: user.userPw,
});

export const checkId = async (userId: string) => 
    await axios.get(`${url}/get?userId=${userId}`);


// http://localhost:8080/api/v1/get?userId=sdfasf123