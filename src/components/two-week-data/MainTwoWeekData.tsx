import { Box } from "@mui/material";
import { useLang } from "../../context/LanguageContext";
import { useCustomTheme } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";
import Slider from "./Slider";

const MainTwoWeekData = () => {
  const { mode } = useCustomTheme();
  const { lang } = useLang();
  const { t } = useTranslation();
  const myArray = Array(20).fill(3);

  return (
    <Box
      sx={{
        width: "100%",
        height: "380px",
        maxHeight: "380px",
        borderRadius: "24px",
        padding: 3,
        display: "flex",
        alignItems: "start",
        flexDirection: "column",
        overflow: "hidden",
        gap: 3,
        backgroundColor: mode === "dark" ? "#292F45" : "surface.200",
      }}
    >
      <span
        style={{
          width: "100%",
          fontSize: "24px",
          fontWeight: "600",
          textAlign: lang === "fa" ? "end" : "start",
        }}
      >
        {t("two-week-forecast")}
      </span>

      <div
        style={{
          minHeight: "266px",
          maxWidth: "100%",
          width: "100%",
          height: "266px",
          display: "flex",
          gap: "20px",
          overflowX: "auto",
          overflowY: "hidden",
        }}
      >
        <Slider myArray={myArray} />
      </div>
    </Box>
  );
};

export default MainTwoWeekData;
