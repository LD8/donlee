import React from "react";
import styled from "styled-components";
import { Skill } from "./Skill";
import { Footer } from "../Footer";
import { AnimateImage } from "./AnimateImage";

const skills = [
  { skill: "HTML", percentage: 90 },
  { skill: "CSS", percentage: 90 },
  { skill: "JavaScript", percentage: 70 },
  { skill: "React.js", percentage: 70 },
  { skill: "Python", percentage: 60 },
  { skill: "Django", percentage: 70 },
  { skill: "Flask", percentage: 50 },
  { skill: "Photoshop", percentage: 70 },
  { skill: "SketchUp", percentage: 90 },
  { skill: "AutoCAD", percentage: 80 },
];

export default function AboutPage() {
  return (
    <>
      <SMyInfo id="SMyInfo">
        <section className="info-section">
          <AnimateImage
            imageSource={"https://donlee.online/static/img/portrait-sm.png"}
            altText={"my portrait"}
          />
          <div className="my-info">
            <h2>Don Lee</h2>
            <h4>Full-stack Developer</h4>
            <p>
              Passionate in developing software that brings happiness and light
              into our lives
            </p>
          </div>
        </section>

        <section className="skill-section">
          <ul>
            {skills.map((i, index) => (
              <Skill
                key={i.skill}
                skill={i.skill}
                percentage={i.percentage}
                index={index}
              />
            ))}
          </ul>
        </section>
      </SMyInfo>

      <Footer />
    </>
  );
}

const SMyInfo = styled.div`
  width: 100%;
  max-width: 800px;
  min-height: 900px;
  display: flex;
  flex-wrap: wrap;

  .info-section {
    width: 100%;
    margin: 5vh auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    /* img is styled in AnimateImage.js */
    .my-info {
      width: 60%;
      text-align: left;
      color: var(--title);
      text-shadow: 3px 3px 0 rgba(10, 5, 30, 0.8);
      font-weight: 400;
      h2 {
        text-transform: uppercase;
        margin-bottom: 5px;
        font-size: calc(2vmin + 25px);
      }
      h4,
      p {
        margin: 0 0 20px 5px;
      }
      p {
        margin-bottom: 0;
      }
      @media only screen and (max-width: 800px) {
        width: calc(100vw - 8px);
        text-align: center;
        h2 {
          margin: 4vh 0 5px 0;
        }
        h4,
        p {
          margin: 0 10px 2vh;
        }
      }
    }
  }
  .skill-section {
    width: 100%;
    margin: 0 20px 5vh 10px;
    ul {
      width: 100%;
      max-width: 680px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;
