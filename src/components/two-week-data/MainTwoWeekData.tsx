import { Box } from "@mui/material";
import { useLang } from "../../context/LanguageContext";
import { useCustomTheme } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";
import Slider from "./Slider";
import { useEffect, useState } from "react";
import axios from "axios";
import type { Location } from "../../App";
import { useUser } from "../../context/UserContext";

interface Props {
  search: string;
  location: Location | null;
  errorLocation: boolean;
}

const MainTwoWeekData = ({ location, search, errorLocation }: Props) => {
  const { mode } = useCustomTheme();
  const { lang } = useLang();
  const { name } = useUser();
  const { t } = useTranslation();
  const [dataSlider, setDataSlider] = useState<[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    const handleDataFiveDay = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          search
            ? `https://api.openweathermap.org/data/2.5/forecast?q=${search}&units=metric&appid=${apiKey}`
            : `https://api.openweathermap.org/data/2.5/forecast?lat=${location?.latitude}&lon=${location?.longitude}&units=metric&appid=${apiKey}`
        );
        setDataSlider(res?.data?.list);
        setError(false);
      } catch (error) {
        console.log(error)
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    handleDataFiveDay();
  }, [location, search, name, errorLocation]);

  return error ? (
    <Box
      sx={{
        width: "100%",
        height: "380px",
        maxHeight: "380px",
        borderRadius: "24px",
        padding: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        overflow: "hidden",
        gap: 3,
        backgroundColor: mode === "dark" ? "#292F45" : "surface.200",
      }}
    >
      <span>{t("error")}</span>
    </Box>
  ) : loading ? (
    <Box
      sx={{
        width: "100%",
        height: "380px",
        maxHeight: "380px",
        borderRadius: "24px",
        padding: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        overflow: "hidden",
        gap: 3,
        backgroundColor: mode === "dark" ? "#292F45" : "surface.200",
      }}
    >
      <span>{t("loading")}</span>
    </Box>
  ) : (
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
