export default function MyWorkNav({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "current", label: "CURRENT WORK" },
    { id: "completed", label: "COMPLETED" },
  ];

  return (
    <div className="flex  flex-col md:flex-row gap-2 lg:gap-8 justify-around border-2 border-gray-200 bg-switchbg rounded-2xl md:rounded-full p-1  w-full md:w-fit lg:shadow-sm">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`py-2 px-2 md:px-6  ${
            activeTab === tab.id
              ? "bg-white rounded-full font-semibold border-2 border-gray-200 lg:shadow-sm"
              : "text-textdark"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
