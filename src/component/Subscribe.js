import React from 'react'

const Subscribe = () => {
    return (
        <div className="cont">
            <span className='spaning'>Save time, save money!</span>
            <div class="input-group inputSubs">
                <input type="search" class="form-control rounded" placeholder="Your Email" aria-label="Search" aria-describedby="search-addon" />
                <button type="button" class="btn btn-primary">Subscribe</button>
            </div>
        </div>
    )
}

export default Subscribe;