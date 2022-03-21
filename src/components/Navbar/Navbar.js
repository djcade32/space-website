import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/shared/logo.svg";

function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <img src={logo} alt="logo" />
    </div>
  );
}

export default Navbar;
