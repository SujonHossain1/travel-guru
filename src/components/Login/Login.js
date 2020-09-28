import React from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';
import "./Login.css";
// import Header from '../Header/Header';
import facebook from '../../images/icons/fb.png';
import google from '../../images/icons/google.png';

const Login = () => {
    return (
        <>

            <Container>
                <Col md={6} className="mx-auto p-4" style={{ border: '1px solid #ced4da' }}>
                    <Form className="login-form-style">
                        < p style={{ fontSize: '21', fontWeight: '600' }}>Create An Account</p>
                        <Form.Group>
                            <Form.Control type="text" name="firstName" placeholder="First name" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" name="lastName" placeholder="Last Name" />
                        </Form.Group>
                        <Form.Group >
                            <Form.Control type="email" name="email" placeholder="Email Address" />
                        </Form.Group>
                        <Form.Group >
                            <Form.Control type="password" name="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group >
                            <Form.Control type="password" name="confirmPassword" placeholder="Confirm Password" />
                        </Form.Group>
                        <Button className="btn-block btn-warning py-2">Create an account</Button>
                        <p className="have-account">
                            Already have an account? <span> Login </span>
                        </p>
                    </Form>
                </Col>
                <Col md={5} className="mx-auto py-3">
                    <div className="login-with">
                        <img src={facebook} alt="" />
                        <span>Continue with Facebook</span>
                    </div>
                    <div className="login-with mt-3">
                        <img style={{width: '28px'}} src={google} alt="" />
                        <span>Continue with Google</span>
                    </div>
                </Col>
            </Container>
        </>
    );
};

export default Login;