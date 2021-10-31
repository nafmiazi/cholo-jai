import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Dashboard.css'

const Dashboard = () => {
    const {users} = useAuth();
    return (
        <div className="row m-0 my-5 dashboard">
            <div className="col-lg-6 private-nav text-white py-3 text-center">
                <div className="mt-md-5">
                    <h4>Dashboard</h4>
                    <p>Lets explore your bookings</p>
                </div>
                <div>
                    <Link className="btn link1 me-3 text-white link" to="/usersOrder">See Your Bookings</Link>
                    <Link className="btn link2 me-3 text-white link" to="/allBookings">All Bookings</Link>
                    <Link className="btn mt-3 mt-md-0 link3 text-white link" to="/addDestination">Add Destination</Link>
                </div>
            </div>
            <div className="col-lg-6 p-4 p-md-5 text-white text-center">
                <img width="20%" className="border rounded-circle mb-2" src={users.photoURL} alt="" />
                <h2>Hey <span className="text-warning">{users.displayName}</span> Welcome!!!</h2>
                <p>We are really happy to have you with us.</p>
                <p>STAY WITH US. HAVE A NICE DAY</p>
            </div>
        </div>
    );
};

export default Dashboard;