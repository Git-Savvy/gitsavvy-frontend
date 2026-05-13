export default function SimpleLightButton({
  text,
  icon,
  onClick,
  disabled = false,
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`justify-center items-center border px-5 py-2 rounded-xl
        font-semibold text-sm flex gap-2 max-h-[45px] lg:text-base border-primary text-primary bg-background
        ${
          disabled
            ? "cursor-not-allowed opacity-50"
            : " hover:outline-1 hover:bg-hoverl"
        }`}
    >
      {icon != null && icon}
      <p className="text-md">{text}</p>
    </button>
  );
}