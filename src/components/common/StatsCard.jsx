import { TrendingUp } from "lucide-react";

export default function StatsCard({ stat }) {
  return (
    <div className="bg-white p-5 rounded-2xl border-2 border-gray-200 lg:shadow-sm flex flex-col gap-3">
      <div className="flex flex-col lg:flex-row items-center gap-3 mb-5">
        <div className={`${stat.color} p-2 rounded-xl`}>{stat.icon}</div>
        <div>
          <div className="lg:text-2xl font-bold text-slate-800">
            {stat.value}
          </div>
          <div className="text-xs text-slate-400 font-medium ">
            {stat.label}
          </div>
        </div>
      </div>
      <div className="text-[10px] font-bold text-emerald-500 flex flex-col lg:flex-row items-center gap-1">
        <TrendingUp className="w-3 h-3" /> {stat.growth} this month
      </div>
    </div>
  );
}
