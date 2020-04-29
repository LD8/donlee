import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

export const AnimateImage = ({ imageSource, altText }) => {
  const dangleProps = useSpring({
    transform: "rotateZ(0deg)",
    from: { transform: "rotateZ(30deg)" },
    config: { mass: 3, tension: 150, friction: 15 },
  });

  return (
    <ImgContainer id="ImgContainer">
      <animated.img src={imageSource} alt={altText} style={dangleProps} />
    </ImgContainer>
  );
};

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
  img {
    width: 50%;
    height: 50%;
    max-width: 200px;
    border-radius: 20%;
    box-shadow: 3px 3px 0 rgba(10, 5, 30, 0.8);
    background-image: linear-gradient(
      45deg,
      rgba(230, 210, 200, 1),
      rgba(200, 220, 220, 0.8)
    );
    filter: contrast(1.9);
  }
`;
