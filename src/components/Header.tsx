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

interface HeaderProps {
  onLogoClick: () => void;
}

function Header({ onLogoClick }: HeaderProps): React.ReactElement {
  return (
    <HeaderLayout>
      <GetFlixLogo onClick={onLogoClick} />
      <ThemeToggler />
    </HeaderLayout>
  );
}

export default Header;
