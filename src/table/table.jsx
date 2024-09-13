import React, { useState } from "react";
import DataTable from "react-data-table-component";

const Tabledata = () => {
  const Columns = [
    {
      name: "NAME",
      selector: (row) => row.name,
      sortable:true
    },
    {
      name: "EMAIL",
      selector: (row) => row.email,
      sortable:true
    },
    {
      name: "AGE",
      selector: (row) => row.age,
      sortable:true
    },
    {
        name: "city",
        selector: (row) => row.city,
        sortable:true
      },
  ];

  const data = [
    {
      id: 1,
      name: 'rishi',
      email: 'rishi@example.com',
      age: 23,
      city:'hyderbad',
    },
    {
      id: 2,
      name: 'krishna',
      email: 'haha@example.com',
      age: 23,
      city:'hyderbad',
    },
    {
        id: 3,
        name: 'suresh',
        email: 'haha@example.com',
        age: 23,
        city:'hyderbad',
      },
      {
        id: 4,
        name: 'ramesh',
        email: 'haha@example.com',
        age: 23,
        city:'hyderbad',
      },
      {
        id: 5,
        name: 'raju',
        email: 'haha@example.com',
        age: 23,
        city:'hyderbad',
      },
      {
        id: 6,
        name: 'suresh',
        email: 'haha@example.com',
        age: 23,
        city:'hyderbad',
      },
      {
        id: 7,
        name: 'ramesh',
        email: 'haha@example.com',
        age: 23,
        city:'hyderbad',
      },
      {
        id: 8,
        name: 'raju',
        email: 'haha@example.com',
        age: 23,
        city:'hyderbad',
      },
      {
        id: 9,
        name: 'raju',
        email: 'haha@example.com',
        age: 23,
        city:'hyderbad',
      },
      {
        id: 10,
        name: 'raju',
        email: 'haha@example.com',
        age: 23,
        city:'hyderbad',
      },
  ];

  return (

    
    <DataTable
      columns={Columns} 
      data={data}     
      selectableRows 
      fixedHeader
      pagination
    />
  );
};

export default Tabledata;
