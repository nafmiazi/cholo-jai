import React from 'react';
import about1 from '../../images/About/about1.jpg';
import about2 from '../../images/About/about2.jpg';
import './About.css';

const About = () => {
    return (
        <div className="row m-0">
            <div className="col-lg-3 mt-md-5 p-3 p-md-5">
                <div className="text-white mb-3 mb-md-5 text-end">
                    <p className="custom-color">OUR TEAM</p>
                    <h2 className="text-warning">Best Traveler To Guide You</h2>
                    <p className="mt-3">Cholo Jai is a trusted name in Tour Planning who is always at your side and your satisfaction is our first priority.</p>
                    <p>Cholo Jai will be administered through plan-based customizable programs that incorporate partnership between family members and the service givers for mental satisfaction. We believe in your happiness not in over profit.</p>
                    <p>Stay With Us.</p>
                </div>
            </div>
            <div className="col-lg-9 text-center p-3 p-md-5">
                <div className="row">
                    <div className="col-lg-6 mb-3 mb-md-0">
                        <img src={about1} width="100%" className="about" alt="" />
                    </div>
                    <div className="col-lg-6">
                        <img src={about2} width="100%" className="about" alt="" />
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default About;