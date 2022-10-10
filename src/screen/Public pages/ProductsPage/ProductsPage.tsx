import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Divider from "../../../components/Divider/Divider";
import ProductCard from "../../../components/ProductCards/ProductCard/ProductCard";
import { getProducts } from "../../../redux/products/productsActions";
import ProductType from "../../../Types/ProductsTypes/productType";
import { SilverScreen } from "../../screens.style";

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
      <Grid container spacing={4} my={"50px"}>
        {store.allProducts.allProductsItems.map((item: ProductType) => {
          return (
            <Grid item xs={12} md={6} xl={4} key={item._id}>
              <ProductCard data={item} />
            </Grid>
          );
        })}
      </Grid>
    </SilverScreen>
  );
}
