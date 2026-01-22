import React from "react";
import SearchSquare from "../common/SearchSquare";
import IssueCard from "../common/IssueCard";
import FilterPop from "../common/FilterPop";
import { useContext } from "react";
import { IssueContext } from "../../context/IssueContext";
export default function Issues({ repoId }) {
  const { issues } = useContext(IssueContext);
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
            <FilterPop />
          </div>
          {/**general lables that appear under search bar */}
          <div className="flex flex-wrap gap-2">
            {issuesLable.map((label, idx) => (
              <button
                key={label}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
                  idx === 0
                    ? "bg-white border-gray-300 text-slate-800"
                    : "bg-white border-gray-200 text-slate-500 hover:border-gray-300"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Individual Issue Cards */}
        {issues
          .filter((item) => item.repositoryId === parseInt(repoId))
          .map((item) => (
            <IssueCard key={item.issueId} issue={item} />
          ))}
      </div>
    </div>
  );
}
