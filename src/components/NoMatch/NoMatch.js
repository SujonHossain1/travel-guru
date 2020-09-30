import React from 'react';
import { Link } from 'react-router-dom';
import "./NoMatch.css";

const NoMatch = () => {
    return (
        <header className="no-match d-flex justify-content-center align-items-center">
            <div className="col-md-5 mx-auto jumbotron p-3 rounded">
                <h3>404</h3>
                <p>Page Not Found</p>
                <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>
                    <button className="btn btn-warning">Go to Home</button>
                </Link>
            </div>
        </header>
    );
};

export default NoMatch;