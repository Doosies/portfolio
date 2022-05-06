import Cookies from 'js-cookie'

const getCookie = (coookieName: string): string | undefined=> {
    return Cookies.get(coookieName);
}