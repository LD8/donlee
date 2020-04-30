/* eslint-disable no-multi-str */
import React from "react";
import styled from "styled-components";
import { Skill } from "./Skill";
import { Experience } from "./Experience";
import { Education } from "./Education";

const skills = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\
    enim ad minim veniam, quis nostrud exercitation",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\
    enim ad minim veniam, quis nostrud exercitation",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\
    enim ad minim veniam, quis nostrud exercitation",
];
const experiences = [
  {
    company: "Freelance",
    year: "June 2019 - Now",
    website: "donlee.online",
    position: "User Experience and Web app Designer",
    description: null,
    bullets: [
      "Turning hobby into a career, helping entrepreneurs building interactive web apps",
      "based on their business models, design data structure",
      "Develop web apps independently, mainly coding in Python, HTML, JavaScript, CSS",
    ],
    ending: null,
  },
  {
    company: "ACG International",
    year: "June 2017 - June 2019",
    website: "acg-art.com",
    position: "Instructor — Art and Design",
    description: null,
    bullets: [
      "Teach applied arts, primarily interior design and analogue photography process to students for portfolio building and personal development in related subjects",
      "Develop curriculum and prepare outlines for workshops",
      "Provide individualised tutorial or remedial instruction",
      "Supervise independent projects and hands-on training",
      "Advise students on program curricula and career decisions",
    ],
    ending:
      "In these two years as a teacher, 32 amongst 34 of my students have successfully secured offers from prestigious art institutions across UK, France, US, Canada, Australia, students majored in Interior design, photography and landscape design both on BA level (40%) and MA level (60%). While helping my lovely students embarking on their great journey, for content growing interests, I have been scrutinising web design languages since 2016",
  },
  {
    company: "British Library",
    year: "May - November 2015",
    website: "britishmuseum.com",
    position: "Volunteer Interpreter",
    description:
      "Interpreting and translating Chinese minority manuscripts mainly scores. Only after being interpreted in Pinyin can they be further studied.",
    bullets: null,
    ending:
      "Nearly 100 scripts were translated in half year. I am thrilled to have helped the study and have participated in the dissemination of Chinese minority culture in an international context",
  },
  {
    company: "M Moser Associates",
    year: "May 2011 - May 2013",
    website: "mmoser.com",
    position: "Project Coordinator and Interior Designer",
    description:
      "From a project coordinator to a designer who leads a small team, my duty had grown drastically, including:",
    bullets: [
      "drawing draft plans, construction plans and detail plans",
      "putting together project presentations",
      "conveying design ideas to clients in presentations",
      "on site construction management",
    ],
    ending:
      "In these two years, I participated in 1 large project over 2000 sqm, 2 medium projects over 1000 sqm and 4 smaller projects just under 500 sqm, all of which were successfully delivered on schedule. During this time, I tasted the fruit of seamless team work, gained understanding of project management, realising that much knowledge to be learnt, followed by further study in the UK",
  },
];
const educations = [
  {
    year: "2018 - 2020",
    certificate: "Frontend Programmer Certificate, UI Design Practice",
    institution: "FreeCodeCamp, Interaction Design Foundation",
    location: "Online and self-taught",
    website: "interaction-design.org, freecodecamp.com",
  },
  {
    year: "2014 - 2016",
    certificate: "MA. in Art and Science",
    institution: "Central Saint Martins, University of Arts London",
    location: "London, UK",
    website: "arts.ac.uk",
  },
  {
    year: "2013 - 2014",
    certificate: "Pre MA.",
    institution: "Cambridge School of Visual and Performing Arts",
    location: "Cambridge, UK",
    website: "csvpa.com",
  },
  {
    year: "2009 - 2011",
    certificate: "Certificate - Interior Design",
    institution: "Shanghai Normal university",
    location: "Shanghai, China",
    website: "shnu.edu.cn",
  },
  {
    year: "2006 - 2010",
    certificate: "BSc. Intelligent building and Technology",
    institution: "Tongji University",
    location: "Shanghai, China",
    website: "tongji.edu.cn",
  },
];

export const CVPage = () => {
  return (
    <SPaper id="SPaper">
      <section className="title">
        <div className="portrait-container">
          <img
            src={"https://donlee.online/static/img/CV-portrait.jpeg"}
            alt="Don Lee's portrait"
          />
        </div>
        <div className="info">
          <div className="general-info">
            <h1>Don Lee</h1>
            <h2>Full-stack Software Developer</h2>
            <p>
              Passionate in developing software that improves our lives both
              physically and mentally
            </p>
          </div>
          <div className="contact-info">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://donlee.online"
            >
              www.donlee.online
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto: don_lee@me.com"
            >
              don_lee@me.com
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/LD8"
            >
              github.com/LD8
            </a>
          </div>
        </div>
      </section>

      <section className="skills">
        <div className="sub-title">
          <h3>Skills</h3>
        </div>
        <div className="sub-container">
          <div className="aside"></div>
          <div className="details">
            <ul>
              {skills.map((skill, index) => (
                <Skill key={index} skill={skill} />
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="experience">
        <div className="sub-title">
          <h3>Experience</h3>
        </div>
        {experiences.map((experience, index) => (
          <Experience key={index} experience={experience} />
        ))}
      </section>

      <section className="education">
        <div className="sub-title">
          <h3>Education</h3>
        </div>
        {educations.map((education, index) => (
          <Education key={index} education={education} />
        ))}
      </section>

      <section className="other">
        <div className="sub-title">
          <h3>Other Perks</h3>
        </div>

        <div className="sub-container">
          <div className="aside"></div>
          <div className="details">
            <ul>
              <li>
                Speaks fluent English (IELTS 8.0), native Mandarin and basic
                French
              </li>
              <li>In his free time, liks to read, blog, swim and travel</li>
            </ul>
          </div>
        </div>
      </section>
    </SPaper>
  );
};

const SPaper = styled.div`
  --theme-color: rgb(0, 90, 190);
  --whole-width: 842px;
  --aside-width: 170px;
  --main-width: 510px;
  --fontXL: 30px;
  --fontL: 25px;
  --fontM: 16px;
  --fontS: 13px;
  --paper-padding: 80px;
  @media only screen and (max-width: 800px) {
    --whole-width: 100%;
    --aside-width: 100%;
    --main-width: 100%;
  }

  position: relative;
  width: 100%;
  height: 100%;
  max-width: var(--whole-width);

  margin: 50px auto;
  padding: var(--paper-padding);

  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: var(--fontM);
  color: rgb(70, 70, 70);
  line-height: 1.5em;

  border: 1px solid rgb(230, 230, 230);
  border-radius: 3px;
  background-color: white;
  box-shadow: 3px 4px 0 rgb(70, 70, 70);

  @media only screen and (max-width: 800px) {
    margin: 0;
    padding: 40px;
  }

  /* ------------------------- general ------- */

  ul {
    list-style: square;
    margin-left: 20px;
  }
  h4,
  .company-name {
    font-weight: 600;
    background-color: rgb(245, 245, 245);
    margin-bottom: 5px;
  }
  .company-name {
    font-weight: 400;
    padding-right: 5px;
  }

  @media only screen and (max-width: 800px) {
    .company-name {
      font-weight: 300;
      padding: 0;
      background-color: transparent;
    }
  }

  /* ------------------------- title section ------- */
  .title {
    margin-bottom: 30px;
    display: flex;

    .portrait-container {
      width: var(--aside-width);
      padding-right: 20px;
      img {
        width: 150px;
        height: 150px;
        border-radius: 3px;
      }
    }

    .info {
      display: flex;
      width: var(--main-width);

      .general-info {
        width: 460px;
        padding-right: 20px;
        h1 {
          text-transform: uppercase;
          font-size: var(--fontXL);
          font-weight: 600;
          letter-spacing: 0.05em;
          color: var(--theme-color);
        }
        h2 {
          font-weight: 100;
          color: grey;
          margin: 10px 0;
        }
        p {
          font-size: var(--fontM);
        }
      }

      .contact-info {
        width: 130px;
        height: 80px;
        padding-left: 20px;
        border-left: 2px solid rgb(240, 240, 240);
        a {
          color: var(--theme-color);
          text-decoration: none;
          display: block;
          font-size: var(--fontS);
          :hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 800px) {
    .title {
      flex-direction: column;
      align-items: center;

      .portrait-container {
        padding: 0;
        display: flex;
        justify-content: center;
      }

      .info {
        margin-top: 25px;
        flex-direction: column;
        align-items: center;
        text-align: center;

        .general-info {
          width: 100%;
          padding: 0;
        }
        .contact-info {
          width: 100%;
          height: auto;
          margin-top: 10px;
          padding: 0;
          border-style: none;
          a {
            display: inline-block;
            :nth-child(2)::before,
            :nth-child(3)::before {
              content: "/";
              padding: 0 5px;
              color: grey;
            }
          }
        }
      }
    }
  }

  /* ------------------------- SEE sections ------- */
  .skills,
  .experience,
  .education,
  .other {
    width: var(--whole-width - --paper-padding * 2 - 2);
    margin-bottom: 20px;
    /* margin-left: auto; */
    display: flex;
    flex-direction: column;
    .sub-title {
      width: var(--main-width);
      margin-left: auto;
      h3 {
        width: var(--main-width);
        margin-bottom: var(--fontS);
        padding-bottom: 5px;

        color: var(--theme-color);
        font-size: var(--fontL);
        font-weight: 100;
        letter-spacing: 0.05em;
        border-bottom: 2px solid rgb(240, 240, 240);
      }
    }
    .sub-container {
      display: flex;
      margin-bottom: 20px;
      .aside {
        width: var(--aside-width);
        text-align: right;
        padding-right: 20px;
        .year {
          font-weight: 300;
        }
        a {
          text-decoration: none;
          font-weight: 300;
          color: var(--theme-color);
          :hover {
            text-decoration: underline;
          }
        }
      }
      .details {
        width: var(--main-width);
      }
    }
  }

  @media only screen and (max-width: 800px) {
    .skills,
    .experience,
    .education,
    .other {
      width: 100%;
      .sub-title {
        width: 100%;
      }
      .sub-container {
        flex-direction: column;
        .aside {
          display: flex;
          justify-content: space-between;
          text-align: left;
          padding: 0;
          a {
            display: none;
          }
        }
        .details {
          margin: 5px 0 20px 0;
        }
      }
    }

    .experience,
    .education {
      .sub-container {
        border-bottom: 1px solid rgb(240, 240, 240);
        :last-child {
          border-bottom: none;
        }
      }
    }
  }

  @media print {
    width: 842px;
    padding: 0;
    border: none;
    box-shadow: none;
    /* .experience{
      .sub-container {
        margin-bottom: 40px;
      }
    } */
  }
`;
