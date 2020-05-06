import React from "react";
import styled from "styled-components";
import { Footer } from "../Footer";
import { PostLi } from "./PostLi";
import { PostDetail } from "./PostDetail";
import { PostFilter } from "./PostFilter";
import { FilteredPosts } from "./FilteredPosts";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Loading } from "../Loading";

export default function BlogPage({ posts, tags }) {
  const { path, url } = useRouteMatch();

  return posts && tags ? (
    <>
      <Switch>
        <Route
          exact
          path={path}
          render={() => (
            <>
              <PostFilter tags={tags} />
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
            </>
          )}
        />
        <Route
          exact
          path={`${path}/posts/:id/:slug`}
          validate={(params) => Number.isInteger(params.id)}
          render={() => <PostDetail posts={posts} />}
        />
        <Route
          exact
          path={`/blog/tags/:id/:name`}
          validate={(params) => Number.isInteger(params.id)}
          render={() => (
            <>
              <PostFilter tags={tags} />
              <FilteredPosts posts={posts} url={url} />
            </>
          )}
        />
      </Switch>
      <Footer />
    </>
  ) : (
    <Loading />
  );
}

export const SMyPosts = styled.div`
  width: 100%;
  max-width: 600px;
  /* z-index: 10; */

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
