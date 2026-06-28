import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
      <Header />
      <main className="py-4 sm:py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
