import React from "react";
import styles from "./brain_religion.module.scss";
import quran from "../../assets/quran.png";
import { useRouter } from "next/router";
import Image from "next/image";

export default function BrainReligionMobile2(props) {
  const navigate = useRouter();

  return (
    <div className={styles.brainReligionMobileContainer}>
      <div className={styles.brainReligionMobileContainer__brainDiv}>
        <Image
          width={"auto"}
          height={"auto"}
          src={quran}
          style={{ height: "85%", marginTop: "20%" }}
        />
      </div>

      <div
        className={styles.brainReligionMobileContainer__text2}
        onClick={() => navigate.push("the-quran-the-eternal-miracle-of-islam")}
        style={{
          top: props.currentPage === "to_islam" ? "19vh" : "80vh",
          opacity: props.currentPage === "to_islam" ? 1 : 0,
          color: "#868686",
          fontSize: "5vmax",
        }}
      >
        {props.languageValues.holyQuraan}
      </div>

      <div
        className={styles.brainReligionMobileContainer__text1}
        style={{
          top: props.currentPage === "to_islam" ? "28.5vh" : "80vh",
          opacity: props.currentPage === "to_islam" ? 1 : 0,
          color: "#868686",
          fontSize: "3.5vmax",
        }}
      >
        {props.languageValues.islamMiracle}
      </div>
      <div
        className={styles.brainReligionMobileContainer__text3}
        style={{
          top: props.currentPage === "to_islam" ? "36vh" : "80vh",
          opacity: props.currentPage === "to_islam" ? 1 : 0,
          color: "#707070",
        }}
      >
        {props.languageValues.quraanDescrition}
      </div>
    </div>
  );
}
