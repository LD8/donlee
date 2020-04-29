import React from "react";
import styled from "styled-components";
import { TechLabel } from "./TechLabel";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";
import slugifyText from "../Utils.js";

export const TechLabels = ({ url, id, name, labels, isClicked }) => {
  const labelProps = useSpring({
    opacity: isClicked ? 1 : 0,
    transform: `translateY(${isClicked ? 0 : -10}px)`,
    delay: 400,
    from: { opacity: 0, transform: "translateY(-20px)" },
    config: { mass: 1, tension: 120, friction: 8 },
  });

  return (
    <STechLabels id="STechLabels">
      <animated.h4 style={labelProps}>{name}</animated.h4>
      <ul>
        {labels
          ? labels.map((label, index) => (
              <TechLabel
                key={index}
                isClicked={isClicked}
                label={label}
                index={index}
              />
            ))
          : null}
      </ul>
      <Link to={`${url}/showcases/${id}/${slugifyText(name)}`}>
        <TechLabel
          isClicked={isClicked}
          label={"more..."}
          index={labels ? labels.length + 8 : 8}
        />
      </Link>
    </STechLabels>
  );
};

const STechLabels = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  h4 {
    color: lightgrey;
  }
  ul {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  a {
    text-decoration: none;
    li {
      transition: color 0.4s ease;
      will-change: color background-image;
    }
    :hover {
      li {
        color: white;
        background-image: linear-gradient(
          180deg,
          rgba(50, 50, 50, 0.9),
          rgba(60, 60, 60, 0.8)
        );
      }
    }
  }
`;
