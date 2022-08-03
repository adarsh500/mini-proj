import React, { useState, useEffect } from 'react';

import { Form, Button } from 'react-bootstrap';
import { useCookies } from 'react-cookie';

import './Login.css';

const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cookies, setCookie] = useCookies();

  console.log('cook', cookies);

  console.log(email, password);

  const createUser = async (e) => {
    e.preventDefault();
    try {
      const req = await fetch('http://localhost:3001/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      //   console.log(req.cookie);
      const data = await req;
      console.log(data);
      const status = await req.status;
      console.log(status);
      if (status === 200) {
        console.log('user create success');
      } else {
        console.log('cant create user');
      }
    } catch (err) {}
  };

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
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e) => createUser(e)}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
