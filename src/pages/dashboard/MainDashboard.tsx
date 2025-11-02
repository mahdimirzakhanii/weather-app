import Box from "@mui/material/Box";
import MainCurrentData from "../../components/current-data/MainCurrentData";
import MainTwoWeekData from "../../components/two-week-data/MainTwoWeekData";
import { useLang } from "../../context/LanguageContext";
import MainChart from "../../components/chart/MainChart";
import type { Location } from "../../App";

type Props = {
  location: Location | null;
  search: string;
  textFa: boolean;
  setSearch: (value: string) => void;
};

const MainDashboard = ({ setSearch, loading, location }: Props) => {
  const { lang } = useLang();
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "28px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: lang === "fa" ? "row" : "row-reverse",
          gap: 5,
        }}
      >
        <MainChart />
        <MainCurrentData />
      </Box>
      <MainTwoWeekData location={location}/>
    </Box>
  );
};

export default MainDashboard;
