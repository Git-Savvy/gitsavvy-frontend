export default function SimpleLightButton({ text, icon,onClick }) {
  return (
    <button className="justify-center items-center border-1 px-5 py-2 rounded-xl  font-semibold text-sm flex items-center gap-2 border-primary text-primary bg-background hover:outline-1 hover:bg-hoverl max-h-[45px] lg:text-base" onClick={onClick}>
      {icon != null ? icon : ""}
      <p className="text-md">{text}</p>
    </button>
  );
}
