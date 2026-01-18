import { useState } from "react";
import CurrentWork from "../components/layout/CurrentWork";
import CompletedWork from "../components/layout/CompletedWork";
export default function MyWork() {
  const [activeTab, setActiveTab] = useState("current");

  return (
    <div className="p-8 space-y-8">
      {/* ===== Header ===== */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">My Work</h1>
        <p className="text-gray-500">
          Track your current contributions and view your work history
        </p>
      </div>

      {/* ===== Tabs Navbar ===== */}
      <div className="w-fit bg-gray-100 p-1 rounded-xl flex gap-1">
        <button
          onClick={() => setActiveTab("current")}
          className={`px-6 py-2 rounded-lg text-sm font-semibold transition
            ${
              activeTab === "current"
                ? "bg-white shadow text-gray-900"
                : "text-gray-500 hover:text-gray-700"
            }`}
        >
          Current Work
        </button>

        <button
          onClick={() => setActiveTab("completed")}
          className={`px-6 py-2 rounded-lg text-sm font-semibold transition
            ${
              activeTab === "completed"
                ? "bg-white shadow text-gray-900"
                : "text-gray-500 hover:text-gray-700"
            }`}
        >
          Completed
        </button>
      </div>

      {/* ===== Dynamic Content ===== */}
      <div>
        {activeTab === "current" && <CurrentWork />}
        {activeTab === "completed" && <CompletedWork />}
      </div>
    </div>
  );
}
