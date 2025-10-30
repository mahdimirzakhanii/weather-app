import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { useCustomeTheme } from "../../context/ThemeContext";

const Header = () => {
  const { theme, muiTheme } = useCustomeTheme();
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
          backgroundColor: muiTheme.palette.background.default,
          color: muiTheme.palette.text.primary,
        }}
      >
        حالت فعلی: {theme}
      </Box>
    </AppBar>
  );
};

export default Header;
