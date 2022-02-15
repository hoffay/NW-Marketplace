import React from "react";
import { Paper } from "@mui/material"

function Background() {
  return (

    <Paper elevation={0} style={{
      backgroundImage: `url("https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/UD7CEz6/videoblocks-editorial-nationwide-mutual-insurance-company-logo-on-glass-building_hrjqsv-vz_thumbnail-1080_01.png")`,
      minWidth: "100vh",
      minHeight: "46vh",
      backgroundRepeat: "no-repeat",
      WebkitBackgroundSize: "cover",
      backgroundSize: "cover",
      backgroundPosition: "center",
      resizeMode: "cover"
    }}>
    </Paper>
  );
}

export default Background;
