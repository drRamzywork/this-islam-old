// OptionDetails.js
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import Footer from "../../components/footer/footer";
import mainLogo from "../../assets/main_logo.png";
import styles from "./optionDetails.module.scss";

export default function OptionDetails({ initialData }) {
  const router = useRouter();
  const { lang, topic } = router.query;
  const [topicDetails, setTopicDetails] = useState([]);

  const opacityEditing = () => {
    router.push(`/${lang}`);
  };

  useEffect(() => {
    if (!router.isReady) return;
    const fetchData = async () => {
      const response = await axios.get(
        `https://app.thisislam.net/api/get_content/${lang}/${topic}`
      );
      setTopicDetails(response.data.data);
    };
    fetchData();
  }, [lang, topic, router.isReady]);

  return (
    <div className={styles.optionDetailsContainer}>
      {/* Your component structure goes here */}
      <Image src={mainLogo} alt="Logo" onClick={opacityEditing} />
      {topicDetails && <div>{/* Content based on topicDetails */}</div>}
      <Footer />
    </div>
  );
}
