import React from 'react'
import './NavBar.css'
import CartWidget from './CartWidget/CartWidget'
import logo from '../../assets/images/logo.png'


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container py-2 sticky-md-top color_grey rounded">
                <a className="navbar-brand" href="/index.html"><img src={logo} alt="Play 4 win" width="58" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active underline-hover" aria-current="page" href="/index.html">Games</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link underline-hover" href="#top">Accesories</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link underline-hover" href="#top">PS4</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link underline-hover" href="#top">PS5</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;