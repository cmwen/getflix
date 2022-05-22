import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled(Link)`
  color: black;
  font-size: 1.5em;
  margin: 0;
  text-decoration: none;
  font-weight: bold;
  font-style: italic;
  @media (max-width: 768px) {
    font-size: 1em;
  }
  text-shadow: 0 0 5px #999;
`;

function GetFlixLogo() {
  return <StyledHeader to="/">Get Flix</StyledHeader>;
}

export default GetFlixLogo;
