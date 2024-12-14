import { Footer, Header, Navbar } from "@/components";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}