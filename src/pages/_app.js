import React, { useEffect, useState } from "react";
import "../../styles/globals.scss";
import LanguageModal from "../components/languageModal/languageModal";
import SideMenu from "../components/sideMenu/sideMenu";
import { LanguageProvider } from "../context/LanguageContext";
import { useRouter } from "next/router";
import { Puff } from "react-loader-spinner";
import "bootstrap/dist/css/bootstrap.min.css";

import localFont from "next/font/local";

const req3a = localFont({
  src: [
    {
      path: "../../public/fonts/req3a1.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/req3a2.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/req3a3.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/req3a4.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/req3a5.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/req3a6.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/req3a7.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/req3a8.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/WebFonts.ttf",
      weight: "500",
      style: "normal",
    },
  ],

  //
});

function MyApp({ Component, pageProps, menuItems }) {
  const [sideMenuOpened, setSideMenu] = useState(false);
  const [languageModalOpened, setLanguageModal] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const combinedStyles = {
    ...req3a.style,
  };

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <>
      {isLoading && (
        <div className="loader">
          <Puff
            visible={true}
            height="80"
            width="80"
            color="#7e577a"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}

      <LanguageProvider>
        <div className={`App ${router.locale}`} style={combinedStyles}>
          <SideMenu
            isOpened={sideMenuOpened}
            setSideMenu={setSideMenu}
            options={menuItems}
          />
          <LanguageModal
            setLanguageModal={setLanguageModal}
            languageModalOpened={languageModalOpened}
          />
          <Component {...pageProps} />
        </div>
      </LanguageProvider>
    </>
  );
}

export default MyApp;
