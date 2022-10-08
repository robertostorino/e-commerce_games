import React from 'react'
import { Link } from 'react-router-dom';

import './Item.css'

const Item = ({item}) => {
    return(
        <div className="card card--principal">
            <Link to={`/item/${item.id}`} >
                <img className="card-img-top" src={item.pictureUrl} alt={item.title} />
            </Link>
            <div className="card-body">
                <h3 className="card-title text-center">{item.title}</h3>
                <p className="card-text text-center">${item.price}</p>
                <Link to={`/item/${item.id}`}>
                    <button className="btn btn-outline-secondary">
                        See details
                    </button> 
                </Link>
            </div>
        </div>
    );
};

export default Item;