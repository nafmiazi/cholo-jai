import React from 'react';
import { Link } from 'react-router-dom';
import './Destination.css'

const Destination = (params) => {
    const{_id, img, name, about} = params.destination;
    return (
        <div className="col-md-6 col-lg-4 gy-4 gx-4">
            <div className="custom-destination-card m-auto card text-white bg-black" style={{width: '90%'}}>
                <img src={img} className="card-img-top" height="250px" alt="..."/>
                <div className="card-body custom-body bg-black border border-white">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text text-muted">{about.slice(0,100)}...</p>
                    <Link to ={`/booking/${_id}`}>
                        <button className="btn w-100 custom-button text-white">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Destination;