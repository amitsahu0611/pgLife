import React from 'react'
import cover from '../image/coverImage.jpeg'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import GradeIcon from '@mui/icons-material/Grade';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Navbar from './Navbar';
import jsonData from '../Hosteldata.json'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const List = () => {
    // console.log(jsonData[0].hostels[0]);
    const { city, search } = useParams();
    if (city === 'Delhi' || search === 'Delhi') {
        return <DelhiHostels hostel={jsonData[1].hostels} />;
    } else if (city === 'Bengaluru' || search === 'Bengaluru') {
        return <BengaluruHostels hostel={jsonData[0].hostels} />;
    } else if (city === 'Lucknow' || search === 'Lucknow') {
        return <LucknowHostels hostel={jsonData[2].hostels} />;
    } else if (city === 'Mumbai' || search === 'Mumbai') {
        return <MumbaiHostels hostel={jsonData[3].hostels} />;
    }
}

function BengaluruHostels({ hostel }) {
    return (
        <>
            <Navbar />
            <div className="outerContainer">

                <div className='hostelCardEdit'>
                    {hostel && hostel.map((host) => {
                        return (
                            <div className="card mt-5 p-3" style={{ width: '740px', height: '350px' }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={cover} className="img-fluid rounded-start" alt="anything" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-9">
                                                    <GradeIcon style={{ color: "red" }} /><GradeIcon style={{ color: "red" }} /><GradeIcon style={{ color: "red" }} /><GradeIcon style={{ color: "red" }} /><StarBorderIcon />
                                                    <p className='fs-5 mt-2 mb-1'>{host.address}</p>
                                                    <p>{host.name}</p>
                                                </div>
                                                <div className="col-md-3 text-end">
                                                    <FavoriteBorderIcon />
                                                    <p className='me-2'>0</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-8">
                                                    <img src={host.filter} alt="male image" style={{ height: '50px' }} />
                                                    <p className='mt-3'><span className='fs-5 fw-bold f-italic'>&#8377; {host.rent}/-</span> per month</p>
                                                </div>
                                                <div className="col-md-4 align-self-end">
                                                    <Link to={`/insideHostel/${host.name}/${host.address}/${host.rent}`}><button className='btn btn-success px-4'>View</button></Link>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )
                    }
                </div>
            </div>
        </>
    )
}

function DelhiHostels({ hostel }) {
    return (
        <>
            <Navbar />
            <div className="outerContainer">

                <div className='hostelCardEdit'>
                    {hostel && hostel.map((host) => {
                        return (
                            <div className="card mt-5 p-3" style={{ width: '740px', height: '350px' }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={cover} className="img-fluid rounded-start" alt="anything" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-9">
                                                    <GradeIcon style={{ color: "red" }} /><GradeIcon style={{ color: "red" }} /><GradeIcon style={{ color: "red" }} /><GradeIcon style={{ color: "red" }} /><StarBorderIcon />
                                                    <p className='fs-5 mt-2 mb-1'>{host.address}</p>
                                                    <p>{host.name}</p>
                                                </div>
                                                <div className="col-md-3 text-end">
                                                    <FavoriteBorderIcon />
                                                    <p className='me-2'>0</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-8">
                                                    <img src={host.filter} alt="male image" style={{ height: '50px' }} />
                                                    <p className='mt-3'><span className='fs-5 fw-bold f-italic'>&#8377; {host.rent}/-</span> per month</p>
                                                </div>
                                                <div className="col-md-4 align-self-end">
                                                    <Link to={`/insideHostel/${host.name}/${host.address}`}><button className='btn btn-success px-4'>View</button></Link>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )
                    }
                </div>
            </div>
        </>
    )
}

function LucknowHostels({ hostel }) {
    return (
        <>
            <Navbar />
            <div className="outerContainer">

                <div className='hostelCardEdit'>
                    {hostel && hostel.map((host) => {
                        return (
                            <div className="card mt-5 p-3" style={{ width: '740px', height: '350px' }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={cover} className="img-fluid rounded-start" alt="anything" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-9">
                                                    <GradeIcon style={{ color: "red" }} /><GradeIcon style={{ color: "red" }} /><GradeIcon style={{ color: "red" }} /><GradeIcon style={{ color: "red" }} /><StarBorderIcon />
                                                    <p className='fs-5 mt-2 mb-1'>{host.address}</p>
                                                    <p>{host.name}</p>
                                                </div>
                                                <div className="col-md-3 text-end">
                                                    <FavoriteBorderIcon />
                                                    <p className='me-2'>0</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-8">
                                                    <img src={host.filter} alt="male image" style={{ height: '50px' }} />
                                                    <p className='mt-3'><span className='fs-5 fw-bold f-italic'>&#8377; {host.rent}/-</span> per month</p>
                                                </div>
                                                <div className="col-md-4 align-self-end">
                                                    <Link to={`/insideHostel/${host.name}/${host.address}`}><button className='btn btn-success px-4'>View</button></Link>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )
                    }
                </div>
            </div>
        </>
    )
}

function MumbaiHostels({ hostel }) {
    return (
        <>
            <Navbar />
            <div className="outerContainer">

                <div className='hostelCardEdit'>
                    {hostel && hostel.map((host) => {
                        return (
                            <div className="card mt-5 p-3" style={{ width: '740px', height: '350px' }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={cover} className="img-fluid rounded-start" alt="anything" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-9">
                                                    <GradeIcon style={{ color: "red" }} /><GradeIcon style={{ color: "red" }} /><GradeIcon style={{ color: "red" }} /><GradeIcon style={{ color: "red" }} /><StarBorderIcon />
                                                    <p className='fs-5 mt-2 mb-1'>{host.address}</p>
                                                    <p>{host.name}</p>
                                                </div>
                                                <div className="col-md-3 text-end">
                                                    <FavoriteBorderIcon />
                                                    <p className='me-2'>0</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-8">
                                                    <img src={host.filter} alt="male image" style={{ height: '50px' }} />
                                                    <p className='mt-3'><span className='fs-5 fw-bold f-italic'>&#8377; {host.rent}/-</span> per month</p>
                                                </div>
                                                <div className="col-md-4 align-self-end">
                                                    <Link to={`/insideHostel/${host.name}/${host.address}`}><button className='btn btn-success px-4'>View</button></Link>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )
                    }
                </div>
            </div>
        </>
    )
}



export default List;
export { BengaluruHostels, MumbaiHostels, LucknowHostels, DelhiHostels };