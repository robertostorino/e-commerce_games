import React,{ useState } from 'react'

//intial: es la cantidad de ítems. Sirve para inicializar el contador en 1 por defecto


const ItemCount = (props) => {

    //      Hooks
    const [amount, setAmount] = useState(props.initial);
    const [itemStock, setItemStock] = useState(props.stock);
    const [itemAdd, setItemAdd] = useState(props.onAdd);

    //incrementa
    const incrementAmount = (value) => {
        setAmount(amount + value);
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
                            onClick={() => {incrementAmount(-1)}}
                            disabled={amount === props.initial}/>
                        <input 
                            type="text" 
                            className="form-control text-center"  
                            value={amount}
                            onChange={() => {}} />
                        <input 
                            type="button" 
                            className="btn btn-secondary" 
                            value="+" 
                            onClick={() => {incrementAmount(+1)}}
                            disabled={amount === props.stock}/>
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