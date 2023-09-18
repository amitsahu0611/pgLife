import React from 'react'
import Navbar from './Navbar'
import { Carousel } from 'react-bootstrap';
import first from '../image/1.jpg'
import second from '../image/2.jpg'
import third from '../image/3.jpg'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import GradeIcon from '@mui/icons-material/Grade';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Amenities from './Amenities';
import Reviews from './Reviews';
import Footer from './Footer';
import { Link, useParams } from 'react-router-dom';

const InsideHostel = () => {

    const { name, address } = useParams();
    // console.log(name);
    // console.log(address);
    //console.log(rent);
    return (
        <div>
            <Navbar />
            {/* carousel */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={first} style={{ height: '500px' }}
                                    alt="Slide 1"
                                />
                                <Carousel.Caption>
                                    <h3>Slide 1</h3>
                                    <p>Some description for Slide 1</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={second} style={{ height: '500px' }}
                                    alt="Slide 2"
                                />
                                <Carousel.Caption>
                                    <h3>Slide 2</h3>
                                    <p>Some description for Slide 2</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={third} style={{ height: '500px' }}
                                    alt="Slide 2"
                                />
                                <Carousel.Caption>
                                    <h3>Slide 3</h3>
                                    <p>Some description for Slide 2</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-9 col-sm-6">
                            <GradeIcon style={{ color: "red" }} /><GradeIcon style={{ color: "red" }} /><GradeIcon style={{ color: "red" }} /><GradeIcon style={{ color: "red" }} /><StarBorderIcon />
                            <p className='fs-5 mt-2 mb-1'>{name}</p>
                            <p>{address}</p>
                        </div>
                        <div className="col-md-3 col-sm-6 text-end">
                            <FavoriteBorderIcon />
                            <p className='me-2'>0</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 col-sm-6 mt-auto">
                            <img src={first} alt="male image" style={{ height: '50px' }} />
                            <p className='mt-3'><span className='fs-5 fw-bold f-italic'>&#8377; 5000/-</span> per month</p>
                        </div>
                        <div className="col-md-4 col-sm-6 mt-auto text-end mb-3">
                            <Link to='/'><button className='btn btn-success px-4'>Book</button></Link>
                        </div>
                    </div>
                </div>


            </div>
            <Amenities />
            <Reviews />
            <Footer />
        </div>
    )
}

export default InsideHostel;