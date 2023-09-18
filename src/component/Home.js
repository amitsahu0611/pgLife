import React from 'react'
import bg from '../image/img/bg.png'
import Navbar from './Navbar'
import Footer from './Footer'
import about from '../image/img/about.jpg'
import { Link } from "react-router-dom"
import CityList from './CityList'
import LiibraryLinkHome from './LiibraryLinkHome'

const Home = () => {


    return (
        <>
            <Navbar />
            {/* {{!-- ----------- content part start ----------------- --}} */}
            <div className="banner-container" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(255, 255, 255, 0.3)), url(${bg})` }} >
                <h2 className="white pb-3">Happiness per Square Foot</h2>

                <form id="search-form" method="GET">
                    <div className="input-group city-search">
                        <input type="text" className="form-control input-city" id="city" name="city"
                            placeholder="Enter your city to search for PGs" />
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-secondary">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            {/* {{!-- ----------- container part end ----------------- --}} */}
            <div classNameName="page-container px-4" id="about">
                <h1 classNameName="text-center mb-5"></h1>
                <div classNameName="row gx-5 mt-5">

                    <div classNameName="col-md-6 shadow p-3 pt-5 mb-5 bg-body rounded text-center mt-5">
                        <img src={about} alt="about" height="200px" />
                    </div>
                    <div classNameName="col-md-6 text-center fs-5 py-4 mt-5">
                        <p>"PGlife is your comprehensive companion for PG living. Find ideal accommodations, connect with roommates, and access our student library for academic resources, creating a seamless and enriching experience for students in PGs.".
                        </p>
                        <Link to="/about"><button classNameName="shadow p-2 mb-3 bg-light rounded">About</button></Link>
                    </div>
                </div>
            </div>
            {/* <List /> */}
            <CityList />
            <LiibraryLinkHome />
            <Footer />
        </>
    )
}

export default Home;