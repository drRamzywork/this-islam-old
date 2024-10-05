import React from "react";
import styles from "./one_creator.module.scss";

export default function OneCreatorMobileContent(props) {
  return (
    <div
      className={styles.oneCreatorMobileContainer}
      style={{ backgroundColor: "black", color: "white" }}
    >
      <ul
        dir={props.language?.dir}
        style={{
          textAlign: props.language.code !== "ar" && "left",
          opacity: props.currentPage === "one_creator" ? 1 : 0,
        }}
      >
        <li
          className={
            props.language.code === "ar" ? "arClicked" : "englishClicked"
          }
        >
          {props.languageValues.oneCreator1}
        </li>
        <li
          className={
            props.language.code === "ar" ? "arClicked" : "englishClicked"
          }
        >
          {props.languageValues.oneCreator3}
        </li>
        <li
          className={
            props.language.code === "ar" ? "arClicked" : "englishClicked"
          }
        >
          {props.languageValues.oneCreator2}
        </li>
      </ul>
    </div>
  );
}
