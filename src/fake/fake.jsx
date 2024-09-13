import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const Fake = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  const columns = [
    {
      name: "Image",
      selector: (row) => <img src={row.image} alt={row.title} height="70" />,
      sortable:true
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable:true
    },
    {
      name: "Price",
      selector: (row) => `$${row.price}`,
      sortable:true
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable:true
    },
  ];

  return <DataTable columns={columns} data={data} fixedHeader pagination selectableRowS />;
};

export default Fake;

