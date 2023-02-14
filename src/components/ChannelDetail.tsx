import { useLoaderData } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import ChannelCard from "./ChannelCard";
import { Videos } from ".";

const ChannelDetail = () => {
  const { channelInfor, channelVideo } = useLoaderData() as any;

  return (
    <Stack
      display="flex"
      minHeight={"100vh"}
      flexDirection={"column"}
      alignItems="start"
      justifyContent={"start"}
      maxWidth="100%"
      height={"100vh"}
    >
      <Box width="100%" height="40%" position={"relative"}>
        <img
          src="https://images.unsplash.com/photo-1600074016834-4cd1ac92ed1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8V2FsbHBhcGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="content"
          width={"100%"}
          height={"100%"}
        />

        <Box position={"absolute"} className="boxDetail">
          <ChannelCard channelData={channelInfor.items[0]} />
        </Box>
      </Box>

      <Box mt={20}>
        <Videos video={channelVideo.items} />
      </Box>
    </Stack>
  );
};

export default ChannelDetail;
