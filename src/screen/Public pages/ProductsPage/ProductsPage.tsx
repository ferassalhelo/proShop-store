import { Grid, Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Divider from "../../../components/Divider/Divider";
import Img from "../../../components/Img/Img";
import ProductCard from "../../../components/ProductCards/ProductCard/ProductCard";
import { getProducts } from "../../../redux/products/productsActions";
import { SilverScreen } from "../../screens.style";
import img from "../../../assets/imges/empty.svg";

export default function ProductsPage() {
  const [t] = useTranslation();
  const store: any = useSelector((state: any) => state.products);
  const dispach = useDispatch();
  useEffect(() => {
    (() =>
      store.allProducts.allProductsItems.length === 0
        ? dispach(getProducts())
        : null)();
  }, [dispach, store.allProducts.allProductsItems.length]);

  return (
    <SilverScreen>
      <Divider text={t("allProducts")} />
      {store.allProducts.allProductsItems.length > 0 ? (
        <Grid container spacing={4} my={"50px"}>
          {store.allProducts.allProductsItems.map((item: any) => {
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
        {t('noProducts')}
          </Typography>
        </Box>
      )}
    </SilverScreen>
  );
}
