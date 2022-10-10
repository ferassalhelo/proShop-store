import { lazy, ReactNode } from "react";

const ListProductsPage = lazy(
  () => import("../../screen/AdminPages/ListProductsPage/ListProductsPage")
);
const CreateNewProductPage = lazy(
  () =>
    import("../../screen/AdminPages/CreateNewProductPage/CreateNewProductPage")
);

type obj = Array<{ id: string; path: string; component: ReactNode }>;

const AdminRouts: obj = [
  {
    id: `${Math.random()}`,
    path: "listProducts",
    component: <ListProductsPage />,
  },
  {
    id: `${Math.random()}`,
    path: "createNewProduct",
    component: <CreateNewProductPage />,
  },
];

export default AdminRouts;
