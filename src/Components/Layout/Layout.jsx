import { Outlet } from "react-router-dom";
import Navbar from "../UI/Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
