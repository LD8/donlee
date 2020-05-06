import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Quote from "./components/Quote";
import AboutPage from "./components/AboutPage/AboutPage";
import PortfolioPage from "./components/PortfolioPage/PortfolioPage";
import BlogPage from "./components/BlogPage/BlogPage";
import { Route, Switch, useLocation } from "react-router-dom";
import { APIBASE } from "./components/Const";

export default function Land() {
  const { pathname } = useLocation();
  const isLanding = pathname === "/";

  const [tags, setTags] = useState(null);
  const [posts, setPosts] = useState(null);

  const [showcases, setShowcases] = useState([]);
  const [labels, setLabels] = useState([]);

  const params = [
    ["about", <AboutPage />],
    ["portfolio", <PortfolioPage showcases={showcases} labels={labels} />],
    ["blog", <BlogPage posts={posts} tags={tags} />],
  ];

  useEffect(() => {
    fetch(`${APIBASE}/posts`)
      .then((response) =>
        response.status > 400
          ? console.log(
              `Something went wrong fetching posts! Fetch Response ${response.status}`
            )
          : response.json()
      )
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => console.log(error));

    fetch(`${APIBASE}/posts/tags`)
      .then((response) =>
        response.status > 400
          ? console.log(
              `Something went wrong fetching tags! Fetch Response ${response.status}`
            )
          : response.json()
      )
      .then((data) => {
        setTags(data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch(`${APIBASE}/showcases/`)
      .then((response) =>
        response.status > 400
          ? console.log(
              `Something went wrong with fetching showcases! Fetch Response ${response.status}`
            )
          : response.json()
      )
      .then((data) => {
        setShowcases(data);
      })
      .catch((error) => console.log(error));

    fetch(`${APIBASE}/showcases/labels`)
      .then((response) =>
        response.status > 400
          ? console.log(
              `Something went wrong with fetching labels! Fetch Response ${response.status}`
            )
          : response.json()
      )
      .then((data) => {
        setLabels(data);
      })
      .catch((error) => console.log(error));
  }, []);
  
  return (
    <Switch>
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
