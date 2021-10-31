import React from 'react';
import slider1 from '../../images/slider/slider1.jpg';
import slider2 from '../../images/slider/slider2.jpg';
import slider3 from '../../images/slider/slider3.jpg';
import slider4 from '../../images/slider/slider4.jpg';
import slider5 from '../../images/slider/slider5.jpg';
import slider6 from '../../images/slider/slider6.jpg';
import slider7 from '../../images/slider/slider7.jpg';

const Gallery = () => {
    return (
        <div className="container">
            <div className="text-center text-white my-5 mb-3 mb-md-5">
                <p className="custom-color">GALLERY</p>
                <h2>We Record Memories</h2>
                <p>We recorded our clients best memories in our gallery</p>
            </div>
            <div className="row m-0 mb-5">
                <div className="col-lg-4">
                    <div className="row m-0">
                        <div className="col-lg-12 mb-4 bg-warning p-3">
                            <img width="100%" src={slider1} alt="" />
                        </div>
                        <div className="col-lg-12 mb-4 p-3 bg-primary">
                            <img width="100%" src={slider2} alt="" />
                        </div>
                        <div className="col-lg-12 mb-4 mb-md-0 p-3 bg-info">
                            <img width="100%" src={slider4} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="row m-0">
                        <div className="col-lg-12 mb-4 p-3 bg-danger">
                            <img width="100%" src={slider3} alt="" />
                        </div>
                        <div className="col-lg-12 mb-4 p-3 bg-info">
                            <img width="100%" src={slider4} alt="" />
                        </div>
                        <div className="col-lg-12 mb-4 mb-md-0 p-3 bg-warning">
                            <img width="100%" src={slider7} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="row m-0">
                        <div className="col-lg-12 mb-4 p-3 bg-success">
                            <img width="100%" src={slider5} alt="" />
                        </div>
                        <div className="col-lg-12 mb-4 p-3 bg-secondary">
                            <img width="100%" src={slider6} alt="" />
                        </div>
                        <div className="col-lg-12 p-3 bg-info">
                            <img width="100%" src={slider4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;