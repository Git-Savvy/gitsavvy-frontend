import React from "react";
import { useState } from "react";
import SearchSquare from "../common/SearchSquare";
import FilterPop from "../common/issues/FilterPop";
import IssuesList from "../common/issues/IssuesList";
export default function Issues() {
  const issuesLable = [
    "All Issues",
    "Good First Issue",
    "Help Wanted",
    "Bug",
    "Enhancement",
    "Question",
    "Investigate"
  ];

  const [search, setSearch] = useState("");

  const [selectedLabels, setSelectedLabels] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("");
  function handleBtnClick(label) {
    if (label === "All Issues") {setSelectedLabels([]);setSelectedStatus("")}
    else {
      setSelectedLabels((prev) =>
        prev.includes(label)
          ? prev.filter((l) => l !== label)
          : [...prev, label],
      );
    }
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      <div className=" space-y-4">
        {/* 1. Search and Filter Header Card */}
        <div className="bg-white border-2 border-Gray200 rounded-xl p-6 lg:shadow-sm ">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <SearchSquare
              text="Search issues ..."
              setSearch={setSearch}
            />
            <FilterPop
              selectedLabels={selectedLabels}
              selectedStatus={selectedStatus}
              setSelectedLabels={setSelectedLabels}
              setSelectedStatus={setSelectedStatus}
            />
          </div>
          {/**general lables that appear under search bar */}
          <div className="flex flex-wrap gap-2">
            {issuesLable.map((label, idx) => (
              <button
                key={idx}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
                  label==="All Issues"?"bg-primary text-NavText1 hover:bg-hoverd  hover:outline-primary hover:outline-1border-none mr-5":selectedLabels.includes(label)
                    ? "bg-background border-textdark text-textdark"
                    : "bg-background border-Gray200 text-Gray600 hover:border-Gray400"
                }`}
                onClick={() => handleBtnClick(label)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        {/* 2. Individual Issue Cards */}
        <IssuesList
          search={search}
          selectedLabels={selectedLabels}
          selectedStatus={selectedStatus}
        />
      </div>
    </div>
  );
}
