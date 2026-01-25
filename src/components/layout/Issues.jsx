import React from "react";
import SearchSquare from "../common/SearchSquare";
import IssueCard from "../common/IssueCard";
import FilterPop from "../common/FilterPop";
import { useContext } from "react";
import { IssueContext } from "../../context/IssueContext";
import NoDataMessage from "../messages/NoDataMessage";
export default function Issues({ repoId }) {
  const { issues } = useContext(IssueContext);
  // 1. Filter the list first
  const filteredIssues = issues?.filter(
    (item) => item.repositoryId === parseInt(repoId),
  );
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
        <div className="bg-white border-2 border-Gray200 rounded-xl p-6 lg:shadow-sm ">
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
                    ? "bg-background border-textdark text-textdark"
                    : "bg-background border-Gray200 text-Gray600 hover:border-Gray400"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        {/* 2. Individual Issue Cards */}

        {filteredIssues.length > 0 ? (
          filteredIssues.map((item) => (
            <IssueCard key={item.issueId} issue={item} />
          ))
        ) : (
          <NoDataMessage
            text="No issues found for this repository."
            containerStyle="flex-1 bg-white border-2 border-Gray200 rounded-2xl p-10 shadow-sm"
          />
        )}
      </div>
    </div>
  );
}
