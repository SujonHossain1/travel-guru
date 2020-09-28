import React from 'react';
import './Header.css';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
// import logo from '../../images/icons/logo.png';
import logo from '../../logo.svg';


const Header = () => {
    return (
        <Navbar expand="md" className="navbar-dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img className="logo-style" src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline className="mr-auto position-relative">
                        <span className="search-btn"> <i class="fas fa-search"></i></span>
                        <FormControl
                            type="text"
                            placeholder="Search Your Destination..."
                            className=" ml-4 input-style"
                        />
                    </Form>
                    <Nav className="ml-auto">
                        <Nav.Link href="home">News</Nav.Link>
                        <Nav.Link href="#link">Destination</Nav.Link>
                        <Nav.Link href="#link">Blog</Nav.Link>
                        <Nav.Link href="#link">Contact</Nav.Link>
                        <Nav.Link className="btn  btn-style " href="#link">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;