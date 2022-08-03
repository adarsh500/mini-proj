import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Login.css';

const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  console.log(email, password);

  const createUser = () => {};

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
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
