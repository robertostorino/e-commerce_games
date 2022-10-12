import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons'

import { Link } from "react-router-dom"
import { getDocs, collection, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from "react"

import './Footer.css'

const Footer = () => {
    const [cat1, setCat1] = useState([]); //Hook para el estado de listas de categorías

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
            const categoryList = response.docs.map((cat1) => {
                return {
                    id: cat1.id,
                    ...cat1.data(),
                };
            });
            setCat1(categoryList);
        });
    }, []);
    
    return (
        <footer className="bd-footer mt-5 py-2">
            <div className="container">
                <div className="row">
                    <div className="singleCol social-media-icons-white d-flex justify-content-evenly">
                        {cat1.map((category) => (
                            <Link 
                                key={category.id}
                                to={`/category/${category.path}`} 
                                className="nav-link underline-hover text-white" 
                            >
                                {category.name}
                            </Link>
                        ))}
                    </div>
                </div>
                <br />
                <div className="row">
                    <h3 className="text-center text-white">Contact</h3>
                </div>
                <div className="row ">
                    <div className="singleCol social-media-icons-white d-flex justify-content-evenly">
                        <a href="https://www.instagram.com">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://www.facebook.com">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://www.linkedin.com/in/roberto-cesar-storino-624326179/">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="mailto:storino.roberto@gmail.com">
                            <FontAwesomeIcon icon={faGoogle} />
                        </a>
                    </div>

                    <hr className="text-primary"/>

                    <div className="col-12 col-md-12  text-light text-center">
                        <h4>ROBERTO STORINO</h4>
                        <h5>©PLAY <span className='brand-mid'>4</span> WIN</h5> 
                        <p>2022 Copyright</p>
                    </div>
                </div>
            </div>
        </footer>
    )

}

export default Footer
