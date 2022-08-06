import React, { useState, useEffect } from 'react';
import CriminalTable from './CriminalTable';
import CriminalModal from './CriminalModal';

import { Button, Container, Nav, Navbar } from 'react-bootstrap';

import './home.css';

function Home() {
  const [modalShow, setModalShow] = useState(false);

  const logout = () => {
    fetch('/logout');
  };

  return (
    <div className="home">
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

      <h1
        style={{
          margin: '20px',
        }}
      >
        THIS IS CRIMINAL LIST
      </h1>

      <div className="wrapper">
        <CriminalTable />

        <Button onClick={() => setModalShow(true)}>Add criminal</Button>
        <CriminalModal show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </div>
  );
}

export default Home;
