import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { createContext, useContext, useState } from "react";

interface ThemeType {
  theme: "dark" | "light";
  setTheme: (theme: "dark" | "light") => void;
}

const ThemeContext = createContext<ThemeType | undefined>(undefined);

export const ThemeProviderContext = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const themeMui = createTheme({ palette: { mode: theme } });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={themeMui}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
