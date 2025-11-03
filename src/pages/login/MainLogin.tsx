import { useCustomTheme } from "../../context/ThemeContext";
import { useUser } from "../../context/UserContext";
import { useTranslation } from "react-i18next";
import { useLang } from "../../context/LanguageContext";
import i18n from "../../i18n";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";
import { useState, type MouseEventHandler } from "react";

const MainLogin = () => {
  const { mode } = useCustomTheme();
  const { t } = useTranslation();
  const { lang, setLang } = useLang();
  const { setName } = useUser();
  const [valueName, setValueName] = useState("");

  const handleChange = (event: SelectChangeEvent<"fa" | "en">) => {
    setLang(event.target.value);
    i18n.changeLanguage(event.target.value);
    localStorage.setItem("lang", event.target.value);
  };

  const handleClickLogin = () => {
    setName(valueName);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 3,
        paddingBottom: 8,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: lang === "fa" ? "row" : "row-reverse",
        }}
      >
        <Box
          sx={{
            width: "960px",
            minWidth: "960px",
            height: "560px",
            minHeight: "560px",
            display: "flex",
            flexDirection: lang === "fa" ? "row" : "row-reverse",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "12px",
            background: mode === "dark" ? "#292F45" : "#fff",
          }}
        >
          <img
            src={
              mode === "dark"
                ? "/image/login/bg-dark.png"
                : "/image/login/Frame 10.png"
            }
            style={
              lang === "fa"
                ? {
                    borderBottomLeftRadius: "12px",
                    borderTopLeftRadius: "12px",
                  }
                : {
                    borderBottomRightRadius: "12px",
                    borderTopRightRadius: "12px",
                  }
            }
            alt=""
          />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "column",
              minHeight: "355px",
              width: "50%",
              paddingX: "40px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: 5,
                width: "100%",
              }}
            >
              <span style={{ fontSize: "26px", textAlign: "center" }}>
                {t("login")}
              </span>

              <TextField
                onChange={(e) => setValueName(e.target.value)}
                sx={{ width: "100%", direction: lang === "fa" ? "rtl" : "ltr" }}
                label={t("name-input")}
              />
            </Box>
            <Button
              onClick={handleClickLogin}
              sx={{ width: "100%", paddingY: "10px" }}
              variant="contained"
            >
              {t("login")}
            </Button>
          </Box>
        </Box>
      </Box>

      <FormControl
        variant="standard"
        sx={{ m: 1, minWidth: 120, width: 220 }}
        size="small"
      >
        <InputLabel id="demo-simple-select-standard-label">Language</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={lang}
          label="Language"
          onChange={handleChange}
        >
          <MenuItem value="fa">Persian</MenuItem>
          <MenuItem value="en">English</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default MainLogin;
