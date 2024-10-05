import React, { useState } from "react";
import styles from "./one_creator.module.scss";
import kaaba from "../../assets/kaaba.png";
import { useRouter } from "next/router";

export default function OneCreator(props) {
  const navigate = useRouter();
  const [clicked, setClicked] = useState(false);

  const wheelEvent = (event) => {
    if (event.deltaY > 50 && !clicked) {
      settingClicked();
    }
  };

  const settingClicked = () => {
    // Instead of directly manipulating the DOM, we toggle a state.
    setClicked(true);
  };

  const detailsDivStyle = {
    ...(props.language.code === "ar"
      ? { left: clicked ? "0" : "-50vw" }
      : { right: clicked ? "0" : "-50vw" }),
  };
  const picDivStyle = {
    ...(props.language.code === "ar"
      ? { right: clicked ? "0" : "25vw" }
      : { left: clicked ? "0" : "25vw" }),
  };

  return (
    <div
      dir={props.language?.dir}
      onWheel={(event) => wheelEvent(event)}
      className={styles.oneCreatorContainer}
    >
      <div
        id={styles.detailsDiv}
        className={styles.oneCreatorContainer__leftDiv}
        style={detailsDivStyle}
      >
        <ul
          dir={props.language?.dir}
          style={{
            marginRight: props.language.code === "ar" && "3vw",
            marginLeft: props.language.code !== "ar" && "3vw",
            textAlign: props.language.code !== "ar" && "left",
          }}
        >
          <li>{props.languageValues.oneCreator1}</li>
          <li
            className={
              clicked
                ? props.language.code === "ar"
                  ? styles.arClicked
                  : styles.englishClicked
                : ""
            }
            style={{
              marginRight: props.language.code === "ar" && "50vw",
              marginLeft: props.language.code !== "ar" && "50vw",
              transitionDelay:
                clicked && props.currentPage === "one_creator" ? "2s" : "0s",
            }}
          >
            {props.languageValues.oneCreator2}
          </li>
          <li
            className={
              clicked
                ? props.language.code === "ar"
                  ? styles.arClicked
                  : styles.englishClicked
                : ""
            }
            onTransitionEnd={() =>
              props.animationDone({ ...props.donePages, one_creator: true })
            }
            style={{
              marginRight: props.language.code === "ar" && "50vw",
              marginLeft: props.language.code !== "ar" && "50vw",
              transitionDelay:
                clicked && props.currentPage === "one_creator" ? "3s" : "0s",
            }}
          >
            {props.languageValues.oneCreator3}
          </li>
        </ul>
      </div>
      <div
        id={styles.picDiv}
        className={styles.oneCreatorContainer__rightDiv}
        onClick={() => settingClicked()}
        style={picDivStyle}
      >
        <p
          onClick={() =>
            clicked &&
            navigate.push("one-creator-who-alone-deserves-to-be-worshipped")
          }
        >
          {props.languageValues.oneCreator}
          <br />
          {props.languageValues.oneGod}
        </p>
        <img src={kaaba.src} alt="" />
      </div>
    </div>
  );
}
