import EmergencyRecordingSharp from "@mui/icons-material/EmergencyRecordingSharp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Toolbar,
  Box,
  Tooltip,
  IconButton,
  Badge,
  Avatar,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../constants";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar sx={{ padding: "15px 0px" }}>
        <Box display={"flex"} gap="5px">
          <Link to="/">
            <img alt="logo" src={logo} width={50} height={50} />
          </Link>
        </Box>

        <Box sx={{ flexGrow: 1 }} display="flex">
          <SearchBar />
        </Box>
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

          <Avatar sizes="small" sx={{ cursor: "pointer" }}>
            N
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
