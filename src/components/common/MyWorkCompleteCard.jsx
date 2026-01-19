import { CheckCircle2, Clock } from "lucide-react";

export default function MyWorkCompleteCard({
  title,
  repo,
  date,
  language,
  points,
  additions,
  deletions,
  status,
}) {
  return (
    <div className=" mx-auto bg-white border border-gray-200 rounded-2xl p-6 shadow-sm font-sans">
      {/* Top Row: Icon, Title, and Badge */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex gap-4">
          <div className="bg-purple-50 p-3 rounded-xl">
            <CheckCircle2 className="w-6 h-6 text-purple-600" />
          </div>
          <div className="pt-1">
            <h3 className="text-lg font-semibold text-gray-900 leading-none mb-2">
              {title}
            </h3>
            <p className="text-gray-500 text-sm">{repo}</p>
          </div>
        </div>
        <span className="bg-emerald-500 text-white px-3 py-1 rounded-lg text-xs font-medium">
          {status}
        </span>
      </div>

      {/* Bottom Metadata Row */}
      <div className="flex items-center gap-6 text-sm">
        {/* Date */}
        <div className="flex items-center gap-1.5 text-gray-500">
          <Clock className="w-4 h-4" />
          <span>{date}</span>
        </div>

        {/* Language Tag */}
        <div className="bg-white border border-gray-200 px-3 py-0.5 rounded-full text-gray-700">
          {language}
        </div>

        {/* Points */}
        <div className="text-emerald-500 font-medium">+{points} points</div>

        {/* Diff Stats */}
        <div className="flex gap-2 font-medium">
          <span className="text-emerald-500">+{additions}</span>
          <span className="text-red-500">-{deletions}</span>
        </div>
      </div>
    </div>
  );
}
