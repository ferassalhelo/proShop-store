import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import AdminRouts from "./AdminRouts/AdminRouts";
import MemberRouts from "./MemberRouts/MemberRouts";
import PublicRouts from "./PublicRouts/PublicRouts";

export default function Root() {
  const authData = useSelector((state: any) => state.auth.data);
  return (
    <Routes>
      {PublicRouts.map((item) => (
        <Route key={item.id} path={item.path} element={item.component} />
      ))}
      {MemberRouts.map((item) => (
        <Route
          key={item.id}
          path={item.path}
          element={authData._id ? item.component : <Navigate to="../login" />}
        />
      ))}
      {AdminRouts.map((item) => (
        <Route
          key={item.id}
          path={item.path}
          element={
            authData._id & authData.isAdmin ? (
              item.component
            ) : (
              <Navigate to="/" />
            )
          }
        />
      ))}
    </Routes>
  );
}
