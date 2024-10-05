import React from "react";
import styles from "./index.module.scss";
import blackLogo from "../../assets/blackLogo.svg";
import twitterIcon from "../../assets/twitter.svg";
import facebookIcon from "../../assets/facebook.svg";
import whatsappIcon from "../../assets/whatsapp.svg";
import instaIcon from "../../assets/insta.svg";
import Image from "next/image";

export default function Footer() {

  return (
    <>
      <div className={styles.footerContainerMobile}>
        <div className={styles.logo}>
          <img src={blackLogo.src} alt="Logo" />
          <p>جميع الحقوق محفوظة لموقع هذا هو الإسلام</p>
        </div>

        <div className={styles.socialContainer}>
          <Image width={"auto"} height={300} src={instaIcon} alt="Instagram" />
          <Image width={"auto"} height={300} src={twitterIcon} alt="Twitter" />
          <Image
            width={"auto"}
            height={300}
            src={facebookIcon}
            alt="Facebook"
          />
          <Image
            width={"auto"}
            height={300}
            src={whatsappIcon}
            alt="WhatsApp"
          />
        </div>
      </div>

      <div className={styles.footerContainer}>
        <div className={styles.footerContainer__socialContainer}>
          <Image width={"auto"} height={300} src={instaIcon} alt="Instagram" />
          <Image width={"auto"} height={300} src={twitterIcon} alt="Twitter" />
          <Image
            width={"auto"}
            height={300}
            src={facebookIcon}
            alt="Facebook"
          />
          <Image
            width={"auto"}
            height={300}
            src={whatsappIcon}
            alt="WhatsApp"
          />
        </div>
        <div className={styles.footerContainer__logoContainer}>
          <Image width={"auto"} height={300} src={blackLogo} alt="Logo" />
          <p>جميع الحقوق محفوظة لموقع هذا هو الإسلام</p>
        </div>
        <div className={styles.footerContainer__sectionsContainer}></div>
      </div>
    </>
  );
}
