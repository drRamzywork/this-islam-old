import React from "react";
import styles from "./islam_messanger.module.scss";
import masged from "../../assets/masged.png";
import { useRouter } from "next/router";

export default function IslamMessangerMobileHeader(props) {
  const navigate = useRouter();
  return (
    <div className={styles.islamMessangerMobileContainer}>
      <p onClick={() => navigate.push("who-is-the-messenger-of-islam")}>
        {props.languageValues.whoIs}
        <br />
        {props.languageValues.islamMessanger}
      </p>
      <img src={masged.src} alt="" />
    </div>
  );
}
