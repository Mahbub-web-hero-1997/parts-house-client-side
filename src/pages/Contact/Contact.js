import React from 'react';
import { FaPhone, FaMailBulk } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ButtonPrimary from '../Shared/ButtonPrimary';
const Contact = () => {
    return (
        <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src="https://images.pexels.com/photos/7681981/pexels-photo-7681981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="max-w-md rounded-lg shadow-2xl" alt='' />
                <div className='w-1/2 text-left'>
                    <h1 class="text-5xl font-bold">Customer Care Centre :</h1>
                    <p class="py-3"><FaMailBulk className='text-2xl my-3' /> <b>Our Mail Address:</b> mahbub.programing.hero@gmail.com</p>
                    <p class="py-1 mb-3"><FaPhone className='text-2xl my-3' /> <b>Our Helpline Number:</b> 16267 & 09612316267</p>
                    <p class="py-1 mb-3"><b>Operation hour:</b> 7.00 am to 11.00 pm</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;