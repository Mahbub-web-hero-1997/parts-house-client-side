import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Fetcher from '../../api/Fetcher';
import Swal from 'sweetalert2';
const CheckoutForm = ({ orders }) => {

    // const { }
    const stripe = useStripe();
    const elements = useElements();
    const [err, setErr] = useState('')
    const [success, setSuccess] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [loading, setLoading] = useState(false)
    const { order, price, name, email } = orders;
    useEffect(() => {
        (async () => {
            // get client secret 
            const { data } = await Fetcher.post(`https://nameless-citadel-60846.herokuapp.com/create-payment-intent`, { price: order * price })
            console.log(data)
            setClientSecret(data.clientSecret)
        })()
    }, [order, price])
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
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );
        if (intentError) {
            setSuccess('')
            setErr(intentError?.message)

        } else {
            setErr('')
            const details = {
                transactionId: paymentIntent.id,
                name,
                email,
            }
            setSuccess('Your payment is successful')
            console.log(paymentIntent)

            console.log('false')
            await fetch('https://nameless-citadel-60846.herokuapp.com/payment-complete', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(details)
            })
                .then(res => {
                    if (paymentIntent.id) {

                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Your payment is successful',
                            showConfirmButton: false,
                            timer: 3000
                        })
                    }

                    return res.json()
                })
                .then(data => console.log(data))

        }


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