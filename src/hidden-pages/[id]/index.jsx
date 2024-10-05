import { useRouter } from 'next/router';
import Head from 'next/head';
import React from 'react';
import styles from '../../../components/TopicComponent/index.module.scss'
import Footer from '../../components/Footer';
import vStyles from './index.module.scss'
import { useLanguage } from '../../context/LanguageContext';

const Video = ({ languageValues, siteInfo, getVideoData }) => {
  const { setSideMenu, setLanguageModal } = useLanguage();

  const SiteDescription = siteInfo.data.description;
  const SiteKeyWords = siteInfo.data.keywords;
  const SiteName = siteInfo.data.site_name;


  const videos = [
    {
      id: 1,
      locales: {
        en: { title: 'Why Allah?', url: 'YpJtfoJ9qS8' },
        ar: { title: 'لماذا الله؟', url: 'YpJtfoJ9qS8' },
        fr: { title: 'Pourquoi Allah?', url: '_ETIdmzSXnM' }
      }
    },
    {
      id: 2,
      locales: {
        en: { title: 'The Hijab', url: 'ndA_LzoH2wk' },
        ar: { title: 'الحجاب', url: 'udFmkBak_nc' },
        ru: { title: 'Хиджаб', url: 'TN5P0qJ_7Yo' }
      }
    },
  ];

  const router = useRouter();
  const { locale } = useRouter();
  const { id } = router.query;

  const videoId = parseInt(id, 10);
  const video = videos.find(v => v.id === videoId);
  // const videoFiltred = video?.locales[locale];
  const videoFiltred = video?.locales[locale] || video?.locales['ar'];


  const opacityEditing = () => {
    router.push(`/`);
  };



  const HeaderDetails = () => (
    <div className={styles.optionDetailsContainer__mainCard__header}>
      <div style={{ flex: 1 }}>
        {languageValues?.thisIsIslam}
      </div>
      <div style={{ flex: 1 }}>
        <img alt='' src={"/assets/images/burgerMenuIcon.png"} onClick={() => setSideMenu(true)} />
        <img alt=''
          style={{ marginBottom: -4 }}
          src={'/assets/images/languageIcon.png'}
          onClick={() => setLanguageModal(true)}
        />
      </div>
      <img alt=''
        style={{
          flex: 1,
          height: "50%",
          objectFit: "contain",
          cursor: "pointer",
        }}
        src={"/assets/images/main_logo.png"}
        onClick={() => opacityEditing()}
      />
    </div>
  );
  return (
    <>
      <Head>
        <title>{`${SiteName} - ${videoFiltred?.title}`}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={SiteDescription} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content={SiteKeyWords} />
        <meta property="og:title" content={SiteName} />
        <meta property="og:description" content={SiteDescription} />
        <meta property="og:url" content={"https://thisislam.net/"} />
        <meta property="og:type" content="website" />
        <meta name="twitter:domain" content="https://thisislam.net/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SiteName} />
        <meta name="twitter:description" content={SiteDescription} />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta name="google-site-verification" content="ZMcQQyaUJV6fuXkMty467caCYlHFOkDuUh9qeXZNpYw" />
        <meta property="og:image" content="https://thisislam.net/assets/images/blueLogo.jpeg" />
        <meta name="twitter:image" content="https://thisislam.net/assets/images/blueLogo.jpeg" />
      </Head>

      <HeaderDetails />

      <section className={vStyles.video}>
        <h1 style={{
          fontFamily: "BoldSans",
          color: "#975C80",
        }}>{getVideoData?.title}</h1>
        <div className="container">

          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${getVideoData?.video}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

      </section>


      <Footer />
    </>
  );
};

export default Video;

export async function getStaticProps({ locale, params }) {
  const id = params.id;
  const getVideoRes = await fetch(`https://app.thisislam.net/api/get-videos/${locale}?single=${id}`);
  const getVideoData = await getVideoRes.json();

  const languageValuesRes = await fetch(`https://app.thisislam.net/api/get_home/${locale}`);
  const languageValues = await languageValuesRes.json();

  const siteInfoRes = await fetch(`https://app.thisislam.net/api/get_site_info/${locale}`);
  const siteInfo = await siteInfoRes.json();


  return {
    props: {
      languageValues,
      getVideoData,
      siteInfo,
    },
    revalidate: 10,
  };
}



export async function getStaticPaths({ locales }) {
  let paths = [];

  try {
    // Loop through each locale to fetch video data
    for (const locale of locales) {
      const res = await fetch(`https://app.thisislam.net/api/get-videos/${locale}`);
      const videos = await res.json();

      // Map through videos to create paths with dynamic ID and locale
      const localePaths = videos.map((video) => ({
        params: { id: video.id.toString() }, // Ensure id is a string
        locale,
      }));

      paths = [...paths, ...localePaths];
    }

    return {
      paths, // Make sure this is not undefined
      fallback: 'blocking',
    };
  } catch (error) {
    console.error('Error in getStaticPaths:', error);
    return {
      paths: [], // Return empty paths array if there’s an error
      fallback: 'blocking',
    };
  }
}



// export async function getStaticPaths() {
//   const videosIds = [1, 2, 3, 4, 5];

//   const paths = videosIds.map((data) => {
//     return {
//       params: { id: data.toString() },
//     };
//   });

//   return {
//     paths,
//     fallback: 'blocking',
//   };
// }
