import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <Typography
        component="span"
        color="primary.main"
        fontWeight={900}
        fontSize="2.5rem"
      >
        Pro
        <span style={{ color: "white" }}>Shop</span>
      </Typography>
    </Link>
  );
}
