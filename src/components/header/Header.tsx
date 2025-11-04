import { useCustomTheme } from "../../context/ThemeContext";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MainSelected from "../selected/MainSelected";
import { useTranslation } from "react-i18next";
import { useLang } from "../../context/LanguageContext";
import { useState } from "react";
import i18n from "../../i18n";

interface Props {
  setTextFa: (value: boolean) => void;
  setSearch: (value: string) => void;
}

const Header = ({ setTextFa, setSearch }: Props) => {
  const { theme } = useCustomTheme();
  const { lang, setLang } = useLang();
  const { t } = useTranslation();
  const [searchText, setSearchText] = useState<string>("");

  const handleEnterSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearch(searchText);
      const isPersian = /[\u0600-\u06FF]/.test(searchText);
      setLang(isPersian ? "fa" : "en");
      localStorage.setItem("lang", isPersian ? "fa" : "en");
      i18n.changeLanguage(isPersian ? "fa" : "en");
    }
  };

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
        paddingX: 10,
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
          onKeyDown={handleEnterSearch}
          onChange={(e) => setSearchText(e.target.value)}
          id="outlined-basic"
          label={t("search-lable")}
          variant="outlined"
          size="small"
          sx={{
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
        <MainSelected setTextFa={setTextFa} />
      </Box>
    </Box>
  );
};

export default Header;
