import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../../components/ProductCards/ProductCard/ProductCard";
import { SilverScreen } from "../../screens.style";
import ProductType from "../../../Types/ProductsTypes/productType";
import Divider from "../../../components/Divider/Divider";
import { Grid, Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import img from "../../../assets/imges/empty.svg";
import Img from "../../../components/Img/Img";
import { useTranslation } from "react-i18next";

export default function SearchPage() {
  const [t] = useTranslation();
  const { value }: any = useParams();
  const [result, setResult] = useState<Array<ProductType | null>>([]);
  const allProducts = useSelector(
    (state: any) => state.products.allProducts.allProductsItems
  );

  useEffect(() => {
    const fliterItems = () => {
      const res: ProductType[] = [];
      allProducts.filter((item: ProductType) =>
        item.name.includes(value) ? res.push(item) : null
      );
      return setResult(res);
    };
    fliterItems();
  }, [allProducts, value]);

  return (
    <SilverScreen>
      <Divider text={value} />
      {result.length > 0 ? (
        <Grid container spacing={4} my={"50px"}>
          {result.map((item: any) => {
            return (
              <Grid item xs={12} md={6} xl={4} key={item._id}>
                <ProductCard data={item} />
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <Box textAlign="center" height="55vh" mt="20px">
          <Img src={img} />
          <Typography variant="h4" pt="20px" color="text.primary">
            {t("noPName")}{" "}
            <Typography
              variant="h4"
              fontWeight="bold"
              textTransform="uppercase"
              color="text.secondary"
              component="span"
              noWrap
            >
              ( {value} )
            </Typography>
          </Typography>
        </Box>
      )}
    </SilverScreen>
  );
}
