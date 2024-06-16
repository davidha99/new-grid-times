import React from "react";
import styled from "styled-components/macro";

import { QUERIES, WEIGHTS } from "../../constants";

import Button from "../Button";

const Subscribe = () => {
  return (
    <Wrapper>
      <Button>Subscribe</Button>
      <SubLink href="/">Already a subscriber?</SubLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: revert;
    position: relative;
    justify-self: end;
  }
`;

const SubLink = styled.a`
  position: absolute;
  width: 100%;
  text-align: center;
  margin-top: 8px;
  text-decoration: underline;
  color: var(--color-gray-900);
  font-style: italic;
  font-weight: ${WEIGHTS.normal};
`;

export default Subscribe;
