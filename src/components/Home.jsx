import React from "react";
import "../styles/Home.css";
import { FaDownload } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import DevFaceImage from "../images/Dev_Face.png";
import DevBackImage from "../images/bgdev.png";
import { motion } from "motion/react";

const Home = () => {
  const ResumeLink = import.meta.env.VITE_RESUME_LINK;
  
  return (
    <>
      <div className="home-container" id="home">
        <>
          {/* bubbles container starts */}

          <div className="bubble-container">
            <motion.div drag className="bubbleCard">
              <div className="Card-front"></div>
              <div className="Card-back"></div>
            </motion.div>
          </div>
          <motion.div className="bubbleAnimate-two" drag></motion.div>
          <motion.div
            className="extraBubble-sm1"
            drag
            dragConstraints={{ top: -800, left: -1465, bottom: 95, right: 110 }}
          ></motion.div>
          <motion.div
            className="extraBubble-sm2"
            drag
            dragConstraints={{ top: -320, left: -165, bottom: 570, right: 830 }}
          ></motion.div>
          <motion.div
            className="extraBubble-lg1"
            drag
            dragConstraints={{ top: -200, left: -750, bottom: 600, right: 750 }}
          >
            <span className="hover-hint">Hold-Click & Drag Me</span>
          </motion.div>
          <motion.div
            className="extraBubble-lg2"
            drag
            dragConstraints={{ top: -700, left: -850, bottom: 200, right: 100 }}
          ></motion.div>

          {/* BUBBLE CONTAINER ENDS */}
        </>
        <div className="home-left">
          <div className="intro-container">
            <div className="typeText-container">
              <ReactTyped
                strings={[
                  "Hey!! Welcome to my profile...✌️",
                  "I am Stanly S Lal.",
                  "A skilled and passionate front-end developer.",
                ]}
                typeSpeed={50}
                backSpeed={50}
                showCursor={true}
                loop
              />
            </div>
            <div className="stillText-container">
              <h1>
                I'm a dedicated front-end developer with expertise in HTML, CSS,
                JavaScript, React.js, Next.js, Tailwind CSS, Git, GitHub, CI/CD
                pipelines and Firebase etc..
              </h1>
            </div>
            <div className="resumeBtn-container">
              <a href={ResumeLink} target="_blank" className="resume-btn">
                Download Resume{" "}
                <span className="download-icon">
                  <FaDownload />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="home-right">
          <div className="devCard-container">
            <div className="devCard">
              <div className="devCard-front">
                <img src={DevFaceImage} alt="" className="dev-faceImage" />
              </div>
              <div className="devCard-back">
                <img src={DevBackImage} alt="" className="dev-backImage" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bgImage-containerHome"></div>
    </>
  );
};

export default Home;
