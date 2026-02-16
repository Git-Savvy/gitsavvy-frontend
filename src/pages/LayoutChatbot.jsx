import { useState } from "react";
import FloatingChatbot from "../components/common/chatbot/FloatingChatbot";
import { Outlet } from "react-router-dom";
export default function LayoutChatbot() {
   const [messages, setMessages] = useState([
    { id: 1, text: `   Hello! I'm your AI assistant for cloud-infrastructure. I can
                help you understand the codebase, explain functions, navigate
                the repository structure, and answer technical questions. How
                can I assist you today?`, sender: "bot" }
  ]);

  const sendMessage = async (text) => {
    const newMessage = {
      id: Date.now(),
      text,
      sender: "user"
    };

    setMessages((prev) => [...prev, newMessage]);

     // Fake bot reply (replace with API call)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), text: "I received: " + text, sender: "bot" }
      ]);
    }, 1000);
  };

  return (
    <>
      {/*this just a layout element to manage chatbot mounting*/}
      <Outlet />
      <FloatingChatbot messages={messages} onSend={sendMessage} />
    </>
  );
}
