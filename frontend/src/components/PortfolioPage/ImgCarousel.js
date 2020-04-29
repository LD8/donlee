import React, { useState } from "react";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";

export const ImgCarousel = ({ imgLinks }) => {
  const [index, setIndex] = useState(0);
  const transitions = useTransition(index, null, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-100%,0,0)" },
  });
  const slide = () => setIndex(index === imgLinks.length - 1 ? 0 : index + 1);
  return (
    <SCarousel id="SCarousel" onClick={slide}>
      {transitions.map(({ item: index, props, key }) => {
        const imgLink = imgLinks[index];
        return <animated.img src={imgLink} style={props} key={key} />;
      })}
    </SCarousel>
  );
};

const SCarousel = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 66.6%;
  display: flex;
  img {
    position: absolute;
    border-radius: 3px;
  }
`;
