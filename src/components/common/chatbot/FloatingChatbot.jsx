import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Sparkles } from "lucide-react";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";

const FloatingChatbot = ({ messages, onSend }) => {
  const [isOpen, setIsOpen] = useState(false);

  //helper for scroll functionality
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);


  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end font-sans max-h-[90%]">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[400px] h-[600px] bg-background rounded-2xl shadow-2xl border-2 border-gray-400 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="p-4 border-b border-gray-400 flex justify-between items-center bg-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-Cyan400 rounded-xl flex items-center justify-center text-NavText1 shadow-sm">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-text-secondary text-base">
                  AI Assistant
                </h3>
                <p className="text-sm text-Gray600">Always here to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-Slate400 hover:text-Gray600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 bg-white overflow-y-auto space-y-4">
            {/* AI Welcome Message */}
            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}

            <div ref={bottomRef} />
          </div>

          {/* Input Area */}
         <ChatInput onSend={onSend}/>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          isOpen
            ? "bg-white text-slate-500 border border-gray-400 rotate-90"
            : "bg-NavBorder text-NavText1 hover:scale-110"
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageSquare className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};

export default FloatingChatbot;
