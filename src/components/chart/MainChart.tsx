import Box from "@mui/material/Box";
import { useLang } from "../../context/LanguageContext";
import { useCustomTheme } from "../../context/ThemeContext";

interface Props {
  loading: boolean;
}
const MainChart = ({ loading }: Props) => {
  const { lang } = useLang();
  const { mode } = useCustomTheme();
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
