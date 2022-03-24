import React from "react";
import ReactDOM from "react-dom";
import styles from "./SideDrawer.module.css";
import "animate.css";

function SideDrawer(props) {
  const content = (
    <div
      className={`${styles.sideDrawer} animate__animated animate__slideInRight `}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );

  return (
    props.show &&
    ReactDOM.createPortal(content, document.getElementById("drawer-hook"))
  );
}

export default SideDrawer;
