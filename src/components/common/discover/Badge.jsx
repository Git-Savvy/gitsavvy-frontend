const colorMap = {
  0: {
    border: "border-Gray500",
    bg: "bg-background",
  },
  1: {
    border: "border-Teal400",
    bg: "bg-Cyan50",
  },
  2: {
    border: "border-Purple400",
    bg: "bg-Purple50",
  },
};
export default function Budge({ title, level, img, num }) {
  const styles = colorMap[num % 3];

  return (
    <div
      className={`border-2 rounded-xl p-2 mb-2 flex flex-col md:flex-row gap-2 
        ${styles.border} ${styles.bg}`}
    >
      <div className={`w-12 h-12 flex items-center justify-center bg-background border-2  ${styles.border}  rounded-full`}>
        <img src={img} alt={title} className="w-6 h-6" />
      </div>

      <div>
        <p className="font-medium text-lg text-Gray600">{title}</p>
        <p className="text-sm text-Gray600">{level}</p>
      </div>
    </div>
  );
}
