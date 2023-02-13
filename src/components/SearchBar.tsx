import { Box, IconButton, Tooltip, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
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
        <input type="text" placeholder="Search" className="search-bar" />
        <Tooltip title="Search">
          <IconButton
            type="submit"
            sx={{ p: "10px", color: "red", width: "15%" }}
          >
            <SearchIcon />
          </IconButton>
        </Tooltip>
      </Paper>
    </Box>
  );
};

export default SearchBar;
