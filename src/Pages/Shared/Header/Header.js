import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../../images/logo.png';
import logo2 from '../../../images/logo2.png';
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
const Header = () => {
    const {users, logOut} = useAuth();
    return (
        <>
            <Navbar className="nav-bar p-2 ps-0 navigation" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand className="fw-bold nav-logo" href="#home"><img src={logo} width="200px" className="me-2 title" alt=""/> <img src={logo2} className="alt-title" alt="" /> </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} className="nav-color" to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} className="nav-color" to="/home#destinations">Destinations</Nav.Link>
                        <Nav.Link as={Link} className="nav-color" to="/about">About Us</Nav.Link>
                        <Nav.Link as={Link} className="nav-color" to="/gallery">Gallery</Nav.Link>
                        <Nav.Link as={Link} className="nav-color" to="/dashboard">Dashboard</Nav.Link>
                        {users?.email ? 
                            <button onClick={logOut} className="btn btn-warning"><i className="fas fa-sign-out-alt"></i> Logout</button>:
                            <Nav.Link as={Link} className="nav-color" to="/login">
                                <button className="btn btn-primary"><i className="fas fa-sign-in-alt"></i> Login</button>
                            </Nav.Link>
                        }
                        <Navbar.Text className="text-white ms-3 mt-2">
                            <h6 className="user-name">{users.displayName}</h6>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;