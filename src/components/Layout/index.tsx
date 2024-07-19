import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="mt-4 px-4 md:px-8">
        <Outlet />
      </main>
    </>
  );
}
