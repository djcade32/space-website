import React, { useState } from "react";
import PaginationBar from "../../components/PaginationBar/PaginationBar";
import styles from "./Technology.module.css";
import data from "../../data/data.json";

const LAUNCH_VEHICLE = { name: "launch-vehicle", index: 0 };
const SPACEPORT = { name: "spaceport", index: 1 };
const SPACE_CAPSULE = { name: "space-capsule", index: 2 };

function Technology() {
  const [currentTech, setCurrentTech] = useState(LAUNCH_VEHICLE);

  function handleClick(e) {
    switch (e.target.innerText) {
      case "1":
        setCurrentTech(LAUNCH_VEHICLE);
        break;

      case "2":
        setCurrentTech(SPACEPORT);
        break;

      case "3":
        setCurrentTech(SPACE_CAPSULE);
        break;

      default:
        console.log("Error with switching technology page.");
        break;
    }
  }
  return (
    <div className={styles.technologyContainer}>
      <p className={styles.technologySubtitle}>
        <span className={styles.technologyNumber}>03</span>SPACE LAUNCH 101
      </p>
      <img
        className={styles.technologyImg}
        src={require("../../assets/technology/image-" +
          currentTech.name +
          "-landscape.jpg")}
        alt={"The "}
      />
      <PaginationBar handleClick={handleClick} />
      <div className={styles.technologyTextContainer}>
        <p className={styles.technologyCommonTitle}>THE TERMINOLOGY ...</p>
        <p className={styles.technologyTitle}>
          {data.technology[currentTech.index].name}
        </p>
        <p className={styles.technologyParagraph}>
          {data.technology[currentTech.index].description}
        </p>
      </div>
    </div>
  );
}

export default Technology;
