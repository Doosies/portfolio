import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const setCookie = (value: string) => {
    return cookies.set("refreshToken", value, {
        // secure: true,
        // httpOnly: true,
    });
}

export const getCookie = () => {
    return cookies.get("refreshToken");
}
