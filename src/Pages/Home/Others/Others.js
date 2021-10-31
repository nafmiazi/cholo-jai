import React from 'react';
import './Others.css';
import slider1 from '../../../images/slider/slider1.jpg';
import slider2 from '../../../images/slider/slider2.jpg';
import slider3 from '../../../images/slider/slider3.jpg';
import slider4 from '../../../images/slider/slider4.jpg';
import slider5 from '../../../images/slider/slider5.jpg';
import slider6 from '../../../images/slider/slider6.jpg';
import slider7 from '../../../images/slider/slider7.jpg';
import { Link } from 'react-router-dom';

const Others = () => {
    return (
        <div className="others">
            <div className="text-center text-white">
                <p className="custom-color">WHY CHOOSE US</p>
                <h2>Countless Experiences</h2>
            </div>
            <div className="row m-0 mt-5 mx-5">
                <div className="col-sm-3">
                    <div className="card mb-4 mb-md-0 text-white custom-card py-4">
                        <div className="card-body text-center">
                            <i className="far fa-3x fa-compass text-info mb-3"></i>
                            <h4 className="card-title">Experienced</h4>
                            <p className="card-text text-muted">We have Fifteen years of successfull experiance to guid our clients and satisfy them.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card mb-4 mb-md-0 text-white custom-card py-4">
                        <div className="card-body text-center">
                            <i className="fas fa-3x text-info fa-globe mb-3"></i>
                            <h4 className="card-title">Worldwide</h4>
                            <p className="card-text text-muted">We have Fifteen years of successfull experiance to guid our clients World Wide.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card mb-4 mb-md-0 text-white custom-card py-4">
                        <div className="card-body text-center">
                            <i className="fas fa-3x fa-dollar-sign text-info mb-3"></i>
                            <h4 className="card-title">Cheap</h4>
                            <p className="card-text text-muted">We guid our clients with a minimum amount of cost. We believe in support not money</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card text-white custom-card py-4">
                        <div className="card-body text-center">
                            <i className="fas fa-3x fa-headset text-info mb-3"></i>
                            <h4 className="card-title">24/7 Service</h4>
                            <p className="card-text text-muted">We have Fifteen years of successfull experiance to give 24/7 hours service.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-black my-5 py-5">
                <div className="text-center text-white mb-3 mb-md-5">
                    <p className="custom-color">GALLERY</p>
                    <h2>We Record Memories</h2>
                </div>
                <div className="container">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-6 mb-3 mb-md-0 col-md-3">
                                        <img src={slider1} className="d-block w-100 rounded" height="300px" alt="..."/>
                                    </div>
                                    <div className="col-6 mb-3 mb-md-0 col-md-3">
                                        <img src={slider2} className="d-block w-100 rounded" height="300px" alt="..."/>
                                    </div>
                                    <div className="col-6 mb-3 mb-md-0 col-md-3">
                                        <img src={slider3} className="d-block w-100 rounded" height="300px" alt="..."/>
                                    </div>
                                    <div className="col-6 mb-3 mb-md-0 col-md-3">
                                        <img src={slider4} className="d-block w-100 rounded" height="300px" alt="..."/>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                            <div className="row">
                                    <div className="col-6 mb-3 mb-md-0 col-md-3">
                                        <img src={slider4} className="d-block w-100 rounded" height="300px" alt="..."/>
                                    </div>
                                    <div className="col-6 mb-3 mb-md-0 col-md-3">
                                        <img src={slider5} className="d-block w-100 rounded" height="300px" alt="..."/>
                                    </div>
                                    <div className="col-6 mb-3 mb-md-0 col-md-3">
                                        <img src={slider6} className="d-block w-100 rounded" height="300px" alt="..."/>
                                    </div>
                                    <div className="col-6 mb-3 mb-md-0 col-md-3">
                                        <img src={slider7} className="d-block w-100 rounded" height="300px" alt="..."/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="text-center mt-5">
                        <Link to="/gallery">
                            <button className="btn btn-lg btn-outline-info mx-auto">View More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Others;