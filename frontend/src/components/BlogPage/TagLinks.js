import React from "react";
import styled from "styled-components";
import { Link, useRouteMatch } from "react-router-dom";

export const TagLinks = ({ tags }) => {
  const {
    params: { id: currenttagid },
  } = useRouteMatch();
  return (
    <STags className="tags">
      {tags.map(({ id, name }) => (
        <li key={id}>
          <SLink
            to={`/blog/tags/${id}/${name}`}
            id={id.toString()}
            currenttagid={currenttagid}
          >
            {name}
          </SLink>
        </li>
      ))}
    </STags>
  );
};

const SLink = styled(Link)`
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 12px;
  border-radius: 3px;
  border: 1px solid var(--titlegrey);
  color: ${({ id, currenttagid }) =>
    id === currenttagid ? "white" : "var(--titlegrey)"};
  cursor: ${({ id, currenttagid }) =>
    id === currenttagid ? "not-allowed" : "pointer"};
  text-decoration: none;
  background-color: ${({ id, currenttagid }) =>
    id === currenttagid ? "var(--titlegrey)" : "transparent"};
  :hover {
    color: white;
    background-color: var(--titlegrey);
  }
`;

const STags = styled.ul`
  width: 100%;
  list-style: none;
  li {
    height: 20px;
    margin: 8px 0;
    display: flex;
  }
`;
