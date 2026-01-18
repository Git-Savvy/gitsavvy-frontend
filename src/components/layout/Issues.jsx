import React from "react";
import { ListFilter, MessageSquare, Clock, AlertCircle } from "lucide-react";
import SearchSquare from "../common/SearchSquare";
import IssueCard from "../common/IssueCard";
import FilterPop from "../common/FilterPop";
const Issues = () => {
  const issues = [
    {
      id: 1,
      title: "Add dark mode support",
      description:
        " Implement dark mode theme switching with system preferencedetection. This should include proper color scheme managementand localStorage persistence.",
      tags: [" Easy", "enhancement", " good first issue"],
    },
    {
      id: 2,
      title: "Add dark mode support",
      description:
        " Implement dark mode theme switching with system preferencedetection. This should include proper color scheme managementand localStorage persistence.",
      tags: [" Easy", "enhancement", " good first issue"],
    },
    {
      id: 3,
      title: "Add dark mode support",
      description:
        " Implement dark mode theme switching with system preferencedetection. This should include proper color scheme managementand localStorage persistence.",
      tags: [" Easy", "enhancement", " good first issue"],
    },
  ]; // Mock data for the cards

  const issuesLable = [
    "All Issues",
    "Good First Issue",
    "Help Wanted",
    "Bug",
    "Enhancement",
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <div className=" space-y-4">
        {/* 1. Search and Filter Header Card */}
        <div className="bg-white border-2 border-gray-200 rounded-xl p-6 lg:shadow-sm ">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <SearchSquare text="Search issues..." />
            <FilterPop/>
          </div>

          <div className="flex flex-wrap gap-2">
            {issuesLable.map((tag, idx) => (
              <button
                key={tag}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
                  idx === 0
                    ? "bg-white border-gray-300 text-slate-800"
                    : "bg-white border-gray-200 text-slate-500 hover:border-gray-300"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Individual Issue Cards */}
        {issues.map((item) => (
          <IssueCard
            key={item.id}
            title={item.title}
            description={item.description}
            tags={item.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Issues;
