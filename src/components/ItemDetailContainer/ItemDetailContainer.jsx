import React, { useState, useEffect } from 'react'

import ItemDetail from '../ItemDetail/ItemDetail'
import { products } from '../data/data'

import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})  //Persisto mis datos para pasarselo al hijo. Lo inicializo con un objeto vacío
    
    const {id} = useParams();
    console.log("el id es: " + id);


    useEffect( () => {
        const getProduct = () =>
            new Promise ((resolve,reject) =>{
                const product = products.find((prod) => prod.id === 3) //Me trae un solo objeto, en este caso el que coincida con id 1
                setTimeout(() => {
                    resolve(product);
                }, 500);
            });

            getProduct()
            .then((data) => { //Me llega la información
                setItem(data) //Lo guardo en mi estado
            })
            .catch((error) => {
                console.log(error)
            })
    }, [id])   //El useEfect en este caso se ejecutará 1 sola vez

    return (
        <div style={{minHeight: '70vs' }}>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer