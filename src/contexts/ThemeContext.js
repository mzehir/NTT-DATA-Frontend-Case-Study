import React, { useState, createContext } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { THEMES } from "../utils/constants/themeConstant";
import createTheme from "../theme";

const initialState = {
  theme: THEMES.DEFAULT.key,
};

const ThemeContext = createContext(initialState);

function ThemeProvider({ children }) {
  const [theme] = useState(initialState.theme);

  return (
    <ThemeContext.Provider value={{ theme }}>
      <MuiThemeProvider theme={createTheme(theme)}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
