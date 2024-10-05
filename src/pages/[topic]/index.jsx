import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import TopicComponent from "../../components/TopicComponent";

export default function OptionDetails({ languageValues, topicDetails }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div></div>;
  }

  const firstTitleName = topicDetails?.parent?.title?.split(" ")[0];
  const fullTitleName = topicDetails?.parent?.title.substr(
    topicDetails?.parent?.title.indexOf(" ") + 1
  );

  return (
    <>
      <Head>
        <title> {topicDetails?.parent?.title?.split(" ")[0]} {topicDetails?.parent.title.substr(
          topicDetails?.parent.title.indexOf(" ") + 1
        )} {`|`} {languageValues?.thisIsIslam}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={topicDetails?.parent?.short_intro} />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={firstTitleName + ' ' + fullTitleName} />
        <meta property="og:description" content={topicDetails?.parent?.short_intro} />
        <meta property="og:url" content="https://thisislam.net/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={topicDetails?.parent?.image}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image"
          content={topicDetails?.parent?.image}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={firstTitleName + ' ' + fullTitleName} />
        <meta name="twitter:description" content={topicDetails?.parent?.short_intro} />
        <meta
          name="twitter:image"
          content={topicDetails?.parent?.image}
        />
        <link rel="alternate" href={`https://thisislam.net/${router.query.topic}`} hreflang={router.locale} />
        <link rel="alternate" href={`https://thisislam.net/${router.locale}/${router.query.topic}`} hreflang={router.locale} />

      </Head>

      <TopicComponent languageValues={languageValues} topicDetails={topicDetails} />
    </>
  );
}

export async function getStaticPaths() {
  try {
    const slugsRes = await fetch("https://app.thisislam.net/api/get-slugs");

    if (!slugsRes.ok) {
      throw new Error(`Failed to fetch slugs, received status: ${slugsRes.status}`);
    }

    const slugs = await slugsRes.json();

    const paths = slugs.map(slug => ({
      params: { topic: slug }
    }));

    return {
      paths,
      fallback: true // Fallback enables lazy-loading of pages
    };

  } catch (error) {
    console.error("Error fetching slugs:", error);
    return {
      paths: [], // Return empty paths in case of error
      fallback: true
    };
  }
}

export async function getStaticProps({ params, locale }) {
  const { topic } = params;

  let languageValues = {};
  let topicDetails = {};

  try {
    const languageValuesRes = await fetch(`https://app.thisislam.net/api/get_home/${locale}`);
    if (!languageValuesRes.ok) throw new Error(`Failed to fetch language values, status: ${languageValuesRes.status}`);
    languageValues = await languageValuesRes.json();
  } catch (error) {
    console.error(`Error fetching language values for locale ${locale}:`, error);
  }

  try {
    const topicDetailsRes = await fetch(`https://app.thisislam.net/api/get_content/${locale}/${topic}`);
    if (!topicDetailsRes.ok) throw new Error(`Failed to fetch topic details, status: ${topicDetailsRes.status}`);
    topicDetails = await topicDetailsRes.json();
  } catch (error) {
    console.error(`Error fetching topic details for topic ${topic}:`, error);
  }

  return {
    props: {
      languageValues: languageValues || {},
      topicDetails: topicDetails || {},
    },
    revalidate: 10,
  };
}
