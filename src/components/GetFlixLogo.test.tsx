import React from "react";
import { render, screen } from "@testing-library/react";
import GetFlixLogo from "./GetFlixLogo";
import { MemoryRouter } from "react-router-dom";

describe("GetFlixLogo", () => {
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

  test("Clicking on logo should call onClick", () => {
    const onClick = jest.fn();
    render(
      <MemoryRouter>
        <GetFlixLogo onClick={onClick} />
      </MemoryRouter>
    );
    const linkElement = screen.getByText(/Get Flix/i);
    linkElement.click();
    expect(onClick).toHaveBeenCalled();
  });
});
