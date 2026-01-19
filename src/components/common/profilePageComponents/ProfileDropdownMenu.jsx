import { User, LogOut, Trophy } from "lucide-react";

export default function ProfileDropdownMenu({ name, handle, level, points }) {
  return (
    <div className="w-64 bg-white rounded-2xl shadow-2xl border-2 border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-50">
        <p className="font-bold text-gray-900 text-lg">{name}</p>
        <p className="text-gray-400 text-sm mb-2">@{handle}</p>
        <div className="flex items-center gap-1.5 text-xs font-bold text-gray-600">
          <Trophy className="w-3.5 h-3.5 text-cyan-400" />
          <span>Level {level}</span>
          <span className="text-gray-300 mx-0.5">•</span>
          <span>{points} points</span>
        </div>
      </div>
      <div className="p-2">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 rounded-xl transition-colors">
          <User className="w-5 h-5 text-gray-400" />
          <span className="font-semibold text-gray-800">
            Profile & Preferences
          </span>
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-red-50 rounded-xl transition-colors mt-1 group">
          <LogOut className="w-5 h-5 text-gray-400 group-hover:text-red-500" />
          <span className="font-semibold text-red-500">Sign Out</span>
        </button>
      </div>
    </div>
  );
}
