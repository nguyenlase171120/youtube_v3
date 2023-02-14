import {
  Box,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Button,
} from "@mui/material";
import { useNavigate, useRouteError } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const NotFound = () => {
  const error: any = useRouteError();
  const navigate = useNavigate();

  return (
    <Box display="flex" justifyContent="center" alignItems={"center"}>
      <Dialog open={true} maxWidth="md" sx={{ padding: "10px" }}>
        <DialogTitle textAlign={"center"} color="red">
          {error.statusText ||
            "Currently, server doesn't have this data to display UI"}
        </DialogTitle>
        <DialogContent>
          <img
            alt="error"
            src="https://3.bp.blogspot.com/-Mfc0l4uwnfI/XPLe78PKf4I/AAAAAAAAFC4/tSLGoPeeUIkluL9-xG7Efqdgq2PmnPdzQCLcBGAs/s1600/404-unavailable-web-page-file-not-found.jpg"
            width={"100%"}
            height={"80%"}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            sx={{ borderRadius: "10px", margin: "20px auto", width: "50%" }}
            size="large"
            onClick={() => navigate(-1)}
            startIcon={<ArrowBackIcon />}
          >
            Go back
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default NotFound;
