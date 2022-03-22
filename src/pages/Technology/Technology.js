import React from "react";
import PaginationBar from "../../components/PaginationBar/PaginationBar";
import styles from "./Technology.module.css";

function Technology() {
  function handleClick(e) {
    console.log(e);
  }
  return (
    <div className={styles.technologyContainer}>
      <p className={styles.technologySubtitle}>
        <span className={styles.technologyNumber}>03</span>SPACE LAUNCH 101
      </p>
      <img
        className={styles.technologyImg}
        src={require("../../assets/technology/image-launch-vehicle-landscape.jpg")}
        alt={"The "}
      />
      <PaginationBar handleClick={handleClick} />
      <div className={styles.technologyTextContainer}>
        <p className={styles.technologyCommonTitle}>THE TERMINOLOGY ...</p>
        <p className={styles.technologyTitle}>LAUNCH VEHICLE</p>
        <p className={styles.technologyParagraph}>
          A launch vehicle or carrier rocket is a rocket-propelled vehicle used
          to carry a payload from Earth's surface to space, usually to Earth
          orbit or beyond. Our WEB-X carrier rocket is the most powerful in
          operation. Standing 150 metres tall, it's quite an awe-inspiring sight
          on the launch.
        </p>
      </div>
    </div>
  );
}

export default Technology;
