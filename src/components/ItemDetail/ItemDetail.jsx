import React from 'react'

import ItemCount from '../ItemCount/ItemCount'



const ItemDetail = ({item}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={item.pictureUrl} alt={item.title} width="350px"/>
                </div>
                <div className="infoDetail col-md-6">
                    <h2>{item.title}</h2>
                    <p className="dark-text">{item.category}</p>
                    <p>{item.info}</p>
                    <h3 className="card-text">${item.price}</h3>

                    <ItemCount stock={5} initial={1} onAdd={0} />
                </div>
            </div>
            
        </div>
    )
}

export default ItemDetail