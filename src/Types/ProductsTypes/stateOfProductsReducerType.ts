export interface allProductsType {
  allProductsItems: Array<object>;
  loadingProducts: boolean;
  errorProducts: string;
}

export interface topProductsType {
  topProductsItems: Array<object>;
  loadingTopProducts: boolean;
  errorTopProducts: string;
}

export interface allCategoryType {
  allCategoryItems: Array<object>;
  loadingAllCategory: boolean;
  errorAllCategory: string;
}

export interface productType {
  productItem: Object;
  loadingProduct: boolean;
  errorProduct: string;
}

export interface oneCategory {
  categoryItems: Array<object>;
  loadingCategory: boolean;
  errorCategory: string;
}

export interface productsStateType {
  allProducts: allProductsType;
  topProducts: topProductsType;
  allCategory: allCategoryType;
  product: productType;
  oneCategory: oneCategory;
}
