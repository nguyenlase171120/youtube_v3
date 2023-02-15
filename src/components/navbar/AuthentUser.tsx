import React from "react";
import { Box, Tooltip, IconButton, Badge, Avatar, Button } from "@mui/material";
import EmergencyRecordingSharp from "@mui/icons-material/EmergencyRecordingSharp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MenuUser from "../MenuUser";

const AuthentUser = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box gap={"15px"} display="flex">
      <Tooltip title="Create">
        <IconButton>
          <EmergencyRecordingSharp />
        </IconButton>
      </Tooltip>

      <Tooltip title="Notifications">
        <IconButton>
          <Badge badgeContent={4} color="secondary">
            <NotificationsNoneIcon />
          </Badge>
        </IconButton>
      </Tooltip>

      <Button onClick={handleClick}>
        <Avatar sizes="small" sx={{ cursor: "pointer" }} id="Menu-item">
          N
        </Avatar>
      </Button>
      <MenuUser anchor={anchorEl} handleClose={handleClose} isAuthen={true} />
    </Box>
  );
};

export default AuthentUser;
