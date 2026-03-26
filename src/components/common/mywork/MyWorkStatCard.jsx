export default function MyWorkStatCard({ stat }) {
  return (
    <div className="bg-white p-5 rounded-2xl border-2 border-gray-200  flex itemms-center lg:shadow-sm flex  gap-7 w-full">
      {" "}
      <div className={`border-2 ${stat.color} p-2 rounded-xl w-[40px] h-[40px] flex items-center`}>
        {stat.icon}
      </div>
      <div className="flex md:flex-col  text-lg font-semibold  gap-2">
        <h3>{stat.title}</h3> <span>{stat.value}</span>
      </div>
    </div>
  );
}
