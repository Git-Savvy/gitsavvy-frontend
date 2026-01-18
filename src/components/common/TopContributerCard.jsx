export default function TopContributerCard({ contributors }) {
  return (
    <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 lg:shadow-sm">
      <h3 className="text-sm font-bold text-slate-800 mb-6">
        Top Contributors
      </h3>
      <div className="space-y-4 lg:space-y-10 ">
        {contributors.map((person, i) => (
          <div key={i} className="flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-slate-300 w-4">
                {i + 1}
              </span>
              <img
                src={person.img}
                className="w-10 h-10 rounded-full object-cover"
                alt=""
              />
              <div>
                <div className="text-sm font-bold text-slate-700">
                  {person.name}
                </div>
                <div className="text-[10px] text-slate-400">
                  {person.commits} commits · {person.prs} PRs
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-3 py-1 rounded-lg text-xs font-bold text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
              {person.commits}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
