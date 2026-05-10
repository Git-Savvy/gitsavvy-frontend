import { CheckCircle2, Clock } from "lucide-react";
import { timeAgo } from "../../../utils/timeAgo";
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
    <div className=" mx-auto bg-white border border-Gray200 rounded-2xl p-6 shadow-sm font-sans mb-7">
      {/* Top Row: Icon, Title, and Badge */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-6">
        <div className="flex gap-4">
          <div className="bg-Purple400/20 p-3 rounded-xl w-fit h-fit">
            <CheckCircle2 className="w-6 h-6 text-Purple400" />
          </div>
          <div className="pt-1">
            <h3 className="text-2xl font-semibold text-text-secondary leading-none mb-2">
              {title}
            </h3>
            <p className="text-Gray400 text-base">{repo}</p>
          </div>
        </div>
        <span className="bg-Teal400 text-NavText1 px-3 py-1 rounded-2xl text-base font-medium mt-5 md:mt-0">
          {status}
        </span>
      </div>

      {/* Bottom Metadata Row */}
      <div className="flex flex-col md:flex-row md:items-center gap-6 text-base">
        {/* Date */}
        <div className="flex items-center gap-1.5 text-Gray400">
          <Clock className="w-4 h-4" />
          <span>closed {timeAgo(date)}</span>
        </div>

        {/* Language Tag */}
        {language && (
          <div className="bg-background border border-Gray200 px-3 py-0.5 rounded-full text-text-secondary w-fit">
            {language}
          </div>
        )}

        {/* Points */}
        <div className="text-emerald-500 font-medium">+{points} points</div>

        {/* Diff Stats  future work */}
        {/* <div className="flex gap-2 font-medium">
          <span className="text-emerald-500">+{additions}</span>
          <span className="text-red-500">-{deletions}</span>
        </div> */}
      </div>
    </div>
  );
}
