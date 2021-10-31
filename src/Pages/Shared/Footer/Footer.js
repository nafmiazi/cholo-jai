import React from 'react';
import './Footer.css';
import logo from '../../../images/logo.png';
import logo2 from '../../../images/logo2.png';

const Footer = () => {
    // Display Footer section
    return (
        <div className="row custom-footer m-0 p-5 pb-3">
            <div className="col-lg-5 text-start p-3 pt-2">
                <img src={logo} width="200px" className="me-2 mb-4 title" alt=""/> <img src={logo2} className="alt-title" alt="" /> 
                <p className="mb-4">Cholo Jai is a trusted name in Tour Planning who is always at your side and your satisfaction is our first priority.  We believe in your happiness not in over profit.Stay With Us.</p>
                <h6>Follow Us On</h6>
                <div>
                    <i className="fab fa-facebook-f me-3 icon-name"></i>
                    <i className="fab fa-twitter me-3 icon-name"></i>
                    <i className="fab fa-linkedin-in me-3 icon-name"></i>
                    <i className="fab fa-pinterest-p me-3 icon-name"></i>
                    <i className="fab fa-instagram icon-name"></i>
                </div>
            </div>
            <div className="col-lg-3 text-start">
                <h4 className="icon-name mb-4">Best Places to Visit</h4>
                <p>Kuakata, Chattogram</p>
                <p>Switzerland</p>
                <p>Italy</p>
                <p>Greece</p>
                <p>Green Lake</p>
                <p>Northen Light</p>
                <p>China</p>
                <p>Hidden Lake</p>
                <p>Vermont Lake</p>
            </div>
            <div className="col-lg-4 text-start">
                <h4 className="icon-name mb-4">Contact Us</h4>
                <h6 className="lh-lg"> 250/A, O R Nezam Road, GEC Moor, Chattogram.<i className="fas fa-map-marker-alt ms-3 icon-name"></i></h6>
                <h6 className="lh-lg"> naf71bd@gmail.com <i className="fas fa-envelope ms-3 icon-name"></i></h6>
                <h6 className="lh-lg"> +88 012345 6789 <i className="fas fa-phone-alt ms-3 icon-name"></i></h6>
                <h6 className="mt-3 icon-name">Feel free to contact with us</h6>
            </div>
            <h6 className="mt-5 ms-md-5 text-center icon-name">Copyright <i className="far fa-copyright"></i> 2021 Nurul Afsar Fahim</h6>
        </div>
    );
};

export default Footer;