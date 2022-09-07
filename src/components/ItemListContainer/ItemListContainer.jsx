import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const products = [
            {
                "id":1,
                "title":"Battlefield 2024 PS4", 
                "price":10500,
                "description": "FPS",
                "pictureUrl":"../../assets/images/battlefield2042PS4.jpg" 
            },
            {
                "id":2, 
                "title":"Elden Ring PS4", 
                "price":14600,
                "description": "Adventure",
                "pictureUrl":"eldenRingPS4.jpeg" 
            },
            {
                "id": 3,
                "title": "Final Fantasy VII PS4",
                "price": 12450,
                "description": "RPG",
                "pictureUrl": "finalFantasyRemakeVIIPS4.jpg"
            },
            {
                "id": 4,
                "title": "Ghost of Tsushima PS4",
                "price": 15650,
                "description": "Samurai",
                "pictureUrl": "ghostOfTsushimaPS4.jpg"
            },
            {
                "id": 5,
                "title": "Gran Turismo 7 PS4",
                "price": 14450,
                "description": "Racing Simulator",
                "pictureUrl": "granTurismo7PS4.jpg"
            },
            {
                "id": 6,
                "title": "Horizon Forbidden West Standard PS4",
                "price": 17500,
                "description": "Open World Adventure",
                "pictureUrl": "horizonForbiddenWestStandardPS4.jpeg"
            },
            {
                "id": 7,
                "title": "Sekiro: Shadow die Twice GOTY PS4",
                "price": 13500,
                "description": "Samurai",
                "pictureUrl": "sekiroGOTYEditionPS4.jpg"
            }
        ];

        const getProducts = new Promise((resolve, reject) =>{
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });

        getProducts.then((response) => {
            setItems(response);
        });
    }, [])
    
    return (
        <div className="container">
            {/* <h1 className="text-center text-blue">{greeting}</h1> */}
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer;