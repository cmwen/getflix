import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MovieCard from "../components/MovieCard";
import { MemoryRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

export default {
  title: "Components/MovieCard",
  component: MovieCard,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
} as ComponentMeta<typeof MovieCard>;

const Template: ComponentStory<typeof MovieCard> = (args) => (
  <MemoryRouter>
    <MantineProvider>
      <MovieCard {...args} />
    </MantineProvider>
  </MemoryRouter>
);

export const Movie = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Movie.args = {
  Title: "Iron Man",
  Year: "2008",
  imdbID: "tt0371746",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
};
