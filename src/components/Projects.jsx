import React, { useEffect, useState } from "react";
import "../styles/Projects.css";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = ({ api }) => {
  const [idx, setIdx] = useState(0);
  const [dotIdx, setDotIdx] = useState(0);

  useEffect(() => {
    AOS.init();
  }, []);

  if (api.length === 0) return null;

  let slideTimer;

  const slideShow = () => {
    slideTimer = setInterval(() => {
      setIdx(idx === api.length - 1 ? 0 : idx + 1);
      setDotIdx(idx === api.length - 1 ? 0 : idx + 1);
    }, 2000);
  };

  const pauseSlideShow = () => {
    clearInterval(slideTimer);
  };

  useEffect(() => {
    slideShow();

    return () => {
      clearInterval(slideTimer);
    };
  }, [idx]);

  const slideLeftBtn = () => {
    setIdx(idx === 0 ? api.length - 1 : idx - 1);
    setDotIdx(idx === 0 ? api.length - 1 : idx - 1);
  };

  const sildeRightBtn = () => {
    setIdx(idx === api.length - 1 ? 0 : idx + 1);
    setDotIdx(idx === api.length - 1 ? 0 : idx + 1);
  };

  const dotFunction = (idxs) => {
    setDotIdx(idxs);
    setIdx(idxs);
  };

  return (
    <>
      <div className="project-section" id="project">
        <div className="projectHeading-container">
          <h1
            className="project-heading"
            data-aos="flip-down"
            data-aos-offset="200"
            data-aos-duration="600"
            data-aos-easing="linear"
          >
            Projects
          </h1>
        </div>

        <div
          className="project-container"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div
            onMouseOver={() => pauseSlideShow()}
            onMouseOut={() => slideShow()}
            className="carousel-imageContainer"
          >
            <img
              src={api[idx]?.projectImage}
              alt={api.projectTitle}
              className="carousel-image"
            />

            <div className="project-title">
              <span className="title">{api[idx]?.projectTitle}</span>
              <div className="projectLink-container">
                <button className="project-link">
                  <a className="projectLink-style" href={api[idx]?.githubSourceCode} target="_blank">
                    View Code
                  </a>
                </button>
                <button className="project-link">
                  <a className="projectLink-style" href={api[idx]?.projectLink} target="_blank">
                    Visit Site
                  </a>
                </button>
              </div>
            </div>
          </div>

          <button className="btn btn-left" onClick={() => slideLeftBtn()}>
            <FaChevronCircleLeft />
          </button>
          <button className="btn btn-right" onClick={() => sildeRightBtn()}>
            <FaChevronCircleRight />
          </button>

          <div className="slider-indicatorBtn">
            {api.map((dotData, idxs) => {
              return (
                <button
                  key={dotData.projectId}
                  className={dotIdx === idxs ? "dot-active" : "dot-btn"}
                  onClick={() => dotFunction(idxs)}
                >
                  <GoDotFill />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
