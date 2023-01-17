import Cookies from "universal-cookie";
import {notificationsLogoutSuccesfull} from "../pages/features/logout/notificationsLogout";


interface useIsLoggedProps {
}

export const useIsLogged = () => {
    const cookies = new Cookies();
    return cookies.get('is-logged') !== undefined;
};

export const userDeleteCookies = () => {
    const cookiess = new Cookies();
    cookiess.remove('is-logged');
    cookiess.remove('access-token');
    notificationsLogoutSuccesfull();
}