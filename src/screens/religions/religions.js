import React, { useEffect, useState } from "react";
import styles from "./religions.module.scss";
import { useRouter } from "next/router";

export default function Religions(props) {
  const [device, setDevice] = useState("pc");
  const [visited, setVisited] = useState(false);

  const router = useRouter();

  useEffect(() => {
    function handleResize() {
      setDevice(window.innerWidth > window.innerHeight ? "pc" : "mobile");
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={
        device === "mobile"
          ? styles.religionsMobileContainer
          : styles.religionsContainer
      }
    >
      {props.language.code === "ar" && device !== "mobile" && (
        <div>
          {/* <video loop muted autoPlay playsInline controls={false}>
            <source src="/assets/videos/prayer.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}

          <img src="/assets/images/prayer.png" alt="prayer" />
        </div>
      )}

      <div
        className={`${
          device === "mobile"
            ? styles.religionsMobileContainer__txtDiv
            : styles.religionsContainer__txtDiv
        }`}
      >
        <p
          onTransitionEnd={() => setVisited(true)}
          onClick={() => router.push("/the-true-reality-of-worship-in-islam")}
          className={`${
            device === "mobile"
              ? styles.religionsMobileContainer__txtDiv__text1
              : styles.religionsContainer__txtDiv__text1
          }`}
          style={{
            opacity: visited ? 1 : props.currentPage === "religions" ? 1 : 0,
          }}
        >
          {props.languageValues.religionsInIslam}
        </p>
        <p
          className={`${
            device === "mobile"
              ? styles.religionsMobileContainer__txtDiv__text2
              : styles.religionsContainer__txtDiv__text2
          }`}
          style={{
            opacity: visited ? 1 : props.currentPage === "religions" ? 1 : 0,
          }}
        >
          {props.languageValues.whatIsIt}
        </p>
        <p
          className={`${
            device === "mobile"
              ? styles.religionsMobileContainer__txtDiv__text3
              : styles.religionsContainer__txtDiv__text3
          }`}
          style={{
            opacity: visited ? 1 : props.currentPage === "religions" ? 1 : 0,
          }}
        >
          {props.languageValues.religionsDescription}
        </p>
      </div>
      {(props.language.code !== "ar" || device === "mobile") && (
        <img src="/assets/images/prayer.png" alt="prayer" />
      )}
    </div>
  );
}
