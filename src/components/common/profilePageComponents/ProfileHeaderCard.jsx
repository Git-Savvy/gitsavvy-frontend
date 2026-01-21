import { Trophy, Star, Github, Check } from "lucide-react";

export default function ProfileHeaderCard({
  avatar,
  name,
  handle,
  level,
  points,
  githubUser,
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <h2 className="text-gray-900 font-semibold mb-6">Account Information</h2>
      <div className="flex items-center gap-5 mb-8">
        <img
          src={avatar}
          className="w-20 h-20 rounded-full border-2 border-white shadow-sm"
          alt="Avatar"
        />
        <div>
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          <p className="text-gray-500 mb-2">@{handle}</p>
          <div className="flex gap-2">
            <span className="bg-cyan-400 text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
              <Trophy className="w-3 h-3" /> Level {level}
            </span>
            <span className="border border-gray-200 text-gray-700 text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
              <Star className="w-3 h-3" /> {points} points
            </span>
          </div>
        </div>
      </div>
      <div className="bg-emerald-50/50 border border-emerald-200 rounded-xl p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Github className="w-5 h-5 text-emerald-600" />
          <div>
            <p className="text-sm font-semibold text-gray-900">
              GitHub Connected
            </p>
            <p className="text-xs text-gray-500">
              Authenticated as @{githubUser}
            </p>
          </div>
        </div>
        <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-1">
          <Check className="w-3 h-3" /> CONNECTED
        </span>
      </div>
    </div>
  );
}
