import Box from "@mui/material/Box";
import SelectedTheme from "./SelectedTheme";

const MainSelected = () => {
  return (
    <Box
      sx={{
        width: "300px",
        p: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 5,
      }}
    >
      <SelectedTheme />
    </Box>
  );
};

export default MainSelected;
