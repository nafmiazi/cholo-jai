import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Destination from '../Destination/Destination';

const Destinations = () => {
    const[destinations, setDestinations] = useState([]);

    useEffect( () => {
        fetch('https://gory-broomstick-35199.herokuapp.com/destinations')
        .then(res => res.json())
        .then(data => setDestinations(data))
    }, [])

    return (
        <div id="destinations" className="container">
            <div className="text-center text-white">
                <p className="custom-color">OUR DESTINATIONS</p>
                <h2>Our Best Destinations</h2>
            </div>
            <div className="row m-0 mb-5">
                {
                    destinations.map(destination => <Destination destination={destination} key={destination._id} ></Destination>)
                }
            </div>
        </div>
    );
};

export default Destinations;