import React from "react";
import styled from "styled-components";
import { TagLinks } from "./TagLinks";

export const PostFilter = ({ tags }) => {
  return (
    <SPostFilter id="SPostFilter" className="tags">
      <div className="left">
        <section className="frontend">
          <TagLinks tags={tags.filter((t) => t.order < 3)} />
        </section>
        <section className="backend">
          <TagLinks tags={tags.filter((t) => t.order > 3)} />
        </section>
      </div>
      <div className="right">
        <section className="other">
          <TagLinks tags={tags.filter((t) => t.order === 3)} />
        </section>
      </div>
    </SPostFilter>
  );
};

const SPostFilter = styled.div`
  position: absolute;
  width: 100vw;
  top: 11vh;

  section {
    width: 100px;
    margin: 2vw;
    display: flex;
    flex-wrap: wrap;
  }
  .left,
  .right {
    position: absolute;
    top: 0;
  }
  .left {
    left: 0;
  }
  .right {
    right: 0;
  }

  @media only screen and (max-width: 800px) {
    display: none;
  }
`;
