import { Box, Stack } from "@mui/system";
import React from "react";
import VideoCard from "./VideoCard";

const Videos = ({ videos,direction }) => {
  if (!videos?.length) return "Lodaing.....";

  return (
    <Stack direction={direction ||"row"} flexWrap="wrap" justifyContent="start" gap={2} marginLeft='15px' paddingTop='5px'>
      {videos.map((item, index) => (
        <Box key={index}>
          <VideoCard video={item} />
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
