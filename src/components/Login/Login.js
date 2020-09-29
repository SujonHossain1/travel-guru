import React, { useState } from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import "./Login.css";
// import Header from '../Header/Header';
import facebook from '../../images/icons/fb.png';
import google from '../../images/icons/google.png';

const Login = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [newUser, setNewUser] = useState(true);
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <>
            <Container>
                <Col md={6} className="mx-auto p-4" style={{ border: '1px solid #ced4da' }}>
                    <Form onSubmit={handleSubmit(onSubmit)} className="login-form-style">
                        < p style={{ fontSize: '21', fontWeight: '600' }}>Create An Account</p>
                        {newUser && <>
                            <Form.Group>
                                <Form.Control
                                    ref={register({
                                        required: "First Name is required",
                                        minLength: {
                                            value: 2,
                                            message: "Must 2 be Characters"
                                        }
                                    })}
                                    type="text"
                                    name="firstName"
                                    placeholder="First name"
                                />
                                {errors.firstName && <span className="error">{errors.firstName.message}</span>}
                            </Form.Group>
                            <Form.Group>
                                <Form.Control
                                    ref={register({ required: "Last Name is required" })}
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                />
                                {errors.lastName && <span className="error">{errors.lastName.message}</span>}
                            </Form.Group>
                        </>}
                        <Form.Group >
                            <Form.Control
                                ref={register({
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                        message: "Invalid email address"
                                    }
                                })}
                                type="email"
                                name="email"
                                placeholder="Email Address"
                            />
                            {errors.email && <span className="error">{errors.email.message}</span>}
                        </Form.Group>
                        <Form.Group >
                            <Form.Control
                                ref={register({
                                    required: "Password is required",
                                    minLength: {
                                        value: 5,
                                        message: 'Password Must Be at least 5 Characters'
                                    }
                                })}
                                type="password"
                                name="password"
                                placeholder="Password"
                            />
                            {errors.password && <span className="error">{errors.password.message}</span>}
                        </Form.Group>
                        {newUser && <Form.Group >
                            <Form.Control
                                ref={register({
                                    validate: (value) => value === watch('password')
                                })}
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                            />
                            {errors.confirmPassword && <span className="error">Passwords don't match.</span>}
                        </Form.Group>}
                        <Button type="submit" className="btn-block btn-warning py-2">
                            {newUser ? 'Create an account' : 'Login In'}
                        </Button>
                        <p className="have-account">
                            {newUser ? 'Already have an account? ' : 'Create a new account? '}
                            <span onClick={() => setNewUser(!newUser)}> {newUser ? 'Login' : 'Sign up'} </span>
                        </p>
                    </Form>
                </Col>

                <Col md={5} className="mx-auto py-3">
                    <div className="login-with">
                        <img src={facebook} alt="" />
                        <span>Continue with Facebook</span>
                    </div>
                    <div className="login-with mt-3">
                        <img style={{ width: '28px' }} src={google} alt="" />
                        <span>Continue with Google</span>
                    </div>
                </Col>

            </Container>
        </>
    );
};

export default Login;