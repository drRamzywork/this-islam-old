// // import React, { useState, useEffect } from "react";
// // import Header from "../../components/header/header";
// // import { useRef } from "react";
// // import Footer from "../../components/footer/footer";
// // import styles from "./home.module.scss";
// // import Carosel from "../../components/carosel/carosel";
// // import BrainReligion from "../brain_religion/brain_religion";
// // import BrainReligionMobile1 from "../brain_religion/brain_religion_mobile1";
// // import BrainReligionMobile2 from "../brain_religion/brain_religion_mobile2";
// // import Questions from "../questions/questions";
// // import Environment from "../environment/environment";
// // import Religions from "../religions/religions";
// // import OneCreator from "../_one_creator/one_creator";
// // import IslamMessanger from "../_islam_messanger/islam_messanger";
// // import ToIslam from "../_to_islam/to_islam";
// // import ToIslamMobileHeader from "../_to_islam/to_islam_mobile_header";
// // import ToIslamMobileContent from "../_to_islam/to_islam_mobile_content";
// // import mainLogo from "../../assets/main_logo.png";
// // import mainLogo1 from "../../assets/WhiteLogo.svg";
// // import mainLogoBlack from "../../assets/main_logo_black.png";
// // import axios from "axios";
// // import IslamMessangerMobileHeader from "../_islam_messanger/islam_messanger_mobile_header";
// // import IslamMessangerMobileContent from "../_islam_messanger/islam_messanger_mobile_content";
// // import OneCreatorMobileHeader from "../_one_creator/one_creator_mobile_header";
// // import OneCreatorMobileContent from "../_one_creator/one_creator_mobile_content";

// // export default function Home(props) {
// //   const [device, setDevice] = useState("pc");
// //   const [currentPage, setCurrentPage] = useState("landing");
// //   const [scrolling, setScrolling] = useState({
// //     brain: false,
// //     one_creator: false,
// //     islam_messanger: false,
// //     to_islam: false,
// //   });
// //   const ref = useRef(null);

// //   // useEffect(() => {
// //   //   function handleResize() {
// //   //     setDevice(window.innerWidth > window.innerHeight ? "pc" : "mobile");
// //   //   }
// //   //   handleResize();
// //   //   window.addEventListener("resize", handleResize);
// //   //   return () => window.removeEventListener("resize", handleResize);
// //   // }, []);

// //   const settingScrolling = (x) => {
// //     setScrolling(x);
// //   };

// //   const opacityEditing = () => {
// //     document.getElementById("home").style.opacity = 0;
// //     setTimeout(() => {
// //       props.setDetailsClicked(true);
// //     }, 500);
// //   };

// //   const scollingPage = () => {
// //     if (device != "mobile")
// //       return (
// //         currentPage === "brain" ||
// //         currentPage === "one_creator" ||
// //         currentPage === "islam_messanger" ||
// //         currentPage === "to_islam"
// //       );
// //   };

// //   return (
// //     <div
// //       className={styles.homeContainer}
// //       ref={ref}
// //       id={"home"}
// //       style={{
// //         overflowY: scollingPage() && !scrolling[currentPage] && "hidden",
// //         filter: props.languageModalOpened && "opacity(.8) blur(10px)",
// //       }}
// //     >
// //       <Header
// //         setDetailsClicked={opacityEditing}
// //         setSideMenu={props.setSideMenu}
// //         currentPage={currentPage}
// //         languageValues={languageValues}
// //         language={props.language}
// //         setLanguage={props.setLanguage}
// //         setLanguageModal={props.setLanguageModal}
// //       />
// //       <Carosel
// //         setDetailsClicked={opacityEditing}
// //         languageValues={languageValues}
// //         language={props.language}
// //       />
// //       {device == "mobile" ? (
// //         <>
// //           <BrainReligionMobile1
// //             currentPage={currentPage}
// //             donePages={scrolling}
// //             animationDone={settingScrolling}
// //             languageValues={languageValues}
// //             language={props.language}
// //           />
// //           <BrainReligionMobile2
// //             currentPage={currentPage}
// //             donePages={scrolling}
// //             animationDone={settingScrolling}
// //             languageValues={languageValues}
// //             language={props.language}
// //           />
// //         </>
// //       ) : (
// //         <BrainReligion
// //           currentPage={currentPage}
// //           donePages={scrolling}
// //           animationDone={settingScrolling}
// //           languageValues={languageValues}
// //           language={props.language}
// //         />
// //       )}
// //       {console.log(currentPage, "currentPage")}
// //       <Questions
// //         currentPage={currentPage}
// //         languageValues={languageValues}
// //         language={props.language}
// //       />

// //       <Environment
// //         currentPage={currentPage}
// //         languageValues={languageValues}
// //         language={props.language}
// //       />
// //       <Religions
// //         currentPage={currentPage}
// //         languageValues={languageValues}
// //         language={props.language}
// //       />
// //       {device != "mobile" && (
// //         <OneCreator
// //           currentPage={currentPage}
// //           donePages={scrolling}
// //           animationDone={settingScrolling}
// //           languageValues={languageValues}
// //           language={props.language}
// //         />
// //       )}
// //       {device == "mobile" && (
// //         <OneCreatorMobileHeader
// //           currentPage={currentPage}
// //           donePages={scrolling}
// //           animationDone={settingScrolling}
// //           languageValues={languageValues}
// //           language={props.language}
// //         />
// //       )}
// //       {device == "mobile" && (
// //         <OneCreatorMobileContent
// //           currentPage={currentPage}
// //           donePages={scrolling}
// //           animationDone={settingScrolling}
// //           languageValues={languageValues}
// //           language={props.language}
// //         />
// //       )}
// //       {device != "mobile" && (
// //         <IslamMessanger
// //           currentPage={currentPage}
// //           donePages={scrolling}
// //           animationDone={settingScrolling}
// //           languageValues={languageValues}
// //           language={props.language}
// //         />
// //       )}
// //       {device == "mobile" && (
// //         <IslamMessangerMobileHeader
// //           currentPage={currentPage}
// //           donePages={scrolling}
// //           animationDone={settingScrolling}
// //           languageValues={languageValues}
// //           language={props.language}
// //         />
// //       )}
// //       {device == "mobile" && (
// //         <IslamMessangerMobileContent
// //           currentPage={currentPage}
// //           donePages={scrolling}
// //           animationDone={settingScrolling}
// //           languageValues={languageValues}
// //           language={props.language}
// //         />
// //       )}
// //       {device != "mobile" && (
// //         <ToIslam
// //           currentPage={currentPage}
// //           donePages={scrolling}
// //           animationDone={settingScrolling}
// //           languageValues={languageValues}
// //           language={props.language}
// //         />
// //       )}
// //       {device == "mobile" && (
// //         <ToIslamMobileHeader
// //           currentPage={currentPage}
// //           donePages={scrolling}
// //           animationDone={settingScrolling}
// //           languageValues={languageValues}
// //           language={props.language}
// //         />
// //       )}
// //       {device == "mobile" && (
// //         <ToIslamMobileContent
// //           currentPage={currentPage}
// //           donePages={scrolling}
// //           animationDone={settingScrolling}
// //           languageValues={languageValues}
// //           language={props.language}
// //         />
// //       )}
// //       <Footer />
// //       {currentPage != "notLanding" && (
// //         <img
// //           onClick={
// //             (/* , setCurrentPage("landing") */) =>
// //               ref.current.scrollTo({
// //                 top: 0,
// //                 left: 0,
// //                 behavior: "smooth",
// //               })
// //           }
// //           src={
// //             device == "mobile"
// //               ? mainLogo1
// //               : currentPage == "religions" ||
// //                 currentPage == "one_creator" ||
// //                 currentPage == "islam_messanger" ||
// //                 currentPage == "to_islam"
// //               ? mainLogoBlack
// //               : mainLogo
// //           }
// //           style={{
// //             cursor: "pointer",
// //             position: "absolute",
// //             bottom: device == "mobile" ? "4vh" : "5vh",
// //             right: device == "mobile" ? "6vw" : "2.2vw",
// //           }}
// //         />
// //       )}
// //     </div>
// //   );
// // }

// // const [currentPage, setCurrentPage] = useState("landing");
// // const { languageModalOpened } = useLanguage();

// // const [scrolling, setScrolling] = useState({
// //   brain: false,
// //   one_creator: false,
// //   islam_messanger: false,
// //   to_islam: false,
// // });
// // const [device, setDevice] = useState("pc"); // Initialize device state
// // const ref = useRef(null);

// // // Detect device type based on viewport width
// // useEffect(() => {
// //   function handleResize() {
// //     setDevice(window.innerWidth > window.innerHeight ? "pc" : "mobile");
// //   }

// //   // Execute once to set initial state
// //   handleResize();

// //   // Add event listener for subsequent resize events
// //   window.addEventListener("resize", handleResize);

// //   // Cleanup listener on component unmount
// //   return () => window.removeEventListener("resize", handleResize);
// // }, []);

// // const opacityEditing = () => {
// //   document.getElementById("home").style.opacity = 0;
// //   setTimeout(() => {
// //     props.setDetailsClicked(true);
// //   }, 500);
// // };
// // const settingScrolling = (x) => {
// //   setScrolling(x);
// // };
// // const scollingPage = () => {
// //   if (device != "mobile")
// //     return (
// //       currentPage === "brain" ||
// //       currentPage === "one_creator" ||
// //       currentPage === "islam_messanger" ||
// //       currentPage === "to_islam"
// //     );
// // };

// // =====================++++++++++++++++++++++++++++++++++++++++=====================

// import React, { useState, useEffect } from "react";
// import Header from "../../components/header/header";
// import { useRef } from "react";
// import Footer from "../../components/footer/footer";
// import "./home.module.scss";
// import Carosel from "../../components/carosel/carosel";
// import BrainReligion from "../brain_religion/brain_religion";
// import BrainReligionMobile1 from "../brain_religion/brain_religion_mobile1";
// import BrainReligionMobile2 from "../brain_religion/brain_religion_mobile2";
// import Questions from "../questions/questions";
// import Environment from "../environment/environment";
// import Religions from "../religions/religions";
// import OneCreator from "../_one_creator/one_creator";
// import IslamMessanger from "../_islam_messanger/islam_messanger";
// import ToIslam from "../_to_islam/to_islam";
// import ToIslamMobileHeader from "../_to_islam/to_islam_mobile_header";
// import ToIslamMobileContent from "../_to_islam/to_islam_mobile_content";
// import mainLogo from "../../assets/main_logo.png";
// import mainLogo1 from "../../assets/WhiteLogo.svg";
// import mainLogoBlack from "../../assets/main_logo_black.png";
// import axios from "axios";
// import IslamMessangerMobileHeader from "../_islam_messanger/islam_messanger_mobile_header";
// import IslamMessangerMobileContent from "../_islam_messanger/islam_messanger_mobile_content";
// import OneCreatorMobileHeader from "../_one_creator/one_creator_mobile_header";
// import OneCreatorMobileContent from "../_one_creator/one_creator_mobile_content";
// import { useLanguage } from "../../context/LanguageContext";

// export default function Home(props) {
//   const [currentPage, setCurrentPage] = useState("landing");
//   const [device, setDevice] = useState("pc");
//   const [scrolling, setScrolling] = useState({
//     brain: false,
//     one_creator: false,
//     islam_messanger: false,
//     to_islam: false,
//   });

//   console.log(currentPage, "currentPage2");

//   // const [languageValues, setLanguageValues] = useState({})
//   const settingScrolling = (x) => {
//     setScrolling(x);
//   };
//   const scollingPage = () => {
//     if (device != "mobile")
//       return (
//         currentPage === "brain" ||
//         currentPage === "one_creator" ||
//         currentPage === "islam_messanger" ||
//         currentPage === "to_islam"
//       );
//   };

//   const ref = useRef(null);

//   useEffect(() => {
//     function handleResize() {
//       setDevice(window.innerWidth > window.innerHeight ? "pc" : "mobile");
//     }
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);

//     // Setup isScrolling variable
//     var isScrolling;
//     // Listen for scroll events
//     document.getElementById("home").addEventListener(
//       "scroll",
//       function (event) {
//         // Clear our timeout throughout the scroll
//         window.clearTimeout(isScrolling);
//         // Set a timeout to run after scrolling ends
//         isScrolling = setTimeout(function () {
//           let caroselPosition = Math.ceil(
//               document.getElementById("carosel").getClientRects()[0].y
//             ),
//             elementPosition = document
//               .getElementById("home")
//               .getClientRects()[0].height;
//           // Run the callback
//           if (device === "mobile") {
//             caroselPosition != 0
//               ? caroselPosition === Math.ceil(elementPosition * -1)
//                 ? setCurrentPage("brain1")
//                 : caroselPosition === Math.ceil(elementPosition * -2)
//                 ? setCurrentPage("brain2")
//                 : caroselPosition === Math.ceil(elementPosition * -3)
//                 ? setCurrentPage("questions")
//                 : caroselPosition === Math.ceil(elementPosition * -4)
//                 ? setCurrentPage("environment")
//                 : caroselPosition === Math.ceil(elementPosition * -5)
//                 ? setCurrentPage("religions")
//                 : caroselPosition === Math.ceil(elementPosition * -7)
//                 ? setCurrentPage("one_creator")
//                 : caroselPosition === Math.ceil(elementPosition * -9)
//                 ? setCurrentPage("islam_messanger")
//                 : caroselPosition === Math.ceil(elementPosition * -11)
//                 ? setCurrentPage("to_islam")
//                 : setCurrentPage("to_islam")
//               : setCurrentPage("landing");
//           } else {
//             caroselPosition != 0
//               ? caroselPosition === Math.ceil(elementPosition * -1)
//                 ? setCurrentPage("brain")
//                 : caroselPosition === Math.ceil(elementPosition * -2)
//                 ? setCurrentPage("questions")
//                 : caroselPosition === Math.ceil(elementPosition * -3)
//                 ? setCurrentPage("environment")
//                 : caroselPosition === Math.ceil(elementPosition * -4)
//                 ? setCurrentPage("religions")
//                 : caroselPosition === Math.ceil(elementPosition * -5)
//                 ? setCurrentPage("one_creator")
//                 : caroselPosition === Math.ceil(elementPosition * -6)
//                 ? setCurrentPage("islam_messanger")
//                 : caroselPosition === Math.ceil(elementPosition * -7)
//                 ? setCurrentPage("to_islam")
//                 : setCurrentPage("notLanding")
//               : setCurrentPage("landing");
//           }
//         }, 50);
//       },
//       false
//     );
//   }, []);
//   const opacityEditing = () => {
//     document.getElementById("home").style.opacity = 0;
//     setTimeout(() => {
//       props.setDetailsClicked(true);
//     }, 500);
//   };

//   // +++++++++++
