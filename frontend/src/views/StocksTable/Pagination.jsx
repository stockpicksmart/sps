import React from "react";

const Pagination = ({ stocksPerPage, totalStocks, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalStocks / stocksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">

        <Pagination>
            <Pagination.Prev />
            <Pagination.Next />
        </Pagination>
        {/* {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)}  className="page-link">
              {number}
            </a>
          </li>
        ))} */}
      </ul>
    </nav>
  );
};

export default Pagination;
