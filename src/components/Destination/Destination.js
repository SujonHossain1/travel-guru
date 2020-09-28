import React, { useContext, useState } from 'react';
import './Destination.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import img1 from '../../images/Rectangle-1.png';
import img2 from '../../images/sundorbon.png';
import img3 from '../../images/Sreemongol.png';
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
                <Col md={5} >
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

                <Col md={7}>
                    <Row >
                        <Col onClick={() => handleDestination("coxs-bazar")} md={4} className="p-3">
                            <div className="img-overlay">
                                <img className="img-style img-fluid" src={img1} alt="" />
                                <div className={selectedDestination === 'coxs-bazar' ? "active-overlay" : "overlay"}>
                                    <h2>Cox's Bazar</h2>
                                </div>
                            </div>
                        </Col>
                        <Col onClick={() => handleDestination("sreemongol")} md={4} className="p-3">
                            <div className="img-overlay">
                                <img className=" img-fluid" src={img2} alt="" />
                                <div className={selectedDestination === 'sreemongol' ? "active-overlay" : "overlay"}>
                                    <h2>Sreemongol</h2>
                                </div>
                            </div>
                        </Col>
                        <Col onClick={() => handleDestination("sajek")} md={4} className="p-3">
                            <div className="img-overlay">
                                <img className="img-fluid" src={img3} alt="" />
                                <div className={selectedDestination === 'sajek' ? "active-overlay" : "overlay"}>
                                    <h2>Sajek Valley</h2>
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