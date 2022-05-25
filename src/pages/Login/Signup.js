import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <div className='h-screen w-1/3 mx-auto my-2'>
            <h1 className='text-3xl font-bold mt-4 text-left'>Sign Up!</h1>
            <form className='flex flex-col items-center justify-center mx-auto rounded-xl shadow-2xl p-5' onSubmit={handleSubmit(onSubmit)}>
                <input className='border w-full my-2 rounded-sm shadow-lg py-2 px-4 outline-none' placeholder='First Name' {...register("firstName", { required: true })} />
                {errors.firstName?.type === 'required' && "first Name is required"}
                <input className='border w-full my-2 rounded-sm shadow-lg py-2 px-4 outline-none' placeholder='Last Name' {...register("lastName", { required: true })} />
                {errors.lastName?.type === 'required' && "Last Name is required"}
                <input className='border w-full my-2 rounded-sm shadow-lg py-2 px-4 outline-none' placeholder='Your Email' {...register("email", { required: true })} />
                {errors.email?.type === 'required' && "Email is required"}
                <input className='border w-full my-2 rounded-sm shadow-lg py-2 px-4 outline-none' placeholder='Password' {...register("Password", { required: true })} />
                {errors.Password?.type === 'required' && "Password is required"}
                <input className='border w-full my-2 rounded-sm shadow-lg py-2 px-4 outline-none' placeholder='Confirm Password' {...register("ConfirmPassword", { required: true })} />
                {errors.ConfirmPassword?.type === 'required' && "Email is required"}
                <p className='text-left'>Already have an account? <Link className='text-blue-500' to='/signup'>Login!</Link></p>
                <input className=' btn border w-full my-2 rounded-sm shadow-lg py-2 px-4 outline-none uppercase text-base' type="submit" value='Login' />
            </form>
            <div class="divider">OR</div>
        </div>
    );
};

export default Signup;