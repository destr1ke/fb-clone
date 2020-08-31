import React from 'react';
import './Login.css';
import {Button} from '@material-ui/core';
import {auth,provider} from './firebase';
import {useStateValue} from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [state,dispatch] = useStateValue();
    const signIn = () => {

        auth.signInWithPopup(provider)
        .then(result => {

            dispatch({
                type: actionTypes.SET_USER,
                user:result.user,
            })
        }).catch((error) => alert(error.message));
    }
    return (
        <div className='login'>
            <img src="https://ericsteinborn.com/github-for-cats/img/Professortocat_v2.png" alt=""/>
            <Button type='submit' onClick={signIn}>Login</Button>
        </div>
    )
}

export default Login
