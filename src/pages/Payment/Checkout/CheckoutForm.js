import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [err, setErr] = useState('')
    const [success, setSuccess] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [loading, setLoading] = useState(false)
    const handleSubmit = async e => {
        e.preventDefault()

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        setErr(error?.message || '')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '13px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn mt-5 text-white hover:bg-[#12196cfa] bg-[#12196cfa]' type="submit" disabled={!stripe || !elements}>
                    Pay
                </button>

                {
                    err && <small className='text-red-500 mt-7 block'>{err}</small>
                }
                {
                    success && <small className='text-green-500 block mt-7'>{success}</small>
                }
            </form>
        </div>
    );
};

export default CheckoutForm;