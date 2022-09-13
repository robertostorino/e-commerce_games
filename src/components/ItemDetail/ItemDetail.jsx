import React from 'react'

import ItemCount from '../ItemCount/ItemCount'



const ItemDetail = ({item}) => {
    return (
        <div className="datail">
            <img src={item.pictureUrl} alt={item.title} />
            <div className="infoDetail">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <h3 className="card-text text-center">${item.price}</h3>

                <ItemCount stock={5} initial={1} onAdd={0} />
            </div>
        </div>
    )
}

export default ItemDetail