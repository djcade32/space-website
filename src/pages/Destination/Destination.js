import React from "react";
import styles from "./Destination.module.css";

function Destination() {
  return (
    <div className={styles.destinationContainer}>
      <p className={styles.destinationSubtitle}>
        <span className={styles.destinationNumber}>01</span>PICK YOUR
        DESTINATION
      </p>
    </div>
  );
}

export default Destination;
