export default function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-4 py-2 rounded-2xl w-fit max-w-[70%]">
      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:150ms]"></div>
      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:300ms]"></div>
    </div>
  );
}
