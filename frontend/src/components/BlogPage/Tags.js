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
  margin: 15px 0;
  list-style: none;
  display: flex;
  justify-content:center;
  li {
    width: auto;
    height: 20px;
    margin: 0 10px 0 0;
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
