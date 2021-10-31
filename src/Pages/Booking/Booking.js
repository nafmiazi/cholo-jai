import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './Booking.css';

const Booking = () => {
    const {users} = useAuth();
    const{id} = useParams();
    const [booking, setBooking] = useState({})

    useEffect( () => {
        fetch(`https://gory-broomstick-35199.herokuapp.com/destinations/${id}`)
        .then(res => res.json())
        .then(data => setBooking(data));
    }, [])

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.status = "Pending";
        axios.post('https://gory-broomstick-35199.herokuapp.com/orders', data)
          .then(res => {
            if(res.data.insertedId){
                alert("Added Successfully");
                reset();
            }
          })
    };

    return (
        <div>
            <div className="row p-3 p-md-5 m-0">
                <div className="col-lg-6 text-white p-3 p-md-4 mt-5 bg-secondary rounded">
                    <div className="text-center">
                        <img className="destination-img" src={booking.img} width="100%" height="500px" alt="" />
                    </div>
                    <div className="">
                        <h2 className="text-warning pt-lg-3">{booking.name}</h2>
                        <p className="text-white pt-lg-3">{booking.about}</p>
                    </div>
                </div>
                
                <div className="col-lg-6 mt-5 bg-info rounded text-center">
                    <div className="mt-lg-5 py-5 py-md-0">
                        <h3 className="mt-lg-5 text-black">Please Add Few Informations</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("name", { required: true })} value={users?.displayName || ''} className="w-75 mt-4 rounded border-0"/> <br />
                            <input {...register("email", { required: true })} value={users?.email || ''} className="w-75 mt-4 rounded border-0"/> <br />
                            <input type="number" {...register("age", { min: 18, max: 99 })} className="w-75 mt-4 rounded border-0" placeholder="Age"/> <br />
                            <input {...register("destination", { required: true })} value={booking?.name || ''} className="w-75 mt-4 rounded border-0"/> <br />
                            <textarea {...register("address", { required: true, maxLength: 40 })} placeholder="Your Location"  className="w-75 mt-4 rounded border-0"/> <br />
                            <input {...register("members", { required: true })} placeholder="Total Members"  className="w-75 mt-4 rounded border-0"/> <br />
                            <input type="date" {...register("date", { required: true })} className="w-75 rounded border-0 mt-4"/> <br />
                            <input className="btn btn-warning mt-4 w-75" type="submit" value="Confirm Booking"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;