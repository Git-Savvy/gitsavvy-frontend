import { TrendingUp, TrendingDown } from "lucide-react";
export default function StatsCard({ stat }) {
  return (
    <div className="w-full bg-white p-5 rounded-2xl border-2 border-Gray200 lg:shadow-sm flex flex-col gap-3">
      <div className="flex flex-col md:flex-row items-center gap-3 mb-5">
        <div className={`${stat.color} border-2 p-2 rounded-xl`}>
          {stat.icon}
        </div>
        <div>
          <div className="lg:text-2xl font-bold text-textdark">
            {stat.value}
          </div>
        </div>
      </div>
      <div className="text-2xs text-Gray400 font-medium lg:text-xl lg:text-center">{stat.label}</div>
      {/*change color and icon depends on growth <<future work>> */}
      {/* <div className="text-2xs font-bold  flex items-center justify-center md:justify-start gap-1">
        
        {stat.growth>0 ? (
          <>
            <TrendingUp className="hidden md:flex w-5 h-5 text-emerald-500" />
            <p className="text-emerald-500">{stat.growth} this month</p>
          </>
        ) : (
          <>
            <TrendingDown className="hidden md:flex w-5 h-5 text-red-500" />
            <p className="text-red-500">{stat.growth} this month</p>
          </>
        )}
      </div> */}
    </div>
  );
}
