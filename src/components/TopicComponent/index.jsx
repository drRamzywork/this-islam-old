import React, { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../../context/LanguageContext';
import styles from './index.module.scss'
import Footer from '../Footer';
import { useRouter } from 'next/router';
import Article from '../article/article'
const TopicComponent = ({ languageValues, topicDetails }) => {
  const router = useRouter();
  const mainContainerRef = useRef();
  const { languageModalOpened, language, setSideMenu, setLanguageModal } = useLanguage();
  const [device, setDevice] = useState("pc");
  const [infoClicked, SetInfo] = useState(false);


  const baseClassName = language?.dir === 'rtl' ?
    styles.optionDetailsContainer__commonContainer :
    styles.optionDetailsContainer__commonContainer2;

  const familyContainerClassName = language?.dir === 'rtl' ?
    styles.optionDetailsContainer__commonContainer__familyContainer :
    styles.optionDetailsContainer__commonContainer2__familyContainer;




  useEffect(() => {
    const handleResize = () => {
      setDevice(window.innerWidth > window.innerHeight ? "pc" : "mobile");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        <img
          alt=''
          style={{ marginBottom: -4 }}
          src={'/assets/images/languageIcon.png'}
          onClick={() => setLanguageModal(true)}
        />
      </div>
      <img
        alt=''
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

      {topicDetails !== null &&
        <div
          ref={mainContainerRef}
          className={styles.optionDetailsContainer}
          style={{
            filter: languageModalOpened && "opacity(.8) blur(10px)",
          }}
        >
          {/* Main Picture */}
          <div className={styles.optionDetailsContainer__mainCard}>
            <HeaderDetails />
            <img
              alt=''
              style={{
                height: "54vh",
                width: "100%",
                objectFit: "cover",
                borderRadius: '0'
              }}
              src={topicDetails?.parent?.image}
            />
          </div>



          <div className={`container ${styles.content_container}`}>
            {/* Main Article Name */}
            {device === "mobile" ? (
              <div
                className={styles.optionDetailsContainer__commonMobileContainer}
                style={{ direction: language?.dir === "rtl" ? "rtl" : "ltr" }}
              >
                <p>{topicDetails?.parent?.title?.split(" ")[0]}</p>
                <p>
                  {topicDetails?.parent?.title.substr(
                    topicDetails?.parent?.title.indexOf(" ") + 1
                  )}
                </p>
              </div>
            ) : (
              <div className={baseClassName}>
                {language?.dir === "ltr" && <div />}
                <div
                  className={`${familyContainerClassName} `}
                  style={{
                    textAlign: language?.dir === "rtl" ? "end" : "start",
                  }}
                >
                  {language?.dir === "rtl" ? (
                    <>
                      <div>
                        <p style={{ textAlign: 'justify', direction: language?.dir }}>{topicDetails?.parent?.short_intro}</p>
                      </div>
                      <div />
                      <div>
                        <p>{topicDetails?.parent?.title?.split(" ")[0]}</p>
                        <p
                          style={{
                            fontFamily: "BoldSans",
                            color: "#975C80",
                            textAlign:
                              language?.dir === "rtl" ? "start" : "end",
                            direction: "rtl" ? "rtl" : "ltr",
                          }}
                        >
                          {topicDetails?.parent?.title.substr(
                            topicDetails?.parent?.title.indexOf(" ") + 1
                          )}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <p>{topicDetails?.parent?.title.split(" ")[0]}</p>
                        <p style={{ fontFamily: "BoldSans", color: "#975C80" }}>
                          {topicDetails?.parent?.title.substr(
                            topicDetails?.parent?.title.indexOf(" ") + 1
                          )}
                        </p>
                      </div>

                      <div />

                      <div>
                        <p>{topicDetails?.parent?.short_intro}</p>
                      </div>
                    </>
                  )}
                </div>
                {language?.dir === "rtl" && <div />}
              </div>
            )}

            {/* First Dimed details */}
            {device === "mobile" ? (
              <div
                className={styles.optionDetailsContainer__commonMobileContainer2}
                style={{
                  textAlign: language?.dir === "ltr" ? "start" : "end",
                }}
              >
                {topicDetails?.parent?.body_object.map((elm) =>
                  elm.list_p ? (
                    <div
                      style={{
                        textAlign: language?.dir === "rtl" ? "right" : "center",
                        direction: language?.dir === "rtl" && "rtl",
                        fontWeight: 800,
                      }}
                    >
                      <p style={{ color: "rgb(95 95 95)" }}>
                        {elm?.list_p?.title_bold}
                      </p>
                      <p>{elm?.list_p?.content}</p>
                    </div>
                  ) : elm.ul_li ? (
                    <li
                      style={{
                        textAlign: language?.dir === "rtl" ? "right" : "left",
                        direction: language?.dir === "rtl" && "rtl",
                        marginBottom: '16px'
                      }}
                    >
                      <span
                        style={{
                          position: "relative",
                          marginRight: language?.dir === "rtl" && -5,
                          marginLeft: language?.dir === "ltr" && -5,
                        }}
                      >
                        <strong
                          style={{ color: "rgb(95 95 95)", }}
                        >
                          {elm?.ul_li?.title}
                        </strong>{" "}
                        {elm?.ul_li?.content}
                      </span>
                    </li>
                  ) : (
                    <p
                      style={{
                        textAlign: language?.dir === "rtl" ? "right" : 'left',
                        direction: language?.dir === "rtl" && "rtl",
                      }}
                    >
                      {elm?.paragraph?.content}
                    </p>
                  )
                )}
              </div>
            ) : (
              <div className={`${baseClassName} ${styles.secondContainer} `}>
                {language?.dir !== "rtl" && <div />}
                <div>
                  {topicDetails?.parent?.body_object.map((elm) =>
                    elm.list_p ? (
                      <div
                        style={{
                          textAlign: language?.dir === "rtl" && "justify",
                          direction: language?.dir === "rtl" && "rtl",
                          fontWeight: 800,
                        }}
                      >
                        <p style={{ fontSize: "22px", color: "rgb(95 95 95)" }}>
                          {elm?.list_p?.title_bold}
                        </p>
                        <p>{elm?.list_p?.content}</p>
                      </div>
                    ) : elm.ul_li ? (
                      <li
                        style={{
                          textAlign: language?.dir === "rtl" ? "justify" : "start",
                          direction: language?.dir === "rtl" && "rtl",
                        }}
                      >
                        <span
                          style={{
                            position: "relative",
                            right: language?.dir === "rtl" && 20,
                            left: language?.dir === "ltr" && 20,
                            marginRight: language?.dir === "rtl" && -12,
                            marginLeft: language?.dir === "ltr" && -12,
                          }}
                        >
                          <strong
                            style={{ color: "rgb(95 95 95)", fontSize: "1vw" }}
                          >
                            {elm?.ul_li?.title}
                          </strong>{" "}
                          {elm?.ul_li?.content}
                        </span>
                      </li>
                    ) : (
                      <p
                        style={{
                          textAlign: language?.dir === "rtl" && "justify",
                          direction: language?.dir === "rtl" && "rtl",
                        }}
                      >
                        {elm?.paragraph?.content}
                      </p>
                    )
                  )}
                </div>
              </div>
            )}

            {/* Children */}
            {topicDetails?.children?.length &&
              topicDetails?.children.map((child, childNum) =>
                device === "mobile" ? (
                  <>
                    {topicDetails?.children[childNum].body_image && (
                      <img
                        alt=''
                        id={`childImg${childNum}`}
                        style={{
                          height: "53vh",
                          width: "100%",
                          objectFit: "cover",
                        }}
                        src={topicDetails?.children[childNum].body_image}
                      />
                    )}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      {topicDetails?.children[childNum]?.quotations?.length && (
                        <div>
                          {topicDetails?.children[childNum]?.quotations.map(
                            (elm) => (
                              <Article
                                color="purple"
                                text={elm}
                                mobile
                                language={language}
                              />
                            )
                          )}
                        </div>
                      )}

                      <div
                        className={styles.optionDetailsContainer__commonContainer__familyConstructionContainer__mobile}

                        dir={language?.dir}
                        style={{
                          direction: language?.dir,
                          textAlign:
                            language?.dir === "rtl" ? "start" : "left",
                        }}
                      >
                        {child.title && (
                          <div style={{ marginBottom: 5, marginTop: "2vh", fontSize: '24px' }}>
                            {child.title}
                          </div>
                        )}
                        {topicDetails?.children[childNum].left_image && (
                          <img
                            alt=''
                            id={`childImg${childNum}`}
                            style={{
                              width: "20vw",
                              maxHeight: "20vh",
                              borderRadius: "5%",
                              objectFit: "cover",
                              alignSelf: "center",
                            }}
                            src={topicDetails?.children[childNum].left_image}
                          />
                        )}
                        {child.body_object.map((elm) =>
                          elm.paragraph ? (
                            <p
                              style={{
                                marginRight: "5px",
                                marginBottom: "0.5vh",
                              }}
                            >
                              {elm.paragraph.content}
                            </p>
                          ) : elm.ol_li ? (
                            <li
                              style={{
                                marginTop: "2vh",
                                marginRight: language?.dir === "rtl" && 5,
                                marginLeft: language?.dir === "ltr" && 5,
                              }}
                            >
                              <span
                                style={{
                                  position: "relative",
                                  // fontSize: "2.1vh",
                                  marginRight: language?.dir === "rtl" && -10,
                                  marginLeft: language?.dir === "ltr" && -10,
                                }}
                              >
                                <strong
                                  style={{
                                    color: "rgb(95 95 95)",
                                    fontSize: "3.3vh",
                                  }}
                                >
                                  {elm?.ol_li?.title}
                                </strong>{" "}
                                {elm?.ol_li?.content}
                              </span>
                            </li>
                          ) : elm.list_p ? (
                            <div>
                              <p
                                style={{
                                  marginTop: "3vh",
                                  // marginBottom: "1vh",
                                }}
                              >
                                {elm.list_p.title_bold}
                              </p>
                              <p
                                style={{ marginRight: "1.4vw" }}
                              >
                                {elm.list_p.content}
                              </p>
                            </div>
                          ) : elm.ul_li ? (
                            <li
                              style={{
                                marginTop: "2vh",
                                marginRight: language?.dir === "rtl" && 5,
                                marginLeft: language?.dir === "ltr" && 5,

                              }}
                            >
                              <span
                                style={{
                                  position: "relative",
                                  // fontSize: "2.1vh",
                                  marginRight: language?.dir === "rtl" && -10,
                                  marginLeft: language?.dir === "ltr" && -10,
                                }}
                              >
                                <strong
                                  style={{
                                    color: "rgb(95 95 95)",
                                    fontSize: "2.3vh",
                                  }}
                                >
                                  {elm?.ul_li?.title}
                                </strong>
                                {Array.isArray(elm?.ul_li?.content) ? (
                                  <div>
                                    {elm?.ul_li?.content.map((subElm) => (
                                      <li
                                        className={styles.sublist}
                                        style={{
                                          marginRight:
                                            language?.dir === "rtl" && 5,
                                          marginLeft:
                                            language?.dir === "ltr" && 5,

                                        }}
                                      >
                                        <span
                                          style={{
                                            position: "relative",
                                            marginRight:
                                              language?.dir === "rtl" && -10,
                                            marginLeft:
                                              language?.dir === "ltr" && -10,
                                          }}
                                        >
                                          {subElm}
                                        </span>
                                      </li>
                                    ))}
                                  </div>
                                ) : (
                                  elm.ul_li.content
                                )}
                              </span>
                            </li>
                          ) : null
                        )}
                      </div>
                    </div >
                  </>
                ) : (
                  <>
                    {topicDetails?.children[childNum].body_image && (
                      <div className={styles.optionDetailsContainer__mainCard}>
                        <img
                          alt=''
                          id={`childImg${childNum}`}
                          style={{ width: "100%", objectFit: "contain", borderRadius: '5px' }}
                          src={topicDetails?.children[childNum].body_image}
                        />
                        {topicDetails?.children[childNum]?.quotations?.length && (
                          <img
                            alt=''
                            className={styles.optionDetailsContainer__mainCard__infoIcon}
                            onClick={() =>
                              SetInfo(
                                infoClicked.map((elm, i) =>
                                  childNum === i ? !elm : elm
                                )
                              )
                            }
                            src={'/assets/images/infoIcon.png'}
                          />
                        )}

                      </div >
                    )}
                    <div className={baseClassName} >

                      <div
                        className={
                          styles.optionDetailsContainer__commonContainer__familyConstructionContainer
                        }

                        dir={language?.dir}
                      >
                        {topicDetails?.children[childNum].left_image && (
                          <img
                            alt=''
                            id={`childImg${childNum}`}
                            style={{
                              width: "13vw",
                              maxHeight: "20vh",
                              borderRadius: "5%",
                              objectFit: "cover",
                              marginLeft: language?.dir === "rtl" && "2vw",
                              marginRight: language?.dir === "ltr" && "2vw",
                            }}
                            src={topicDetails?.children[childNum].left_image}
                          />
                        )}
                        <div>
                          {child.title && (
                            <div style={{ marginBottom: 5, textAlign: language?.dir === 'rtl' ? 'right' : 'left', }}>{child.title}</div>
                          )}
                          {child.body_object.map((elm) =>
                            elm.paragraph ? (
                              <p
                                dir={language?.dir}
                                style={{
                                  marginRight: "5px",
                                  marginBottom: "0.5vh",
                                  fontFamily: "BoldSans",
                                  // fontSize: "0.9vw",
                                  textAlign: language?.dir === 'rtl' ? 'right' : 'left',

                                }}
                              >
                                {elm.paragraph.content}
                              </p>
                            ) : elm.ol_li ? (
                              <li
                                dir={language?.dir}
                                style={{
                                  marginRight: language?.dir === "rtl" && 5,
                                  marginLeft: language?.dir === "ltr" && 5,
                                  textAlign: language?.dir === 'rtl' ? 'right' : 'left'
                                }}
                              >
                                <span
                                  style={{
                                    position: "relative",
                                    right: language?.dir === "rtl" && 20,
                                    left: language?.dir === "ltr" && 20,
                                    marginRight:
                                      language?.dir === "rtl" && -12,
                                    marginLeft: language?.dir === "ltr" && -12,
                                  }}
                                >
                                  <strong
                                    style={{
                                      color: "rgb(95 95 95)",
                                      fontSize: "1vw",
                                    }}
                                  >
                                    {elm?.ol_li?.title}
                                  </strong>{" "}
                                  {elm?.ol_li?.content}
                                </span>
                              </li>
                            ) : elm.list_p ? (
                              <div>
                                <p
                                  style={{
                                    fontSize: "1vw",
                                    marginTop: "3vh",
                                    marginBottom: "1vh",
                                    textAlign: language?.dir === 'rtl' ? 'right' : 'left',

                                  }}
                                >
                                  {elm.list_p.title_bold}
                                </p>
                                <p
                                  style={{
                                    marginRight: "5px",
                                    fontFamily: "BoldSans",
                                    // fontSize: "0.9vw",
                                    textAlign: language?.dir === 'rtl' ? 'right' : 'left',
                                    fontSize: '18px'
                                  }}
                                >
                                  {elm.list_p.content}
                                </p>
                              </div>
                            ) : elm.ul_li ? (
                              <li
                                dir={language?.dir}

                                style={{
                                  marginRight: language?.dir === "rtl" && 5,
                                  marginLeft: language?.dir === "ltr" && 5,
                                  textAlign: language?.dir === 'rtl' ? 'right' : 'left'

                                }}
                              >
                                <span
                                  style={{
                                    position: "relative",
                                    right: language?.dir === "rtl" && 20,
                                    left: language?.dir === "ltr" && 20,
                                    marginRight:
                                      language?.dir === "rtl" && -12,
                                    marginLeft: language?.dir === "ltr" && -12,
                                  }}
                                >
                                  <strong
                                    style={{
                                      color: "rgb(95 95 95)",
                                      fontSize: "1vw",
                                    }}
                                  >
                                    {/* {elm?.ul_li?.title} */}
                                  </strong>
                                  {Array.isArray(elm?.ul_li?.content) ? (
                                    <div>
                                      {elm?.ul_li?.content.map((subElm) => (
                                        <li
                                          className={styles.sublist}
                                          style={{
                                            marginRight:
                                              language?.dir === "rtl" && 5,
                                            marginLeft:
                                              language?.dir === "ltr" && 5,
                                          }}
                                        >
                                          <span
                                            style={{
                                              position: "relative",
                                              right:
                                                language?.dir === "rtl" && 20,
                                              left:
                                                language?.dir === "ltr" && 20,
                                              marginRight:
                                                language?.dir === "rtl" && -12,
                                              marginLeft:
                                                language?.dir === "ltr" && -12,
                                            }}
                                          >
                                            {subElm}
                                          </span>
                                        </li>
                                      ))}

                                    </div>
                                  ) : (

                                    elm.ul_li.content
                                  )}
                                </span>
                              </li>
                            ) : null
                          )}
                        </div>
                      </div>

                    </div >
                  </>
                )
              )}
            {topicDetails?.parent?.body_image && (
              <img
                alt=''
                style={{ height: "54vh", width: "100%", objectFit: "cover" }}
                src={topicDetails?.parent?.body_image}
              />
            )}
          </div>

          <div>
            <Footer />
          </div>
        </div >
      }

    </>
  )
}

export default TopicComponent