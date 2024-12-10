import { Footer, Header, Navbar } from "@/components";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}