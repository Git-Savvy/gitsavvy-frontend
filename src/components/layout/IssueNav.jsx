export default function IssueNav({ activeTab, setActiveTab, num }) {
  const tabs = [
    { id: "description", label: "DESCRIPTION" },
    { id: "comments", label: `COMMENTS (${num})` },
  ];
  return (
    <div className="flex  flex-col md:flex-row gap-2 lg:gap-8 justify-around border-2 border-NavBorder bg-Nav rounded-2xl md:rounded-full p-1  w-full md:w-fit">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`py-2 px-2 md:px-6 ${
            activeTab === tab.id
              ? "bg-NavSelected text-NavText2 rounded-full font-semibold border-2 border-NavBorde lg:shadow-sm"
              : "text-NavText1  font-semibold"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
