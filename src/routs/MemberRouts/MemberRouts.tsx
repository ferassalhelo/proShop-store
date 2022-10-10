import { lazy, ReactNode } from "react";

const CartPage = lazy(
  () => import("../../screen/MemberPages/CartPage/CartPage")
);
const OrderPage = lazy(
  () => import("../../screen/MemberPages/OrderPage/OrderPage")
);
const ProfilePage = lazy(
  () => import("../../screen/MemberPages/ProfilePage/ProfilePage")
);

type obj = Array<{ id: string; path: string; component: ReactNode }>;

const MemberRouts: obj = [
  { id: `${Math.random()}`, path: "cart", component: <CartPage /> },
  { id: `${Math.random()}`, path: "order", component: <OrderPage /> },
  { id: `${Math.random()}`, path: "profile", component: <ProfilePage /> },
];

export default MemberRouts;
