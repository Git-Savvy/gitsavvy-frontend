import { TrendingUp } from "lucide-react";
import { TrendingDown } from "lucide-react";
export default function StatsCard({ stat }) {
  return (
    <div className="w-full bg-white p-5 rounded-2xl border-2 border-gray-200 lg:shadow-sm flex flex-col gap-3">
      <div className="flex flex-col md:flex-row items-center gap-3 mb-5">
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
      <div className="text-[10px] font-bold  flex items-center justify-center md:justify-start gap-1">
        {/*change color and icon depends on growth */}
        {stat.growth.includes("+") ? (
          <>
            <TrendingUp className="hidden md:flex w-3 h-3 text-emerald-500" />
            <p className="text-emerald-500">{stat.growth} this month</p>
          </>
        ) : (
          <>
            <TrendingDown className="hidden md:flex w-3 h-3 text-red-500" />
            <p className="text-red-500">{stat.growth} this month</p>
          </>
        )}
      </div>
    </div>
  );
}
