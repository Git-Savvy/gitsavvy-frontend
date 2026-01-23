const colorMap = {
  0: {
    border: "border-gray-400",
    bg: "bg-gray-50",
  },
  1: {
    border: "border-sky-400",
    bg: "bg-sky-50",
  },
  2: {
    border: "border-purple-400",
    bg: "bg-purple-50",
  },
};
export default function Budge({ title, level, img, num }) {
  const styles = colorMap[num % 3];

  return (
    <div
      className={`border-2 rounded-xl p-2 mb-2 flex flex-col md:flex-row gap-2 
        ${styles.border} ${styles.bg}`}
    >
      <div className="w-12 h-12 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full">
        <img src={img} alt={title} className="w-6 h-6" />
      </div>

      <div>
        <p className="font-medium text-lg text-gray-600">{title}</p>
        <p className="text-sm text-gray-500">{level}</p>
      </div>
    </div>
  );
}
