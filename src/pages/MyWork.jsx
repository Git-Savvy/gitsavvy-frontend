import { useState } from "react";
import { CircleDashed, Award, TrendingUp, Clock } from "lucide-react";
import CurrentWork from "../components/layout/CurrentWork";
import CompletedWork from "../components/layout/CompletedWork";
import BackButton from "../components/common/BackButton";
import { useNavigate } from "react-router-dom";
import MyWorkStatCard from "../components/common/mywork/MyWorkStatCard";
import LanguageFilter from "../components/common/mywork/LanguageFilter";
import TimeFilter from "../components/common/mywork/TimeFilter";
import MyWorkNav from "../components/layout/MyWorkNav";
import { usefetchMyWork } from "../hooks/useMyWorkQuery";
import SkeletonPage from"../components/messages/SkeletonPage";
import ErrorMessage from "../components/messages/ErrorMessage"
export default function MyWork() {
  const { data, isPending, error } = usefetchMyWork();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("current");

  if (isPending) return <SkeletonPage></SkeletonPage>;
  else if (error) return <ErrorMessage containerStyle="h-screen" message={error.message}></ErrorMessage>
  else {
    const statData = data.stats;
    const currentData=data.current_work;
    const completeData=data.completed_work;
    
    const workStats = [
      {
        title: "In Progres",
        icon: <CircleDashed className="text-indigo-500" />,
        color: "bg-indigo-500/15 border-indigo-500",
        value: statData.in_progress,
      },
      {
        title: "Completed",
        icon: <Clock className="text-purple-500" />,
        color: "bg-purple-500/15 border-purple-500",
        value: statData.completed,
      },
      {
        title: "Total Points",
        icon: <TrendingUp className="text-teal-500" />,
        color: "bg-teal-500/15 border-teal-500",
        value: statData.total_points,
      },
      {
        title: "Badges",
        icon: <Award className="text-cyan-400" />,
        color: "bg-cyan-400/15 border-cyan-400",
        value: statData.badges,
      },
    ];

    return (
      <div className="space-y-8 ">
        {/* ===== Header ===== */}
        <div className="bg-white w-full flex flex-col lg:flex-row  justify-between px-10 lg:px-40  pb-3 border-b-2 border-Gray200 lg:shadow-sm">
          <div className="">
            <BackButton text={"Back"} onClick={() => navigate("/home")} />
            <h1 className="mb-3 text-4xl font-semibold text-textdark">
              My Work
            </h1>
            <p className="text-xl text-Gray600">
              Track your current contributions and view your work history
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-2 lg:items-center pt-12">
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
            {activeTab === "current" && <CurrentWork data={currentData}/>}
            {activeTab === "completed" && <CompletedWork data={completeData}/>}
          </div>
        </div>
      </div>
    );
  }
}
