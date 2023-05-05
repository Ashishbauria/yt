import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchData } from "./utils/FetchData";

import ChannelCard from "./ChannelCard";

import Videos from "./Videos";

const ChannelDetail = () => {
  const [channelDetails, setchanneldetails] = useState(null);

  const [videos, setvideos] = useState(null);

  

  const { id } = useParams();
  useEffect(() => {
    FetchData(`channels?part=snippet&id=${id}`).then((data) =>
      setchanneldetails(data.items[0])
    );
    
    FetchData(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
      setvideos(data.items)
    );
  }, [id]);

  //if (!channelDetails?.snippet) return "Lodaing.....";
  return (
    <Box minHeight="95vh">
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(20,18,88,1) 30%, rgba(7,7,144,1) 64%, rgba(44,183,212,1) 99%)",
          height: "250px",
          zIndex: "10",
        }}
      />
      <ChannelCard channelDetail={channelDetails}/>
      <Box alignItems='center' marginLeft='100px'>
      <Videos videos={videos}/>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
