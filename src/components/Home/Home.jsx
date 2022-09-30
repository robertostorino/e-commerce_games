import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

import './Home.css'
const Home = () => {
    return (
        <div>
            <div className="hero-image">
                <div className="hero-text">
                    <h1>Play 4 Win</h1>
                </div>
            </div>
        
            <ItemListContainer greeting="Bienvenido a Play 4 Win" />
        </div>
        
        
    )
}

export default Home