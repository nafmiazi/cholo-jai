import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddDestination.css';

const AddDestination = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://gory-broomstick-35199.herokuapp.com/destinations', data)
        .then(res => {
            if(res.data.insertedId){
                alert("Added Successfully");
                reset();
            }
        })
    };
    
    return (
        <div className="add-destination p-4 my-5 w-50 m-auto">
            <>
                <h2 className="text-center text-warning mb-4">Add New Destination</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true})} placeholder="Name"/>
                    <input {...register("img", { required: true})} placeholder="Image Url"/>
                    <textarea {...register("about", { required: true})} placeholder="Description"/>
                    <input className="btn btn-warning" type="submit" value="Add Destination"/>
                </form>
            </>
        </div>
    );
};

export default AddDestination;