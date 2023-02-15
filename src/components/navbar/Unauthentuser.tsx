import React from "react";
import { Box, Chip, Button, IconButton, Tooltip } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { signInWithRedirect } from "firebase/auth";
import { auth, googleAuthProvider } from "../../firebase";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import MenuUser from "../MenuUser";

const UnAuthentUser = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithRedirect(auth, googleAuthProvider);

      if (result) {
        navigate("/New");
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <Box display="flex" alignItems="center" gap={4}>
        <Tooltip title="Setting">
          <IconButton onClick={handleClick}>
            <MoreVertIcon id="Menu-item" />
          </IconButton>
        </Tooltip>
        <Button onClick={loginWithGoogle}>
          <Chip
            variant="outlined"
            icon={<AccountCircleIcon />}
            label="Sign in"
            size="medium"
            color="info"
            className="authNavbar"
            sx={{ cursor: "pointer", fontWeight: "bold" }}
          />
        </Button>
        <MenuUser
          anchor={anchorEl}
          handleClose={handleClose}
          isAuthen={false}
        />
      </Box>
    </>
  );
};

export default UnAuthentUser;
