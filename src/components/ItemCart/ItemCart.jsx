import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

import './ItemCart.css';

const ItemCart = ({ product }) => {
    
    //Del contexto de CartContext hago destructuring para removeItem
    const { removeItem } = useContext(CartContext);
    
    return (
        <div className='ItemCart'>
            <img src={product.pictureUrl} alt={product.title}/>
            <div>
                <p>Title: {product.title}</p>
                <p>Quantity: {product.quantity}</p>
                <p>Price: ${product.price}</p>
                <p>Subtotal: ${product.quantity * product.price}</p>
                <button 
                    onClick={() => removeItem(product.id)} 
                    className="btn btn-outline-danger d-flex justify-content-center">
                    <span class="material-symbols-outlined">delete</span>
                    Remove product
                </button>
            </div>
        </div>
    )
}

export default ItemCart