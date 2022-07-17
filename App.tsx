import React from "react";
import { Home } from "./src/screens/Home";
import { ThemeProvider } from "styled-components/native";
import light from "./src/Global/light";

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <Home />
    </ThemeProvider>
  );
}
