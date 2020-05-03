import React from "react";
import styled from "styled-components";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Quote from "./components/Quote";
import { AboutPage } from "./components/AboutPage/AboutPage";
import { PortfolioPage } from "./components/PortfolioPage/PortfolioPage";
import { BlogPage } from "./components/BlogPage/BlogPage";
// import { CVPage } from "./components/CVPage/CVPage";
import { Route, Switch, useLocation } from "react-router-dom";

const params = [
  ["about", <AboutPage />],
  ["portfolio", <PortfolioPage />],
  ["blog", <BlogPage />],
];

export default function Land() {
  const { pathname } = useLocation();
  const isLanding = pathname === "/";
  return (
    <Switch>
      {/* <Route path="/cv" component={CVPage} /> */}
      <Route path="/">
        <SContainer id="SContainer">
          <SBGDimmer darken={isLanding} id="SBGDimmer" />
          <Nav params={params} />
          <Main params={params} />
          <Quote transparent={isLanding} />
        </SContainer>
      </Route>
    </Switch>
  );
}

const SContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  background-color: var(--bg-color);
  background-image: url("https://donlee.online/static/img/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const SBGDimmer = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  transition: all 0.3s ease;
  background-color: ${(props) => (props.darken ? "" : "rgba(0, 0, 0, 0.4)")};
  background-image: linear-gradient(
    to bottom,
    rgba(150, 150, 150, 0.05),
    rgba(0, 0, 0, 0.5)
  );
`;
