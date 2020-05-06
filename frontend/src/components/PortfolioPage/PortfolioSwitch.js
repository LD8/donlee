import React from "react";
import styled from "styled-components";
import { Showcase } from "./Showcase";
import { ShowcaseLabelQ } from "./ShowcaseLabelQ";
import { TechLabelSwitch } from "./TechLabelSwitch";
import slugifyText from "../Utils.js";
import { Link } from "react-router-dom";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Loading } from "../Loading";

export const PortfolioSwitch = ({ showcases, labels }) => {
  const { path, url } = useRouteMatch();

  return (
    <SMyPortfolio id="SMyPortfolio">
      <section className="brief">
        <h3>
          From React.JS and UI/UX animations to Python and Django backend
          support. Check out my latest web software development portfolio
          projects.
        </h3>
      </section>

      <section className="labels">
        <p>Click a label for related projects</p>
        <ul>
          {labels.map(({ name: label, id }, index) => (
            <Link
              key={index}
              to={`${url}/showcases/labels/${id}/${slugifyText(label)}`}
            >
              <TechLabelSwitch label={label} id={id} />
            </Link>
          ))}
        </ul>
      </section>

      <section className="showcases">
        {showcases && labels ? (
          <Switch>
            <Route
              exact
              path={path}
              render={() => (
                <>
                  {showcases.map((showcase) => (
                    <Showcase key={showcase.id} showcase={showcase} url={url} />
                  ))}
                </>
              )}
            />
            <Route
              exact
              path={`${path}/showcases/labels/:id/:slug`}
              validate={(params) => Number.isInteger(params.id)}
              render={() => <ShowcaseLabelQ showcases={showcases} url={url} />}
            />
          </Switch>
        ) : (
          <Loading />
        )}
      </section>
    </SMyPortfolio>
  );
};

const SMyPortfolio = styled.div`
  max-width: 1000px;
  .brief {
    margin: 3vh 0 5vh 0;
    h3 {
      line-height: 30px;
      font-weight: 400;
      font-size: 25px;
      text-align: center;
      @media only screen and (max-width: 800px) {
        line-height: 25px;
        font-size: 20px;
      }
    }
  }
  .labels {
    margin: 0 auto 3vh auto;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      font-size: smaller;
      margin-bottom: 8px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      a {
        text-decoration: none;
        li {
          transition: color 0.4s ease;
          will-change: color background-image;
        }
        :hover {
          li {
            color: white;
            background-image: linear-gradient(
              180deg,
              rgba(50, 50, 50, 0.9),
              rgba(60, 60, 60, 0.8)
            );
          }
        }
      }
    }
  }
  .showcases {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 5vh;
  }
`;
