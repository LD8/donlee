import React from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

export const Skill = ({ skill, percentage, index }) => {
  const numberProps = useSpring({
    number: percentage,
    from: { number: 0 },
    delay: index * 100,
    config: config.molasses,
  });
  const widthProps = useSpring({
    width: `${percentage}%`,
    from: { width: `0%` },
    delay: index * 100,
    config: config.molasses,
  });
  return (
    <SSkill id="SSkill">
      <div className="skill-name">{skill}</div>
      <div className="skill-percentage-box">
        <animated.div className="skill-percentage-fill" style={widthProps} />
        <animated.div className="skill-percentage-text">
          {numberProps.number.interpolate((n) => `${n.toFixed()}%`)}
        </animated.div>
      </div>
    </SSkill>
  );
};

const SSkill = styled.li`
  margin: 0 auto;
  width: 100%;
  margin: 10px 0 10px 1.5vw;
  font-size: calc(1vmin + 8px);
  display: flex;
  justify-content: center;
  --skill-name-width: calc(3vw + 60px);

  @media only screen and (max-width: 800px) {
    max-width: 100vw;
    margin: 1vh 0 1vh 0.5vw;
  }

  .skill-name {
    width: var(--skill-name-width);
    text-align: right;
    padding-right: 1vw;
    text-shadow: 2px 2px 0 rgba(10, 5, 30, 0.8);
  }

  .skill-percentage-box {
    display: flex;
    align-items: center;
    width: calc(100% - var(--skill-name-width));
    max-width: 600px;

    .skill-percentage-fill {
      width: 100%;
      height: 20%;
      border-radius: 3px;
      background-image: linear-gradient(
        90deg,
        rgba(0, 50, 110, 0.2),
        rgb(95, 255, 180)
      );
      box-shadow: 3px 3px 0 rgba(10, 5, 30, 0.3);
    }
    .skill-percentage-text {
      font-size: smaller;
      padding: 0 0 0 10px;
    }
  }
`;
