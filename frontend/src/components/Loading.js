import React from "react";
import styled from "styled-components";
import puff from "../assets/svg/puff.svg";

export const Loading = () => {
  return (
    <SLoading id="SLoading">
      <img src={puff} alt="loading..." />
    </SLoading>
  );
};

const SLoading = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 20%;
    max-height: 150px;
    opacity: 0.5;
  }
`;
