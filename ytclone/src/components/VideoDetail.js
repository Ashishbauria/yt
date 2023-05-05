import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { Box } from "@mui/system";
import { Stack, Typography } from "@mui/material";
import { FetchData } from "./utils/FetchData";
import { CheckCircle } from "@mui/icons-material";
import Videos from "./Videos";

const VideoDetail = () => {
  const [videoDetails, setVideodetails] = useState(null);
  const [videoRecommended, setVideoRecommended] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    FetchData(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideodetails(data.items[0])
    );
    FetchData(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideoRecommended(data.items)
    );
  }, [id]);

  if (!videoDetails?.snippet) return "Lodaing.....";

   console.log(videoDetails);
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetails;

  return (
    <Box minHeight="95vh" padding='40px'>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box
            sx={{
              width: "100%",
              position: "sticky",
              top: "85px",
              marginLeft: {sx:"20px",md:"100px"},
            }}
          >
            <ReactPlayer
              className="react-player"
              controls
              url={`https://www.youtube.com/watch?v=${id}`}
            />
            <Typography color="#fff" fontWeight="bold" variant="h6"  py="5px">
              {title}
            </Typography>
            <Stack direction="row" sx={{ color: "#fff" }} py={1} px={2}>
              <img
                src={videoDetails.snippet.thumbnails.high.url}
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  marginRight: "10px",
                  border: "3px solid #404040",
                }}
              />
              <Link to={`channel/${channelId}`}>
                <Typography variant="h6" color="#fff" marginTop="10px">
                  {channelTitle}
                  <CheckCircle
                    sx={{
                      color: "grey",
                      fontSize: "16px",
                      marginLeft:'10px'
                    }}
                  />
                </Typography>
              </Link>
              <Stack
                direction="row"
                alignItems="center"
                gap="20px"
                marginLeft="350px"
              >
                <Typography variant="body1">
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1">
                  {parseInt(likeCount).toLocaleString()} Likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box justifyContent="center" px="5px" py="10px" alignItems="center">
          <Videos videos={videoRecommended} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
