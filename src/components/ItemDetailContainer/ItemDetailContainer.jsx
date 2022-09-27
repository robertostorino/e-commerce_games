import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getFirestore, doc, getDoc } from 'firebase/firestore'

import ItemDetail from '../ItemDetail/ItemDetail'

//////      RESPONSABILIDAD: Renderizar un solo producto


// -> Para trabajar con Firestore
// 1) Traigo el servicio de firestore -> con getFirestore
// 2) Creo un puntero al dato que queremos traer -> con doc
// 3) Traigo el dato con una promesa -> La promesa está en getDoc


const ItemDetailContainer = () => {
    const [item, setItem] = useState({})  //Persisto mis datos para pasarselo al hijo. Lo inicializo con un objeto vacío
    
    const {itemId} = useParams(0);


    useEffect( () => {
            //Hago el pedido de firestore y lo almaceno en la variable querydb
            const querydb = getFirestore();

            //Creo el puntero al dato que quiero traerme
            // items es el nombre de la colección donde lo guardé en firestore, sería la tabla
            const queryDoc =  doc(querydb, 'items', itemId);

            //hago la promesa
            //la respuesta me devuelve una respuesta, y para acceder a la información
            //debo aplicar el método .data() pero sin el id
            //con res.id obtengo el id que me dá firestore
            /// pongo entre {} para que me cree el objeto y le doy el formato que me conviene
            getDoc(queryDoc)
                .then(response => setItem ({ id: response.id, ...response.data() }))
            
            
    }, [itemId])   //El useEfect en este caso se ejecutará 1 sola vez

    return (
        <div style={{minHeight: '70vs' }}>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer