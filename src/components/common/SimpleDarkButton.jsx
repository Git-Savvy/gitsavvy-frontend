export default function SimpleDarkButton({
  text,
  icon,
  onClick,
  isPending = false,
  disabled = false,
}) {
  const isButtonDisabled = isPending || disabled;

  return (
    <button
      disabled={isButtonDisabled}
      onClick={onClick}
      className={`flex justify-center gap-2 items-center font-semibold
        px-5 py-2 rounded-xl text-sm lg:text-base text-NavText1 bg-primary
        ${
          isButtonDisabled
            ? "cursor-not-allowed opacity-50"
            : " hover:bg-hoverd hover:outline-primary hover:outline-1"
        }`}
    >
      {icon != null && icon}
      {text}
    </button>
  );
}
