import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

export const TechLabel = ({ isClicked, label, index }) => {
  const labelProps = useSpring({
    opacity: isClicked ? 1 : 0,
    transform: `translateY(${isClicked ? 0 : -20}px)`,
    delay: 100 * (index + 4),
    from: { opacity: 0, transform: "translateY(-20px)" },
    config: { mass: 1, tension: 120, friction: 8 },
  });

  return (
    <animated.div style={labelProps}>
      <SLi>{label}</SLi>
    </animated.div>
  );
};

const SLi = styled.li`
  list-style: none;
  width: 90px;
  height: 30px;
  padding-top: 6px;
  margin: 1px;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  font-size: 14px;
  border-radius: 3px;
  text-transform: uppercase;
  background-image: linear-gradient(
    180deg,
    rgba(70, 70, 70, 0.8),
    rgba(30, 30, 30, 0.9)
  );
`;
