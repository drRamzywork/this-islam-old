import React, { useState, useEffect } from "react";
import Header from "../../components/header/header";
import { useRef } from "react";
import styles from "./home.module.scss";
import Carosel from "../../components/carosel/carosel";
import BrainReligion from "../brain_religion/brain_religion";
import BrainReligionMobile1 from "../brain_religion/brain_religion_mobile1";
import BrainReligionMobile2 from "../brain_religion/brain_religion_mobile2";
import Questions from "../questions/questions";
import Environment from "../environment/environment";
import Religions from "../religions/religions";
import OneCreator from "../_one_creator/one_creator";
import IslamMessanger from "../_islam_messanger/islam_messanger";
import ToIslam from "../_to_islam/to_islam";
import ToIslamMobileHeader from "../_to_islam/to_islam_mobile_header";
import ToIslamMobileContent from "../_to_islam/to_islam_mobile_content";
// import mainLogo from "../..";
import IslamMessangerMobileHeader from "../_islam_messanger/islam_messanger_mobile_header";
import IslamMessangerMobileContent from "../_islam_messanger/islam_messanger_mobile_content";
import OneCreatorMobileHeader from "../_one_creator/one_creator_mobile_header";
import OneCreatorMobileContent from "../_one_creator/one_creator_mobile_content";
import { useLanguage } from "../../context/LanguageContext";
import Footer from "../../components/Footer";

export default function Home(props) {
  const [device, setDevice] = useState("pc");
  const { languageModalOpened } = useLanguage();
  const [currentPage, setCurrentPage] = useState("landing");
  const [scrolling, setScrolling] = useState({
    brain: false,
    one_creator: false,
    islam_messanger: false,
    to_islam: false,
  });

  const settingScrolling = (x) => {
    setScrolling(x);
  };

  const scollingPage = () => {
    if (device !== "mobile")
      return (
        currentPage === "brain" ||
        currentPage === "one_creator" ||
        currentPage === "islam_messanger" ||
        currentPage === "to_islam"
      );
  };

  useEffect(() => {
    function handleResize() {
      setDevice(window.innerWidth > window.innerHeight ? "pc" : "mobile");
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const opacityEditing = () => {
    document.getElementById("home").style.opacity = 0;
    setTimeout(() => {
      props.setDetailsClicked(true);
    }, 500);
  };

  // Home Page carousel

  const ref = useRef(null);
  // useEffect(() => {
  //   // Setup isScrolling variable

  //   var isScrolling;

  //   // Listen for scroll events
  //   document.getElementById("home").addEventListener(
  //     "scroll",
  //     function (event) {
  //       // Clear our timeout throughout the scroll
  //       window.clearTimeout(isScrolling);
  //       // Set a timeout to run after scrolling ends

  //       isScrolling = setTimeout(function () {
  //         let caroselPosition = Math.ceil(
  //           document.getElementById("carousel").getBoundingClientRect().y
  //         );

  //         let elementPosition = document
  //           .getElementById("home")
  //           .getBoundingClientRect().height;
  //         // Run the callback
  //         console.log(caroselPosition, "caroselPosition");

  //         if (device === "mobile") {
  //           caroselPosition !== 0
  //             ? caroselPosition === Math.ceil(elementPosition * -1)
  //               ? setCurrentPage("brain1")
  //               : caroselPosition === Math.ceil(elementPosition * -4)
  //               ? setCurrentPage("brain2")
  //               : caroselPosition === Math.ceil(elementPosition * -3)
  //               ? setCurrentPage("questions")
  //               : caroselPosition === Math.ceil(elementPosition * -4)
  //               ? setCurrentPage("environment")
  //               : caroselPosition === Math.ceil(elementPosition * -5)
  //               ? setCurrentPage("religions")
  //               : caroselPosition === Math.ceil(elementPosition * -7)
  //               ? setCurrentPage("one_creator")
  //               : caroselPosition === Math.ceil(elementPosition * -9)
  //               ? setCurrentPage("islam_messanger")
  //               : caroselPosition === Math.ceil(elementPosition * -11)
  //               ? setCurrentPage("to_islam")
  //               : setCurrentPage("to_islam")
  //             : setCurrentPage("landing");
  //         } else {
  //           caroselPosition !== 0
  //             ? caroselPosition === Math.ceil(elementPosition * -1)
  //               ? setCurrentPage("brain")
  //               : caroselPosition === Math.ceil(elementPosition * -2)
  //               ? setCurrentPage("questions")
  //               : caroselPosition === Math.ceil(elementPosition * -3)
  //               ? setCurrentPage("environment")
  //               : caroselPosition === Math.ceil(elementPosition * -4)
  //               ? setCurrentPage("religions")
  //               : caroselPosition === Math.ceil(elementPosition * -5)
  //               ? setCurrentPage("one_creator")
  //               : caroselPosition === Math.ceil(elementPosition * -6)
  //               ? setCurrentPage("islam_messanger")
  //               : caroselPosition === Math.ceil(elementPosition * -7)
  //               ? setCurrentPage("to_islam")
  //               : setCurrentPage("notLanding")
  //             : setCurrentPage("landing");
  //         }
  //       }, 50);
  //     },
  //     false
  //   );
  // }, [currentPage])

  useEffect(() => {
    // Define the logic to update the currentPage based on the carousel's position as a separate function
    const updateCurrentPageBasedOnPosition = () => {
      let caroselPosition = Math.ceil(
        document.getElementById("carousel").getBoundingClientRect().y
      );
      let elementPosition = document
        .getElementById("home")
        .getBoundingClientRect().height;
      console.log(caroselPosition, "caroselPosition");

      if (device === "mobile") {
        if (caroselPosition !== 0) {
          if (caroselPosition === Math.ceil(elementPosition * -1))
            setCurrentPage("brain1");
          else if (caroselPosition === Math.ceil(elementPosition * -4))
            setCurrentPage("brain2");
          else if (caroselPosition === Math.ceil(elementPosition * -3))
            setCurrentPage("questions");
          else if (caroselPosition === Math.ceil(elementPosition * -4))
            setCurrentPage("environment");
          else if (caroselPosition === Math.ceil(elementPosition * -5))
            setCurrentPage("religions");
          else if (caroselPosition === Math.ceil(elementPosition * -7))
            setCurrentPage("one_creator");
          else if (caroselPosition === Math.ceil(elementPosition * -9))
            setCurrentPage("islam_messanger");
          else if (caroselPosition === Math.ceil(elementPosition * -11))
            setCurrentPage("to_islam");
          else setCurrentPage("to_islam");
        } else {
          setCurrentPage("landing");
        }
      } else {
        if (caroselPosition !== 0) {
          if (caroselPosition === Math.ceil(elementPosition * -1))
            setCurrentPage("brain");
          else if (caroselPosition === Math.ceil(elementPosition * -2))
            setCurrentPage("questions");
          else if (caroselPosition === Math.ceil(elementPosition * -3))
            setCurrentPage("environment");
          else if (caroselPosition === Math.ceil(elementPosition * -4))
            setCurrentPage("religions");
          else if (caroselPosition === Math.ceil(elementPosition * -5))
            setCurrentPage("one_creator");
          else if (caroselPosition === Math.ceil(elementPosition * -6))
            setCurrentPage("islam_messanger");
          else if (caroselPosition === Math.ceil(elementPosition * -7))
            setCurrentPage("to_islam");
          else setCurrentPage("notLanding");
        } else {
          setCurrentPage("landing");
        }
      }
    };

    // Setup isScrolling variable
    var isScrolling;

    // Immediately check and set the currentPage when the component mounts
    updateCurrentPageBasedOnPosition();

    // Listen for scroll events
    const onScroll = (event) => {
      // Clear our timeout throughout the scroll
      window.clearTimeout(isScrolling);

      // Set a timeout to run after scrolling ends
      isScrolling = setTimeout(updateCurrentPageBasedOnPosition, 50);
    };

    const homeElement = document.getElementById("home");
    homeElement.addEventListener("scroll", onScroll, false);

    // Clean up the event listener when the component unmounts
    return () => {
      homeElement.removeEventListener("scroll", onScroll, false);
    };
  }, [device]); // Depend on device since  logic branches on this value

  return (
    <div
      className={styles.homeContainer}
      style={{
        overflowY: scollingPage() && !scrolling[currentPage] && "hidden",
        filter: languageModalOpened && "opacity(.8) blur(10px)",
      }}
      ref={ref}
      id="home"
    >
      <Header
        setDetailsClicked={opacityEditing}
        setSideMenu={props.setSideMenu}
        currentPage={currentPage}
        languageValues={props.languageValues}
        language={props.language}
        setLanguage={props.setLanguage}
        setLanguageModal={props.setLanguageModal}
      />
      <div id="carousel" style={{ position: "relative", height: "100%" }}>
        <Carosel
          setDetailsClicked={opacityEditing}
          languageValues={props.languageValues}
          language={props.language}
        />
      </div>

      {device === "mobile" ? (
        <>
          <BrainReligionMobile1
            currentPage={currentPage}
            donePages={scrolling}
            animationDone={settingScrolling}
            languageValues={props.languageValues}
            language={props.language}
          />
          <BrainReligionMobile2
            currentPage={currentPage}
            donePages={scrolling}
            animationDone={settingScrolling}
            languageValues={props.languageValues}
            language={props.language}
          />
        </>
      ) : (
        <BrainReligion
          currentPage={currentPage}
          donePages={scrolling}
          animationDone={settingScrolling}
          languageValues={props.languageValues}
          language={props.language}
        />
      )}
      <Questions
        currentPage={currentPage}
        languageValues={props.languageValues}
        language={props.language}
      />
      <Environment
        currentPage={currentPage}
        languageValues={props.languageValues}
        language={props.language}
      />
      <Religions
        currentPage={currentPage}
        languageValues={props.languageValues}
        language={props.language}
      />
      {device !== "mobile" && (
        <OneCreator
          currentPage={currentPage}
          donePages={scrolling}
          animationDone={settingScrolling}
          languageValues={props.languageValues}
          language={props.language}
        />
      )}
      {device === "mobile" && (
        <OneCreatorMobileHeader
          currentPage={currentPage}
          donePages={scrolling}
          animationDone={settingScrolling}
          languageValues={props.languageValues}
          language={props.language}
        />
      )}
      {device === "mobile" && (
        <OneCreatorMobileContent
          currentPage={currentPage}
          donePages={scrolling}
          animationDone={settingScrolling}
          languageValues={props.languageValues}
          language={props.language}
        />
      )}
      {device !== "mobile" && (
        <IslamMessanger
          currentPage={currentPage}
          donePages={scrolling}
          animationDone={settingScrolling}
          languageValues={props.languageValues}
          language={props.language}
        />
      )}
      {device === "mobile" && (
        <IslamMessangerMobileHeader
          currentPage={currentPage}
          donePages={scrolling}
          animationDone={settingScrolling}
          languageValues={props.languageValues}
          language={props.language}
        />
      )}
      {device === "mobile" && (
        <IslamMessangerMobileContent
          currentPage={currentPage}
          donePages={scrolling}
          animationDone={settingScrolling}
          languageValues={props.languageValues}
          language={props.language}
        />
      )}
      {device !== "mobile" && (
        <ToIslam
          currentPage={currentPage}
          donePages={scrolling}
          animationDone={settingScrolling}
          languageValues={props.languageValues}
          language={props.language}
        />
      )}
      {device === "mobile" && (
        <ToIslamMobileHeader
          currentPage={currentPage}
          donePages={scrolling}
          animationDone={settingScrolling}
          languageValues={props.languageValues}
          language={props.language}
        />
      )}
      {device === "mobile" && (
        <ToIslamMobileContent
          currentPage={currentPage}
          donePages={scrolling}
          animationDone={settingScrolling}
          languageValues={props.languageValues}
          language={props.language}
        />
      )}
      <Footer />
      {currentPage !== "notLanding" && (
        <img
          alt=""
          onClick={
            (/* , setCurrentPage("landing") */) =>
              ref.current.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              })
          }
          src={
            currentPage === "religions" ||
            currentPage === "one_creator" ||
            currentPage === "islam_messanger" ||
            currentPage === "to_islam"
              ? "/assets/images/main_logo_black.png"
              : "/assets/images/main_logo.png"
          }
          style={{
            cursor: "pointer",
            position: "absolute",
            bottom: device === "mobile" ? "4vh" : "5vh",
            right: device === "mobile" ? "6vw" : "2.2vw",
            zIndex: "999",
          }}
        />
      )}
    </div>
  );
}
