import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

import ItemList from '../ItemList/ItemList';

import './ItemListContainer.css'

//////      RESPONSABILIDAD: Renderizar cards

// -> Para trabajar con Firestore
// 1) Traigo el servicio de firestore -> con getFirestore
// 2) Creo un puntero al dato que queremos traer -> con doc
// 3) Traigo el dato con una promesa -> La promesa está en getDoc

const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([]);
    const {categoryId} = useParams();

    useEffect(() => {
        //Se ejecuta cada vez que ocurra un cambio de estado, de prop o un evento que dispara un cambio de estado o de prop
        

        //Hago el pedido de firestore y lo almaceno en la variable querydb
        const querydb = getFirestore();

        //Creo el puntero a items
        // items es el nombre de la colección donde lo guardé en firestore, sería la tabla
        const queryCollection = collection(querydb, 'items');

        if (categoryId) {
            //Si existe la categoryId hace el filter por esa category

            //query
            //va la consulta con filtrado
            const queryFilter = query(queryCollection, where('category', '==', categoryId ))
    
            //hago la promesa
            //response.docs me trae los objetos
            //por cada producto, tomo el id, y le agrego los datos del producto.
            getDocs(queryFilter)
                .then(response => setItems(response.docs.map(product => ({ id: product.id, ...product.data() }))))

            } else {

                //Si no me pasan el categoryId, entonces muestra todos los items
                getDocs(queryCollection)
                .then(response => setItems(response.docs.map(product => ({ id: product.id, ...product.data() }))))
        }

    }, [categoryId])
    
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