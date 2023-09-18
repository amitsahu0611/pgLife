import React from 'react'

const LiibraryLinkHome = () => {
    return (
        <div>
            <div className="card text-center cardHeaderEdit border-0">
                <div className="card-header border-0">
                    <h3 className='pt-4'>ＢＯＯＫＨＥＲＯ</h3>
                </div>
                <div className="card-body border-0">
                    <h3 className="card-title mb-3">find book of your choice</h3>
                    <p className="card-text mb-0 fs-5">"Escape to a world of stories, where dreams take flight and knowledge knows no bounds</p>
                    <p className="card-text mb-3 fs-5">Experience it all through your library app."</p>
                    <a href="/library" className="btn btn-primary">Explore Library</a>
                </div>
                <div className="card-footer pb-5 border-0 text-muted">
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default LiibraryLinkHome;