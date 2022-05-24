import React from "react";
import { render, screen } from "@testing-library/react";
import GetFlixLogo from "./GetFlixLogo";
import { MemoryRouter } from "react-router-dom";

test("Logo should render", () => {
  render(
    <MemoryRouter>
      <GetFlixLogo
        onClick={() => {
          jest.fn();
        }}
      />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/Get Flix/i);
  expect(linkElement).toBeInTheDocument();
});
