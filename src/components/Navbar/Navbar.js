import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/shared/logo.svg";
import hamburgerMenu from "../../assets/shared/icon-hamburger.svg";
import closeMenuIcon from "../../assets/shared/icon-close.svg";
import SideDrawer from "../SideDrawer/SideDrawer";
import NavLinks from "../NavLinks/NavLinks";
import { Link } from "react-router-dom";

function Navbar() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  function openDrawerHandler() {
    setDrawerIsOpen(true);
  }

  function closeDrawerHandler() {
    setDrawerIsOpen(false);
  }
  return (
    <div className={styles.navbarContainer}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <button
        className={styles.hamburgerMenuButton}
        onClick={openDrawerHandler}
      >
        <img src={hamburgerMenu} alt="menu" />
      </button>
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        {/* <i className={`${styles.exitNavMenuIcon} fa-solid fa-xmark`}></i> */}
        {/* <NavLinks onClick={closeDrawerHandler} /> */}
        <button className={styles.closeMenuButton} onClick={openDrawerHandler}>
          <img src={closeMenuIcon} alt="Exit menu" />
        </button>
        <NavLinks closeDrawer={closeDrawerHandler} />
      </SideDrawer>
    </div>
  );
}

export default Navbar;
