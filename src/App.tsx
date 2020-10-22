import React from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./ui/theme";
import Header from "./ui/header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      hello!
    </ThemeProvider>
  );
}

export default App;
