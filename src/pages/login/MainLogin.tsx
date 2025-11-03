import { useCustomTheme } from "../../context/ThemeContext";
import { useUser } from "../../context/UserContext";
import { useTranslation } from "react-i18next";
import { useLang } from "../../context/LanguageContext";
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
import i18n from "../../i18n";

const MainLogin = () => {
  const { mode } = useCustomTheme();
  const { t } = useTranslation();
  const { lang, setLang } = useLang();
  const { setName } = useUser();

  const handleChange = (event: SelectChangeEvent<"fa" | "en">) => {
    setLang(event.target.value);
    i18n.changeLanguage(event.target.value);
    localStorage.setItem("lang", event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
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
                onChange={(e) => setName(e.target.value)}
                sx={{ width: "100%", direction: lang === "fa" ? "rtl" : "ltr" }}
                label={t("name-input")}
              />
            </Box>
            <Button
              sx={{ width: "100%", paddingY: "10px" }}
              variant="contained"
            >
              {t("login")}
            </Button>
          </Box>
        </Box>
      </Box>

      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Language</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
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
