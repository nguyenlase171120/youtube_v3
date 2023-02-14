import { IconButton, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { categories } from "../constants";
import { useState } from "react";

const Sidebar = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string>("New");

  return (
    <Stack
      direction="row"
      padding={"4px 8px"}
      gap="15px"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "100%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((item: any) => {
        return (
          <button
            className="sidebar-item"
            key={item.name}
            style={{
              backgroundColor: selected === item.name ? "#F0EEED" : "#fff",
            }}
            onClick={() => {
              setSelected(item.name);
              navigate(item.name);
            }}
          >
            <IconButton>{item.icon}</IconButton>
            <Typography
              variant="caption"
              color="black"
              sx={{ textDecoration: "none", flexGrow: 1 / 3 }}
            >
              {item.name}
            </Typography>
          </button>
        );
      })}

      <Typography
        className="copyright"
        variant="body2"
        sx={{ mt: 1.5, color: "#333" }}
      >
        Nguyenla171120@gmail.com
      </Typography>
    </Stack>
  );
};

export default Sidebar;
