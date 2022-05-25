import React from 'react';
import './SocialLogin.css'
import img from '../../images/social/google.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    const googleSignIn = () => {
        signInWithGoogle()
    }
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