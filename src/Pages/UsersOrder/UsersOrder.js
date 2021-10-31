import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const UsersOrder = () => {
    const {users, isLoading} = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect( () => {
        fetch('https://gory-broomstick-35199.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => {
            const matchedEmail = data.filter(singleData => singleData?.email === users?.email)
            setOrders(matchedEmail);
        });
    })

    const handleDelete = id => {
        const url = `https://gory-broomstick-35199.herokuapp.com/orders/${id}`;
        fetch(url, {
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                window.confirm("Are you sure you want to cancel your booking?")
            }
        })
    }

    if(isLoading){
        return <Spinner className="spinner d-grid m-auto" animation="border" variant="danger" />
    }

    return (
        <div className="text-white row m-0">
                <div className="col-lg-9 mx-auto">
                    <h2 className="text-center my-lg-4">Your Bookings</h2>
                    <Table striped bordered hover responsive>
                        <thead className="table-secondary">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Departure Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order => <tr className="table-secondary" key={order._id}>
                                    <td>{order.name}</td>
                                    <td>{order.email}</td>
                                    <td>{order.address}</td>
                                    <td>{order.date}</td>
                                    <td>{order.status}</td>
                                    <td><button onClick={() => handleDelete(order._id)} className="btn btn-danger">Cancel Booking</button></td>
                                </tr>)
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
    );
};

export default UsersOrder;