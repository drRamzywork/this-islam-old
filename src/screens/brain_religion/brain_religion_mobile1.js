import React from "react";
import styles from "./brain_religion.module.scss";
import brain from "../../assets/brain.png";
import { useRouter } from "next/router";

export default function BrainReligionMobile1(props) {
  const navigate = useRouter();
  return (
    <div className={styles.brainReligionMobileContainer}>
      <div className={styles.brainReligionMobileContainer__brainDiv}>
        <img
          src={brain.src}
          alt="is-there-really-a-dichotomy-between-religion-and-reason"
        />
      </div>
      <div
        className={styles.brainReligionMobileContainer__text1}
        onClick={() =>
          navigate.push(
            "is-there-really-a-dichotomy-between-religion-and-reason"
          )
        }
        style={{
          top: props.currentPage === "brain1" ? "13vh" : "80vh",
          opacity: props.currentPage === "brain1" ? 1 : 0,
        }}
      >
        {props.languageValues.theTwo}
      </div>
      <div
        className={styles.brainReligionMobileContainer__text2}
        onClick={() =>
          navigate.push(
            "is-there-really-a-dichotomy-between-religion-and-reason"
          )
        }
        style={{
          top: props.currentPage === "brain1" ? "20.5vh" : "80vh",
          opacity: props.currentPage === "brain1" ? 1 : 0,
          textAlign: props?.dir !== "ltr" && "center",
        }}
      >
        {props.languageValues.brainAndReligion}
      </div>
      <div
        className={styles.brainReligionMobileContainer__text3}
        style={{
          top: props.currentPage === "brain1" ? "36vh" : "80vh",
          opacity: props.currentPage === "brain1" ? 1 : 0,
        }}
      >
        {props.languageValues.brainAndReligionDescription}
      </div>
    </div>
  );
}
