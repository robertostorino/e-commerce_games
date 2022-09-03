import React from 'react';
import cart from "../../../assets/images/cart.png";

const CartWidget = () => {
    return (
        <button type="button" className="btn btn-light position-relative">
            <img src={cart} alt="cart" width="36" className=''/>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    0
                </span>
        </button>
    )
}

export default  CartWidget;


