import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

import { Link } from 'react-router-dom';

import ItemCart from '../ItemCart/ItemCart';
import CartEmpty from '../CartEmpty/CartEmpty';

const Cart = () => {
    const { cart, totalPrice, clearCart } = useContext(CartContext);
    
    return (
        <div>
            {
                (cart.length === 0)

                ? 

                    (
                        <div className='container-fluid text-center fs-5 fw-bold'> 
                            <CartEmpty />
                            <p>Cart is Empty!</p>
                            <Link to='/'>
                                <button className="btn btn-outline-primary p-3 m-5 fs-5 fw-bold">
                                    Keep an eye on our new products 😉
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
                                    <button onClick={() => clearCart()} className='px-2 btn btn-outline-warning'>
                                        <span class="material-symbols-outlined">
                                            delete_forever
                                        </span>
                                        Clear Cart
                                    </button>
                                    <Link to='/checkout'>
                                        <button className='px-2 btn btn-outline-success'>
                                            <span class="material-symbols-outlined">
                                                shopping_cart_checkout
                                            </span>
                                            Checkout
                                        </button>
                                    </Link>
                                </div>
                        </div>
                    )
            }
        </div>
    )
}

export default Cart