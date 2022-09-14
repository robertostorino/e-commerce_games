import React from 'react'
import './NavBar.css'
import CartWidget from './CartWidget/CartWidget'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container py-2 sticky-md-top color_grey rounded">
                <Link to='/category' className="navbar-brand" ><img src={logo} alt="Play 4 win" width="58" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/category/ps4' className="nav-link underline-hover" >PS4</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/category/ps5' className="nav-link underline-hover" >PS5</Link>
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
