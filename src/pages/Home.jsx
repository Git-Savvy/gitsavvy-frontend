import Navbar from "../components/layout/Navbar";
import { Outlet } from "react-router-dom";
export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar />
      {/* dynamic content goes here */}
      <Outlet />
    </div>
  );
}
