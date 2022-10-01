import React, { useState, useContext } from 'react'
import { CartContext } from '../../Context/CartContext';

import { Link } from 'react-router-dom';

import ItemCount from '../ItemCount/ItemCount'


export const ItemDetail = ({ item }) => {
    const [ goToCart, setGoToCart ] = useState(false); //estado para indicar si muestra la opción de ir al carrito o no
    
    //Estoy recibiendo un objeto, así que aplico destructuring para simplificar
    const { addToCart} = useContext(CartContext);

    const onAdd = (quantity) => {
        setGoToCart(true);
        addToCart(item, quantity)
    };


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={item.pictureUrl} alt={item.title} width="350px"/>
                </div>
                <div className="infoDetail col-md-6">
                    <h2>{item.title}</h2>
                    <p className="dark-text">{item.category}</p>
                    <p>{item.info}</p>
                    <h3 className="card-text">${item.price}</h3>
                    {
                        goToCart 
                        ? (
                            <Link to="/cart">
                                <button className="btn btn-outline-primary">Go to Cart</button>
                            </Link>
                            )
                        : (
                            <ItemCount stock={5} initial={1} onAdd={onAdd} />
                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail