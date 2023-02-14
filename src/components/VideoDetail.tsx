import { Grid, Typography, Stack, Box, Avatar, Chip } from "@mui/material";
import { useLoaderData, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import CheckCircleIcon from "@mui/icons-material/CheckCircleOutline";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Video from "./Videos";

const VideoDetail = () => {
  const { searchList, playlist } = useLoaderData() as any;

  const { videoId } = useParams();
  const { items } = searchList as any;
  const {
    snippet: { title, channelTitle },
    statistics: { likeCount, viewCount },
  } = items[0];

  return (
    <Grid
      container
      minHeight={"100vh"}
      display={"flex"}
      justifyContent="center"
      height={"100vh"}
      gap={4}
    >
      <Grid item xs={8.5} height={"100%"}>
        <ReactPlayer
          url={`http://www.youtube.com/watch?v=${videoId}`}
          controls
          width={"100%"}
          height={"60%"}
        />

        <Stack
          gap={3}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"start"}
          mt={2}
        >
          <Typography variant="h6" color="black">
            {title}
          </Typography>

          <Box
            display="flex"
            justifyContent={"space-between"}
            alignItems="center"
            width="100%"
          >
            <Box
              textAlign={"left"}
              display="flex"
              alignItems={"center"}
              gap={2}
            >
              <Avatar src="https://plus.unsplash.com/premium_photo-1676117273419-f63a666165f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
              <Box display={"flex"} flexDirection="column">
                <Box display={"flex"} gap={1}>
                  <Typography variant="body1" gutterBottom>
                    {channelTitle}
                  </Typography>

                  <CheckCircleIcon />
                </Box>
                <Typography variant="caption">
                  {parseInt("3552321").toLocaleString()} subscriber
                </Typography>
              </Box>
            </Box>

            <Box display={"flex"} alignItems="center" gap={2}>
              <Chip
                icon={<ThumbUpIcon />}
                label={`${parseInt(likeCount).toLocaleString()} likes`}
              />
              <Chip
                icon={<VisibilityIcon />}
                label={`${parseInt(viewCount).toLocaleString()} views`}
              />
            </Box>
          </Box>
        </Stack>
      </Grid>

      <Grid item xs={1.5}>
        <Video video={playlist.items} direction="column" />
      </Grid>
    </Grid>
  );
};

export default VideoDetail;
