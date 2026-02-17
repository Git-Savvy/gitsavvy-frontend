import { useState } from "react";
import FloatingChatbot from "../components/common/chatbot/FloatingChatbot";
import { Outlet } from "react-router-dom";
export default function LayoutChatbot() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: `   Hello! I'm your AI assistant for cloud-infrastructure. I can
                help you understand the codebase, explain functions, navigate
                the repository structure, and answer technical questions. How
                can I assist you today?`,
      sender: "bot",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = async (text) => {
    const userMessage = {
      id: Date.now(),
      text,
      sender: "user",
    };
   
    setMessages((prev) => [...prev, userMessage]);

    // show typing while waiting first chunk
    setIsTyping(true);
    //to ensure no duplicate id if generating was fast (in same milisecond)
    const botId = userMessage.id + 1;

    // create empty bot message
    setMessages((prev) => [...prev, { id: botId, text: "", sender: "bot" }]);

    const fakeResponse = "This is a streamed response.";

    let index = 0;

    const interval = setInterval(() => {
      index++;

      // when first character arrives → stop typing indicator
      if (index === 1) {
        setIsTyping(false);
      }

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === botId
            ? { ...msg, text: fakeResponse.slice(0, index) }
            : msg,
        ),
      );

      if (index === fakeResponse.length) {
        clearInterval(interval);
      }
    }, 40);
  };

  return (
    <>
      {/*this just a layout element to manage chatbot mounting*/}
      <Outlet />
      <FloatingChatbot
        messages={messages}
        onSend={sendMessage}
        isTyping={isTyping}
      />
    </>
  );
}
