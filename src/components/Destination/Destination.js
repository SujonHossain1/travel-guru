import React, { useContext, useState } from 'react';
import './Destination.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import data from '../../data/destination.json';
import { LocationContext } from '../../App';

const Destination = () => {
    const [locationData, setLocationData] = useContext(LocationContext);
    const [selectedDestination, setSelectedDestination] = useState('coxs-bazar');

    const handleDestination = (destination) => {
        const newData = data.find(item => item.destination === destination);
        setLocationData(newData);
        setSelectedDestination(destination);
    }
    if (!locationData.location) {
        const newData = data.find(item => item.destination === selectedDestination);
        setLocationData(newData);
    }



    return (
        <Container className="location-layout">
            <Row>
                <Col lg={5} >
                    <div className="location-details">
                        <h1> {locationData.location} </h1>
                        <p>
                            {locationData.description?.substr(0, 200) + "..."}
                        </p>
                        <Link to="/booking">
                            <Button className="btn btn-warning">
                                Booking <i className="fas fa-arrow-right"></i>
                            </Button>
                        </Link>
                    </div>
                </Col>

                <Col lg={7}>
                    <Row >
                        <Col onClick={() => handleDestination("coxs-bazar")} lg={4} className="p-3">
                            <div className="img-overlay">
                                <div className="img-style img1"></div>
                                <div className={selectedDestination === 'coxs-bazar' ?
                                    "active-overlay"
                                    : "overlay"
                                }>
                                    <h2>Cox's Bazar</h2>
                                </div>
                            </div>
                        </Col>
                        <Col onClick={() => handleDestination("sreemongol")} lg={4} className="p-3">
                            <div className="img-overlay">
                                <div className="img-style img2"></div>
                                <div className={selectedDestination === 'sreemongol' ? "active-overlay" : "overlay"}>
                                    <h2>Sreemongol</h2>
                                </div>
                            </div>
                        </Col>
                        <Col onClick={() => handleDestination("sundarbans")} lg={4} className="p-3">
                            <div className="img-overlay">
                                <div className="img-style img3"></div>
                                <div className={selectedDestination === 'sundarbans' ? "active-overlay" : "overlay"}>
                                    <h2>Sundarbans</h2>
                                </div>
                            </div>
                        </Col>
                        
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Destination;