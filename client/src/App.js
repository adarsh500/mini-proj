import React, { useState, useEffect } from 'react';
import CriminalTable from './components/CriminalTable';
import CriminalModal from './components/CriminalModal';

import { Button, Form, Modal } from 'react-bootstrap';

import './App.css';

function App() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="App">
      <h1>THIS IS CRIMINAL LIST</h1>
      <CriminalTable />

      <Button onClick={() => setModalShow(true)}>Add criminal</Button>
      <CriminalModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default App;
