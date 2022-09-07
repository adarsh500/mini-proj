import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { Button, Table, Form, Modal } from 'react-bootstrap';

const CrimeTable = (props) => {
  console.log('this is props', props.crime);
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
        </tr>
      </thead>
      <tbody>
        {props?.crime?.map(
          ({ date, id, address, adhaar, location, name, type, index }) => (
            <tr key={index}>
              <td>{id}</td>
              <td>{date}</td>
              <td>{name}</td>
              <td>{location}</td>
              <td>{address}</td>
              <td>{adhaar}</td>
              <td>{type}</td>
            </tr>
          )
        )}
      </tbody>
    </Table>
  );
};

export default CrimeTable;
