import { useState } from "react";
import { CircleDashed, Award, TrendingUp, Clock } from "lucide-react";
import CurrentWork from "../components/layout/CurrentWork";
import CompletedWork from "../components/layout/CompletedWork";
import BackButton from "../components/common/BackButton";
import { useNavigate } from "react-router-dom";
import MyWorkStatCard from "../components/common/MyWorkStatCard";
import LanguageFilter from "../components/common/LanguageFilter";
import TimeFilter from "../components/common/TimeFilter";
import MyWorkNav from "../components/layout/MyWorkNav";
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
      <div className="bg-white w-full flex flex-col lg:flex-row  justify-between px-10 lg:px-40  pb-3 border-b-2 border-gray-200 lg:shadow-sm">
        <div className="">
          <BackButton text={"Back"} onClick={() => navigate("/home")} />
          <h1 className="text-2xl font-bold text-gray-900">My Work</h1>
          <p className="text-gray-500">
            Track your current contributions and view your work history
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-2 items-center pt-12">
          <LanguageFilter
            onSelect={(lang) => console.log("Selected Lang:", lang)}
          />
          <TimeFilter
            onSelect={(time) => console.log("Selected Time:", time)}
          />
        </div>
      </div>
      <div className="px-10 lg:px-40">
        <div className="flex flex-col lg:flex-row gap-4 justify-around ">
          {workStats.map((stat, index) => (
            <MyWorkStatCard key={index} stat={stat} />
          ))}
        </div>

        {/* ===== Tabs Navbar ===== */}
        <div className="py-6">
          <MyWorkNav activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* ===== Dynamic Content ===== */}
        {/*condition && value
        if condition is true → return value*/}
        <div>
          {activeTab === "current" && <CurrentWork />}
          {activeTab === "completed" && <CompletedWork />}
        </div>
      </div>
    </div>
  );
}
