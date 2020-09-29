import React, { useState, useEffect } from 'react';
import { Button, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import hotelDetailsData from '../../data/hotelDetails.json';
import Header from '../Header/Header';
import star from '../../images/icons/star_1_.png';

const BedroomDetails = () => {
    const [bedroomData, setBedroomData] = useState({})
    const { bedroomId } = useParams();

    const { title, reviewed, bedroom, bed, bath, img, guest, price } = bedroomData;

    useEffect(() => {
        const newData = hotelDetailsData.find(item => item.id === parseInt(bedroomId));
        setBedroomData(newData);
    }, [bedroomId])



    return (
        <>
            <Header />
            <hr />

            <Col lg={7}
                className="py-5 d-flex justify-content-center align-items-center flex-column   my-3 mx-auto"
                style={{ border: '1px solid #9b9999', borderRadius: '15px' }}
            >
               
                    <div className="hotel-item-img">
                        <img className="img-fluid pb-3" src={img} alt="" />
                    </div>

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
                        <Button className="btn-block mt-4 btn-warning py-2">Contact Now</Button>
                    </div>
                
            </Col>

        </>
    );
};

export default BedroomDetails;