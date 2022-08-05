import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Form, Button } from 'react-bootstrap';
import { useCookies } from 'react-cookie';

import './Login.css';

const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cookies, setCookie] = useCookies();
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  // console.log('cook', cookies);

  const createUser = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      //   console.log(req.cookie);
      const data = await res.json();
      console.log(data);

      if (data?.error) {
        const { email: emailResponse, password: passwordResponse } =
          data?.error;
        setEmailError(emailResponse);
        setPasswordError(passwordResponse);
      }

      //redirect to homepage on successful signup
      if (data?.user) {
        navigate('/');
      }

      const status = await res.status;
      console.log(status);
      if (status === 201) {
        console.log('user create success');
      } else {
        console.log('cant create user');
      }
    } catch (err) {
      console.log(err);
    }
  };

  console.log(emailError, passwordError);
  return (
    <div className="login">
      <p className="title">Signup</p>
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
        <Button variant="primary" type="submit" onClick={(e) => createUser(e)}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
