import { Box } from "@mui/material";
import { useLang } from "../../context/LanguageContext";
import { useCustomTheme } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";
import Slider from "./Slider";
import { useEffect, useState } from "react";
import axios from "axios";
import type { Location } from "../../App";

interface Props {
  location: Location | null;
}

const MainTwoWeekData = ({ location }: Props) => {
  const { mode } = useCustomTheme();
  const { lang } = useLang();
  const { t } = useTranslation();
  const [dataSlider, setDataSlider] = useState<[]>([]);

  useEffect(() => {
    const handleDataFiveDay = async () => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${location?.latitude}&lon=${location?.longitude}&units=metric&appid=b0929da981a188d7739b38288dbfe378`
        );
        console.log(res?.data?.list);
        setDataSlider(res?.data?.list);
      } catch (error) {
        console.log(error);
      }
    };
    handleDataFiveDay();
  }, [location]);

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
        <Slider data={dataSlider} />
      </div>
    </Box>
  );
};

export default MainTwoWeekData;
