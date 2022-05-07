import {Cookies} from 'react-cookie'
const cookies = new Cookies();

export const getAccessTokenCookie = (): string | undefined=> {
    return cookies.get('accessToken');
}
// export const setAccessTokenCookie = (cookieName: string) => {
//     cookies.set("accessToken", cookieName, {
//         // secure: true,
//         // httpOnly: true,
//         path: '/',
//         // maxAge: 60000,
//         httpOnly: true,

//     })
// }
export const removeAllCookies = () => {
    cookies.remove("accessToken");
    cookies.remove("Set-Cookie");
}