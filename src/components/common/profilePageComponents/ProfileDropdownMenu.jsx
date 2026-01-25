import { User, LogOut, Trophy } from "lucide-react";

export default function ProfileDropdownMenu({ name, handle, level, points }) {
  return (
    <div className="w-64 bg-white rounded-2xl shadow-2xl border-2 border-Gray200 overflow-hidden">
      <div className="p-4 border-b border-gray-50">
        <p className="font-bold text-text-secondary text-lg">{name}</p>
        <p className="text-Gray400 text-sm mb-2">@{handle}</p>
        <div className="flex items-center gap-1.5 text-xs font-bold text-Gray600">
          <Trophy className="w-3.5 h-3.5 text-Cyan400" />
          <span>Level {level}</span>
          <span className="text-Gray200 mx-0.5">•</span>
          <span>{points} points</span>
        </div>
      </div>
      <div className="p-2">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-hoverl rounded-xl transition-colors group">
          <User className="w-5 h-5 text-Gray400  group-hover:text-text-secondary" />
          <span className="font-semibold text-Gray600">
            Profile & Preferences
          </span>
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-red-700/15 rounded-xl transition-colors mt-1 group">
          <LogOut className="w-5 h-5 text-Gray400 group-hover:text-red-500" />
          <span className="font-semibold text-red-500">Sign Out</span>
        </button>
      </div>
    </div>
  );
}
