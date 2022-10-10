import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Progress() {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <CircularProgress sx={{ margin: "50px auto" }} />
    </Box>
  );
}
