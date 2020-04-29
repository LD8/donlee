import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Tags } from "./Tags";
import { APIBASE } from "../Const";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock.js";

export const PostDetail = () => {
  const { id: paramId } = useParams();
  const [post, setPost] = useState({});
  const [placeHolder, setPlaceHolder] = useState("Loading");
  const [loaded, setLoaded] = useState(false);
  const { title, tags, content, uploaded_date } = post;

  useEffect(() => {
    fetch(`${APIBASE}/posts/${paramId}`)
      .then((response) =>
        response.status > 400
          ? setPlaceHolder(
              `Something went wrong! Fetch Response ${response.status}`
            )
          : response.json()
      )
      .then((data) => {
        setPost(data);
        setLoaded(true);
      })
      .catch((error) => console.log(error));
  }, [paramId]);

  return loaded ? (
    <SPostDetail>
      <h1 className="title">{title}</h1>
      <hr />
      <Tags tags={tags} />
      <ReactMarkdown
        source={content}
        renderers={{ code: CodeBlock }}
        className="content"
      />
      <p className="date">{uploaded_date && uploaded_date.slice(0, 10)}</p>
    </SPostDetail>
  ) : (
    <SPostDetail>{placeHolder}</SPostDetail>
  );
};

const SPostDetail = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 5vh auto;
  padding: 0 10px;
  .title {
    margin-bottom: 1vh;
    text-align: center;
    font-size: calc(1vmin + 25px);
    color: white;
    font-weight: 500;
  }
  .content {
    margin: 5vh 0;
    line-height: 2em;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: white;
      font-weight: 600;
      margin: 2vh 0;
    }
    p {
      margin: 2vh 0;
    }
    pre {
      border-radius: 10px;
      border: 1.5px solid rgb(90, 90, 90);
      box-shadow: inset -1.5px -3px 6px rgba(170, 165, 190, 0.5);
      margin-bottom: 20px !important;
    }
    code {
      font-family: Courier, monospace;
      color: yellow;
      font-size: 16px;
    }
    a {
      color: orangered;
      :hover {
        color: greenyellow;
      }
    }

    ul,
    ol {
      padding: 0 10px;
      li {
        margin: 0 10px 10px 10px;
      }
    }
  }
  .date {
    font-size: 12px;
  }
`;
