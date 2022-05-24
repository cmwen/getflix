import { act, render, screen } from "@testing-library/react";
import MovieCard from "./MovieCard";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("MovieCard", () => {
  const mockData = {
    Title: "Iron Man",
    Year: "2008",
    imdbID: "tt0371746",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
  };

  test("Card should render", () => {
    render(
      <MemoryRouter>
        <MovieCard {...mockData} />
      </MemoryRouter>
    );

    const titleElement = screen.getByText(/Iron Man/i);
    expect(titleElement).toBeInTheDocument();

    const yearElement = screen.getByText(/2008/i);
    expect(yearElement).toBeInTheDocument();
  });

  test("Click on Detail button should navigate to detail route", () => {
    act(() => {
      render(
        <MemoryRouter>
          <Routes>
            <Route path="/" element={<MovieCard {...mockData} />} />
            <Route path="/tt0371746" element={<div>Navigate to here</div>} />
          </Routes>
        </MemoryRouter>
      );
    });

    const detailButton = screen.getByText(/Detail/i);
    expect(detailButton).toBeInTheDocument();

    act(() => {
      detailButton.click();
    });

    expect(screen.getByText(/Navigate to here/i)).toBeInTheDocument();
  });
});
