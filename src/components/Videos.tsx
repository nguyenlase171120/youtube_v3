import { Box, Stack } from "@mui/material";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

type IVideosProps = {
  video: any;
};

const Video = ({ video }: IVideosProps) => {
  return (
    <Stack
      flexDirection={"row"}
      flexWrap={"wrap"}
      gap={2}
      justifyContent={"start"}
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
