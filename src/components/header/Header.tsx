import { useCustomTheme } from "../../context/ThemeContext";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import TextField from "@mui/material/TextField";

const Header = () => {
  const { theme } = useCustomTheme();

  return (
    <AppBar position="absolute">
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "fixed",
          zIndex: "50",
          padding: 2,
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
          }}
        >
          <img src="/image/header/image.png" alt="" />
          <span>Weather Dashboard</span>
        </Box>
        <TextField
          id="outlined-basic"
          label="Search Your Location"
          variant="outlined"
        />
      </Box>
    </AppBar>
  );
};

export default Header;
