import React, {FC} from 'react';
import {Center} from "../Layout/Center";
import {Login} from "./Login";
import {Products} from "./Products";
import {About} from "./About";
import {Contact} from "./Contact";
import {Main} from "../Layout/Main";
import {Basket} from "./Basket";
import {Navigate, useRoutes} from "react-router-dom";
import {ErrorPage} from "./ErrorPage";
import {useIsLogged} from "../../hooks/useIsLogged";
import {Layout} from "./Layout";
import {SignIn} from "./SignIn";
import {LogOut} from "./LogOut";
import {NavbarAfterLogin} from "./NavbarAfterLogin";
import {SignUp} from "./SignUp";


interface RoutingProps {
}


const publicRoutes = [
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/products',
                element: <Products/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },


        ]
    },
    {
        path: '/signIn',
        element: <SignIn/>
    },
    {
        path: '/signUp',
        element: <SignUp/>
    },
    {
        path: '*',
        element: <Navigate to='/signIn' replace/>
    }
]

const privateRoutes = [
    {
        path: '/',
        element: <NavbarAfterLogin/>,
        children: [
            {
                path: '/products',
                element: <Products/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/basket',
                element: <Basket/>
            },
            {
                path: '/logout',
                element: <LogOut/>
            },
            {
                path: '*',
                element: <ErrorPage/>
            }
        ]
    }
]

export const Routing: FC<RoutingProps> = ({}) => {
    const isLogged = useIsLogged();
    console.log(isLogged);
    const routes = isLogged ? privateRoutes : publicRoutes;
    return useRoutes(routes);
};