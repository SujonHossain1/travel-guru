import React from 'react';
import Header from '../Header/Header';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
    return (
        <header>
            <Header />
            <Container className="d-flex justify-content-center align-items-center h-75">
                <Row className="py-5">
                    <Col lg={6}>
                        <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laborum maxime harum autem porro repellat ad, quam dolor, pariatur ducimus ut temporibus exercitationem enim nihil neque! Alias in quam recusandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repellat earum natus? In tenetur saepe, autem assumenda accusantium alias rerum voluptatum ad eligendi quas corporis amet ipsam inventore voluptates! Deleniti! </p>
                    </Col>
                    <Col lg={6}>
                        <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laborum maxime harum autem porro repellat ad, quam dolor, pariatur ducimus ut temporibus exercitationem enim nihil neque! Alias in quam recusandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repellat earum natus? In tenetur saepe, autem assumenda accusantium alias rerum voluptatum ad eligendi quas corporis amet ipsam inventore voluptates! Deleniti! </p>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Contact;