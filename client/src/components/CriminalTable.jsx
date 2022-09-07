import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { Button, Table, Form, Modal } from 'react-bootstrap';

import CriminalModal from './CriminalModal';

const CriminalTable = (props) => {
  const [modalShow, setModalShow] = useState(false);

  const handleDelete = async (id) => {
    const req = await fetch(`api/criminal/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(req);
  };

  const handleEdit = (id) => {
    setModalShow(true);
  };

  console.log('this is props', props.criminal);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>cid</th>
          <th>Name</th>
          <th>Address</th>
          <th>Adhaar</th>
          <th>Email</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {props?.criminal?.map(({ id, cid, address, adhaar, name, email }) => (
          <>
            <tr key={cid}>
              <td>{id}</td>
              <td>{cid}</td>
              <td>{name}</td>
              <td>{address}</td>
              <td>{adhaar}</td>
              <td>{email}</td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(id)}>
                  Delete
                </Button>
              </td>
              <td>
                <Button variant="secondary" onClick={() => handleEdit(id)}>
                  Edit
                </Button>
              </td>
            </tr>
            <CriminalModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              edit
              cid={cid}
              name={name}
              email={email}
              address={address}
              adhaar={adhaar}
              id={id}
            />
          </>
        ))}
      </tbody>
    </Table>
  );
};

export default CriminalTable;
