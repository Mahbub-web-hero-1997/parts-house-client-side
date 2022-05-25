import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => console.log(data);
    return (
        <div className='h-screen w-1/3 mx-auto my-5'>
            <h1 className='text-3xl font-bold mt-10 text-left'>Log In!</h1>
            <form className='flex flex-col items-center justify-center mx-auto rounded-xl shadow-2xl p-10' onSubmit={handleSubmit(onSubmit)}>
                <input className='border w-full my-2 rounded-sm shadow-lg py-2 px-4 outline-none' placeholder='Your Email' {...register("email", { required: true })} />
                {errors.email?.type === 'required' && "Email is required"}
                <input className='border w-full my-2 rounded-sm shadow-lg py-2 px-4 outline-none' placeholder='Your Password' {...register("Password", { required: true })} />
                {errors.Password && "Password is required"}
                <p className='text-left'>New to Parts-House? <Link className='text-blue-500' to='/signup'>Create an account</Link></p>
                <input className=' btn border w-full my-2 rounded-sm shadow-lg py-2 px-4 outline-none uppercase text-base' type="submit" value='Login' />
            </form>
            <div class="divider">OR</div>
        </div>
    );
};

export default Login;