import React, { Fragment } from "react";
import Pagination from "react-bootstrap/Pagination";
import { Table } from "react-bootstrap";

const StocksTable = ({
  stocksValues,
  stocks,
  prevPage,
  nextPage,
  onClickChange,
}) => {
  const handleClick = (data) => {
    onClickChange(data.item);
  };
  return (
    <Fragment>
      <div className="row mt-4">
        <div className="col-md-8 m-auto">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th className="text-center" width="5%">
                  #
                </th>
                <th>Name</th>
                <th>Ticker</th>
                {/*<th>Previous Close</th>*/}
              </tr>
            </thead>
            <tbody>
              {stocks.map((item, index) => (
                <tr key={index}>
                  <td>
                    <button
                      type="button"
                      className="btn btn-success btn-lg"
                      onClick={() => handleClick({ item })}
                    >
                      +
                    </button>
                  </td>
                  <td>{stocksValues[item]}</td>
                  <td>{item}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className="container-fluid">
          <Pagination className="d-flex justify-content-center">
            <Pagination.Prev onClick={prevPage} />
            <Pagination.Next onClick={nextPage} />
          </Pagination>
        </div>
      </div>
    </Fragment>
  );
};

export default StocksTable;
