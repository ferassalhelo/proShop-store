import { lazy, ReactNode } from "react";

const HomePage = lazy(
  () => import("../../screen/Public pages/HomePage/HomePage")
);
const LoginPage = lazy(
  () => import("../../screen/Public pages/LoginPage/LoginPage")
);
const ProductPage = lazy(
  () => import("../../screen/Public pages/ProductPage/ProductPage")
);
const ProductsPage = lazy(
  () => import("../../screen/Public pages/ProductsPage/ProductsPage")
);
const SearchPage = lazy(
  () => import("../../screen/Public pages/SearchPage/SearchPage")
);
const CategoryPage = lazy(
  () => import("../../screen/Public pages/CategoryPage/CategoryPage")
);
const SignupPage = lazy(
  () => import("../../screen/Public pages/SignupPage/SignupPage")
);
const NotFoundPage = lazy(
  () => import("../../screen/Public pages/NotFoundPage/NotFoundPage")
);

type obj = Array<{ id: string; path: string; component: ReactNode }>;

const PublicRouts: obj = [
  { id: `${Math.random()}`, path: "/", component: <HomePage /> },
  { id: `${Math.random()}`, path: "login", component: <LoginPage /> },
  { id: `${Math.random()}`, path: "signup", component: <SignupPage /> },
  { id: `${Math.random()}`, path: "allProducts", component: <ProductsPage /> },
  { id: `${Math.random()}`, path: "product/:id", component: <ProductPage /> },
  {
    id: `${Math.random()}`,
    path: "allProducts/product/:id",
    component: <ProductPage />,
  },
  { id: `${Math.random()}`, path: "search/:value", component: <SearchPage /> },
  {
    id: `${Math.random()}`,
    path: "category/:name",
    component: <CategoryPage />,
  },
  { id: `${Math.random()}`, path: "*", component: <NotFoundPage /> },
];

export default PublicRouts;
