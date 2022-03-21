import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/shared/logo.svg";
import hamburgerMenu from "../../assets/shared/icon-hamburger.svg";

function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <img src={logo} alt="logo" />
      <img src={hamburgerMenu} alt="menu" />
    </div>
  );
}

export default Navbar;
