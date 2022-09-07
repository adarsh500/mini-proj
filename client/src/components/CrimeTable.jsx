import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { Button, Table, Form, Modal } from 'react-bootstrap';
import CrimeModal from './CrimeModal';

const CrimeTable = (props) => {
  console.log('this is props', props.crime);
  const [modalShow, setModalShow] = useState(false);

  const handleEdit = (id) => {
    setModalShow(true);
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Name</th>
          <th>location</th>
          <th>Address</th>
          <th>Adhaar</th>
          <th>type</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {props?.crime?.map(
          ({ date, id, address, adhaar, location, name, type, index }) => (
            <>
              <tr key={index}>
                <td>{id}</td>
                <td>{date}</td>
                <td>{name}</td>
                <td>{location}</td>
                <td>{address}</td>
                <td>{adhaar}</td>
                <td>{type}</td>
                <td>
                  <Button variant="secondary" onClick={() => handleEdit(id)}>
                    Edit
                  </Button>
                </td>
              </tr>
              <CrimeModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                edit
                date={date}
                name={name}
                location={location}
                address={address}
                adhaar={adhaar}
                type={type}
                id={id}
              />
            </>
          )
        )}
      </tbody>
    </Table>
  );
};

export default CrimeTable;
