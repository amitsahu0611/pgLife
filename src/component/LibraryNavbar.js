import React from 'react'
import logo from '../image/logo.png'
import { Link } from 'react-router-dom'

const LibraryNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-none">
            <div className="container-fluid">
                <img src={logo} width='200px' className="navbar-brand ms-5" alt="" />

                <div className="collapse navbar-collapse fs-4" id="navbarSupportedContent">
                    <ul className="navbar-nav pe-5 ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Go Back</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default LibraryNavbar;