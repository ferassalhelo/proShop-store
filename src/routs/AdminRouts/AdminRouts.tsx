import { lazy, ReactNode } from "react";

const Dashpoard = lazy(
  () => import("../../screen/AdminPages/Dashpoard/Dashpoard")
);
const CreateNewProductPage = lazy(
  () =>
    import("../../screen/AdminPages/CreateNewProductPage/CreateNewProductPage")
);

type obj = Array<{ id: string; path: string; component: ReactNode }>;

const AdminRouts: obj = [
  {
    id: `${Math.random()}`,
    path: "dashpoard",
    component: <Dashpoard />,
  },
  {
    id: `${Math.random()}`,
    path: "createNewProduct",
    component: <CreateNewProductPage />,
  },
];

export default AdminRouts;
