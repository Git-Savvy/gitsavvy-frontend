export default function MessageBubble({ message }) {
  const OuterDivStyle = {
    user: "justify-end items-end",
    bot: "justify-start items-start",
  };

  const InnerDivStyle = {
    user: " border-Cyan400 rounded-tr-none bg-Cyan50",
    bot: " border-Gray300 rounded-tl-none bg-background",
  };

  return (
    <div className={`flex flex-col w-full ${OuterDivStyle[message.sender]}`}>
      <div
        className={`p-4 border rounded-2xl text-text-secondary text-[15px] max-w-[85%] leading-relaxed 
       whitespace-pre-line break-words h-fit w-fit ${InnerDivStyle[message.sender]}`}
      >
        {message.text}
      </div>
    </div>
  );
}
