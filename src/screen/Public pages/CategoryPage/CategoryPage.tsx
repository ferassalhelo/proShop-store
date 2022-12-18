import { Grid, Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Divider from "../../../components/Divider/Divider";
import Img from "../../../components/Img/Img";
import ProductCard from "../../../components/ProductCards/ProductCard/ProductCard";
import { getCategory } from "../../../redux/products/productsActions";
import ProductType from "../../../Types/ProductsTypes/productType";
import { SilverScreen } from "../../screens.style";
import img from "../../../assets/imges/empty.svg";
import { useTranslation } from "react-i18next";

export default function CategoryPage() {
  const [t] = useTranslation();
  const { name }: any = useParams();
  const store = useSelector((state: any) => state.products.oneCategory);
  const dispatsh = useDispatch();
  useEffect(() => {
    dispatsh(getCategory(name));
  }, [dispatsh, name]);

  return (
    <SilverScreen>
      <Divider text={name} />
      {store.categoryItems.length > 0 ? (
        <Grid container spacing={4} my={"50px"}>
          {store.categoryItems.map((item: ProductType) => {
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
            {t("noProducts")}
          </Typography>
        </Box>
      )}
    </SilverScreen>
  );
}
