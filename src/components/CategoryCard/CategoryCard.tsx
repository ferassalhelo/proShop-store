import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { CategoryName, ImgBox } from "./categoryCard.style";
import Img from "../Img/Img";

interface IProps {
  img: string;
  name: string;
}

export default function CategoryCard(props: IProps) {
  return (
    <Box width="100%" textAlign="center">
      <Link to={`category/${props.name}`}>
        <ImgBox sx={{ backgroundColor: "background.variant" }}>
          <Img src={props.img} />
        </ImgBox>
        <CategoryName color="text.primary">{props.name}</CategoryName>
      </Link>
    </Box>
  );
}
