import React from "react";
import styles from "./to_islam.module.scss";
import wide_masged from "../../assets/wide_masged.png";
import { useRouter } from "next/router";

export default function ToIslamMobileHeader(props) {
  const navigate = useRouter();
  return (
    <div className={styles.toIslamMobileContainer}>
      <p
        onClick={() =>
          navigate.push("have-people-been-compelled-to-embrace-islam")
        }
      >
        {props.languageValues.peopleForced}
        <br />
        {props.languageValues.enterIslam}
      </p>
      <img
        src={wide_masged.src}
        alt="have-people-been-compelled-to-embrace-islam"
      />
    </div>
  );
}
