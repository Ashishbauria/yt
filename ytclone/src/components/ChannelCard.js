import { CardContent, CardMedia, Typography, Box } from "@mui/material";
import React from "react";
import { CheckCircle } from "@mui/icons-material";

const ChannelCard = ({ channelDetail }) => {

  if (!channelDetail) return "Lodaing.....";
  return (
    <Box sx={{}}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems:'center',
          textAlign: "center",
          color: "#fff",
          margin:'auto',
          marginTop:'-100px'
        }}
      >
        <CardMedia
          image={channelDetail.snippet.thumbnails.high.url}
          sx={{
            borderRadius: "50%",
            height: "180px",
            width: "180px",
            mb: "10px",
            border:'2px solid #000',
            
          }}
        />
        <Typography variant="h6">
          {channelDetail.snippet.title}
          <CheckCircle
            sx={{
              color: "grey",
              fontSize: "15px",
              ml: "8px",
              position: "relative",
            }}
          />
        </Typography>
        <Typography variant="h7" >
          {parseInt(channelDetail.statistics.subscriberCount).toLocaleString()}{" "}
          Subscribers
        </Typography>
      </CardContent>
    </Box>
  );
};

export default ChannelCard;
