import React from "react";
import { Switch, useMantineColorScheme } from "@mantine/core";

function ThemeToggler() {
  const { toggleColorScheme } = useMantineColorScheme();

  return <Switch onChange={() => toggleColorScheme()} label="Dark theme" />;
}

export default ThemeToggler;
