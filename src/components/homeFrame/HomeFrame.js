import React, { useEffect, useState } from "react";
import styles from "./HomeFrame.module.scss";
// import main_logo from "../..";

export default function HomeFrame(props) {
  const [device, setDevice] = useState("pc");
  const [loading, setLoading] = useState(false);
  const { currentDot, setCurrentDot, totalDots } = props;

  const handleDotClick = (dotNum) => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      setCurrentDot(dotNum);
      props.onChangeSlide(dotNum); // This changes the slide
      setLoading(false);
    }, 0);
  };
  useEffect(() => {
    function handleResize() {
      setDevice(window.innerWidth > window.innerHeight ? "pc" : "mobile");
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const Dot = (dotProps) => (
  //   <span
  //     className={styles.fiveDots}
  //     onClick={() => handleDotClick(dotProps)}
  //     style={{ opacity: props.currentDot === dotProps.dotNum ? 1 : undefined }}
  //   />
  // );

  const Dot = ({ dotNum }) => (
    <span
      className={styles.fiveDots}
      onClick={() => handleDotClick(dotNum)}
      style={{ opacity: currentDot === dotNum ? 1 : 0.5 }} // Adjusted for visibility
    />
  );

  const dots = Array.from({ length: totalDots }, (_, i) => i);

  return device === "mobile" ? (
    <div className={styles.mobileFiveDots}>
      {dots.map((el) => (
        <Dot key={el} dotNum={el} />
      ))}
    </div>
  ) : (
    <div className={styles.frameContainer}>
      <div
        className={styles.frameContainer__frameBorder1}
        style={{ opacity: device === "mobile" && 0 }}
      />
      <div
        className={styles.frameContainer__frameBorder2}
        style={{ opacity: device === "mobile" && 0 }}
      />
      <div className={styles.frameContainer__fiveDots}>
        {dots.map((dotNum) => (
          <Dot key={dotNum} dotNum={dotNum} />
        ))}
      </div>
      <div
        className={styles.frameContainer__frameBorder3}
        style={{ opacity: device === "mobile" && 0 }}
      />
      <img
        src={"/assets/images/main_logo.png"}
        className={styles.frameContainer__logo}
        alt="Logo"
        // style={{ visibility: "hidden" }}
        style={{ visibility: device === "mobile" && "hidden" }}
      />
      <div
        className={styles.frameContainer__frameBorder4}
        style={{ opacity: device === "mobile" && 0 }}
      />
    </div>
  );
}
