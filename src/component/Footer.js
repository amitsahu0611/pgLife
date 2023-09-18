import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer class="bg-dark text-center text-white">
                <div class="container p-4">
                    <section class="mb-4">
                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i class="fab fa-facebook-f"></i
                        ></a>

                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i class="fab fa-twitter"></i
                        ></a>

                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i class="fab fa-google"></i
                        ></a>

                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i class="fab fa-instagram"></i
                        ></a>

                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i class="fab fa-linkedin-in"></i
                        ></a>
                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i class="fab fa-github"></i
                        ></a>
                    </section>
                    <section class="">
                        <form action="">
                            <div class="row d-flex justify-content-center">
                                <div class="col-auto">

                                </div>
                                <div class="col-md-5 col-12">
                                    <div class="form-outline form-white mb-4">
                                        <input type="email" placeholder='Email address' id="form5Example21" class="form-control" />
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <button type="submit" class="btn btn-outline-light mb-4">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>
                    <section class="mb-4">
                        <p>
                            "Welcome to the PG Life app, your gateway to a seamless living experience. Discover a wide range of PG accommodations, connect with fellow residents, and access exclusive amenities. Your ideal home awaits."
                        </p>
                    </section>
                    <section class="">
                        <div class="row">
                            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase">SOCIAL</h5>

                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" class="text-white"><TwitterIcon /></a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white"><LinkedInIcon /></a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white"><FacebookIcon /></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase">COMPANY</h5>

                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" class="text-white">About us</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Blog</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Partnerships</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Careers</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase">SOLUTIONS</h5>

                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" class="text-white">Library</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Hostels</a>
                                    </li>

                                </ul>
                            </div>
                            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase">Services</h5>

                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" class="text-white">Our Work</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Pricing</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Help Center</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Login</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </section>
                </div>

            </footer>
        </>
    )
}

export default Footer