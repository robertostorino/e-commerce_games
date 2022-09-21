import React, { useContext } from 'react';
import { CartContext } from '../../../Context/CartContext';

import cart from "../../../assets/images/cart.png";

const CartWidget = () => {

    const { totalProducts }= useContext(CartContext);
    return (
        <button type="button" className="btn btn-light position-relative">
            <img src={cart} alt="cart" width="36" className=''/>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {totalProducts() || ''}
                </span>
        </button>
    )
}

export default  CartWidget;


