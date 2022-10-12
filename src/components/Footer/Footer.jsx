import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faFacebook, faLinkedin, faGoogle} from '@fortawesome/free-brands-svg-icons'

import './Footer.css'

const Footer = () => {
    return (
        <footer className="bd-footer mt-5 py-2">
            <div className="container">
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

                    <div className="col-12 col-md-12 fs-4 text-light text-center">
                        <h3>ROBERTO STORINO</h3>
                        <p><h2>©PLAY <span className='brand-mid'>4</span> WIN</h2> 2022 Copyright</p>
                    </div>
                </div>
                
            </div>
        </footer>
    )

}

export default Footer
