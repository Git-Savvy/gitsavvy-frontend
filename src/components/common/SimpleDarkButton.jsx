export default function SimpleDarkButton({ text, icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex justify-center gap-2 items-center bg-primary text-white hover:bg-hoverd  px-4 py-2 rounded-xl text-sm"
    >
      {icon != null ? icon : ""} {text}
    </button>
  );
}
