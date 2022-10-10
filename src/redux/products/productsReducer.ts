import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_END,
  GET_PRODUCTS_FAILD,
  GET_PRODUCTS_START,
  GET_TOP_PRODUCTS_START,
  GET_TOP_PRODUCTS_SUCCESS,
  GET_TOP_PRODUCTS_FAILD,
  GET_TOP_PRODUCTS_END,
  GET_ALL_CATEGORY_START,
  GET_ALL_CATEGORY_SUCCESS,
  GET_ALL_CATEGORY_FAILD,
  GET_ALL_CATEGORY_END,
  GET_PRODUCT_START,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILD,
  GET_PRODUCT_END,
  GET_CATEGORY_START,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILD,
  GET_CATEGORY_END,
} from "./productsTypes";
import { actionType } from "../../Types/ProductsTypes/actionsType";
import { productsStateType } from "../../Types/ProductsTypes/stateOfProductsReducerType";

const STATE: productsStateType = {
  allProducts: {
    allProductsItems: [],
    loadingProducts: false,
    errorProducts: "",
  },
  topProducts: {
    topProductsItems: [],
    loadingTopProducts: false,
    errorTopProducts: "",
  },
  allCategory: {
    allCategoryItems: [],
    loadingAllCategory: false,
    errorAllCategory: "",
  },
  product: {
    productItem: {},
    loadingProduct: false,
    errorProduct: "",
  },
  oneCategory: {
    categoryItems: [],
    loadingCategory: false,
    errorCategory: "",
  },
};

export const productReducer = (state = STATE, action: actionType) => {
  switch (action.type) {
    // all products
    case GET_PRODUCTS_START:
      return {
        ...state,
        allProducts: { ...state.allProducts, loadingProducts: true },
      };

    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        allProducts: { ...state.allProducts, allProductsItems: action.peload },
      };

    case GET_PRODUCTS_FAILD:
      return {
        ...state,
        allProducts: {
          ...state.allProducts,
          errorProductsItems: action.peload,
        },
      };

    case GET_PRODUCTS_END:
      return {
        ...state,
        allProducts: { ...state.allProducts, loadingProducts: false },
      };

    // top prosucts
    case GET_TOP_PRODUCTS_START:
      return {
        ...state,
        topProducts: { ...state.topProducts, loadingTopProducts: true },
      };

    case GET_TOP_PRODUCTS_SUCCESS:
      return {
        ...state,
        topProducts: { ...state.topProducts, topProductsItems: action.peload },
      };

    case GET_TOP_PRODUCTS_FAILD:
      return {
        ...state,
        topProducts: { ...state.topProducts, errorTopProducts: action.peload },
      };

    case GET_TOP_PRODUCTS_END:
      return {
        ...state,
        topProducts: { ...state.topProducts, loadingTopProducts: false },
      };

    // all category
    case GET_ALL_CATEGORY_START:
      return {
        ...state,
        allCategory: { ...state.allCategory, loadingAllCategory: true },
      };

    case GET_ALL_CATEGORY_SUCCESS:
      return {
        ...state,
        allCategory: { ...state.allCategory, allCategoryItems: action.peload },
      };

    case GET_ALL_CATEGORY_FAILD:
      return {
        ...state,
        allCategory: { ...state.allCategory, errorAllCategory: action.peload },
      };

    case GET_ALL_CATEGORY_END:
      return {
        ...state,
        allCategory: { ...state.allCategory, loadingAllCategory: false },
      };

    // one product
    case GET_PRODUCT_START:
      return {
        ...state,
        product: { ...state.product, loadingProduct: true },
      };

    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        product: { ...state.product, productItem: action.peload },
      };

    case GET_PRODUCT_FAILD:
      return {
        ...state,
        product: {
          ...state.product,
          errorProductsItem: action.peload,
        },
      };

    case GET_PRODUCT_END:
      return {
        ...state,
        product: { ...state.product, loadingProduct: false },
      };

    // one category
    case GET_CATEGORY_START:
      return {
        ...state,
        oneCategory: { ...state.oneCategory, loadingCategory: true },
      };

    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        oneCategory: { ...state.oneCategory, categoryItems: action.peload },
      };

    case GET_CATEGORY_FAILD:
      return {
        ...state,
        oneCategory: { ...state.oneCategory, errorCategory: action.peload },
      };

    case GET_CATEGORY_END:
      return {
        ...state,
        oneCategory: { ...state.oneCategory, loadingCategory: false },
      };
    default:
      return state;
  }
};
