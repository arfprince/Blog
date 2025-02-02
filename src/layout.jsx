import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
