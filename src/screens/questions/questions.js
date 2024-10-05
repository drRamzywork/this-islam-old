import React, { useState, useEffect } from "react";
import sky from "../../assets/sky.png";
import standingMan from "../../assets/standingMan.png";
import styles from "./questions.module.scss";
import { useRouter } from "next/router";
import { useLanguage } from "../../context/LanguageContext";

export default function Questions(props) {
  const [device, setDevice] = useState("pc");
  const [visited, setVisited] = useState(false);
  const router = useRouter();
  const { languageValues } = useLanguage();

  useEffect(() => {
    function handleResize() {
      setDevice(window.innerWidth > window.innerHeight ? "pc" : "mobile");
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.questionsContainer}>
      <img
        alt=""
        src={sky.src}
        className={styles.questionsContainer__skyImg}
        style={{
          objectPosition: props.currentPage === "questions" && "2% 70%",
        }}
      />
      <img
        alt=""
        src={standingMan.src}
        className={styles.questionsContainer__standingManImg}
        style={{ height: device === "mobile" && "160vh" }}
      />

      <div
        className={styles.questionsContainer__txtContainer}
        onTransitionEnd={() => setVisited(true)}
        style={{
          direction: props.language?.dir === "rtl" ? "rtl" : undefined,
          textAlign: props.language?.dir !== "rtl" ? "left" : "right",
          width: device === "mobile" ? "50vw" : undefined,
          opacity: visited || props.currentPage === "questions" ? 1 : 0,
          top:
            visited || props.currentPage === "questions"
              ? device === "mobile"
                ? "16vh"
                : "26vh"
              : "90vh",
          left: props.language.code !== "ar" ? "5vw" : undefined,
          color:
            device === "mobile"
              ? "white"
              : props.currentPage === "questions"
              ? "#647688"
              : "white",
        }}
      >
        <div
          className={styles.questionsContainer__txtContainer__text1}
          onClick={() => router.push("/thought-provoking-questions")}
        >
          {languageValues.questions}
        </div>

        <div
          className={styles.questionsContainer__txtContainer__text2}
          onClick={() => router.push("/thought-provoking-questions")}
        >
          {languageValues.noSleep}
        </div>
      </div>
    </div>
  );
}
