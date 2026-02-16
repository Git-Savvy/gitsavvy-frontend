import { Send } from "lucide-react";
import { useState } from "react";
export default function ChatInput({ onSend }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(); // stop page refresh
        handleSend(); // call your function
      }}
      className="p-4 bg-white border-t border-gray-400"
    >
      <div className="flex items-center gap-2">
        <div className="flex-1 relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            className="w-full bg-background border border-gray-400 rounded-xl py-3 px-4 text-sm text-Gray600 placeholder:text-Slate400 focus:ring-2 focus:ring-indigo-500/50 outline-none"
          />
        </div>

        <button
          type="submit"
          className="bg-Cyan400 p-3 rounded-xl text-NavText1 hover:bg-Cyan400/80 transition-all shadow-md active:scale-95"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}
