import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import { products } from '../data/data';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([]);
    const {category} = useParams();

    useEffect(() => {
        //Se ejecuta cada vez que ocurra un cambio de estado, de prop o un evento que dispara un cambio de estado o de prop
        
        let categoria = "";

        if (category === "ps4"){
            categoria = "ps4";
        } else if (category === "ps5"){
            categoria = "ps5";
        } else {
            categoria = "all";
        }

        const getProducts = () =>
            new Promise((resolve, reject) =>{
                setTimeout(() => {
                    resolve(products);
                }, 2000);
        });

        getProducts()
        .then((response) => {
                if (categoria === "all") {
                    setItems(response);
                } else {
                    
                    const productsArray = response.filter(products => products.category === categoria);
                    setItems(productsArray);
                }
            }
            )
        .catch((error) => {
            console.log(error);
        });
    }, [category])
    
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