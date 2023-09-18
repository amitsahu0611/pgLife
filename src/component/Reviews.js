import React from 'react'
import StarOutlineIcon from '@mui/icons-material/StarRate';
import image from '../image/img/man.png'
import logo from '../image/img/dp.jpg'

const Testimonial = () => {
    return (
        <div id='testimonial' className='work-section-wrapper'>
            <div className="work-section-top">
                <p className="primary-subheading pb-1">Testimonial</p>
                <h1 className="primary-heading fs-3">What They Are Saying</h1>
                <p className="primary-text  fs-5">
                    How user-friendly is the app? Is it easy to navigate and use? How would you rate the PGLife app overall?
                </p>
            </div>

            <div className="testimonial-section-bottom">
                <img style={{ width: '100px', borderRadius: '50%' }} src={image} alt="" />
                <h2>Narayan</h2>
                <p>"The PGLife website is a treasure trove of knowledge and inspiration. Its engaging articles, insightful resources, and user-friendly design make it a go-to platform for anyone seeking personal growth and fulfillment."</p>
                <div className="testimonials-stars-container">
                    <StarOutlineIcon />
                    <StarOutlineIcon />
                    <StarOutlineIcon />
                    <StarOutlineIcon />
                    <StarOutlineIcon />
                </div>

            </div>
            <div className="testimonial-section-bottom">
                <img style={{ width: '100px', borderRadius: '50%' }} src={logo} alt="" />
                <h2>Joy.</h2>
                <p>"The PGLife website is a transformative hub of wisdom and inspiration. Its diverse resources, engaging community, and intuitive interface make it an essential tool for personal growth seekers. Highly recommended!"</p>
                <div className="testimonials-stars-container">
                    <StarOutlineIcon />
                    <StarOutlineIcon />
                    <StarOutlineIcon />
                    <StarOutlineIcon />
                    <StarOutlineIcon />
                </div>

            </div>



        </div>
    )
}

export default Testimonial