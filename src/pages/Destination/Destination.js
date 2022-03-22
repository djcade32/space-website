import React, { useState } from "react";
import styles from "./Destination.module.css";
import data from "../../data/data.json";
import PlanetNavbar from "../../components/PlanetNavbar/PlanetNavbar";

const MOON = { name: "moon", index: 0 };
const MARS = { name: "mars", index: 1 };
const EUROPA = { name: "europa", index: 2 };
const TITAN = { name: "titan", index: 3 };

function Destination() {
  const [currentPlanet, setCurrentPlanet] = useState(MOON);

  function handleClick(e) {
    switch (e.target.innerText) {
      case "MOON":
        setCurrentPlanet(MOON);
        break;

      case "MARS":
        setCurrentPlanet(MARS);
        break;

      case "EUROPA":
        setCurrentPlanet(EUROPA);
        break;

      case "TITAN":
        setCurrentPlanet(TITAN);
        break;

      default:
        console.log("Error with switching planets.");
        break;
    }
  }
  return (
    <div className={styles.destinationContainer}>
      <p className={styles.destinationSubtitle}>
        <span className={styles.destinationNumber}>01</span>PICK YOUR
        DESTINATION
      </p>
      <img
        className={styles.planetImg}
        src={require("../../assets/destination/image-" +
          currentPlanet.name +
          ".png")}
        alt="The moon"
      />
      <PlanetNavbar handleClick={handleClick} />
      <p className={styles.planetTitle}>
        {data.destinations[currentPlanet.index].name}
      </p>
      <p className={styles.planetDescription}>
        {data.destinations[currentPlanet.index].description}
      </p>
      <hr className={styles.lineBreak} />
      <div className={styles.distanceStat}>
        <p className={styles.statTitle}>AVG. DISTANCE</p>
        <p className={styles.stat}>
          {data.destinations[currentPlanet.index].distance}
        </p>
      </div>
      <div className={styles.travelStat}>
        <p className={styles.statTitle}>EST. TRAVEL TIME</p>
        <p className={styles.stat}>
          {data.destinations[currentPlanet.index].travel}
        </p>
      </div>
    </div>
  );
}

export default Destination;
