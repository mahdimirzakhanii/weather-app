import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useTheme } from "../../context/ThemeContext";

const SelectedTheme = () => {
  const { theme, setTheme } = useTheme();

  const handleThem = (
    event: React.SyntheticEvent,
    newValue: "dark" | "light"
  ) => {
    setTheme(newValue);
  };

  console.log(theme);
  return (
    <Tabs
      value={theme}
      onChange={handleThem}
      variant="scrollable"
      scrollButtons="auto"
      aria-label="scrollable auto tabs example"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Tab label="Light" value="light" />
      <Tab label="Dark" value="dark" />
    </Tabs>
  );
};

export default SelectedTheme;
