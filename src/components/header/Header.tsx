import { useCustomTheme } from "../../context/ThemeContext";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import TextField from "@mui/material/TextField";
import MainSelected from "../selected/MainSelected";

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
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <TextField
            id="outlined-basic"
            label="Search Your Location"
            variant="outlined"
            sx={{
              width: 280,
              "& .MuiOutlinedInput-root": {
                height: "42px",
                "& fieldset": {
                  borderColor: "#BBC1C4",
                },
                "&:hover fieldset": {
                  borderColor: "#BBC1C4 !important",
                },
              },
              "& .MuiOutlinedInput-input": {
                padding: "10px 12px",
                fontSize: "14px",
                color: "#444",
              },
              "& .MuiInputLabel-root": {
                fontSize: "14px",
                top: "50%",
                transform: "translate(14px, -50%)",
                transition: "all 0.2s ease",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                transform: "translate(14px, -30px) scale(0.85)",
              },
            }}
          />

          <MainSelected />
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
