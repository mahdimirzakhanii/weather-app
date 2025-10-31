import { useTranslation } from "react-i18next";
import { useLang } from "../../context/LanguageContext";
import Box from "@mui/material/Box";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

const SelectedLang = () => {
  const { lang, setLang } = useLang();
  const { i18n, t } = useTranslation();

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newValue: "fa" | "en"
  ) => {
    if (newValue !== null) {
      setLang(newValue);
      i18n.changeLanguage(newValue);
      localStorage.setItem("lang", newValue);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        minWidth: "220px",
        width: "100%",
      }}
    >
      <span style={{ textAlign: lang === "fa" ? "end" : "start" }}>
        {t("language")}
      </span>

      <ToggleButtonGroup
        value={lang}
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
        <ToggleButton value="fa" aria-label="left">
          فارسی
        </ToggleButton>
        <ToggleButton value="en" aria-label="right">
          English
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default SelectedLang;
