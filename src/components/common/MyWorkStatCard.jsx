export default function MyWorkStatCard({ stat }) {
  return (
    <div className="bg-white p-5 rounded-2xl border-2 border-gray-200  flex itemms-center lg:shadow-sm flex  gap-8 w-full">
      {" "}
      <div className={`${stat.color} p-2 rounded-xl w-[40px] h-[40px]`}>
        {stat.icon}
      </div>
      <div>
        <h3>{stat.title}</h3> <span>3</span>
      </div>
      {/*i need here to update to dynamic num */}
    </div>
  );
}
