import React from 'react'
import './Item.css'

const Item = ({item}) => {
    return(
        <div className="card card--principal">
            <img className="card-img-top" src={item.pictureUrl} alt={item.title} />
            <div className="card-body">
                <h3 className="card-title text-center">{item.title}</h3>
                <p className="card-text text-center">${item.price}</p>

                <button>Ver detalles</button> 
            </div>
        </div>
    );
};

export default Item;