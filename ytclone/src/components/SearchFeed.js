import React, { useState, useEffect } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { Videos } from "./";
import { useParams } from "react-router-dom";

import { FetchData } from "./utils/FetchData";

const SearchFeed = () => {

  const [videos, setVideos] = useState([]);
  const {searchTerm}=useParams();

  useEffect(() => {
    FetchData(`search?part=snippet&q=${searchTerm}`).then((data)=>setVideos(data.items))
  }, [searchTerm]);

  return (
    <Box px='100px' sx={{ overflow: "auto", height: "95vh", flex: 2,marginTop:'10px' }}>
    <Typography
      variant="h4"
      mb="5px"
      color="white"
      fontWeight="600"
      margin="15px"
    >
      Search Results for
      <span style={{ color: "red", marginLeft: "5px" }}>{searchTerm}</span>
    </Typography>
    <Videos videos={videos} />
  </Box>
  );
};

export default SearchFeed;
