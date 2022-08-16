import React, { useState } from 'react';

import { Link, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Button, Table, Container, Nav, Navbar } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';
import CrimeTable from './CrimeTable';
import VictimTable from './VictimTable';
import CriminalTable from './CriminalTable';
import CrimeModal from './CrimeModal';
import CriminalModal from './CriminalModal';
import VictimModal from './VictimModal';

const Fir = () => {
  let params = useParams();
  const [fir, setFir] = useState([]);
  const [cookies, setCookie] = useCookies();
  const [crimeModalShow, setCrimeModalShow] = useState(false);
  const [criminalModalShow, setCriminalModalShow] = useState(false);
  const [victimModalShow, setVictimModalShow] = useState(false);

  const fetchFir = () => {
    fetch(`/api/fir/${params.firid}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFir(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const logout = () => {
    fetch('/logout');
  };

  useEffect(() => {
    fetchFir();
  }, []);

  return (
    <div className="home">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Crime Records</Navbar.Brand>
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
      <h2>FIR: {params.firid}</h2>
      <div className="wrapper">
        <h2>Crime</h2>
        <CrimeTable crime={fir.crime} />
        {fir?.crime?.length > 0 ? null : (
          <>
            <Button
              className="addCriminal"
              onClick={() => setCrimeModalShow(true)}
            >
              Add Crime
            </Button>
            <CrimeModal
              id={params.firid}
              show={crimeModalShow}
              onHide={() => setCrimeModalShow(false)}
            />
          </>
        )}

        <h2>Criminal</h2>
        <CriminalTable criminal={fir.criminal} />
        <Button
          className="addCriminal"
          onClick={() => setCriminalModalShow(true)}
        >
          Add Criminal
        </Button>
        <CriminalModal
          id={params.firid}
          show={criminalModalShow}
          onHide={() => setCriminalModalShow(false)}
        />

        <h2>Victim</h2>
        <VictimTable victim={fir.victim} />
        <Button
          className="addCriminal"
          onClick={() => setVictimModalShow(true)}
        >
          Add Victims
        </Button>
        <VictimModal
          id={params.firid}
          show={victimModalShow}
          onHide={() => setVictimModalShow(false)}
        />
      </div>
    </div>
  );
};

export default Fir;
