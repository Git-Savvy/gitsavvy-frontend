import FloatingChatbot from "../components/common/FloatingChatbot";
import { Outlet } from "react-router-dom";
export default function LayoutChatbot() {
  return (
    <>
      {/*this just a layout element to manage chatbot mounting*/}
      <Outlet />
      <FloatingChatbot />
    </>
  );
}
