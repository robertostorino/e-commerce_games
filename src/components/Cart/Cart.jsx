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
                        <div> 
                            <p>Cart is Empty</p>
                            <Link to='/'>Go to buy</Link>
                        </div>
                    )

                :

                    ( 
                        <div>
                            {
                                cart.map(product => <ItemCart key={product.id} product={product}/>)
                            }    
                                <p>
                                    Total: ${totalPrice()}
                                </p>
                                <button onClick={() => clearCart()}>Clear Cart</button>
                        </div>
                    )
            }
        </div>
    )
}

export default Cart