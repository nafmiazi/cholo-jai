import React, { useEffect, useState } from 'react';
import { Table, Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const AllBookings = () => {
    const [allBookings, setAllBookings] = useState([]);

    useEffect( () => {
        fetch('https://gory-broomstick-35199.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setAllBookings(data));
    })

    const handleDelete = id => {
        const url = `https://gory-broomstick-35199.herokuapp.com/orders/${id}`;
        fetch(url, {
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                window.confirm("Are you sure you want to cancel your booking?");
            }
        })
    }

    const handleUpdateStatus = id => {
        const url = `https://gory-broomstick-35199.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allBookings)
        })
        .then()
    }

    const {isLoading} = useAuth();
    if(isLoading){
        return <Spinner className="spinner d-grid m-auto" animation="border" variant="danger" />
    }
    return (
        <div>
            <div className="text-white row m-0">
                <div className="col-lg-9 mx-auto">
                    <h2 className="text-center my-lg-4">Manage All Clients Booking</h2>
                    <Table striped bordered hover responsive>
                        <thead className="table-secondary">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Departure Date</th>
                                <th>Status</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allBookings.map(bookings => <tr className="table-secondary" key={bookings._id}>
                                    <td>{bookings.name}</td>
                                    <td>{bookings.email}</td>
                                    <td>{bookings.address}</td>
                                    <td>{bookings.date}</td>
                                    <td>{bookings.status}</td>
                                    <td className="text-center"><button onClick={() => handleDelete(bookings._id)} className="btn btn-sm btn-danger me-2 mb-2 mb-md-0">Cancel Booking</button><button onClick={() => handleUpdateStatus(bookings._id)} className="btn btn-sm btn-warning">Update</button></td>
                                </tr>)
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default AllBookings;