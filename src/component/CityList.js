import React from 'react'
import delhi from '../image/img/delhi.png'
import lucknow from '../image/img/Lucknow.jpg'
import bengaluru from '../image/img/bangalore.png'
import mumbai from '../image/img/mumbai.png'
import { Link } from 'react-router-dom'

const CityList = () => {
    return (
        <>
            <div className="page-container mb-5">
                <h1 className="city-heading">
                    Major Cities
                </h1>
                <div className='citylistEdit'>
                    <div className="row">
                        <div className="city-card-container col-md">
                            <Link to='list/Delhi' >
                                <div className="city-card rounded-circle">
                                    <img src={delhi} className="city-img" />
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="city-card-container col-md">
                        <Link to="list/Mumbai">
                            <div className="city-card rounded-circle">
                                <img src={mumbai} className="city-img lucknow" />
                            </div>
                        </Link>
                    </div>

                    <div className="city-card-container col-md">
                        <Link to="list/Bengaluru">
                            <div className="city-card rounded-circle">
                                <img src={bengaluru} className="city-img" />
                            </div>
                        </Link>
                    </div>

                    <div className="city-card-container col-md">
                        <Link to="list/Lucknow">
                            <div className="city-card rounded-circle">
                                <img src={lucknow} className="city-img" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CityList