import { useState } from "react";
import { SendHorizontal } from "lucide-react";
import SimpleDarkButton from "./SimpleDarkButton";
export default function CommentBox() {
  const [comment, setComment] = useState("");

  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-4 mb-5">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <img
          src="https://i.pravatar.cc/40"
          alt="user avatar"
          className="h-10 w-10 rounded-full object-cover"
        />

        {/* Input */}
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add your comment..."
          className="w-full pl-8 pr-4 py-2 bg-gray-50 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
        />
      </div>

      {/* Button */}
      <div className="mt-3 flex justify-end">
        <SimpleDarkButton
          text="Send"
          icon={<SendHorizontal className="w-4 " />}
        />
      </div>
    </div>
  );
}
