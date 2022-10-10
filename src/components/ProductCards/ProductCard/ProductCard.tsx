import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";
import Img from "../../Img/Img";
import Rating from "../../Ratting/Ratting";
import ProductType from "../../../Types/ProductsTypes/productType";
import Button from "../../Button/Button";
import {
  CardBox,
  CardContent,
  DiscountPercentage,
  ProductDiscount,
  ProductName,
  ProductPrice,
} from "./productCard.style";

interface IProps {
  data: ProductType;
}

export default function ProductCard({ data }: IProps) {
 const [t] = useTranslation();
  return (
    <CardBox>
      <Link to={`product/${data._id}`}>
        {data.discount > 0 && (
          <DiscountPercentage>
            -{Math.floor((100 / data.price) * data.discount)}%
          </DiscountPercentage>
        )}
        <Box height="350px">
          <Img src={data.images[0]} />
        </Box>
      </Link>
      <CardContent>
        <Link to={`../product/${data._id}}`}>
          <ProductName>{data.name}</ProductName>
          <Rating readonly value={data.rating} />
          <Box>
            {data.discount > 0 && (
              <ProductDiscount>
                {(data.price - data.discount).toFixed(2)}$
              </ProductDiscount>
            )}
            <ProductPrice
              sx={{
                textDecoration: `${
                  data.discount > 0 ? "line-through" : "none"
                }`,
              }}
            >
              {data.price.toFixed(2)}$
            </ProductPrice>
          </Box>
        </Link>
        <Button height="62px" width="70%">
          {t("addToCart")}
        </Button>
      </CardContent>
    </CardBox>
  );
}
