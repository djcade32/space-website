import React, { useState } from "react";
import SliderNavigation from "../../components/SliderNavigation/SliderNavigation";
import styles from "./Crew.module.css";
import data from "../../data/data.json";

const DOUGLAS = { name: "douglas-hurley", index: 0 };
const MARK = { name: "mark-shuttleworth", index: 1 };
const VICTOR = { name: "victor-glover", index: 2 };
const ANOUSHEH = { name: "anousheh-ansari", index: 3 };

function Crew() {
  const [currentCrewMember, setCurrentCrewMember] = useState(DOUGLAS);

  function handleClick(e) {
    switch (e.target.id) {
      case "douglas":
        setCurrentCrewMember(DOUGLAS);
        break;

      case "mark":
        setCurrentCrewMember(MARK);
        break;

      case "victor":
        setCurrentCrewMember(VICTOR);
        break;

      case "anousheh":
        setCurrentCrewMember(ANOUSHEH);
        break;

      default:
        console.log("Error with switching crew member.");
        break;
    }
  }
  return (
    <div className={styles.crewContainer}>
      <p className={styles.crewSubtitle}>
        <span className={styles.crewNumber}>02</span>MEET YOUR CREW
      </p>
      <img
        className={styles.crewImg}
        src={require("../../assets/crew/image-" +
          currentCrewMember.name +
          ".png")}
        alt={currentCrewMember.name}
      />
      <hr />
      <SliderNavigation handleClick={handleClick} />
      <div className={styles.crewText}>
        <p className={styles.crewRole}>
          {data.crew[currentCrewMember.index].role}
        </p>
        <p className={styles.crewName}>
          {data.crew[currentCrewMember.index].name}
        </p>
        <p className={styles.crewBio}>
          {data.crew[currentCrewMember.index].bio}
        </p>
      </div>
    </div>
  );
}

export default Crew;
