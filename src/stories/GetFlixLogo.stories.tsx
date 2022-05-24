import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import GetFlixLogo from "../components/GetFlixLogo";

export default {
  title: "Components/GetFlixLogo",
  component: GetFlixLogo,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  argTypes: { onClick: { action: "clicked" } },
} as ComponentMeta<typeof GetFlixLogo>;

export const Logo: ComponentStory<typeof GetFlixLogo> = (args) => (
  <GetFlixLogo {...args} />
);
