import React from "react";
import styles from "./languageModal.module.scss";
import { useLanguage } from "../../context/LanguageContext";
import { useRouter } from "next/router";
import { IoClose } from "react-icons/io5";

export default function LanguageModal() {
  const {
    setLanguageModal,
    languageModalOpened,
    languageValues,
    allLanguages,
  } = useLanguage();

  const router = useRouter();

  // const handleChangeLanguage = (elm) => {
  //   setLanguageModal(false);
  //   setLanguage(elm);
  // };

  return languageModalOpened ? (
    <div className={styles.languageModal_container}>
      <div className={styles.languageModal_container__header}>
        <div className={styles.languageModal_container__header__adjustment} />
        <div className={styles.languageModal_container__header__name}>
          {languageValues.thisIsIslam}
        </div>

        <IoClose
          onClick={() => setLanguageModal(false)}
          className={styles.languageModal_container__header__closeIcon}
        />
      </div>

      <div className={styles.languageModal_container__body}>
        {allLanguages?.map((elm, i) => (
          <a
            // onClick={() => handleChangeLanguage(elm)}
            key={`selected_Language_${i}`}
            className={styles.languageModal_container__body__language}
            href={`/${elm.code}${router.asPath}`}
          >
            {elm.name}
          </a>
        ))}
      </div>
    </div>
  ) : null;
}
