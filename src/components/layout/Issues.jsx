import React from "react";
import SearchSquare from "../common/SearchSquare";
import IssueCard from "../common/issues/IssueCard";
import FilterPop from "../common/issues/FilterPop";
import NoDataMessage from "../messages/NoDataMessage";
import SkeletonCard from "../messages/SkeletonCard";
import ErrorMessage from "../messages/ErrorMessage";
import IssuesList from "../common/issues/IssuesList";
export default function Issues() {
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
        <IssuesList />
      </div>
    </div>
  );
}
