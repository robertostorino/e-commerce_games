import React, { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Toaster, toast } from 'react-hot-toast'

import Form from '../Form/Form'

import './Checkout.css'
import { useEffect } from 'react'

//Toaster es el componente de notificación
//toast es la función de javascript que llama a Toaster

const Checkout = () => {
    const [orderId, setOrderId] = useState('');
    const { clearCart } = useContext(CartContext);

    const handleId = (orderNumber) => {
        setOrderId(orderNumber); //Almacena la orden en la variable de estado
        clearCart(); //Limpia el carrito
        //Mensaje con Toaster
        
    }

    useEffect( () => {
        toast.success(`Your order ID is: \n\n ${orderId}`,
                {
                    duration: 7000,
                }
            );
    }, [orderId] )

    if (orderId){
        return (
            <div className='container d-flex justify-content-center py-3 my-5'>
                <div className='col-6 borde'>
                    <h2>Thanks for your purchase</h2>
                    <br />
                    <span>Your order ID is: <b>{orderId}</b></span>

                    <Toaster />

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