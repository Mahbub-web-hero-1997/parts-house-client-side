import React, { useEffect, useState } from 'react';
import './SocialLogin.css'
import img from '../../images/social/google.png'
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../useToken';
import Fetcher from '../api/Fetcher';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    const googleSignIn = () => {
        signInWithGoogle()
    }
    const [user1] = useAuthState(auth)
    const [token, setToken] = useState('')
    useEffect(() => {
        (async () => {
            if (user?.email) {
                const { data } = await Fetcher.put(`/token/${user?.email}`, {
                    email: user?.email
                })
                setToken(data.accessToken)
                console.log(data);

            }
        })()
    }, [user])
    const location = useLocation()
    const from = location?.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true })
    }
    return (
        <div className='mt-2'>
            <button onClick={googleSignIn} className='btn w-full'>
                <img width={30} className='mr-5' src={img} alt="" />
                Continue with google</button>
        </div>
    );
};

export default SocialLogin;