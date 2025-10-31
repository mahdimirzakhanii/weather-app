import { useCustomTheme } from "../../context/ThemeContext";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MainSelected from "../selected/MainSelected";
import { useTranslation } from "react-i18next";
import { useLang } from "../../context/LanguageContext";

const Header = () => {
  const { theme } = useCustomTheme();
  const { lang } = useLang();
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: lang === "fa" ? "row-reverse" : "row",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: "50",
        paddingY: 2,
        paddingX: 5,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        boxShadow: "0px 4px 10px 0px #00000026",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          flexDirection: lang === "fa" ? "row-reverse" : "row",
        }}
      >
        <img src="/image/header/image.png" alt="" />
        <span>{t("weather_dashboard")}</span>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          flexDirection: lang === "fa" ? "row-reverse" : "row",
        }}
      >
        <TextField
          id="outlined-basic"
          label={t("search-lable")}
          variant="outlined"
          size="small"
          sx={{
            "& input": {
              direction: "rtl",
            },
            "& .MuiOutlinedInput-root": {
              height: 40,
              width: "290px",
              "& fieldset": {
                borderColor: "#BBC1C4",
              },
              "&:hover fieldset": {
                borderColor: "#BBC1C4 !important",
              },
            },
            "& .MuiOutlinedInput-input": {
              padding: "8px 12px",
              lineHeight: "24px",
              fontSize: "14px",
              boxSizing: "border-box",
            },
          }}
        />
        <MainSelected />
      </Box>
    </Box>
  );
};

export default Header;
