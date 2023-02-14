import { Box, IconButton, Tooltip, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/search/${searchTerm}`);
  };

  return (
    <Box width="50%" margin="0 auto" display="flex">
      <Paper
        component={"form"}
        sx={{
          borderRadius: 20,
          border: "1px solid #e3e3e3",
          pl: 2,
          boxShadow: "none",
          mr: { sm: 5 },
          width: "100%",
        }}
      >
        <input
          type="text"
          placeholder="Search"
          className="search-bar"
          value={searchTerm}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(event?.target.value)
          }
          required
        />
        <Tooltip title="Search">
          <IconButton
            sx={{ p: "10px", color: "red", width: "15%" }}
            onClick={handleSubmit}
            onMouseEnter={handleSubmit}
          >
            <SearchIcon />
          </IconButton>
        </Tooltip>
      </Paper>
    </Box>
  );
};

export default SearchBar;
