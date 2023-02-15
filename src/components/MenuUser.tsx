import { ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import Divider from "@mui/material/Divider";
import { listMenuCommon } from "../constants";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import DataThresholdingOutlinedIcon from "@mui/icons-material/DataThresholdingOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import SwitchAccountOutlinedIcon from "@mui/icons-material/SwitchAccountOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

type MenuProps = {
  anchor: HTMLElement | null;
  handleClose: () => void;
  isAuthen: boolean;
};

const optionUnAuthen = [
  {
    group: [
      {
        firstIcon: <DataThresholdingOutlinedIcon fontSize="small" />,
        text: "Your data in youtube",
      },
    ],
  },
];

const optionAuthen = [
  {
    group: [
      {
        firstIcon: <AccountBoxOutlinedIcon fontSize="small" />,
        text: "Your channel",
      },
      {
        firstIcon: <PeopleOutlineOutlinedIcon fontSize="small" />,
        text: "Youtube studio",
      },
      {
        firstIcon: <SwitchAccountOutlinedIcon fontSize="small" />,
        text: "Switch account",
        secondIcon: <ArrowForwardIosIcon fontSize="small" />,
      },
      {
        firstIcon: <ExitToAppOutlinedIcon fontSize="small" />,
        text: "Sign out",
      },
    ],
  },
  {
    group: [
      {
        firstIcon: <PaidOutlinedIcon fontSize="small" />,
        text: "Purchases and memberships",
      },
      {
        firstIcon: <DataThresholdingOutlinedIcon fontSize="small" />,
        text: "Your data in youtube",
      },
    ],
  },
];

const MenuUser = ({ anchor, handleClose, isAuthen = false }: MenuProps) => {
  const open = Boolean(anchor);
  const navigate = useNavigate();
  const finalList =
    isAuthen === true
      ? optionAuthen.concat(listMenuCommon)
      : optionUnAuthen.concat(listMenuCommon);

  const signOutUser = async (type: string) => {
    if (type === "Sign out") {
      await signOut(auth).then(() => {
        navigate("/New");
        window.location.reload();
      });
    }
  };
  return (
    <Menu id="Menu-item" open={open} anchorEl={anchor} onClose={handleClose}>
      {finalList.map((item) => {
        return (
          <div>
            {item.group.map((groupItem) => {
              return (
                <MenuItem
                  disableRipple
                  onClick={() => signOutUser(groupItem.text)}
                >
                  <ListItemIcon>{groupItem.firstIcon}</ListItemIcon>
                  <ListItemText>{groupItem.text}</ListItemText>

                  {groupItem.secondIcon && (
                    <ListItemIcon sx={{ marginLeft: "20px" }}>
                      {groupItem.secondIcon}
                    </ListItemIcon>
                  )}
                </MenuItem>
              );
            })}
            <Divider />
          </div>
        );
      })}
    </Menu>
  );
};

export default MenuUser;
