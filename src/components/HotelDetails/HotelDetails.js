import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HotelItem from '../HotelItem/HotelItem';
import hotelDetailsData from '../../data/hotelDetails.json';
import Header from '../Header/Header';

const HotelDetails = () => {
    return (
        <>
            <Header />
            <hr/>
            <Container>
                <Row>
                    <Col md={8}>
                        {
                            hotelDetailsData.map(hotelItem => <HotelItem
                                hotelItem={hotelItem} key={hotelItem.id}
                            />)
                        }
                    </Col>
                    <Col md={4}>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default HotelDetails;