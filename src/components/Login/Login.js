import React, { useState, useContext } from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import "./Login.css";
import {
    initializeAppFirebase,
    signInWithGoogle,
    signUpWithEmailAndPassword,
    signInWithEmailAndPasswordOwn,
    signInWithFacebook
} from '../FirebaseManager/FirebaseManager';
import facebook from '../../images/icons/fb.png';
import google from '../../images/icons/google.png';
import { UserContext } from '../../App';
import Header from '../Header/Header';




const Login = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(true);



    initializeAppFirebase();


    // SignIn With Google
    const signInGoogle = () => {
        signInWithGoogle()
            .then(res => {
                setLoggedInUser(res);

            })
            .catch(err => {
                setLoggedInUser(err);
            })
    }

    // SignIn With Facebook
    const signInFacebook = () => {
        signInWithFacebook()
            .then(res => {
                setLoggedInUser(res);
            })
            .catch(err => {
                setLoggedInUser(err);
            })
    }

    // SingUp with First Name, Last Name, Email and Password
    const onSubmit = (data, event) => {
        const { firstName, lastName, email, password, confirmPassword } = data;

        if (newUser && firstName && lastName && email && confirmPassword) {
            const name = `${firstName} ${lastName}`;
            signUpWithEmailAndPassword(name, email, confirmPassword)
                .then(res => {
                    setLoggedInUser(res);
                    setNewUser(false);
                    event.target.reset();
                })
                .catch(err => {
                    setLoggedInUser(err);
                })
        }

        if (!newUser && email && password) {
            signInWithEmailAndPasswordOwn(email, password)
                .then(res => {
                    setLoggedInUser(res);
                })
                .catch(err => {
                    setLoggedInUser(err);
                })
        }
    }



    return (
        <>
        <Header/>
            <Container >
                <Col md={6} className="mx-auto p-4 mt-3" style={{ border: '1px solid #ced4da' }}>
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
                                        value: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
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
                        {
                            newUser && <Form.Group >
                                <Form.Control
                                    ref={register({
                                        validate: (value) => value === watch('password')
                                    })}
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                />
                                {errors.confirmPassword && <span className="error">Passwords don't match.</span>}
                            </Form.Group>
                        }
                        {
                            newUser=== false && <Form.Group className=" py-2 d-flex justify-content-between">
                                <Form.Check style={{fontSize: '14px'}} type="checkbox" label="Remember Me" />
                                <span className="forget">Forget Your Password</span>
                            </Form.Group>
                        }

                        <Button type="submit" className="btn-block btn-warning py-2">
                            {newUser ? 'Create an account' : 'Login In'}
                        </Button>

                        <p className="have-account">
                            {newUser ? 'Already have an account? ' : "Don't have an account ?"}
                            <span onClick={() => setNewUser(!newUser)}> {newUser ? 'Login' : 'Create an account'} </span>
                        </p>
                    </Form>
                    <p className="have-account">
                        {loggedInUser.isValidEmail === false && <span> Please verify your Email Address</span>}
                    </p>
                </Col>
                    
                < p style={{ fontSize: '21', fontWeight: '600'}} className="mt-3 text-center">Or</p>

                <Col md={5} className="mx-auto pb-3">
                    <div onClick={signInFacebook} className="login-with">
                        <img src={facebook} alt="" />
                        <span>Continue with Facebook</span>
                    </div>
                    <div onClick={signInGoogle} className="login-with mt-3">
                        <img style={{ width: '28px' }} src={google} alt="" />
                        <span>Continue with Google</span>
                    </div>
                </Col>

            </Container>
        </>
    );
};

export default Login;