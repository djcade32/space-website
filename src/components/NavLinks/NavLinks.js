import React from "react";
import styles from "./NavLinks.module.css";

function NavLinks(props) {
  return (
    <ul className={styles.navLinksContainer}>
      <li>
        <button className={styles.navLinksButton} onClick={props.closeDrawer}>
          <span>00 </span>HOME
        </button>
      </li>
      <li>
        <button className={styles.navLinksButton} onClick={props.closeDrawer}>
          <span>01 </span> DESTINATION
        </button>
      </li>
      <li>
        <button className={styles.navLinksButton} onClick={props.closeDrawer}>
          <span>02 </span> CREW
        </button>
      </li>
      <li>
        <button className={styles.navLinksButton} onClick={props.closeDrawer}>
          <span>03 </span> TECHNOLOGY
        </button>
      </li>
    </ul>
  );
}

export default NavLinks;
