import React, {useState} from 'react';
import './Destination.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import img1 from '../../images/Rectangle-1.png';
import img2 from '../../images/sundorbon.png';
import img3 from '../../images/Sreemongol.png';

const Destination = () => {
    const [style, setStyle] = useState()
    return (
        <Container className="destination">
            <Row>
                <Col md={5} >
                    <div className="destination-details">
                        <h1>Cox's Bazar</h1>
                        <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...
                        </p>
                        <Button className="btn-style"> Booking <i class="fas fa-arrow-right"></i> </Button>
                    </div>
                </Col>
                <Col md={7}>
                    <Row >
                        <Col md={4} className="p-3">
                            <div  className="img-overlay">
                                <img className="img-style img-fluid" src={img1} alt="" />
                                <div className="active">
                                    <h2>Cox's Bazar</h2>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className="p-3">
                        <div className="img-overlay">
                                <img className=" img-fluid" src={img2} alt="" />
                                <div className="overlay">
                                    <h2>Sreemongol</h2>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className="p-3">
                        <div className="img-overlay">
                                <img className="img-fluid" src={img3} alt="" />
                                <div className="overlay">
                                    <h2>Sreemongol</h2>
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