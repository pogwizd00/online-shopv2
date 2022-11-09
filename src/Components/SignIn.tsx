import React, {FC} from 'react';
import '../Styles/SignIn.css'
interface SignInProps {}

export const SignIn: FC<SignInProps> = () =>{
    return (
        <span className={'signIn'}>Sign in</span>
    );
};
