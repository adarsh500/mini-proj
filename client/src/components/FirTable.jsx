import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { Button, Table, Form, Modal } from 'react-bootstrap';

const FirTable = () => {
  const [fir, setFir] = useState([]);

  useEffect(() => {
    fetch('/api/fir')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFir(data);
      });
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Description</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {fir.map((f, index) => (
          <tr key={index}>
            <td>
              <Link to={`/${f.id}`} key={f.id}>
                {f.id}
              </Link>
            </td>
            <td>{f.description}</td>
            <td>{f.type}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default FirTable;
