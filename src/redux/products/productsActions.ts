import Axios from "../../api/api";
import { Dispatch } from "redux";
import {
  GET_PRODUCTS_END,
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILD,
  GET_TOP_PRODUCTS_START,
  GET_TOP_PRODUCTS_SUCCESS,
  GET_TOP_PRODUCTS_END,
  GET_TOP_PRODUCTS_FAILD,
  GET_ALL_CATEGORY_START,
  GET_ALL_CATEGORY_SUCCESS,
  GET_ALL_CATEGORY_END,
  GET_ALL_CATEGORY_FAILD,
  GET_PRODUCT_START,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_END,
  GET_PRODUCT_FAILD,
  GET_CATEGORY_START,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_END,
  GET_CATEGORY_FAILD,
} from "./productsTypes";
import { toast } from "react-toastify";

// all products types
export const getProducts = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_PRODUCTS_START });
    const { data } = await Axios.get("/products");
    dispatch({ type: GET_PRODUCTS_SUCCESS, peload: data.products });
    dispatch({ type: GET_PRODUCTS_END });
  } catch (error: any) {
    toast.error(`${error}`);
    dispatch({ type: GET_PRODUCTS_FAILD, peload: error });
    dispatch({ type: GET_PRODUCTS_END });
  }
};

// top products types
export const getTopProducts = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_TOP_PRODUCTS_START });
    const { data } = await Axios.get("/products/top");
    dispatch({ type: GET_TOP_PRODUCTS_SUCCESS, peload: data });
    dispatch({ type: GET_TOP_PRODUCTS_END });
  } catch (error: any) {
    toast.error(`${error}`);
    dispatch({ type: GET_TOP_PRODUCTS_FAILD, peload: error });
    dispatch({ type: GET_TOP_PRODUCTS_END });
  }
};

// all category types
export const getAllCategory = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_ALL_CATEGORY_START });
    const { data } = await Axios.get("/products/category/all");
    dispatch({ type: GET_ALL_CATEGORY_SUCCESS, peload: data.categories });
    dispatch({ type: GET_ALL_CATEGORY_END });
  } catch (error: any) {
    toast.error(`${error}`);
    dispatch({ type: GET_ALL_CATEGORY_FAILD, peload: error });
    dispatch({ type: GET_ALL_CATEGORY_END });
  }
};

// one product
export const getProduct = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_START });
    const { data } = await Axios.get(`/products/${id}`);
    dispatch({ type: GET_PRODUCT_SUCCESS, peload: data });
    dispatch({ type: GET_PRODUCT_END });
  } catch (error: any) {
    toast.error(`${error}`);
    dispatch({ type: GET_PRODUCT_FAILD, peload: error });
    dispatch({ type: GET_PRODUCT_END });
  }
};

// one category
export const getCategory = (name: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_CATEGORY_START });
    const { data } = await Axios.get(`/products/category/${name}`);
    dispatch({ type: GET_CATEGORY_SUCCESS, peload: data.products });
    dispatch({ type: GET_CATEGORY_END });
  } catch (error: any) {
    toast.error(`${error}`);
    dispatch({ type: GET_CATEGORY_FAILD, peload: error });
    dispatch({ type: GET_CATEGORY_END });
  }
};
