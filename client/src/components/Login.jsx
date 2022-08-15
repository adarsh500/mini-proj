import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Form, Button } from 'react-bootstrap';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await res.json();
      console.log('logindata', data);

      if (data?.error) {
        const { email: emailResponse, password: passwordResponse } =
          data?.error;
        setEmailError(emailResponse);
        setPasswordError(passwordResponse);
      }

      //redirect to homepage on successful signup
      if (data?.user) {
        navigate('/home');
      }

      const status = await res.status;
      console.log(status);
      if (status === 201) {
        console.log('user login success');
      } else {
        console.log('user login failed');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login">
      <p className="title">Login</p>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="errorMessage">{emailError}</p>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="errorMessage">{passwordError}</p>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e) => loginUser(e)}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
