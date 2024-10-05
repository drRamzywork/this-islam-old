import React, { useState } from "react";
import styles from "./islam_messanger.module.scss";
import masged from "../../assets/masged.png";
import { useRouter } from "next/router";
import Image from "next/image";

export default function IslamMessanger(props) {
  const navigate = useRouter();
  const [visited, setVisited] = useState(false);

  return (
    <div className={styles.islamMessangerContainer}>
      <div
        className={styles.islamMessangerContainer__leftDiv}
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
            {" "}
            {props.languageValues.islamMessanger6}
          </li>
          <li
            className={
              props.currentPage === "islam_messanger"
                ? props.language.code === "ar"
                  ? styles.arClicked
                  : styles.englishClicked
                : ""
            }
            style={{
              marginRight: visited ? 0 : props.language.code === "ar" && "50vw",
              marginLeft: visited ? 0 : props.language.code !== "ar" && "50vw",
              transitionDelay:
                props.currentPage === "islam_messanger" ? "1s" : "0s",
            }}
          >
            {props.languageValues.islamMessanger5}
          </li>
          <li
            className={
              props.currentPage === "islam_messanger"
                ? props.language.code === "ar"
                  ? styles.arClicked
                  : styles.englishClicked
                : ""
            }
            style={{
              marginRight: visited ? 0 : props.language.code === "ar" && "50vw",
              marginLeft: visited ? 0 : props.language.code !== "ar" && "50vw",
              transitionDelay:
                props.currentPage === "islam_messanger" ? "2s" : "0s",
            }}
          >
            {props.languageValues.islamMessanger4}
          </li>
          <li
            className={
              props.currentPage === "islam_messanger"
                ? props.language.code === "ar"
                  ? styles.arClicked
                  : styles.englishClicked
                : ""
            }
            style={{
              marginRight: visited ? 0 : props.language.code === "ar" && "50vw",
              marginLeft: visited ? 0 : props.language.code !== "ar" && "50vw",
              transitionDelay:
                props.currentPage === "islam_messanger" ? "3s" : "0s",
            }}
          >
            {props.languageValues.islamMessanger3}
          </li>
          <li
            className={
              props.currentPage === "islam_messanger"
                ? props.language.code === "ar"
                  ? styles.arClicked
                  : styles.englishClicked
                : ""
            }
            style={{
              marginRight: visited ? 0 : props.language.code === "ar" && "50vw",
              marginLeft: visited ? 0 : props.language.code !== "ar" && "50vw",
              transitionDelay:
                props.currentPage === "islam_messanger" ? "4s" : "0s",
            }}
          >
            {props.languageValues.islamMessanger2}
          </li>
          <li
            className={
              props.currentPage === "islam_messanger"
                ? props.language.code === "ar"
                  ? styles.arClicked
                  : styles.englishClicked
                : ""
            }
            onTransitionEnd={() => (
              props.currentPage === "islam_messanger" && setVisited(true),
              props.animationDone({ ...props.donePages, islam_messanger: true })
            )}
            style={{
              marginRight: visited ? 0 : props.language.code === "ar" && "50vw",
              marginLeft: visited ? 0 : props.language.code !== "ar" && "50vw",
              transitionDelay:
                props.currentPage === "islam_messanger" ? "5s" : "0s",
            }}
          >
            {props.languageValues.islamMessanger1}
          </li>
        </ul>
      </div>
      <div
        onClick={() => navigate.push("who-is-the-messenger-of-islam")}
        id="picDiv2"
        className={styles.islamMessangerContainer__rightDiv}
        style={{
          left: props.language.code !== "ar" && "0",
          right: props.language.code === "ar" && "0",
        }}
      >
        <p>
          {props.languageValues.whoIs}
          <br />
          {props.languageValues.islamMessanger}
        </p>
        <Image width={"auto"} height={"auto"} src={masged} />
      </div>
    </div>
  );
}
