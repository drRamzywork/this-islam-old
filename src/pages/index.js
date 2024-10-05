import React, { useState } from "react";
import Home from "../screens/home/home";
import Head from "next/head";

const Index = ({ languageValues, language, allLanguages, siteInfo }) => {
  const [sideMenuOpened, setSideMenu] = useState(false);
  const [languageModalOpened, setLanguageModal] = useState("ss");
  const SiteDescription = siteInfo?.data?.description || "";
  const SiteKeyWords = siteInfo?.data?.keywords || "";
  const SiteName = siteInfo?.data?.site_name || "";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SiteName || "This Islam",
    url: "https://thisislam.net/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://thisislam.net/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <>
      <Head>
        <title>{SiteName || "This Islam"}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content={SiteDescription || "Learn more about Islam"}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="keywords"
          content={SiteKeyWords || "Islam, Religion, Education"}
        />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={SiteName || "This Islam"} />
        <meta
          property="og:description"
          content={SiteDescription || "Discover Islamic knowledge"}
        />
        <meta property="og:url" content="https://thisislam.net/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:domain" content="https://thisislam.net/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SiteName || "This Islam"} />
        <meta
          name="twitter:description"
          content={SiteDescription || "Discover Islamic knowledge"}
        />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta
          property="og:image"
          content="https://thisislam.net/assets/images/blueLogo.jpeg"
        />
        <meta
          name="twitter:image"
          content="https://thisislam.net/assets/images/blueLogo.jpeg"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <Home
        languageValues={languageValues}
        languageModalOpened={languageModalOpened}
        setLanguageModal={setLanguageModal}
        language={language}
        setSideMenu={setSideMenu}
        sideMenuOpened={sideMenuOpened}
      />
    </>
  );
};

export default Index;

export async function getStaticProps({ locale }) {
  let allLanguages = [];
  let languageValues = {};
  let siteInfo = {};

  try {
    const allLanguagesRes = await fetch(
      "https://app.thisislam.net/api/all_langs"
    );
    if (!allLanguagesRes.ok) throw new Error("Failed to fetch all languages");
    const allLanguagesJson = await allLanguagesRes.json();
    allLanguages = allLanguagesJson.data;
  } catch (error) {
    console.error("Error fetching all languages:", error);
  }

  try {
    const languageValuesRes = await fetch(
      `https://app.thisislam.net/api/get_home/${locale}`
    );
    if (!languageValuesRes.ok)
      throw new Error("Failed to fetch language values");
    languageValues = await languageValuesRes.json();
  } catch (error) {
    console.error(
      `Error fetching language values for locale ${locale}:`,
      error
    );
  }

  try {
    const siteInfoRes = await fetch(
      `https://app.thisislam.net/api/get_site_info/${locale}`
    );
    if (!siteInfoRes.ok) throw new Error("Failed to fetch site info");
    siteInfo = await siteInfoRes.json();
  } catch (error) {
    console.error(`Error fetching site info for locale ${locale}:`, error);
  }

  const language = allLanguages.find((lang) => lang.code === locale) ?? null;

  if (!siteInfo || !languageValues) {
    return {
      notFound: true, // Return 404 if necessary data is missing
    };
  }

  return {
    props: {
      language,
      languageValues: languageValues || {},
      allLanguages: allLanguages || [],
      siteInfo: siteInfo || {},
    },
    revalidate: 10, // Revalidate after 10 seconds
  };
}
