import React from "react";
import styled from "styled-components";

export const Tags = ({ tags }) => {
  return (
    <STags className="tags">
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </STags>
  );
};

const STags = styled.ul`
  margin: 8px 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  li {
    height: 20px;
    margin: 8px 10px 0 0;
    padding: 2px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 12px;
    border-radius: 3px;
    background-color: var(--titlegrey);
  }
`;
