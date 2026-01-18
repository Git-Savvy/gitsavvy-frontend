import { GitBranch, Clock } from "lucide-react";
export default function ({ onNext }) {
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden">
      <div className="p-4 bg-white border-b border-gray-100 flex justify-between items-center">
        <span className="font-bold text-gray-700">Commit Activity</span>
        <span className="bg-gray-100 px-3 py-1 rounded-lg text-xs font-bold text-gray-500">
          3 commits
        </span>
      </div>
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="p-4 flex items-center justify-between border-b border-gray-50 last:border-0"
        >
          <div className="flex items-center gap-3 text-gray-500">
            <GitBranch size={16} />
            <span className="text-sm">Commit #{i}: Updated files</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-400 text-xs">
            <Clock size={14} /> <span>Just now</span>
          </div>
        </div>
      ))}
      <button
        onClick={onNext}
        className="w-full bg-primary text-white hover:bg-hoverd py-4 font-bold text-lg mt-4 rounded-xl"
      >
        Continue to Pull Request
      </button>
    </div>
  );
}
