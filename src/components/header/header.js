// import React, { useState, useEffect } from "react";
// import styles from "./header.module.scss";
// import languagesIcon from "../../assets/languageIcon.png"; // Ensure your build system supports image imports
// import burgerMenuIcon from "../../assets/burgerMenuIcon.png"; // Ensure your build system supports image imports
// import { useLanguage } from "../../context/LanguageContext";

// export default function Header(props) {
//   const { setLanguageModal, setSideMenu } = useLanguage();
//   const [device, setDevice] = useState("pc");

//   useEffect(() => {
//     const handleResize = () => {
//       setDevice(window.innerWidth > window.innerHeight ? "pc" : "mobile");
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className={styles.headerContainer}>
//       <div
//         className={styles.headerContainer__headerBorder1}
//         style={{
//           opacity:
//             device === "mobile" || props.currentPage !== "landing" ? 0 : 1,
//         }}
//       />
//       <div className={styles.headerContainer__thisisislam}>
//         {props?.languageValues?.thisIsIslam}
//       </div>
//       <div
//         className={styles.headerContainer__headerBorder2}
//         style={{
//           opacity:
//             device === "mobile" || props.currentPage !== "landing" ? 0 : 1,
//         }}
//       />
//       <img
//         className={styles.headerContainer__icon}
//         style={{ marginLeft: device === "mobile" ? "-3vw" : undefined }}
//         src={languagesIcon.src} // If using Next.js Image component, replace `src` with `languagesIcon`
//         alt="Change Language"
//         onClick={() => setLanguageModal(true)}
//       />
//       <img
//         className={styles.headerContainer__icon}
//         style={{ marginLeft: device === "mobile" ? "5vw" : undefined }}
//         src={burgerMenuIcon.src} // If using Next.js Image component, replace `src` with `burgerMenuIcon`
//         alt="Menu"
//         onClick={() => setSideMenu(true)}
//       />
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import styles from "./header.module.scss";
// import languagesIcon from "../..";
// import burgerMenuIcon from "../..";
import { useLanguage } from "../../context/LanguageContext";

export default function Header(props) {
  const { setLanguageModal, setSideMenu } = useLanguage();
  const [device, setDevice] = useState("pc");

  useEffect(() => {
    const handleResize = () => {
      setDevice(window.innerWidth > window.innerHeight ? "pc" : "mobile");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.headerContainer}>
      <div
        className={styles.headerContainer__headerBorder1}
        style={{
          opacity:
            device === "mobile" || props.currentPage !== "landing" ? 0 : 1,
        }}
      />
      <div className={styles.headerContainer__thisisislam}>
        {props?.languageValues?.thisIsIslam}
      </div>
      <div
        className={styles.headerContainer__headerBorder2}
        style={{
          opacity:
            device === "mobile" || props.currentPage !== "landing" ? 0 : 1,
        }}
      />
      <img
        className={styles.headerContainer__icon}
        style={{ marginLeft: device === "mobile" ? "-3vw" : undefined }}
        src={"/assets/images/languageIcon.png"}
        alt="Change Language"
        onClick={() => setLanguageModal(true)}
      />
      <img
        className={styles.headerContainer__icon}
        style={{ marginLeft: device === "mobile" ? "5vw" : undefined }}
        src={"/assets/images/burgerMenuIcon.png"}
        alt="Menu"
        onClick={() => setSideMenu(true)}
      />
    </div>
  );
}
