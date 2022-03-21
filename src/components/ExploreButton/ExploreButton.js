import React from "react";
import styles from "./ExploreButton.module.css";

function ExploreButton() {
  return (
    <button
      className={styles.exploreButtonContainer}
      onClick={() => console.log("Button Clicked")}
    >
      EXPLORE
    </button>
  );
}

export default ExploreButton;
