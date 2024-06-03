import React from "react";
import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";

const Pagination = ({ value, onChangePage }) => (
  <ReactPaginate
    className={styles.root}
    breakLabel="..."
    nextLabel=">"
    previousLabel="<"
    onPageChange={(event) => onChangePage(event.selected + 1)}
    pageRangeDisplayed={4}
    pageCount={3} //брать кол-во стр с бэкы
    forcePage={value - 1}
  />
);

export default Pagination;
