import React, { useState, useEffect } from 'react';
import CriminalTable from './CriminalTable';
import CriminalModal from './CriminalModal';

import { useCookies } from 'react-cookie';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

import './home.css';

function Home() {
  const [modalShow, setModalShow] = useState(false);
  const [cookies, setCookie] = useCookies();

  console.log('this is cokkies', cookies);
  const logout = () => {
    fetch('/logout');
  };

  return (
    <div className="home">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Crime Records</Navbar.Brand>
          <Nav className="me-auto">
            {!cookies.jwt ? (
              <>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/signup">SignUp</Nav.Link>
              </>
            ) : (
              <Nav.Link onClick={() => logout()}>Logout</Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>

      {!!cookies.jwt ? (
        <>
          <h1
            style={{
              margin: '20px',
            }}
          >
            THIS IS CRIMINAL LIST
          </h1>
          <div className="wrapper">
            <Button className="addCriminal" onClick={() => setModalShow(true)}>
              Add criminal
            </Button>
            <CriminalTable />
            <CriminalModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
        </>
      ) : (
        <h1
          style={{
            margin: '20px',
          }}
        >
          PLEASE LOGIN
        </h1>
      )}
    </div>
  );
}

export default Home;
