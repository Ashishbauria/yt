import { CheckCircle } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Stack, Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { demoVideoUrl } from "./utils/constants";

const VideoCard = ({ video }) => {
  
  return (
    <Card className="video-card"
      sx={{
        backgroundColor: "#000",
        borderRadius: "8px",
        width: { xs: "100%", md: "315px" },
        margin:'0px'
      }}
    >
      <Link to={video ? `/video/${video.id.videoId}` : demoVideoUrl}>
        <CardMedia
          image={video.snippet.thumbnails.high.url}
          style={{ width: { xs: "100%", md: "315px" }, height: "165px", borderRadius: "8px" }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#000", height: "60px" }}>
        <Stack direction="row">
          <img
            src={video.snippet.thumbnails.high.url}
            style={{
              width: "35px",
              height: "35px",
              borderRadius: "50%",
              marginRight: "10px",
              border:'3px solid #404040'
            }}
          />
          <Typography
            variant="subtitle1"
            fontWeight="400"
            color="white"
            fontSize="14px"
            fontStyle="-moz-initial"
          >
            {video.snippet.title.slice(0, 50)}
            <br></br>
            <Link
              to={video ? `/channel/${video.snippet.channelId}` : demoVideoUrl}
            >
              <Typography variant="subtitle2" color="grey" fontSize="12px">
                {video.snippet.channelTitle.slice(0, 30)}

                <CheckCircle
                  sx={{
                    color: "grey",
                    fontSize: "14px",
                    ml: "8px",
                    position: "relative",
                  }}
                />
              </Typography>
            </Link>
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
