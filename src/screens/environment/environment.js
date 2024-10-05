import React, { useEffect, useState } from "react";
import styles from "./environment.module.scss";

export default function Environment(props) {
  const [visited, setVisited] = useState(false);
  const [device, setDevice] = useState("pc");

  useEffect(() => {
    function handleResize() {
      setDevice(window.innerWidth > window.innerHeight ? "pc" : "mobile");
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.environmentContainer}>
      <video loop muted autoPlay playsInline controls={false}>
        <source src="/assets/videos/environment.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        className={styles.environmentContainer__text1}
        onTransitionEnd={() => setVisited(true)}
        style={{
          top: visited
            ? device === "mobile"
              ? "23vh"
              : "32vh"
            : props.currentPage === "environment"
            ? device === "mobile"
              ? "23vh"
              : "32vh"
            : "90vh",
          opacity: visited ? 1 : props.currentPage === "environment" ? 1 : 0,
          fontSize: device === "mobile" && "5vh",
        }}
      >
        {props.languageValues.environmentCare}
      </div>
      <div
        className={styles.environmentContainer__text2}
        style={{
          top: visited
            ? device === "mobile"
              ? "33vh"
              : "44vh"
            : props.currentPage === "environment"
            ? device === "mobile"
              ? "33vh"
              : "44vh"
            : "90vh",
          opacity: visited ? 1 : props.currentPage === "environment" ? 1 : 0,
          fontSize: device === "mobile" && "2.5vh",
        }}
      >
        {props.languageValues.partOfFaith}
      </div>
      <div
        className={styles.environmentContainer__text3}
        style={{
          width: device === "mobile" ? "85vw" : "35vw",
          top: visited
            ? device === "mobile"
              ? "40vh"
              : "56vh"
            : props.currentPage === "environment"
            ? device === "mobile"
              ? "40vh"
              : "56vh"
            : "90vh",
          opacity: visited ? 1 : props.currentPage === "environment" ? 1 : 0,
          fontSize: device === "mobile" && "1.7vh",
        }}
      >
        {props.languageValues.environmentDescription}
      </div>
    </div>
  );
}

// <div className={styles.environmentContainer}>
//   {currentPage === "environment" && (
//     <Plyr
//       plyrProps={{
//         source: undefined,
//         options: undefined,
//       }}
//     />
//   )}
//   <div
//     className={`${styles.environmentContainer__text1} ${styles[visibilityClass]}`}
//     onTransitionEnd={() => setVisited(true)}
//   >
//     {languageValues.environmentCare}
//   </div>
//   <div
//     className={`${styles.environmentContainer__text2} ${styles[visibilityClass]}`}
//   >
//     {languageValues.partOfFaith}
//   </div>
//   <div
//     className={`${styles.environmentContainer__text3} ${styles[visibilityClass]}`}
//   >
//     {languageValues.environmentDescription}
//   </div>
// </div>
