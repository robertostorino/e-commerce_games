import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

import { Link } from 'react-router-dom';

import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
    const { cart, totalPrice, clearCart } = useContext(CartContext);
    
    return (
        <div>
            {
                (cart.length === 0)

                ? 

                    (
                        <div className='container text-bg-warning p-3 text-center fs-5 fw-bold'> 
                            <p>Cart is Empty!</p>
                            <Link to='/'>
                                <button className="btn btn-outline-primary p-3 m-5 fs-5 fw-bold">
                                    Go back to buy 😉
                                </button>
                            </Link>
                        </div>
                    )

                :

                    ( 
                        <div>
                            {
                                cart.map(product => <ItemCart key={product.id} product={product}/>)
                            }    
                                <div className='d-flex justify-content-evenly'>
                                    <p className='fs-5 fw-bold'>
                                        Total: ${totalPrice()}
                                    </p>
                                    <button onClick={() => clearCart()} className='px-5 btn btn-outline-info'>Clear Cart</button>
                                    <Link to='/checkout'>Checkout</Link>
                                </div>
                        </div>
                    )
            }
        </div>
    )
}

export default Cart