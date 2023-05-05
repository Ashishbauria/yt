import React, { useState, useEffect } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { SideBar, Videos } from "./";

import { FetchData } from "./utils/FetchData";

const Feed = () => {
  const [selectedCategory, setselectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    FetchData(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);
  
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "94vh" },
          borderRight: "2px solid #3d3d3d",
          px: { sx: "0", md: "3px" },
          mt: "15px",
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setselectedCategory={setselectedCategory}
        />
      </Box>
      <Box px="10px" sx={{ overflow: "auto", height: "94vh", flex:2 }}>
        <Typography
          variant="h4"
          mb="10px"
          color="white"
          fontWeight="600"
          marginX="10px"
        >
          {selectedCategory}
          <span style={{ color: "red", marginLeft: "5px" }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
