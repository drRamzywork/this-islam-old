import React from "react";
import styles from "./islam_messanger.module.scss";

export default function IslamMessangerMobileContent(props) {
  return (
    <div
      className={styles.islamMessangerMobileContainer}
      style={{ backgroundColor: "black", color: "white" }}
    >
      <ul
        dir={props.language?.dir}
        style={{
          textAlign: props.language.code?.dir === "ltr" && "left",
          opacity: props.currentPage === "islam_messanger" ? 1 : 0,
        }}
      >
        <li
          className={
            props.language.code === "ar"
              ? styles.arClicked
              : styles.englishClicked
          }
        >
          {props.languageValues.islamMessanger5}
        </li>
        <li
          className={
            props.language.code === "ar"
              ? styles.arClicked
              : styles.englishClicked
          }
        >
          {props.languageValues.islamMessanger4}
        </li>
        <li
          className={
            props.language.code === "ar"
              ? styles.arClicked
              : styles.englishClicked
          }
        >
          {props.languageValues.islamMessanger3}
        </li>
        <li
          className={
            props.language.code === "ar"
              ? styles.arClicked
              : styles.englishClicked
          }
        >
          {props.languageValues.islamMessanger2}
        </li>
        <li
          className={
            props.language.code === "ar"
              ? styles.arClicked
              : styles.englishClicked
          }
        >
          {props.languageValues.islamMessanger1}
        </li>
      </ul>
    </div>
  );
}
