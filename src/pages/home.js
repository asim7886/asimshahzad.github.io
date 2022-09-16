import React, { useState } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { orange, purple, blue, green } from "@mui/material/colors";
import AppBar from "./component/Appbar.js";
import Hero from "./Home/component/Hero.js";
import About from "./about.js";
import Work from "./Home/component/Work";
import Footer from "./footer.js";
// import Work from "";

function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "light" : "dark",
      primary: {
        main: "rgb(0, 255, 164)",
      },
      // secondary: {
      //   main:green[500],
      // },
      typography: {
        fontFamily: "Courier New Courier, monospace",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar Check={darkMode} change={() => setDarkMode(!darkMode)} />
      <Hero />
      <About />
      <Work />
      <Footer />
    </ThemeProvider>
  );
}
export default Home;
