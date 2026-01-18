export default function SimpleLightButton({ text, icon }) {
  return (
    <button className="justify-center items-center border px-4 py-2 rounded-xl   text-sm flex items-center gap-2 border-gray-400  hover:bg-hoverl max-h-[45px]">
      {icon != null ? icon : ""}
      <p className="text-md">{text}</p>
    </button>
  );
}
