import * as React from "react";
import { ThemeProvider, useTheme } from "./themecontext";
import "./styles.css";

export default function Darkmode() {
  return (
    <ThemeProvider>
      <Page />
    </ThemeProvider>
  );
}

const Page = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <h1>{theme}</h1>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? "Switch to light mode" : "switch to dark mode"}
      </button>
    </div>
  );
};
