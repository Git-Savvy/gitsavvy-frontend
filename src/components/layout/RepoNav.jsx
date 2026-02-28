export default function RepoNav({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "readme", label: "README" },
    { id: "docs", label: "DOCS" },
    { id: "issues", label: "ISSUES" },
    { id: "metrics", label: "METRICE" },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-2 lg:gap-8 justify-around border-2 border-NavBorder bg-Nav  rounded-2xl md:rounded-full p-1  md:w-fit lg:shadow-sm">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`py-2 px-2 md:px-6  ${
            activeTab === tab.id
              ? "bg-NavSelected text-NavText2 rounded-full font-semibold border-2 border-NavBorder lg:shadow-sm"
              : "text-NavText1  font-semibold"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
