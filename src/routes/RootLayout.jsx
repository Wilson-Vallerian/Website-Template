import Header from "../components/Header.jsx";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </>
  );
}
