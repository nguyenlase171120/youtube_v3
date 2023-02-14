import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../constants";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

type channelCardProps = {
  channelData: any;
};
const ChannelCard = ({ channelData }: channelCardProps) => {
  const { snippet } = channelData;

  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { md: "390px", xs: "420px" },
        height: "206px",
        margin: "auto",
      }}
    >
      <Link
        to={`/channel/${channelData.id.channelId}`}
        style={{ textDecoration: "none" }}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "10px",
            color: "#333",
          }}
        >
          <CardMedia
            image={snippet.thumbnails.high.url || demoProfilePicture}
            sx={{ borderRadius: "50%", width: "180px", height: "180px" }}
          />
          <Typography textAlign="center">
            {snippet.title}

            <CheckCircleOutlineIcon
              sx={{ color: "gray", ml: "5px", fontSize: 14 }}
            />
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
