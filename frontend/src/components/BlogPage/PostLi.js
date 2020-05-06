import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Tags } from "./Tags";
import slugifyText from "../Utils.js";

export const PostLi = ({ post, url }) => {
  const { id, title, tags, content, uploaded_date } = post;
  return (
    <SPostLi className="post-list-item">
      <h2>
        <Link exact="true" to={`${url}/posts/${id}/${slugifyText(title)}`}>
          {title}
        </Link>
      </h2>
      <Tags tags={tags} />
      <p className="content">
        <Link to={`${url}/posts/${id}/${slugifyText(title)}`}>
          {`${content.slice(0, 120)}...`}
        </Link>
      </p>
      <p className="date">{uploaded_date && uploaded_date.slice(0,10)}</p>
    </SPostLi>
  );
};

const SPostLi = styled.li`
  width: 90%;
  max-width: 600px;
  margin: 0 auto 5vh auto;
  a {
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }

  h2 {
    font-weight: 500;
    padding-bottom: 10px;
    border-bottom: 1px solid grey;
      @media only screen and (max-width: 800px) {
        font-size: 25px;
      }
    a {
      color: var(--title);
      :visited {
        color: var(--titlegrey);
      }
    }
  }

  .content {
    margin: 10px 0;
    font-weight: 350;
    overflow: hidden;
    a {
      color: var(--whitegreen);
      :visited {
        color: var(--fadedgreen);
      }
    }
  }
  .date {
    font-size: 12px;
  }
`;
