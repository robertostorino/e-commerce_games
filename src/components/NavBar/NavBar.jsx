import React from 'react'
import './NavBar.css'
import logo from '../../assets/images/logo.png'


const NavBar = () => {
    return (
        <header className="container py-3 sticky-md-top color_grey rounded-pill">
            <div className="row ">
                <div className="col-md-11">
                    <ul className="nav d-flex align-items-center">
                        <li className="nav-item">
                            <a className="nav-link active" ariaCurrent="page" href="./index.html"><img src={logo} alt="Play 4 win" width="58" /></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active underline-hover fs-3" href="./index.html">Games</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link underline-hover fs-3" href="#">Accesories</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link underline-hover fs-3" href="#">PS4</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link underline-hover fs-3" href="#">PS5</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link underline-hover fs-3" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default NavBar;