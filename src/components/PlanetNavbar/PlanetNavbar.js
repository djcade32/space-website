import React, { useState } from "react";
import styles from "./PlanetNavbar.module.css";

function PlanetNavbar(props) {
  const activeTabStyle = {
    color: "white",
    borderBottom: "3px solid white",
  };
  const [currentTab, setCurrentTab] = useState("MOON");
  function handleClick(e) {
    setCurrentTab(e.target.innerText);
    props.handleClick(e);
  }
  return (
    <div className={styles.planetNavbarContainer}>
      <button
        className={styles.planetNavbarLinks}
        style={currentTab === "MOON" ? activeTabStyle : {}}
        onClick={handleClick}
      >
        MOON
      </button>
      <button
        className={styles.planetNavbarLinks}
        style={currentTab === "MARS" ? activeTabStyle : {}}
        onClick={handleClick}
      >
        MARS
      </button>
      <button
        className={styles.planetNavbarLinks}
        style={currentTab === "EUROPA" ? activeTabStyle : {}}
        onClick={handleClick}
      >
        EUROPA
      </button>
      <button
        className={styles.planetNavbarLinks}
        style={currentTab === "TITAN" ? activeTabStyle : {}}
        onClick={handleClick}
      >
        TITAN
      </button>
    </div>
  );
}

export default PlanetNavbar;
