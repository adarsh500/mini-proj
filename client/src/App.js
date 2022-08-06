import React, { useState, useEffect } from 'react';

import { Container, Nav, Navbar } from 'react-bootstrap';

import './App.css';

function App() {
  const [modalShow, setModalShow] = useState(false);

  const logout = () => {
    fetch('/logout');
  };

  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Crime Records</Navbar.Brand>
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
