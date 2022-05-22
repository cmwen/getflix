import React from "react";
import GetFlixLogo from "./GetFlixLogo";
import ThemeToggler from "./ThemeToggler";
import styled from "styled-components";

const HeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  flex-wrap: wrap;
`;

function Header() {
  return (
    <HeaderLayout>
      <GetFlixLogo />
      <ThemeToggler />
    </HeaderLayout>
  );
}

export default Header;
