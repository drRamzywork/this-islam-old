import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./carosel.module.scss";
import { useRouter } from "next/router";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import home_screen1 from "../../assets/home_screen1.png";
import home_screen2 from "../../assets/home_screen2.png";
import home_screen3 from "../../assets/home_screen3.png";
import home_screen4 from "../../assets/home_screen4.png";
import home_screen5 from "../../assets/home_screen5.png";

import HomeFrame from "../homeFrame/HomeFrame";
import { languages } from "../../assets/texts";
// forwardRef
const Carousel = (props) => {
  const router = useRouter();
  const [currentDot, setCurrentDot] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const carouselItems = [
    {
      img: home_screen1.src,
      color1: "#7E577A",
      color2: "#975C80",
      header: props?.languageValues?.family,
      description: props?.languageValues?.inIslam,
      path: "the-family-in-islam",
    },

    {
      img: home_screen2.src,
      color1: "#353B59",
      color2: "#86736A",
      header: props?.languageValues?.islam,
      description: props?.languageValues?.islamReligion,
      path: "islam-is-the-religion-of-peace",
    },
    {
      img: home_screen3.src,
      color1: "#6D8AD2",
      color2: "#919ED6",
      header: props?.languageValues.oneCreator,
      description: props?.languageValues.oneGod,
      path: "one-creator-who-alone-deserves-to-be-worshipped",
    },
    {
      img: home_screen4.src,
      color1: "#412005",
      color2: "#875117",
      header: props?.languageValues.islamApproach,
      description: props?.languageValues.eissa,
      path: "islams-view-of-jesus-christ",
    },
    {
      img: home_screen5.src,
      color1: "#4D6960",
      color2: "#96AB8E",
      header: props?.languageValues.sin,
      description: props?.languageValues.redemption,
      path: "sin-and-repentance",
    },
  ];

  return (
    <>
      <div id="carousel" style={{ position: "relative", height: "100%" }}>
        <div className={styles.caroselContainer}>
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => setCurrentDot(swiper.realIndex)}
            speed={500}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{
              delay: 4000,
            }}
            loop={true}
            id="swiper-carosel"
            dir={languages?.dir}
          >
            {carouselItems.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  className={styles.prevCaroselImg}
                  id={styles.prevCaro}
                  src={item.img}
                  alt=""
                />

                <div
                  className={styles.caroselName}
                  style={{
                    // transform: props?.language?.dir !== "rtl" ? "scaleX(-1)" : "",
                    left: props?.language?.dir !== "rtl" ? "10vw" : "",
                    textAlign:
                      props?.language?.dir === "rtl" ? "right" : "left",
                    direction: props?.language?.dir === "rtl" ? "rtl" : "",
                  }}
                  onClick={() => router.push(`/${item.path}`)}
                >
                  <div
                    className={styles.carouselNameHeader}
                    id={styles.header}
                    style={{ color: item.color1 }}
                  >
                    {item.header}
                  </div>
                  <div
                    className={styles.carouselNameDescription}
                    id={styles.description}
                    style={{ color: item.color2 }}
                  >
                    {item.description}
                  </div>
                </div>

                <div>
                  <HomeFrame
                    currentDot={currentDot}
                    setCurrentDot={setCurrentDot}
                    totalDots={carouselItems.length}
                    onChangeSlide={(index) => swiperInstance?.slideTo(index)}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Carousel;
