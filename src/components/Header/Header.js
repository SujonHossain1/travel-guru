import React from 'react';
import './Header.css';
import { Navbar, Nav, Container, Form } from 'react-bootstrap';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar expand="md" className="navbar-light">
            <Container>
                <Link to="/">
                    <Navbar.Brand >
                        <img className="logo-style" src={logo} alt="" />
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline className="mr-auto position-relative">
                        <span className="search-btn"> <i className="fas fa-search"></i></span>
                        <input
                            type="text"
                            placeholder="Search Your Destination..."
                            className="input-style form-control ml-4 "
                        />
                    </Form>
                    <Nav className="ml-auto">
                        <Link className="nav-item" to="/">
                            <span className="nav-link"> News </span>
                        </Link>
                        <Link className="nav-item" to="/">
                            <span className="nav-link"> Destination </span>
                        </Link>
                        <Link className="nav-item" to="/">
                            <span className="nav-link"> Blog </span>
                        </Link>
                        <Link className="nav-item" to="/">
                            <span className="nav-link"> Contact </span>
                        </Link>
                        <Link className="nav-item" to="/login">
                            <button className="btn btn-warning"> Login</button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;