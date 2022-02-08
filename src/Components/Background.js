import React from "react";
import { Paper } from "@mui/material"

function Background() {
  return (

    <Paper elevation={0} style={{
      backgroundImage: `url("https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/UD7CEz6/videoblocks-editorial-nationwide-mutual-insurance-company-logo-on-glass-building_hrjqsv-vz_thumbnail-1080_01.png")`,
      minHeight: "60vh",
      backgroundSize: "contain",
      backgroundRepeat: "no repeat"
    }}>
    </Paper>
  );
}

export default Background;