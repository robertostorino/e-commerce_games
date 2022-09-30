import React, { useContext } from 'react'
import { useState } from 'react'
import { CartContext } from '../../Context/CartContext'

import Form from '../Form/Form'

import './Checkout.css'

const Checkout = () => {
    const [orderId, setOrderId] = useState('');
    const { clearCart } = useContext(CartContext);

    const handleId = (orderNumber) => {
        setOrderId(orderNumber); //Almacena la orden en la variable de estado
        clearCart(); //Limpia el carrito
    }
    if (orderId){
        return (
            <div className='container d-flex justify-content-center align-middle py-3'>
                <div className='col-6 borde'>
                    <h2>Thanks for your purchase</h2>
                    <br />
                    <p className='fst-italic'>Your order number is:{' '} 
                    <span className='text-bg-success p-3 fw-bolder'>{orderId}</span></p>
                </div>
            </div>
        );
    }
    return (
        <div className='container-fluid bg-checkout'>
            <Form handleId={handleId}/>
        </div>
    )
}

export default Checkout