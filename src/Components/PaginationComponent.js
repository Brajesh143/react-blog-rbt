import React from "react";
import Pagination from 'react-bootstrap/Pagination';

function PaginationComponent({ currentPage, totalItems, itemsPerPage }) {
  const totalPage = Math.ceil(totalItems / itemsPerPage);
  console.log("total", totalItems, totalPage, totalPage.length);

  return (
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />

      { totalPage > 0 &&
        <Pagination.Item>{1}</Pagination.Item>
      }
      
      {/* <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item> */}
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}

export default PaginationComponent;