import React from 'react'
import { useState } from 'react'
import Form from '../Form/Form'

const Checkout = () => {
    const [orderId, setOrderId] = useState('')
    
    const handleId = (orderNumber) => {
        setOrderId(orderNumber);
    }
    if (orderId){
        return (
            <h1>
                Thanks for your purchase, this is your order number:{' '} 
                {orderId}
            </h1>
        );
    }
    return (
        <div>
            <Form handleId={handleId}/>
        </div>
    )
}

export default Checkout