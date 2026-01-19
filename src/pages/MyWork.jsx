import { useState } from "react";
import { CircleDashed, Award, TrendingUp, Clock } from "lucide-react";
import CurrentWork from "../components/layout/CurrentWork";
import CompletedWork from "../components/layout/CompletedWork";
import BackButton from "../components/common/BackButton";
import { useNavigate } from "react-router-dom";
import MyWorkStatCard from "../components/common/MyWorkStatCard";
export default function MyWork() {
  const workStats = [
    {
      title: "In Progres",
      icon: <CircleDashed className="text-emerald-400" />,
      color: "bg-emerald-200",
    },
    {
      title: "Completed",
      icon: <Clock className="text-cyan-400" />,
      color: "bg-cyan-200",
    },
    {
      title: "Total Points",
      icon: <TrendingUp className="text-blue-400" />,
      color: "bg-blue-200",
    },
    {
      title: "Badges",
      icon: <Award className="text-purple-400" />,
      color: "bg-purple-200",
    },
  ];
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("current");

  return (
    <div className="space-y-8 ">
      {/* ===== Header ===== */}
      <div className="bg-white w-full flex justify-between px-10 pb-3 border-b-2 border-gray-200 lg:shadow-sm">
        <div className="">
          <BackButton text={"Back"} onClick={() => navigate("/home")} />
          <h1 className="text-2xl font-bold text-gray-900">My Work</h1>
          <p className="text-gray-500">
            Track your current contributions and view your work history
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <span>All language</span>
          <span>All Time</span>
        </div>
      </div>
      <div className="px-10">
        <div className="flex gap-4 justify-around bg-red-300">
          {workStats.map((stat, index) => (
            <MyWorkStatCard key={index} stat={stat} />
          ))}
        </div>

        {/* ===== Tabs Navbar ===== */}
        <div className="py-6">
          <div className="flex  flex-col md:flex-row gap-2 lg:gap-8 justify-around border-2 border-gray-200 bg-switchbg rounded-2xl md:rounded-full p-1  w-full md:w-fit lg:shadow-sm">
            <button
              onClick={() => setActiveTab("current")}
              className={`py-2 px-2 md:px-6 
            ${
              activeTab === "current"
                ? "bg-white rounded-full font-semibold border-2 border-gray-200 lg:shadow-sm"
                : "text-textdark"
            }`}
            >
              Current Work
            </button>

            <button
              onClick={() => setActiveTab("completed")}
              className={`py-2 px-2 md:px-6
            ${
              activeTab === "completed"
                ? "bg-white rounded-full font-semibold border-2 border-gray-200 lg:shadow-sm"
                : "text-textdark"
            }`}
            >
              Completed
            </button>
          </div>
        </div>
        {/* ===== Dynamic Content ===== */}
        <div>
          {activeTab === "current" && <CurrentWork />}
          {activeTab === "completed" && <CompletedWork />}
        </div>
      </div>
    </div>
  );
}
