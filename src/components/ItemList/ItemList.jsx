import React, { useState, useEffect } from 'react'
import Item from '../Item/Item';

const ItemList = ({items}) => {
    
    /* const [products, setProducts] = useState([]);

    //Creo un Mock de Promise
    const getProducts = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(productList);
        }, 2000);
    });

    const getProductsFromDB = async () => {
        try {
            const result = await getProducts;
            setProducts(result);
        } catch (error) {
            console.log(error);
        }
    };

    //simula la ejecución de la función getProductsFromDB
    //Se ejecutará solo una vez ya que el array de dependencias está vacío
    useEffect (() => {
        getProductsFromDB();
    }, []);  //[] array de dependencias
     */
    return (
        <div className="row">
            {
                items.length ? (
                    <div>
                        {
                            items.map((item) =>{
                                return (
                                    <div key={item.id} className="col-md-4 py-3">
                                        <Item
                                            title={item.title}
                                            price={item.price}
                                            description={item.description}
                                            pictureUrl={item.pictureUrl}
                                        />    
                                    </div>
                                );
                            })
                        }
                    </div>
                ) : (
                    <p>Cargando productos ... </p>
                )
            }
        </div>
    );
};

export default ItemList;


{/* <div className="row">
            {
                products.length ? (
                    <div>
                        {
                            products.map((product) =>{
                                return (
                                    <div key={product.id}>
                                        <Item
                                            id={product.id}
                                            title={product.title}
                                            price={product.price}
                                            description={product.description}
                                            pictureUrl={product.pictureUrl}
                                        />    
                                    </div>
                                );
                            })
                        }
                    </div>
                ) : (
                    <p>Cargando productos ... </p>
                )
            }
        </div> */}