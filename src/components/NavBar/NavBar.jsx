import React, { useEffect, useState, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { CartContext } from '../../Context/CartContext'
import { getDocs, collection, getFirestore } from 'firebase/firestore'

import CartWidget from './CartWidget/CartWidget'

import logo from '../../assets/images/logo.png'
import './NavBar.css'

const NavBar = () => {
    const { cart } = useContext(CartContext);
    const [cat, setCat] = useState([]); //Hook para el estado de listas de categorías

    useEffect(() => {
        
        //Hago el pedido de firestore y lo almaceno en la variable
        const querydb = getFirestore();
        
        //Creo el puntero a items
        // items es el nombre de la colección donde lo guardé en firestore, sería la tabla
        const categoryCollection = collection(querydb, 'categories');

        //hago la promesa
        //response.docs me trae los objetos
        //por cada categoría, tomo el id, y le agrego los datos de la categoría.
        getDocs(categoryCollection).then((response) => {
            const categoryList = response.docs.map((cat) => {
                return {
                    id: cat.id,
                    ...cat.data(),
                };
            });
            setCat(categoryList);
        });
    }, []);

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container py-2 sticky-md-top color_grey rounded">
                <Link to='/category' className="navbar-brand" ><img src={logo} alt="Play 4 win" width="58" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {cat.map((category) => (
                            <li className="nav-item">
                            <NavLink 
                                key={category.id}
                                to={`/category/${category.path}`} 
                                className="nav-link underline-hover" 
                            >
                                {category.name}
                            </NavLink>
                        </li>
                        ))}
                    </ul>
                </div>
                <div>
                    { 
                        (cart.length !== 0) && 
                                                (<Link to='/cart'>
                                                    <CartWidget />
                                                </Link>
                                                ) 
                    }
                </div>
            </div>
        </nav>
    )
}

export default NavBar;