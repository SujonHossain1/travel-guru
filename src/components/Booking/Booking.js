import React, { useContext, useState } from 'react';
import DatePicker from 'react-date-picker';
import './Booking.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { LocationContext } from '../../App';
import { Link } from 'react-router-dom';

const Booking = () => {
    const [locationData] = useContext(LocationContext);
    const [toValue, onChangeTo] = useState(new Date());
    const [fromValue, onChangeFrom] = useState(new Date());

   
    return (
        <Container className="location-layout">
            <Row className="justify-content-between">
                <Col md={5} >
                    <div className="location-details">
                        <h1> {locationData.location} </h1>
                        <p> {locationData.description} </p>

                    </div>
                </Col>
                <Col md={5}>
                    <div className="booking-cart pb-5">
                        <Form>
                            <Form.Group controlId="origin">
                                <Form.Label>Origin</Form.Label>
                                <Form.Control type="origin" defaultValue="Dhaka" />
                            </Form.Group>

                            <Form.Group controlId="destination">
                                <Form.Label>Destination</Form.Label>
                                <Form.Control disabled type="destination" defaultValue={locationData.location} />
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col} md="6" controlId="to">
                                    <Form.Label>To</Form.Label>
                                    <DatePicker className="form-control"
                                        onChange={onChangeTo}
                                        value={toValue}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="to">
                                    <Form.Label>Form</Form.Label>
                                    <DatePicker className="form-control"
                                        onChange={onChangeFrom}
                                        value={fromValue}
                                    />
                                </Form.Group>

                            </Form.Row>

                            <Link to="/hotel-details" style={{ textDecoration: "none", color: "#000" }}>
                                <Button className="btn-block btn-warning py-2">
                                    Starting Booking
                                </Button>
                            </Link>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Booking;