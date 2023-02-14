import { useLoaderData } from "react-router-dom";
import { Videos } from ".";
import { Box } from "@mui/material";

const Feed = () => {
  const videos: any = useLoaderData();

  return (
    <Box padding={2}>
      {" "}
      <Videos video={videos.items} />{" "}
    </Box>
  );
};

export default Feed;
