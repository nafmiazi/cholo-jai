import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banners/banner1.jpg';
import banner2 from '../../../images/banners/banner2.jpg';
import banner3 from '../../../images/banners/banner3.jpg';
import banner4 from '../../../images/banners/banner4.jpg';
import banner5 from '../../../images/banners/banner5.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <div className="mb-5">
            <Carousel fade>
                <Carousel.Item className="overlay">
                    <img className="d-block w-100" height="520px" src={banner1} alt="First slide"/>
                    <Carousel.Caption>
                        <div className="banner1 p-5">
                            <h2 className="text-white">Get Ready to Travel</h2>
                            <h1 className="text-warning">The World</h1>
                            <h4 className="text-white">A journey of a 1000 miles starts with a single step. Get ready to travel your dream places. Your satisfication is our goal.</h4>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item className="overlay">
                    <img className="d-block w-100" height="520px" src={banner2} alt="Second slide"/>
                    <Carousel.Caption>
                        <div className="banner2 p-5">
                            <h4 className="text-warning">Enjoy The Travel With</h4>
                            <h1 className="text-info">Cholo Jai | Your Holiday Planners</h1>
                            <h4 className="text-warning">A journey of a 1000 miles starts with a single step. Get ready to travel your dream places. Your satisfication is our goal.</h4>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="overlay">
                    <img className="d-block w-100" height="520px" src={banner3} alt="Third slide"/>

                    <Carousel.Caption>
                        <div className="banner3 p-5">
                            <h4>Life is Short and</h4>
                            <h1 className="text-info">The World is Wide</h1>
                            <h4>A journey of a 1000 miles starts with a single step. Get ready to travel your dream places. Your satisfication is our goal.</h4>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="overlay">
                    <img className="d-block w-100" height="520px" src={banner4} alt="Fourth slide"/>

                    <Carousel.Caption>
                        <div className="banner4 p-5">
                            <h4 className="text-white">Get Ready to Travel</h4>
                            <h1 className="text-danger">The World</h1>
                            <h4 className="text-white">A journey of a 1000 miles starts with a single step. Get ready to travel your dream places. Your satisfication is our goal.</h4>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="overlay">
                    <img className="d-block w-100" height="520px" src={banner5} alt="Fifth slide"/>

                    <Carousel.Caption>
                        <div className="banner5 p-5">
                            <h4 className="text-white">Enjoy The Travel With</h4>
                            <h1 className="text-danger">Cholo Jai | Your Holiday Planners</h1>
                            <h4 className="text-white">A journey of a 1000 miles starts with a single step. Get ready to travel your dream places. Your satisfication is our goal.</h4>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>   
        </div>
    );
};

export default Banner;