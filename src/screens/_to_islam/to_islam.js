import React, { useState } from "react";
import styles from "./to_islam.module.scss";
import wide_masged from "../../assets/wide_masged.png";
import { useRouter } from "next/router";
import Image from "next/image";

export default function ToIslam(props) {
  const navigate = useRouter();
  const [visited, setVisited] = useState(false);

  return (
    <div className={styles.toIslamContainer}>
      <div
        id={styles.detailsDiv3}
        className={styles.toIslamContainer__leftDiv}
        style={{
          right: props.language.code !== "ar" && "0",
          left: props.language.code === "ar" && "0",
          justifyContent: props.language.code === "ar" ? "right" : "left",
        }}
      >
        <ul
          dir={props.language?.dir}
          style={{
            marginRight: props.language.code === "ar" && "3vw",
            marginLeft: props.language.code !== "ar" && "3vw",
            textAlign: props.language.code !== "ar" && "left",
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
              props.currentPage === "to_islam"
                ? props.language.code === "ar"
                  ? styles.arClicked
                  : styles.englishClicked
                : ""
            }
            style={{
              marginRight: visited ? 0 : props.language.code === "ar" && "50vw",
              marginLeft: visited ? 0 : props.language.code !== "ar" && "50vw",
              transitionDelay: props.currentPage === "to_islam" ? "1s" : "0s",
            }}
          >
            {props.languageValues.enterIslam2}
          </li>
          <li
            className={
              props.currentPage === "to_islam"
                ? props.language.code === "ar"
                  ? styles.arClicked
                  : styles.englishClicked
                : ""
            }
            onTransitionEnd={() => (
              setVisited(true),
              props.animationDone({ ...props.donePages, to_islam: true })
            )}
            style={{
              marginRight: visited ? 0 : props.language.code === "ar" && "50vw",
              marginLeft: visited ? 0 : props.language.code !== "ar" && "50vw",
              transitionDelay: props.currentPage === "to_islam" ? "2s" : "0s",
            }}
          >
            {props.languageValues.enterIslam1}
          </li>
        </ul>
      </div>
      <div
        id="picDiv3"
        className={styles.toIslamContainer__rightDiv}
        style={{
          left: props.language.code !== "ar" && "0",
          right: props.language.code === "ar" && "0",
        }}
      >
        <p
          onClick={() =>
            navigate.push("have-people-been-compelled-to-embrace-islam")
          }
        >
          {props.languageValues.peopleForced}
          <br />
          {props.languageValues.enterIslam}
        </p>
        <Image width={"auto"} height={"auto"} src={wide_masged} />
      </div>
    </div>
  );
}
