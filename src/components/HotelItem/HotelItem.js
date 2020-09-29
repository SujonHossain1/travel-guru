import React from 'react';
import './HotelItem.css';
import star from '../../images/icons/star_1_.png';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HotelItem = ({ hotelItem }) => {

    const { id, title, reviewed, bedroom, bed, bath, img, guest, price } = hotelItem;

    return (
        <Link to={"/bedroom-details/" + id} className="link">
            <Row>
                <Col lg={5}>
                    <div className="hotel-item-img">
                        <img className="img-fluid pb-3" src={img} alt="" />
                    </div>
                </Col>
                <Col lg={7}>
                    <div className="hotel-item-details">
                        <h5> {title} </h5>
                        <div className="hotel-item-beds pb-3">
                            <span>{guest} guests </span> <span> {bedroom} bedrooms </span> <span>{bed} beds </span> <span>{bath} baths </span>
                        </div>
                        <p>Wif air conditioning kitchen</p>
                        <p>Cancellation flexibility available</p>
                        <div className="hotel-item-count">
                            <span>
                                <img style={{ width: '17px', marginTop: '-7px' }} src={star} alt="" />
                                <span>{reviewed} (20)</span>
                            </span>
                            <span>
                                ${price}/<span style={{ color: ' #9b9999' }}>Night</span>
                            </span>
                            <span style={{ color: ' #9b9999' }}>167 total</span>
                        </div>
                    </div>
                </Col>
            </Row>
        </Link>
    )
}

export default HotelItem;