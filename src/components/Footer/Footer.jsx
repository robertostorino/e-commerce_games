import React from "react"

import './Footer.css'

const Footer = () => {
    return (
        <footer className="bd-footer mt-5 py-2">
            <div className="container">
                <div className="row ">
                    <div className="col-md-4 item text-light">
                        <h2>Contact</h2>
                        <ul className="ps-3 list-unstyled ">
                            <li className="fs-4 text-light">Games Playstation 4</li>
                            <li className="fs-4 text-light">Games Playstation 5</li>
                            <li className="fs-4 text-light">Joysticks</li>
                            <li className="fs-4 text-light">Headsets</li>
                            
                        </ul>
                    </div>
                    
                    <div className="col-md-4 item">
                        <ul className="list-unstyled d-flex align-items-center">
                            <li><a href="https://www.instagram.com"><i className="fa-brands fa-instagram fs-1 p-3"></i></a></li>
                            <li><a href="https://www.facebook.com"><i className="fa-brands fa-facebook-f fs-1 p-3"></i></a></li>
                            <li><a href="mailto:storino.roberto@gmail.com"><i className="fa-solid fa-envelope fs-1 p-3"></i></a></li>
                        </ul>
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
