export default function SimpleDarkButton({
  text,
  icon,
  onClick,
  isPending = false,
}) {
  return (
    <button
      disabled={isPending}
      onClick={onClick}
      className="flex justify-center gap-2 items-center font-semibold bg-primary text-NavText1 hover:bg-hoverd  hover:outline-primary hover:outline-1  px-5 py-2 rounded-xl text-sm lg:text-base "
    >
      {icon != null ? icon : ""} {text}
    </button>
  );
}
