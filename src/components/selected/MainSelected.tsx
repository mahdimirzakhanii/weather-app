import { useState } from "react";
import SelectedTheme from "./SelectedTheme";
import SelectedLang from "./SelectedLang";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Icon } from "@iconify/react";
import Divider from "@mui/material/Divider";

const MainSelected = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          minWidth: "40px",
          height: "40px",
          padding: 0,
          backgroundColor: open ? "primary.100" : "transparent",
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: open ? "primary.500" : "#BBC1C4",
        }}
      >
        <Icon
          style={{ fontSize: "24px", color: open ? "#009CD8" : "#BBC1C4" }}
          icon="material-symbols-light:settings-outline"
        />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
      >
        <MenuItem>
          <SelectedTheme />
        </MenuItem>

        <Divider
          orientation="horizontal"
          variant="middle"
          flexItem
          sx={{ borderWidth: 1 }}
        />

        <MenuItem>
          <SelectedLang />
        </MenuItem>

        <Divider
          orientation="horizontal"
          variant="middle"
          flexItem
          sx={{ borderWidth: 1 }}
        />

        <Button
          variant="text"
          sx={{
            width: "100%",
            paddingX: 3,
            display: "flex",
            justifyContent: "start",
            color: "surface.900",
          }}
          startIcon={
            <Icon
              style={{ color: "#0008" }}
              icon="fluent:arrow-exit-32-regular"
            />
          }
        >
          Exit
        </Button>
      </Menu>
    </div>
  );
};

export default MainSelected;
