import { GitBranch, Clock, Code2 } from "lucide-react";

export default function MyWorkCurrentCard({
  title,
  repo,
  description,
  updatedDays,
  language,
  branch,
  progress,
  status,
}) {
  return (
    <div className=" mx-auto bg-white p-6 border-2 border-gray-200 rounded-xl  lg:shadow-sm ">
      {/* Top Row: Icon, Title, and Badge */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-4">
        <div className="flex gap-4">
          <div className="bg-slate-100 p-3 rounded-xl w-fit h-fit">
            <GitBranch className="w-6 h-6 text-indigo-900" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <p className="text-gray-500 text-sm">{repo}</p>
          </div>
        </div>
        <span className="bg-cyan-400 text-white px-3 py-1 rounded-full text-xs font-medium my-5 md:my-0">
          {status}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-6 ml-[60px]">{description}</p>

      {/* Metadata Row */}
      <div className="flex flex-col md:flex-row md:items-center gap-6 ml-[60px] text-gray-500 text-sm mb-8">
        <div className="flex items-center gap-1.5">
          <Clock className="w-4 h-4" />
          <span>Updated {updatedDays} ago</span>
        </div>

        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-3 py-0.5 rounded-full w-fit">
          <span className="text-gray-700">{language}</span>
        </div>

        <div className="flex items-center gap-1.5">
          <GitBranch className="w-4 h-4 rotate-90" />
          <span>{branch}</span>
        </div>
      </div>

      {/* Progress Bar Section */}
      <div className="space-y-2">
        <div className="flex justify-between items-end">
          <span className="text-sm font-medium text-gray-700">Progress</span>
          <span className="text-sm font-semibold text-indigo-900">
            {progress}%
          </span>
        </div>
        <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
          <div
            className="bg-cyan-400 h-full rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
