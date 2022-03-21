import React from "react";
import ExploreButton from "../../components/ExploreButton/ExploreButton";
import styles from "./Home.module.css";
import bgImg from "../../assets/home/background-home-mobile.jpg";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeTextContainer}>
        <h2 className={styles.homeSubtitle}>SO, YOU WANT TO TRAVEL TO</h2>
        <p className={styles.homeTitle}>SPACE</p>
        <p className={styles.homeParagraph}>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <ExploreButton />
    </div>
  );
}

export default Home;
