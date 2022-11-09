import React, {FC} from 'react';
import '../Styles/NavBar.css';
import {Link} from "react-router-dom";
import {Logo} from "./Logo";

interface LayoutProps {}

export const Layout: FC<LayoutProps> = ({}) =>{
    return (
        <div>
            <div className="App">
                <div className='container'>
                    <Logo/><span className={'title'}>AP_STYLE</span>
                    <Link to={'/sales'} className={'child'} style={{textDecoration: "none", color: "black"}}>Products</Link>
                    <Link to={'/about'} className={'child'} style={{textDecoration: "none", color: "black"}}>About</Link>
                    <Link to={'/gallery'} className={'child'} style={{textDecoration: "none", color: "black"}}>Gallery</Link>
                    <Link to={'/contact'} className={'child'} style={{textDecoration: "none", color: "black"}}>Contact</Link>
                    <Link to={'/signin'} className={'child signIn'} style={{textDecoration: "none", color: "black"}}>Sign In</Link>

                </div>
            </div>
        </div>
    );
};