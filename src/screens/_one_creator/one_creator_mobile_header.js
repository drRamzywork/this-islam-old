import React from "react";
import styles from "./one_creator.module.scss";
import kaaba from "../../assets/kaaba.png";
import { useRouter } from "next/router";

export default function OneCreatorMobileHeader(props) {
  const navigate = useRouter();
  return (
    <div className={styles.oneCreatorMobileContainer}>
      <p
        onClick={() =>
          navigate.push("one-creator-who-alone-deserves-to-be-worshipped")
        }
      >
        {props.languageValues.oneCreator}
        <br />
        {props.languageValues.oneGod}
      </p>
      <img src={kaaba.src} alt="" />
    </div>
  );
}
