import React, { useState } from "react";
import "./brain_religion.module.scss";
import quran from "../../assets/quran.png";
import brain from "../../assets/brain.png";
import { useRouter } from "next/router";
import styles from "./brain_religion.module.scss";

export default function BrainReligion(props) {
  const [clicked, setClicked] = useState(false);
  // const navigate = useNavigate();
  const router = useRouter();
  const wheelEvent = (event) => {
    if (event.deltaY > 50 && !clicked) {
      settingClicked();
    }
  };

  const settingClicked = () => {
    setClicked(true);
    props.animationDone({ ...props.donePages, brain: true });
  };

  // const marginRightValue = () => {
  //   if (props.language.code === "en") {
  //     return "-25vw";
  //   }
  //   if (clicked) {
  //     if (props.language.code === "en") {
  //       return "-50vw"; // Condition for English when clicked
  //     } else if (props.language.code === "ar") {
  //       return "-50vw"; // Condition for Arabic when clicked
  //     }
  //   }
  //   return "0";
  // };

  const marginRightValue = () => {
    if (props.language.code === "en") {
      if (clicked) {
        return "-50vw"; // If it's English and clicked
      }
      return "-25vw"; // If it's English and not clicked
    }
    if (clicked) {
      if (props.language.code === "ar") {
        return "-50vw"; // Condition for Arabic when clicked
      }
      // Add additional language checks here if necessary when clicked
    }
    return "0";
  };

  return (
    <div
      onWheel={(event) => wheelEvent(event)}
      className={styles.brainReligionContainer}
    >
      <div className={styles.brainReligionContainer__quranDiv}>
        <img
          alt=""
          src={quran.src}
          style={{
            transform:
              /* props.currentPage === "brain" && */ clicked && "scale(1)",
          }}
        />
      </div>
      <div className={styles.brainReligionContainer__brainDiv}>
        <img
          alt=""
          src={brain.src}
          style={{ transform: clicked && "scale(1)" }}
        />
      </div>
      <div
        className={
          styles.brainReligionContainer__colorDiv1
        } /* onClick={() => settingClicked() }*/
        style={{
          width: props.currentPage === "brain" && !clicked ? "12.5vw" : 0,
        }}
      />
      <div
        className={
          styles.brainReligionContainer__colorDiv2
        } /* onClick={() => settingClicked() }*/
        style={{
          width: props.currentPage === "brain" && !clicked ? "25vw" : 0,
        }}
      />
      <div
        className={styles.brainReligionContainer__text1}
        onClick={() =>
          clicked &&
          router.push(
            "/is-there-really-a-dichotomy-between-religion-and-reason"
          )
        }
        style={{
          top: clicked
            ? "16vh"
            : props.currentPage === "brain"
            ? "20vh"
            : "80vh",
          marginRight: clicked
            ? props.language.code === "ar"
              ? "-32vw"
              : "-28vw"
            : 0,
          opacity: clicked ? 1 : props.currentPage === "brain" ? 1 : 0,
          fontSize: props.language.code !== "ar" && "2vmax",
        }}
      >
        {props.languageValues.theTwo}
      </div>
      <div
        className={styles.brainReligionContainer__text2}
        onClick={() =>
          clicked &&
          router.push(
            "/is-there-really-a-dichotomy-between-religion-and-reason"
          )
        }
        style={{
          top: clicked
            ? "21vh"
            : props.currentPage === "brain"
            ? "25.5vh"
            : "80vh",
          // marginRight:'-25vw'
          marginRight: marginRightValue(),
          opacity: clicked ? 1 : props.currentPage === "brain" ? 1 : 0,
          fontSize: props.language.code === "en" ? "1.8vmax  " : "2vmax",
        }}
      >
        {props.languageValues.brainAndReligion}
      </div>
      <div
        className={styles.brainReligionContainer__text3}
        onClick={() =>
          clicked &&
          router.push(
            "/is-there-really-a-dichotomy-between-religion-and-reason"
          )
        }
        style={{
          top: clicked
            ? "32vh"
            : props.currentPage === "brain"
            ? "38vh"
            : "80vh",
          marginRight: clicked ? "-50vw" : 0,
          opacity: clicked ? 1 : props.currentPage === "brain" ? 1 : 0,
        }}
      >
        {props.languageValues.brainAndReligionDescription}
      </div>

      <div
        className={styles.brainReligionContainer__quranText1}
        onClick={() =>
          clicked && router.push("/the-quran-the-eternal-miracle-of-islam")
        }
        style={{
          top: clicked ? "16vh" : "80vh",
          opacity: clicked ? 1 : 0,
        }}
      >
        {props.languageValues.holyQuraan}
      </div>
      <div
        className={styles.brainReligionContainer__quranText2}
        onClick={() =>
          clicked && router.push("/the-quran-the-eternal-miracle-of-islam")
        }
        style={{
          top: clicked ? "26vh" : "80vh",
          opacity: clicked ? 1 : 0,
        }}
      >
        {props.languageValues.islamMiracle}
      </div>
      <div
        className={styles.brainReligionContainer__quranText3}
        onClick={() =>
          clicked && router.push("/the-quran-the-eternal-miracle-of-islam")
        }
        style={{
          top: clicked ? "32vh" : "80vh",
          opacity: clicked ? 1 : 0,
        }}
      >
        {props.languageValues.quraanDescrition}
      </div>

      {/* <img src={mainLogo} style={{ position: "absolute", bottom: "5vh", right: "3vw" }} /> */}
    </div>
  );
}
