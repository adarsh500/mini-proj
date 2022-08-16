import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { Button, Table, Form, Modal } from 'react-bootstrap';

const VictimTable = (props) => {
  console.log('this is props', props.victim);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Address</th>
          <th>Adhaar</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {props?.victim?.map(({ id, address, adhaar, name, email }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{address}</td>
            <td>{adhaar}</td>
            <td>{email}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default VictimTable;
