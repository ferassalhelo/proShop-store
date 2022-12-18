import { CircularProgress, Box } from "@mui/material";

export default function Progress() {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <CircularProgress sx={{ margin: "50px auto" }} />
    </Box>
  );
}
