import React, {FC} from 'react';
import {Logo} from "./Logo";
import {Link, Outlet, useRoutes} from "react-router-dom";
import basketLogo from '../images/basket.png'
import {LogOutForm} from "../features/logout/LogOutForm";
import {userDeleteCookies} from "../../hooks/useIsLogged";

interface NavbarAfterLoginProps {
}


export const NavbarAfterLogin: FC<NavbarAfterLoginProps> = ({}) => {
    const handleClick = () => {
        userDeleteCookies();
    }

    return (
        <div>
            <div className="App">
                <div className='container'>
                    <Logo/><span className={'title'}>AP_Design</span>
                    <Link to={'/products'} className={`child`}
                          style={{textDecoration: "none", color: "black"}}> Products</Link>
                    <Link to={'/about'} className={'child'}
                          style={{textDecoration: "none", color: "black"}}>About</Link>
                    <Link to={'/contact'} className={'child'}
                          style={{textDecoration: "none", color: "black"}}>Contact</Link>
                    <Link to={'/basket'} className={'child'}><img src={basketLogo}/></Link>
                    <Link to={'/'} className={'child signIn'}
                          style={{textDecoration: "none", color: "black"}} onClick={handleClick}> LogOut</Link>
                </div>
                <Outlet/>
            </div>
        </div>
    );
};