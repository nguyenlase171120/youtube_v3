import { AppBar, Toolbar, Box } from "@mui/material";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../../constants";
import { auth } from "../../firebase";
import SearchBar from "../SearchBar";
import AuthentUser from "./AuthentUser";
import UnAuthentUser from "./unAuthentUser";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user && setIsLogin(true);
    });
  }, []);

  return (
    <>
      <AppBar position="static" elevation={0}>
        <Toolbar sx={{ padding: "15px 0px" }}>
          <Box display={"flex"} gap="5px">
            <Link to="/New">
              <img alt="logo" src={logo} width={50} height={50} />
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1 }} display="flex">
            <SearchBar />
          </Box>
          {isLogin === true ? <AuthentUser /> : <UnAuthentUser />}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
