import React from 'react'
import { useState } from 'react';

//intial: es la cantidad de ítems. Sirve para inicializar el contador en 1 por defecto


const ItemCount = ({stock, initial, onAdd}) => {
    
    //      Hooks
    const [amount, setAmount] = useState(initial);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdd, setItemAdd] = useState(onAdd);

    //      Restrictions

    //decrementa solo si value es mayor a 0
    const decrementAmount = (value) => {
        (value > 0) && setAmount(value);
    }

    //incremento si no me paso del stock
    const incrementAmount = (value) => {
        (value <= itemStock) && setAmount(value);
    }

    //Agrega a Selected Products si amount es menor o igual al stock del item
    const addProducts = () => {
        if (amount <= itemStock) {
            setItemStock(itemStock - amount); //reduzco el stock
            setItemAdd(itemAdd + amount); //incremento la cantidad a agregar
        }
    }

    return (
        <div className="container py-4">
            <div className="row">
                <div className="col-md-3">
                    <p className="text-center"> Product Name:</p>
                    <div className="input-group">
                        <input 
                            type="button" 
                            className="btn btn-secondary" 
                            value="-" 
                            onClick={() => {decrementAmount(amount-1)}}/>
                        <input 
                            type="text" 
                            className="form-control text-center"  
                            value={amount} 
                            onChange={() => {}} />
                        <input 
                            type="button" 
                            className="btn btn-secondary" 
                            value="+" 
                            onClick={() => {incrementAmount(amount+1)}}/>
                    </div>
                    <div className="d-grid gap-2 py-2">
                        <input 
                            type="button" 
                            className="btn btn-success" 
                            value="Add" 
                            onClick={() => {addProducts()}}/>
                    </div>
                    <p>Selected Products: {itemAdd}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;