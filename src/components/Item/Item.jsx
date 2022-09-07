import React from 'react'

const Item = ({id, title, price, description, pictureUrl}) => {
    return(
        <div className="card">
            <img className="card-img-top" src={pictureUrl} alt={title} />
            <div className="card-body">
                <h3 className="card-title text-center">{title}</h3>
                <p className="card-text text-center">${price}</p> 
            </div>
        </div>
    );
};

export default Item;