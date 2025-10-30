import { blue, green, orange, red } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { createContext, useContext, useMemo, useState } from "react";
import type { Theme } from "@mui/material/styles";
import "@mui/material/styles";

interface ThemeType {
  theme: "dark" | "light";
  setTheme: (theme: "dark" | "light") => void;
  muiTheme: Theme;
}

declare module "@mui/material/styles" {
  interface Palette {
    surface: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
  }
  interface PaletteOptions {
    surface?: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
  }
}
const ThemeContext = createContext<ThemeType | undefined>(undefined);

export const ThemeProviderContext = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: theme,
          surface: {
            50: "#FFFFFF",
            100: "#F5F9FC",
            200: "#E1E9EE",
            300: "#CDD9E0",
            400: "#AFBCC4",
            500: "#8895A0",
            600: "#62707C",
            700: "#3D4852",
            800: "#25262E",
            900: "#1C1B22",
          },
          primary: {
            50: "#EEFAFF",
            100: "#CFEDFA",
            200: "#98D8F1",
            300: "#57C0E9",
            400: "#19ABE4",
            500: "#009CD8",
            600: "#0F6FA6",
            700: "#0F6FA6",
            800: "#074979",
            900: "#003464",
          },
          error: red,
          warning: orange,
          success: green,
          info: blue,
          background: {
            default: theme === "light" ? "#F3FAFE" : "#151D32",
          },
        },
      }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme, muiTheme }}>
      <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useCustomeTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("Error Theme");
  }
  return context;
};
