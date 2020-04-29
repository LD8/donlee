import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { TechLabels } from "./TechLabels";

export const Showcase = ({ showcase, url }) => {
  const { id, name, img_front,img_back, labels } = showcase;
  const [isClicked, setIsClicked] = useState(false);
  const { opacity, transform } = useSpring({
    opacity: isClicked ? 1 : 0,
    transform: `perspective(600px) rotateX(${isClicked ? 180 : 0}deg)`,
    config: { mass: 4, tension: 200, friction: 35 },
  });

  return (
    <SCard className="card" onClick={() => setIsClicked(!isClicked)}>
      <animated.img
        className="card-front"
        style={{
          opacity: opacity.interpolate((o) => 1 - o),
          transform,
        }}
        src={img_front}
        alt={`Project: ${name} for the front of the card`}
      />
      <animated.img
        className="card-back"
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
        }}
        src={img_back}
        alt={`Project: ${name} for the back of the card`}
      />
      {isClicked && (
        <TechLabels
          url={url}
          id={id}
          name={name}
          labels={labels}
          isClicked={isClicked}
        />
      )}
    </SCard>
  );
};
const SCard = styled.div`
  position: relative;
  width: 40%;
  margin: calc(1vmin + 10px);
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.5s ease;
  will-change: transform;
  font-size: 0;
  :hover {
    transform: scale(1.03);
  }

  img {
    width: 100%;
    border-radius: 6px;
    box-shadow: 0 0 15px rgb(10, 5, 30);
  }

  .card-back {
    position: absolute;
    left: 0;
    filter: brightness(30%);
  }

  @media only screen and (max-width: 800px) {
    width: 90%;
  }
`;
