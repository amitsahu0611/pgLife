import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/pglife.png'


const Navbar = () => {

    return (
        // {{!-- ----------- Header part start ----------------- --}}
        <div className="header sticky-top">
            <nav className="navbar navbar-expand-md navbar-light pt-0">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt='logo' style={{ height: "80px",paddingLeft:'40px' }} />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#my-navbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="my-navbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                <i className="fa-solid fa-house"></i>Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                <i className="fa-solid fa-pen"></i>About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href='#' data-toggle="modal" data-target="#signup-modal">
                                <i className="fa-solid fa-address-card"></i>Signup
                            </Link>
                        </li>
                        <div className="nav-vl"></div>
                        <li className="nav-item">
                            <Link className="nav-link" href='#' data-toggle="modal" data-target="#login-modal">
                                <i className="fas fa-sign-in-alt"></i>Login
                            </Link>
                        </li>
                        {/* {{! <div className='nav-name'>
                        Hi
                    </div> }} */}
                        <div className="nav-vl"></div>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                <i className="fas fa-user"></i>Dashboard
                            </Link>
                        </li>
                        <div className="nav-vl"></div>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                <i className="fas fa-sign-out-alt"></i>Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav >
        </div>
    )
}
{/* {{!-- ----------- Header part end ----------------- --}} */ }

export default Navbar