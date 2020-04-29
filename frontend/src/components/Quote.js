import React from "react";
import styled from "styled-components";

export default function Quote({ transparent }) {
  return (
    <SQuote transparent={transparent}>
      <p>
        " As one looked at that dead leaf with all its beauty and colour, maybe
        one would very deeply comprehend, be aware of, what one's own death must
        be, not at the very end but at the very beginning "
      </p>
      <p>- Krishnamurti -</p>
    </SQuote>
  );
}

const SQuote = styled.div`
  font-family: cursive;
  position: absolute;
  bottom: 0;
  padding: 10px 20px;
  min-width: 350px;
  max-width: 880px;
  text-align: center;
  color: white;
  text-shadow: 0 0 5px rgb(20, 41, 23);
  transition: all 0.5s ease;
  opacity: ${(props) => (props.transparent ? 1 : 0)};
  & p {
    margin-bottom: 20px;
    font-weight: lighter;
  }
`;
