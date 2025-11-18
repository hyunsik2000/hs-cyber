import { Outlet } from "react-router";
import Header from "./Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="outlet-content">
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
