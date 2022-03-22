import React, { useState } from "react";
import styles from "./SliderNavigation.module.css";

function SliderNavigation(props) {
  const activeTabStyle = {
    opacity: 1,
  };
  const [currentTab, setCurrentTab] = useState("douglas");
  function handleClick(e) {
    setCurrentTab(e.target.id);
    props.handleClick(e);
  }

  return (
    <li className={styles.sliderNavigationContainer}>
      <ul>
        <button
          id="douglas"
          className={styles.sliderNavigationButton}
          onClick={handleClick}
          style={currentTab === "douglas" ? activeTabStyle : {}}
        ></button>
      </ul>
      <ul>
        <button
          id="mark"
          className={styles.sliderNavigationButton}
          onClick={handleClick}
          style={currentTab === "mark" ? activeTabStyle : {}}
        ></button>
      </ul>
      <ul>
        <button
          id="victor"
          className={styles.sliderNavigationButton}
          onClick={handleClick}
          style={currentTab === "victor" ? activeTabStyle : {}}
        ></button>
      </ul>
      <ul>
        <button
          id="anousheh"
          className={styles.sliderNavigationButton}
          onClick={handleClick}
          style={currentTab === "anousheh" ? activeTabStyle : {}}
        ></button>
      </ul>
    </li>
  );
}

export default SliderNavigation;
