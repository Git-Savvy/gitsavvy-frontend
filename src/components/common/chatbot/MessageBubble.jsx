export default function MessageBubble({ message }) {
  const OuterDivStyle = {
    user: "justify-end items-end",
    bot: "justify-start items-start",
  };

  const InnerDivStyle = {
    user: "border-2 border-Gray400 rounded-tr-none",
    bot: "border border-Gray200 rounded-tl-none",
  };

  return (
    <div className={`flex flex-col w-full ${OuterDivStyle[message.sender]}`}>
      <div
        className={`bg-background p-4 rounded-2xl text-text-secondary text-[15px] max-w-[85%] leading-relaxed 
        ${InnerDivStyle[message.sender]}`}
      >
        {message.text}
      </div>
    </div>
  );
}
