import { useState } from "react";
import { MessageSquare, X, Send, Sparkles } from "lucide-react";

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end font-sans">
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
            <div className="flex flex-col items-start max-w-[85%]">
              <div className=" bg-background border border-Gray200 p-4 rounded-2xl rounded-tl-none text-text-secondary text-[15px] leading-relaxed">
                Hello! I'm your AI assistant for cloud-infrastructure. I can
                help you understand the codebase, explain functions, navigate
                the repository structure, and answer technical questions. How
                can I assist you today?
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-400">
            <div className="flex items-center gap-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Ask me anything..."
                  className="w-full bg-background border border-gray-400 rounded-xl py-3 px-4 text-sm text-Gray600 placeholder:text-Slate400 focus:ring-2 focus:ring-indigo-500/50 outline-none"
                />
              </div>
              <button className="bg-Cyan400 p-3 rounded-xl text-NavText1 hover:bg-Cyan400/80 transition-all shadow-md active:scale-95">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
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
