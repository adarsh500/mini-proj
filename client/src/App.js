import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Nav, Navbar } from 'react-bootstrap';

import './App.css';

function App() {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);

  const logout = () => {
    fetch('/logout');
  };
  const goHome = () => {
    navigate('/');
  };

  useEffect(() => {
    goHome();
  }, []);

  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Crime Records</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">SignUp</Nav.Link>
            <Nav.Link onClick={() => logout()}>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
