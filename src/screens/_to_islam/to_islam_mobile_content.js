import React from "react";
import styles from "./to_islam.module.scss";

export default function ToIslamMobileHeader(props) {
  return (
    <div
      className={styles.toIslamMobileContainer}
      style={{ backgroundColor: "black", color: "white" }}
    >
      <ul
        dir={props.language?.dir}
        style={{
          textAlign: props.language.code !== "ar" && "left",
          opacity: props.currentPage === "to_islam" ? 1 : 0,
        }}
      >
        <li
          className={
            props.language.code === "ar"
              ? styles.arClicked
              : styles.englishClicked
          }
        >
          {props.languageValues.enterIslam3}
        </li>
        <li
          className={
            props.language.code === "ar"
              ? styles.arClicked
              : styles.englishClicked
          }
        >
          {props.languageValues.enterIslam2}
        </li>
        <li
          className={
            props.language.code === "ar"
              ? styles.arClicked
              : styles.englishClicked
          }
        >
          {props.languageValues.enterIslam1}
        </li>
      </ul>
    </div>
  );
}
