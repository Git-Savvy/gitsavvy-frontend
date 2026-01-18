import { Link } from "react-router-dom";
export default function RepoNav({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "readme", label: "README" },
    { id: "docs", label: "DOCS" },
    { id: "issues", label: "ISSUES" },
    { id: "metrics", label: "METRICE" },
  ];

  return (
    <div className="flex  flex-col md:flex-row gap-2 lg:gap-8 justify-around  bg-switchbg rounded-2xl md:rounded-full p-1  w-full md:w-fit">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`py-2 px-2 md:px-6 ${
            activeTab === tab.id
              ? "bg-white rounded-full font-semibold"
              : "text-textdark"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
