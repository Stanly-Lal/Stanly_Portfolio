import React, { useEffect } from "react";
import "../styles/skills.css";
import skills from "../api/skillapi.js";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="skill-container" id="skill">
        <div className="skillHeading-container">
          <h1
            className="skill-heading"
            data-aos="flip-right"
            data-aos-offset="100"
            data-aos-duration="600"
            data-aos-easing="linear"
          >
            My Skills
          </h1>
        </div>

        <div className="skillCard-container">
          {skills.map((skillData) => {
            return (
              <div
                className="skill-card"
                key={skillData.id}
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="600"
                data-aos-easing="linear"
              >
                <div className="skillCard-imageContainer">
                  <img
                    className="skillCard-image"
                    src={skillData.skillImage}
                    alt="skills_image"
                  />
                </div>
                <div className="skillCard-titleContainer">
                  <h1 className="skill-title">{skillData.skillTitle}</h1>
                </div>
                <div className="skillCard-descriptionContainer">
                  <p className="skillCard-description">
                    {skillData.skillDescription}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;
