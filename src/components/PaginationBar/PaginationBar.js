import React, { useState } from "react";
import styles from "./PaginationBar.module.css";

function PaginationBar(props) {
  const activePageStyle = { backgroundColor: "white", color: "#0b0d17" };

  const [currentPage, setCurrentPage] = useState("1");

  function handleClick(e) {
    setCurrentPage(e.target.innerText);
    props.handleClick(e);
  }
  return (
    <ul className={styles.paginationBarContainer}>
      <li>
        <button
          className={styles.paginationBarButton}
          onClick={handleClick}
          style={currentPage === "1" ? activePageStyle : {}}
        >
          1
        </button>
      </li>
      <li>
        <button
          className={styles.paginationBarButton}
          onClick={handleClick}
          style={currentPage === "2" ? activePageStyle : {}}
        >
          2
        </button>
      </li>
      <li>
        <button
          className={styles.paginationBarButton}
          onClick={handleClick}
          style={currentPage === "3" ? activePageStyle : {}}
        >
          3
        </button>
      </li>
    </ul>
  );
}

export default PaginationBar;
