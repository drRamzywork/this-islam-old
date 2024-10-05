// import React, { useEffect, useState, useRef } from "react";
// import styles from "./sideMenu.module.scss";
// import closeIcon from "../../assets/closeIcon.png";
// import Image from "next/image"; // Correct import for Next.js Image component
// import axios from "axios";
// import { useRouter } from "next/router";
// import { useLanguage } from "../../context/LanguageContext";

// export default function SideMenu() {
//   const { sideMenuOpened, languageValues, language, setSideMenu } =
//     useLanguage();
//   const backgroundRef = useRef();
//   const [options, setOptions] = useState([]);
//   const [isMobile, setIsMobile] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     // Fetch menu items only if the language changes and not on every options update
//     const fetchMenuItems = async () => {
//       const response = await axios.get(
//         `https://app.thisislam.net/api/menu_items/${router.locale}`
//       );
//       setOptions(response.data.data);
//     };

//     fetchMenuItems();
//   }, [router.locale]); // Depend only on router.locale to avoid unnecessary fetches

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth > window.innerHeight);
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize(); // Initial check

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const changeBackground = (state, elm) => {
//     const currentOption = options.find(
//       (ele) => ele.title === elm.target.innerText
//     );
//     if (state === "enter" && currentOption) {
//       backgroundRef.current.style.cssText = `opacity: 0.45; background-image: url(${currentOption.image});`;
//       document.getElementById(
//         `listItem${currentOption.id}`
//       ).style.cssText = `color: ${currentOption.color}; opacity: 1;`;
//     } else {
//       backgroundRef.current.style = "none";
//       options.forEach((elm) => {
//         const element = document.getElementById(`listItem${elm.id}`);
//         if (element) {
//           element.style.color = "#c0c0c0";
//         }
//       });
//     }
//   };

//   return sideMenuOpened ? (
//     <div className={styles["sideMenu-container"]}>
//       <div className={styles["sideMenu-container__header"]}>
//         <div className={styles["sideMenu-container__header__adjustment"]} />
//         <div className={styles["sideMenu-container__header__name"]}>
//           {languageValues.thisIsIslam}
//         </div>
//         <Image
//           className={styles["sideMenu-container__header__closeIcon"]}
//           onClick={() => setSideMenu(false)}
//           src={closeIcon.src} // Ensure the src attribute is correctly referenced for Image component
//           alt="Close icon"
//           width={24}
//           height={24}
//         />
//       </div>
//       <div
//         ref={backgroundRef}
//         className={styles["sideMenu-container__backgroundBody"]}
//       />
//       <div className={styles["sideMenu-container__body"]}>
//         {options.map((elm, index) => (
//           <div
//             key={index}
//             onClick={() => {
//               router.push(`/${language.code}/${elm.slug}`);
//               setSideMenu(false);
//             }}
//             id={"listItem" + elm.id}
//             className={styles["sideMenu-container__body__option"]}
//             style={{
//               fontSize: isMobile ? "2.8vmax" : undefined,
//               width: isMobile ? "60%" : undefined,
//             }}
//           >
//             <p
//               onMouseEnter={(e) => changeBackground("enter", e)}
//               onMouseLeave={(e) => changeBackground("leave", e)}
//               style={{
//                 direction: language?.dir === "rtl" ? "rtl" : "ltr",
//               }}
//             >
//               {elm.title}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   ) : null;
// }

import React, { useEffect, useState, useRef } from "react";
import styles from "./sideMenu.module.scss";
import axios from "axios";
import { useRouter } from "next/router";
import { useLanguage } from "../../context/LanguageContext";
import { IoClose } from "react-icons/io5";

export default function SideMenu() {
  const { sideMenuOpened, languageValues, language, setSideMenu } =
    useLanguage();
  const backgroundRef = useRef();
  const [options, setOptions] = useState([]);
  const [isMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Fetch menu items only if the language changes and not on every options update
    const fetchMenuItems = async () => {
      const response = await axios.get(
        `https://app.thisislam.net/api/menu_items/${router.locale}`
      );
      setOptions(response.data.data);
    };

    fetchMenuItems();
  }, [router.locale]); // Depend only on router.locale to avoid unnecessary fetches

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth > window.innerHeight);
  //   };

  //   window.addEventListener("resize", handleResize);
  //   handleResize(); // Initial check

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  const changeBackground = (state, elm) => {
    const currentOption = options.find(
      (ele) => ele.title === elm.target.innerText
    );
    if (state === "enter" && currentOption) {
      backgroundRef.current.style.cssText = `opacity: 0.45; background-image: url(${currentOption.image});`;
      document.getElementById(
        `listItem${currentOption.id}`
      ).style.cssText = `color: ${currentOption.color}; opacity: 1;`;
    } else {
      backgroundRef.current.style = "none";
      options.forEach((elm) => {
        const element = document.getElementById(`listItem${elm.id}`);
        if (element) {
          element.style.color = "#c0c0c0";
        }
      });
    }
  };

  return sideMenuOpened ? (
    <div className={styles["sideMenu-container"]}>
      <div className={styles["sideMenu-container__header"]}>
        <div className={styles["sideMenu-container__header__adjustment"]} />
        <div className={styles["sideMenu-container__header__name"]}>
          {languageValues.thisIsIslam}
        </div>

        <IoClose
          onClick={() => setSideMenu(false)}
          className={styles["sideMenu-container__header__closeIcon"]}
        />
      </div>
      <div
        ref={backgroundRef}
        className={styles["sideMenu-container__backgroundBody"]}
      />
      <div className={styles["sideMenu-container__body"]}>
        {options.map((elm, index) => (
          <div
            key={index}
            onClick={() => {
              router.push(`/${language?.code}/${elm.slug}`);
              setSideMenu(false);
            }}
            id={"listItem" + elm.id}
            className={styles["sideMenu-container__body__option"]}
            style={{
              fontSize: isMobile ? "2.8vmax" : undefined,
              width: isMobile ? "60%" : undefined,
            }}
          >
            <p
              onMouseEnter={(e) => changeBackground("enter", e)}
              onMouseLeave={(e) => changeBackground("leave", e)}
              style={{
                direction: language?.dir === "rtl" ? "rtl" : "ltr",
              }}
            >
              {elm.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  ) : null;
}
