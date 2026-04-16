import { useState, useEffect, useRef } from "react";
import FloatingChatbot from "../components/common/chatbot/FloatingChatbot";
import { Outlet } from "react-router-dom";

export default function LayoutChatbot() {
  // 1. Restored your original initial state
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: `Hello! I'm your AI assistant for cloud-infrastructure. I can help you understand the codebase, explain functions, navigate the repository structure, and answer technical questions. How can I assist you today?`,
      sender: "bot",
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);
  const socket = useRef(null); //useRef → store something that doesn’t reset (WebSocket connection)
  //It keeps value between renders. Doesn’t cause re-render when changed

  // 2. A reusable function to handle incoming messages
  const handleSocketMessage = (event) => {
    const response = JSON.parse(event.data);

    if (response.type === "token") {
      setIsTyping(false);
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.sender === "bot" && last.isStreaming) {
          return [
            ...prev.slice(0, -1),
            { ...last, text: last.text + response.data },
          ];
        }
        return [
          ...prev,
          {
            id: Date.now(),
            text: response.data,
            sender: "bot",
            isStreaming: true,
          },
        ];
      });
    }

    if (response.type === "done") {
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        return [...prev.slice(0, -1), { ...last, isStreaming: false }];
      });
    }
  };

  // 3. Initialize connection on mount
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8000/chatbot/ws");
    ws.onmessage = handleSocketMessage;
    ws.onclose = () => console.log("WS Disconnected");
    socket.current = ws;

    return () => socket.current?.close();//Prevent memory leaks
  }, []);

  // 4. Send Logic (Reconnects if the first session ended)
  const sendMessage = (text) => {
    const userMessage = { id: Date.now(), text, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    const requestBody = {
      repo_id: 1,
      query: text,
    };

    if (socket.current?.readyState === WebSocket.OPEN) {
      socket.current.send(JSON.stringify(requestBody));
    } else {
      console.log("Socket closed. Opening new connection for this request...");
      const ws = new WebSocket("ws://localhost:8000/chatbot/ws");

      ws.onmessage = handleSocketMessage; // Attach the listener to the new socket

      ws.onopen = () => {
        console.log("New connection established. Sending query...");
        ws.send(JSON.stringify(requestBody));
      };

      ws.onclose = () => console.log("WS Disconnected");
      socket.current = ws;
    }
  };

  return (
    <>
      <Outlet />
      <FloatingChatbot
        messages={messages}
        onSend={sendMessage}
        isTyping={isTyping}
      />
    </>
  );
}
