import Box from "@mui/material/Box";
import { useLang } from "../../context/LanguageContext";
import { useCustomTheme } from "../../context/ThemeContext";
import { useEffect, useState } from "react";
import axios from "axios";
import type { Location } from "../../App";
import type { TData } from "../../context/DataContext";

interface Props {
  loading: boolean;
  search: string;
  location: Location | null;
}
interface DataChartType {
  dataChart: TData[];
}

const MainChart = ({ loading, location, search }: Props) => {
  const { lang } = useLang();
  const { mode } = useCustomTheme();
  const [dataChart, setDataChart] = useState<DataChartType[]>();

  useEffect(() => {
    const handleDataChart = async () => {
      try {
        const res = await axios.get(
          search
            ? `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=b0929da981a188d7739b38288dbfe378&units=metric${
                lang === "fa" ? "&lang=fa" : "&lang=en"
              }`
            : `https://api.openweathermap.org/data/2.5/forecast?lat=${
                location?.latitude
              }&lon=${
                location?.longitude
              }&appid=b0929da981a188d7739b38288dbfe378&units=metric${
                lang === "fa" ? "&lang=fa" : "&lang=en"
              }`
        );
        console.log(res?.data?.list);
        setDataChart(res?.data?.list);
      } catch (error) {
        console.log(error);
      }
    };
    handleDataChart();
  }, [location, search]);

  console.log(dataChart);
  return (
    <Box
      sx={{
        maxWidth: "775px",
        width: "775px",
        height: "235px",
        maxHeight: "235px",
        borderRadius: "24px",
        padding: 3,
        display: "flex",
        alignItems: "center",
        flexDirection: lang === "fa" ? "row-reverse" : "row",
        justifyContent: "space-between",
        gap: 3,
        backgroundColor: mode === "dark" ? "#292F45" : "surface.200",
      }}
    >
      MainChart
    </Box>
  );
};

export default MainChart;
