import { Box, Stack } from "@mui/material";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

type IVideosProps = {
  video: any;
  direction?: any;
};

const Video = ({ video, direction = "row" }: IVideosProps) => {
  return (
    <Stack
      flexDirection={direction}
      flexWrap={"wrap"}
      gap={2}
      justifyContent={"center"}
    >
      {video.map((item: any) => {
        return (
          <Box key={item.id.videoId}>
            {item.id.videoId && <VideoCard videoData={item} />}
            {item.id.channelId && <ChannelCard channelData={item} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Video;
