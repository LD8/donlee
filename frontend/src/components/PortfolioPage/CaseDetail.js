import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { ImgCarousel } from "./ImgCarousel";
import { Loading } from "../Loading";

export const CaseDetail = ({ showcases }) => {
  const { id } = useParams();
  const showcase = showcases.filter(
    (showcase) => showcase.id.toString() === id.toString()
  )[0];

  let renderDetail;
  
  if (showcase) {
    const {
      name,
      img_front,
      img_back,
      img_third,
      brief,
      about,
      techs,
      link_online,
      link_github,
      link_codesandbox,
    } = showcase;

    const imgLinks = [img_front, img_back, img_third].filter(
      (link) => link !== null
    );

    renderDetail = (
      <SCaseDetail>
        <div className="intro">
          <h1>{name}</h1>
          <p>{brief}</p>
          {/* carousel here to be made */}
          <ImgCarousel imgLinks={imgLinks} />
        </div>
        <section className="about">
          <h2>About this project</h2>
          <p>{about}</p>
        </section>
        <section className="technical-sheet">
          <h2>Technical Sheet</h2>
          <ul>
            {techs.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        </section>
        {(link_online || link_github || link_codesandbox) && (
          <section className="resources">
            <h2>Resources</h2>
            <ul>
              {link_online && (
                <li>
                  <span>Visit the website:</span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={link_online}
                  >
                    {link_online.toUpperCase()}
                  </a>
                </li>
              )}
              {link_github && (
                <li>
                  <span>GitHub source files:</span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={link_github}
                  >
                    {link_github.toUpperCase()}
                  </a>
                </li>
              )}
              {link_codesandbox && (
                <li>
                  <span>Code-Sandbox:</span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={link_codesandbox}
                  >
                    Portal Here
                  </a>
                </li>
              )}
            </ul>
          </section>
        )}
      </SCaseDetail>
    );
  }

  return showcase ? renderDetail : <Loading />;
};

const SCaseDetail = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 0 20px;

  .intro {
    margin: 4vh 0;
    h1 {
      font-weight: 500;
      margin-bottom: 1vh;
    }
    p {
      margin-bottom: 2vh;
    }
    img {
      width: 100%;
      cursor: pointer;
      box-shadow: 0 0 15px rgb(20, 15, 30);
      transition: filter 0.5s ease;
      will-change: filter;
      :hover {
        box-shadow: 0 0 5px rgb(20, 15, 30);
        filter: brightness(60%);
      }
    }
    figcaption {
      display: none;
    }
  }

  h2 {
    font-weight: 400;
    border-bottom: 1px solid grey;
    padding-bottom: 1vh;
    margin-bottom: 1vh;
  }

  section {
    margin-bottom: 4vh;
    line-height: 30px;
  }

  ul {
    margin: 0 20px;
    list-style: circle;
  }

  .resources {
    ul > li > span {
      width: 200px;
      padding-right: 20px;
    }
  }
  a {
    color: orangered;
    :hover {
      color: greenyellow;
    }
    :visited {
      color: green;
      :hover {
        color: greenyellow;
      }
    }
  }
`;
