import React from 'react';

import { Link, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Button, Table, Container, Nav, Navbar } from 'react-bootstrap';
import { useCookies } from 'react-cookie';

const Fir = () => {
  let params = useParams();
  const [cookies, setCookie] = useCookies();

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
      <h2>FIR: {params.firid}</h2>;
      <Outlet />
    </div>
  );
};

export default Fir;
