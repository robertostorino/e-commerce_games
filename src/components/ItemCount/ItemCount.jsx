import React,{ useState, useEffect } from 'react'

//intial: es la cantidad de ítems. Sirve para inicializar el contador en 1 por defecto

const ItemCount = ({initial, stock, onAdd}) => {

    //      Hooks
    const [count, setCount] = useState(parseInt(initial));

    //incrementa
    const increase = (value) => {
        setCount(count + value);
    }

    //Agrego el useEffect para que al cambiar el valor "initial" se resetee
    useEffect(() => {
		setCount(parseInt(initial));
	}, [initial]);
    
    return (
        <div className="container py-4">
            <div className="row">
                <div className="col-md-4">
                    <p className="text-center"> Product Name:</p>
                    <div className="input-group">
                        <input 
                            type="button" 
                            className="btn btn-secondary" 
                            value="-" 
                            onClick={() => {increase(-1)}}
                            disabled={count === initial}/>
                        <input 
                            type="text" 
                            className="form-control text-center"  
                            value={count}
                            onChange={() => {}} />
                        <input 
                            type="button" 
                            className="btn btn-secondary" 
                            value="+" 
                            onClick={() => {increase(+1)}}
                            disabled={count === stock}/>
                    </div>
                    <div className="d-grid gap-2 py-2">
                        <button 
                            disabled={stock <= 0}
                            type="button" 
                            className="btn btn-outline-success d-flex justify-content-center" 
                            value="Add" 
                            onClick={() => {onAdd(count)}}>
                                <span className="material-symbols-outlined">add</span>
                                <p>Add to Cart</p>
                        </button>
                            {/* Mediante el callback onAdd, el componente padre "ItemDetail" le quita responsabilidad a ItemCount para agregar al carrito */}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ItemCount;