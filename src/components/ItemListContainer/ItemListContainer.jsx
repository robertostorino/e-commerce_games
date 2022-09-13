import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import { products } from '../data/data';

const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        //Se ejecuta cada vez que ocurra un cambio de estado, de prop o un evento que dispara un cambio de estado o de prop
        

        const getProducts = () =>
            new Promise((resolve, reject) =>{
                setTimeout(() => {
                    resolve(products);
                }, 2000);
        });

        getProducts()
        .then((response) => {
            setItems(response);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [])
    
    return (
        <div className="container">
            {/* <h1 className="text-center text-blue">{greeting}</h1> */}
            { items.length ? (<ItemList items={items}/>) : (
                    <div className="text-center my-5">
                        <div className="spinner-border text-primary align-middle" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <h4>Cargando ...</h4>
                    </div>
                )}
        </div>
    )
}

export default ItemListContainer;