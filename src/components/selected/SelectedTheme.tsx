import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useCustomeTheme } from "../../context/ThemeContext";

const SelectedTheme = () => {
  const { mode, setMode } = useCustomeTheme();

  const handleThem = (
    event: React.SyntheticEvent,
    newValue: "dark" | "light"
  ) => {
    setMode(newValue);
    localStorage.setItem("theme", newValue);
  };

  return (
    <Tabs
      value={mode}
      onChange={handleThem}
      variant="scrollable"
      aria-label="secondary tabs example"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        "& .MuiTab-root:focus": {
          outline: "none",
        },
        "& .Mui-selected": {
          outline: "none",
        },
      }}
    >
      <Tab label="Light" value="light" />
      <Tab label="Dark" value="dark" />
    </Tabs>
  );
};

export default SelectedTheme;
