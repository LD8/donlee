import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Footer } from "../Footer";
import { PostLi } from "./PostLi";
import { PostDetail } from "./PostDetail";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { APIBASE } from "../Const";
import { Loading } from "../Loading";

export const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const { path, url } = useRouteMatch();

  const [placeHolder, setPlaceHolder] = useState(<Loading />);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    posts !== [] &&
      fetch(`${APIBASE}/posts`)
        .then((response) =>
          response.status > 400
            ? setPlaceHolder(
                `Something went wrong! Fetch Response ${response.status}`
              )
            : response.json()
        )
        .then((data) => {
          setPosts(data);
          setPlaceHolder(<Loading />);
          setLoaded(true);
        })
        .catch((error) => console.log(error));
  }, []);

  return loaded ? (
    <>
      <Switch>
        <Route
          exact
          path={path}
          render={() => (
            <SMyPosts id="SMyPosts">
              <section className="brief">
                <h3>Posts about my life and work.</h3>
              </section>

              <section className="posts">
                <ul>
                  {posts.map((post, index) => (
                    <PostLi key={index} post={post} url={url} />
                  ))}
                </ul>
              </section>
            </SMyPosts>
          )}
        />
        <Route
          exact
          path={`${path}/posts/:id/:slug`}
          validate={(params) => Number.isInteger(params.id)}
          render={() => <PostDetail posts={posts} />}
        />
      </Switch>
      <Footer />
    </>
  ) : (
    placeHolder
  );
};

const SMyPosts = styled.div`
  width: 100%;
  max-width: 1000px;

  .brief {
    margin: 3vh 0 5vh 0;
    h3 {
      text-align: center;
      font-size: 25px;
      line-height: 30px;
      font-weight: 400;
      @media only screen and (max-width: 800px) {
        font-size: 20px;
        line-height: 25px;
      }
    }
  }

  .posts {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    ul {
      list-style: none;
      width: 100%;
      text-align: center;
    }
  }
`;
