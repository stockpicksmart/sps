import React, { useState, useEffect } from "react";
import StocksTable from "./StocksTable";
import Pagination from './Pagination'

const DatatablePage = ({ stocksValues, stocks, onClickChange }) => {

  // const [stocks, setStocks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [stocksPerPage] = useState(10);

  // Get current posts
  let indexOfLastStock = currentPage * stocksPerPage;
  let indexOfFirstStock = indexOfLastStock - stocksPerPage;
  let currentStocks = stocks.slice(indexOfFirstStock, indexOfLastStock);

  useEffect(() => {
    setCurrentPage(1)
    indexOfLastStock = currentPage * stocksPerPage;
    indexOfFirstStock = indexOfLastStock - stocksPerPage;
    currentStocks = stocks.slice(indexOfFirstStock, indexOfLastStock);
  }, [stocks])

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  const prevPage = () => {
    setCurrentPage(prev => {
      console.log(prev)
       if (prev > 1) {
         return prev - 1
       } else {
         return prev
       }
    })
  }

  const nextPage = () => {
    setCurrentPage(prev => {
       if (prev < 361) {
         return prev + 1
       } else {
         return prev
       }
    })
  }

  return (
    // <table>
    //   {stocks.map((item, index) => (
    //     <tr key={index}>
    //       <td>
    //         <button
    //           type="button"
    //           className="btn btn-success btn-lg"
    //           onClick={() => this.handleClick({ item })}
    //         >
    //           +
    //         </button>
    //       </td>
    //       <td>{stocksValues[item]}</td>
    //       <td>{item}</td>
    //     </tr>
    //   ))}
    // </table>
    <div className='container mt-2'>
      <StocksTable stocks={stocks} stocksValues={stocksValues} prevPage={prevPage} nextPage={nextPage} onClickChange={onClickChange} />
      {/* <Pagination
        stocksPerPage={stocksPerPage}
        totalStocks={stocks.length}
        paginate={paginate}
      /> */}
    </div>
  );
};

export default DatatablePage;
