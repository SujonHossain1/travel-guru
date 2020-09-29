import React from 'react';
import './Header.css';
import { Navbar, Nav, Container, Form } from 'react-bootstrap';
import logo from '../../images/logo.png';
import logo2 from '../../images/icons/logo.png';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const { pathname } = useLocation()
    let brandImage = logo2;
    let navLinkColor = {
        color: 'black'
    }
    if (pathname === '/' || pathname === '/booking') {
        brandImage = logo;
        navLinkColor = {
            color: 'white'
        }
    }

    return (
        <Navbar expand="lg">
            <Container>
                <Link to="/">
                    <Navbar.Brand >
                        <img className="logo-style" src={brandImage} alt="" />
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline className="mr-auto position-relative">
                        <span className="search-btn"> <i className="fas fa-search"></i></span>
                        <input
                            type="text"
                            placeholder="Search Your Destination..."
                            className="input-style form-control ml-sm-0 ml-md-3  ml-4 "
                        />
                    </Form>
                    <Nav className="ml-auto">
                        <Link className="nav-item" to="/">
                            <span style={navLinkColor} className="nav-link"> News </span>
                        </Link>
                        <Link className="nav-item" to="/">
                            <span style={navLinkColor} className="nav-link"> Destination </span>
                        </Link>
                        <Link className="nav-item" to="/hotel-details">
                            <span style={navLinkColor} className="nav-link"> Hotel Details </span>
                        </Link>
                        <Link className="nav-item" to="/">
                            <span style={navLinkColor} className="nav-link"> Contact </span>
                        </Link>
                        <Link className="nav-item" to="/login">
                            <button  className="btn btn-warning"> Login</button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;