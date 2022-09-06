import React from 'react'
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h1 className="text-center text-blue">{greeting}</h1>
            <ItemList />
        </div>
    )
}

export default ItemListContainer;