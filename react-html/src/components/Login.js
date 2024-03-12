import React from 'react';
import { Helmet } from "react-helmet";
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
        <Helmet>
        <title>{'Login | Admin Theme'}</title>
        </Helmet>

        <div className="wrapper login-wrapper">
    {/* Start Login block */}
    <div className="login-table">
    <div className="login-table-cell">
    <div className="container">
    <div className="row align-items-center">
    <div className="col-xl-5 col-md-6 login-content">
    <h1>Please Login</h1>
    <p className="medium-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
    </div>
    <div className="col-xl-5 col-md-6 ml-auto">
    <form className="login-form" action="dashboard.html">
    <h2><em>Web</em>Admin</h2>
    <Form.Group>
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" value="johnscott@gmail.com" />
    </Form.Group>
    <Form.Group>
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" value="johnscott@gmail.com" />
    </Form.Group>
    <Form.Group className="clearfix">
    <Form.Check
    custom
    id='check-01'
    htmlFor='check-01'
    label='Remember Me'
    className='rememberme-check'
    />
    <a onClick={e => e.preventDefault()} href="-" title="Forgot Password?" className="forgot-psw">Forgot Password?</a>
    </Form.Group>

    <div className="buttons clearfix">
    <Link className="btn btn-primary" to='/Dashboard'>Sign In</Link>
    <Button variant="secondary">Register</Button>
    </div>
    </form>
    </div>
    </div>
    </div>
    </div>
    </div>
{/* End Login block */}
</div>

{/* Start Footer */}
<div className="container">
<footer className="footer login-footer">
<p className="copyright">2017 &copy; Sandip - The Ultimate Responsive Admin Template.</p>
</footer>
</div>
{/* End Footer */}
</>
);
};

export default Login;