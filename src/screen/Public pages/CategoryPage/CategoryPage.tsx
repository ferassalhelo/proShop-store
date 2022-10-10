import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Divider from "../../../components/Divider/Divider";
import ProductCard from "../../../components/ProductCards/ProductCard/ProductCard";
import { getCategory } from "../../../redux/products/productsActions";
import ProductType from "../../../Types/ProductsTypes/productType";
import { SilverScreen } from "../../screens.style";

export default function CategoryPage() {
  const { name }: any = useParams();
  const store = useSelector((state: any) => state.products.oneCategory);
  console.log(store);
  const dispatsh = useDispatch();
  useEffect(() => {
    dispatsh(getCategory(name));
  }, [dispatsh, name]);

  return (
    <SilverScreen>
      <Divider text={name} />
      <Grid container spacing={4} my={"50px"}>
        {store.categoryItems.map((item: ProductType) => {
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
