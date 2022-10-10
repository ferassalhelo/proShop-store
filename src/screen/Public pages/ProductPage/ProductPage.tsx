import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../redux/products/productsActions";
import { Screen } from "../../screens.style";

export default function ProductPage() {
  const store = useSelector((state: any) => state.products.product.productItem);
  const dispatch = useDispatch();
  const { id }: any = useParams();
  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);
  console.log(store);
  return <Screen>ProductPage {id}</Screen>;
}
