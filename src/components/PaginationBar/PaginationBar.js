import React from "react";
import styles from "./PaginationBar.module.css";

function PaginationBar() {
  return (
    <ul className={styles.paginationBarContainer}>
      <li>
        <button className={styles.paginationBarButton}>1</button>
      </li>
      <li>
        <button className={styles.paginationBarButton}>2</button>
      </li>
      <li>
        <button className={styles.paginationBarButton}>3</button>
      </li>
    </ul>
  );
}

export default PaginationBar;
