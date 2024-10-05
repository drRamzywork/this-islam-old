import React from "react";
import doubleDash from "../../assets/doubleDash.png";
import doubleDashWhite from "../../assets/doubleDashWhite.png";
import styles from "./article.module.scss";

export default function Article(props) {
  return (
    <div
      className={styles.articleContainer}
      style={{
        width: props?.mobile && "73vw",
        margin: props?.mobile ? "4vh 0" : "0 0 3vh 0",
        direction: props?.language?.dir === "rtl" ? "rtl" : "ltr",
        textAlign: props?.language?.dir === "rtl" && "start",
      }}
    >
      <div className={styles.articleContainer__header}>
        <img
          alt="articleContainer__footer"
          src={props?.color === "white" ? doubleDashWhite.src : doubleDash.src}
          style={{ transform: props?.mobile && "scale(0.5)" }}
        />
        <div
          style={{
            backgroundColor: props?.color === "white" ? "white" : "#E3E3E3",
          }}
        />
      </div>
      <div
        className={styles.articleContainer__text}
        style={{
          color: props?.color === "white" ? "white" : "#7E577A",
          fontSize: props?.mobile && "16px",
        }}
      >
        {props?.text}
      </div>
      <div
        style={{
          backgroundColor: props?.color === "white" ? "white" : "#E3E3E3",
        }}
        className={styles.articleContainer__footer}
      />
    </div>
  );
}
