import React from "react"
import aboutImage from '../image/img/ghar.jpg'
import Navbar from "./Navbar"
import Footer from "./Footer"
import Subscribe from "./Subscribe"

const About = () => {
    return (
        <>
            <Navbar />
            <div className="card aboutContent mb-3" style={{ maxWidth: '980px' }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={aboutImage} width='325px' alt="" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title" style={{ fontSize: '3rem' }}>About Us</h5>
                            <p className="card-text">
                                <span>
                                    <h4 className="aboutSubheading">Incredible choice</h4>
                                    <p>Whether you want to stay in a chic city apartment, a luxury beach resort or a cosy B&B in the countryside, Booking.com provides you with amazing diversity and breadth of choice - all in one place.</p>
                                </span>

                                <span>
                                    <h4 className="aboutSubheading">Low rates</h4>
                                    <p>We guarantees to offer you the best available rates. And with our promise to price match, you can rest assured that you’re always getting a great deal.</p>
                                </span>

                                <span>
                                    <h4 className="aboutSubheading">Instant confirmation</h4>
                                    <p>Every reservation is instantly confirmed. Once you’ve found your perfect stay, a few clicks are all it takes.</p>
                                </span>

                                <span>
                                    <h4 className="aboutSubheading">24/7 support</h4>
                                    <p>Whether you’ve just booked or are already enjoying your trip, our customer experience team are on hand around the clock to answer your questions and advocate on your behalf in more than 40 languages. Make sure to check out our FAQ for travellers.</p>
                                </span>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Subscribe />
            <Footer />
        </>
    )
}

export default About