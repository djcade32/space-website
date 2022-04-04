import React, { useState } from "react";
import styles from "./NavLinks.module.css";
import { Link } from "react-router-dom";

function NavLinks(props) {
  const [currentPage, setCurrentPage] = useState("home");
  console.log("Rendered");

  const navLinksButtonActive = {
    borderRight: "4px solid white",
    padding: "0.25rem",
    width: "71%",
  };

  function handleClick(e) {
    console.log(e);
    setCurrentPage(e.target.id);
  }
  return (
    <ul className={styles.navLinksContainer}>
      <Link
        to="/"
        className={({ isActive }) =>
          isActive ? styles.navLinksButtonActive : "link"
        }
      >
        <li className={styles.navLinksButtonContainer}>
          <button
            id="home"
            className={styles.navLinksButton}
            onClick={props.closeDrawer}
          >
            <span className={styles.navLinksNumbers}>00 </span>HOME
          </button>
        </li>
      </Link>
      <Link to="/destination">
        <li className={styles.navLinksButtonContainer}>
          <button
            id="destination"
            className={styles.navLinksButton}
            onClick={props.closeDrawer}
          >
            <span className={styles.navLinksNumbers}>01 </span>DESTINATION
          </button>
        </li>
      </Link>
      <Link to="/crew">
        <li className={styles.navLinksButtonContainer}>
          <button
            id="crew"
            className={styles.navLinksButton}
            onClick={props.closeDrawer}
          >
            <span className={styles.navLinksNumbers}>02 </span>CREW
          </button>
        </li>
      </Link>
      <Link to="/technology">
        <li className={styles.navLinksButtonContainer}>
          <button
            id="technology"
            className={styles.navLinksButton}
            onClick={props.closeDrawer}
          >
            <span className={styles.navLinksNumbers}>03 </span>TECHNOLOGY
          </button>
        </li>
      </Link>
    </ul>
  );
}

export default NavLinks;
