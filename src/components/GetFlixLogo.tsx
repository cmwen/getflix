import React from "react";
import styled from "styled-components";

const StyledLogo = styled.button`
  border: none;
  color: black;
  font-size: 1.5em;
  margin: 0;
  font-weight: bold;
  font-style: italic;
  @media (max-width: 768px) {
    font-size: 1em;
  }
  text-shadow: 0 0 5px #999;
  background-color: transparent;
  cursor: pointer;
`;

interface GetFlixLogoProps {
  onClick: () => void;
}

function GetFlixLogo({ onClick }: GetFlixLogoProps): React.ReactElement {
  return <StyledLogo onClick={onClick}>Get Flix</StyledLogo>;
}

export default GetFlixLogo;
