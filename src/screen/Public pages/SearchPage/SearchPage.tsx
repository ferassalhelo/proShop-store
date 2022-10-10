import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../../components/ProductCards/ProductCard/ProductCard";
import { SilverScreen } from "../../screens.style";
import ProductType from "../../../Types/ProductsTypes/productType";
import Divider from "../../../components/Divider/Divider";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";

export default function SearchPage() {
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
        <p>not exest any item...</p>
      )}
    </SilverScreen>
  );
}
