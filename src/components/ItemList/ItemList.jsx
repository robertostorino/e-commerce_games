import React from 'react'
import Item from '../Item/Item';

const ItemList = ({items}) => {
    
    return (
        <div className="row">
            {
            items.map(item =>(
                    <div key={item.id} className="col-md-3 py-3">
                        <Item item={item} />    
                    </div>)
            )
            }
        </div>
    );
};

export default ItemList;