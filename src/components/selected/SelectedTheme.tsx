import React from "react";
import { useCustomTheme } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";
import { useLang } from "../../context/LanguageContext";
import Box from "@mui/material/Box";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

const SelectedTheme = () => {
  const { mode, setMode } = useCustomTheme();
  const { lang } = useLang();
  const { t } = useTranslation();

  const handleAlignment = (
    _: React.MouseEvent<HTMLElement>,
    newValue: "dark" | "light"
  ) => {
    setMode(newValue);

    localStorage.setItem("theme", newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        minWidth: "220px",
      }}
    >
      <span style={{ textAlign: lang === "fa" ? "end" : "start" }}>
        {t("mode")}
      </span>

      <ToggleButtonGroup
        dir={lang === "fa" ? "rtl" : "ltr"}
        value={mode}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          "& .MuiToggleButton-root": {
            border: "1px solid",
            width: "100%",
            borderColor: "surface.500",
            minHeight: 33,
            padding: 0,
            fontSize: 14,
            fontWeight: 400,
            color: "surface.500",
            transition: "all 0.2s ease",
            "&.Mui-selected": {
              borderColor: "info.500",
              color: "info.500",
              backgroundColor: "transparent",
            },
            "&:focus": {
              outline: "none",
            },
            "&:hover": {
              backgroundColor: "transparent",
            },
            "&:not(:last-of-type)": {
              borderRight: "none",
            },
          },
        }}
      >
        <ToggleButton value="dark" aria-label="left">
          {t("dark")}
        </ToggleButton>
        <ToggleButton value="light" aria-label="right">
          {t("light")}
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default SelectedTheme;
