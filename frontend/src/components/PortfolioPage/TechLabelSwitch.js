import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { useLocation } from "react-router-dom";

export const TechLabelSwitch = ({ label, id }) => {
  const [activated, setActivated] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    let found = pathname.match(/\d+\/.*$/i);
    if (found !== null)
      setActivated(found[0].match(/\d+/)[0] === id.toString());
  }, [pathname, id]);

  const labelProps = useSpring({
    opacity: 1,
    transform: `translateY(0)`,
    from: { opacity: 0, transform: "translateY(-20px)" },
    config: { mass: 1, tension: 120, friction: 8 },
  });

  return (
    <animated.div style={labelProps}>
      <SLi activated={activated.toString()}>{label}</SLi>
    </animated.div>
  );
};

const SLi = styled.li`
  list-style: none;
  width: 90px;
  height: 30px;
  padding-top: 6px;
  margin: 1px;
  color: ${({ activated }) =>
    activated === "true"
      ? "rgba(255, 255, 255, 1)"
      : "rgba(255, 255, 255, 0.5)"};
  text-align: center;
  font-size: 14px;
  border-radius: 3px;
  text-transform: uppercase;
  background-image: ${({ activated }) =>
    activated === "true"
      ? "linear-gradient(180deg,rgba(50, 50, 50, 0.9),rgba(60, 60, 60, 0.8))"
      : "linear-gradient(180deg,rgba(70, 70, 70, 0.8),rgba(30, 30, 30, 0.9))"};
`;
