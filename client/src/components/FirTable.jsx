/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import FirModal from './FirModal';

import { Link } from 'react-router-dom';
import { Button, Table, Form, Modal } from 'react-bootstrap';

const FirTable = () => {
  const [fir, setFir] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    fetch('/api/fir')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFir(data);
      });
  }, []);

  const handleDelete = async (id) => {
    const req = await fetch(`api/fir/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(req);
  };

  const handleEdit = (id) => {
    setModalShow(true);
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Description</th>
            <th>Type</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {fir.map((f, index) => (
            <>
              <tr key={index}>
                <td>
                  <Link to={`/${f.id}`} key={f.id}>
                    {f.id}
                  </Link>
                </td>
                <td>{f.description}</td>
                <td>{f.type}</td>
                <td>
                  <Button variant="danger" onClick={() => handleDelete(f.id)}>
                    Delete
                  </Button>
                </td>
                <td>
                  <Button variant="secondary" onClick={() => handleEdit(f.id)}>
                    Edit
                  </Button>
                </td>
              </tr>
              <FirModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                edit
                id={f.id}
              />
            </>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default FirTable;
