import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { demoChannelTitle, demoChannelUrl, demoVideoUrl } from "../constants";

type videoCardProps = {
  videoData: any;
};

const VideoCard = ({ videoData }: videoCardProps) => {
  const {
    snippet,
    id: { videoId },
  } = videoData;

  return (
    <Card
      elevation={0}
      sx={{ width: { md: "380px", sx: "100%" }, borderRadius: "5px" }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          title={snippet.title}
          image={snippet.thumbnails.high.url}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
      <CardContent sx={{ height: "106px" }}>
        <Link
          to={videoId ? `/video/${videoId}` : demoVideoUrl}
          style={{ textDecoration: "none", color: "#333" }}
        >
          <Typography
            variant="body1"
            gutterBottom
            component={"div"}
            fontWeight="bold"
          >
            {snippet.title.slice(0, 20)}
          </Typography>
        </Link>

        <Link
          to={
            snippet.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl
          }
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="subtitle2" color="gray" fontWeight={"bold"}>
            {snippet.channelTitle || demoChannelTitle}
          </Typography>

          <CheckCircleOutlineIcon
            sx={{ color: "gray", ml: "5px", fontSize: 14 }}
          />
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
