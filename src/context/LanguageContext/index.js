import axios from "axios";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [sideMenuOpened, setSideMenu] = useState(false);
  const [allLanguages, setAllLanguages] = useState([]);
  const [languageModalOpened, setLanguageModal] = useState();
  const [languageValues, setLanguageValues] = useState({});
  const router = useRouter();

  // Simplify the language object to just use the locale directly
  const languageCode = router.locale || "ar"; // Fallback to 'ar' if no locale is defined

  useEffect(() => {
    const fetchLanguages = async () => {
      if (allLanguages.length === 0) {
        const response = await axios.get(
          `https://app.thisislam.net/api/all_langs`
        );
        setAllLanguages(response.data.data);
      }
    };

    const fetchLanguageValues = async () => {
      const response = await axios.get(
        `https://app.thisislam.net/api/get_home/${languageCode}`
      );
      setLanguageValues(response.data);
    };

    fetchLanguages();
    fetchLanguageValues();
  }, [languageCode, languageCode.length]);

  // const setLanguage = (code) => {
  //   router.push(router.pathname, router.asPath, { locale: code });
  // };

  const setLanguage = [];
  return (
    <LanguageContext.Provider
      value={{
        sideMenuOpened,
        setSideMenu,
        language: {
          code: languageCode,
          dir: languageCode === "ar" ? "rtl" : "ltr",
        },
        setLanguage,
        allLanguages,
        setAllLanguages,
        languageModalOpened,
        setLanguageModal,
        languageValues,
        setLanguageValues,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
