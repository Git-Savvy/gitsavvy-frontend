import React from "react";
import { Activity, GitPullRequest, CircleCheck, Users } from "lucide-react";
import StatsCard from "../common/StatsCard";
import ContributionActivityCard from "../common/ContributionActivityCard";
import TopContributerCard from "../common/TopContributerCard";
import MonthlyContributionCard from "../common/MonthlyContributionCard";
import { MetricsContext } from "../../context/MetricsContext";
import { useContext } from "react";
import NoDataMessage from "../messages/NoDataMessage";
const Metrics = ({ repoId }) => {
  const { metrics } = useContext(MetricsContext);
  const metric = metrics.find((m) => m.repoId === parseInt(repoId));
  let Commits = 0;
  let PL = 0;
  let issueC = 0;
  let Contributers = 0;
  if (metric) {
    Commits = metric.totalCommits;
    PL = metric.prsMerged;
    issueC = metric.issuesClosed;
    Contributers = metric.contributors;
  } else {
    return (
      <NoDataMessage
        containerStyle="flex-1 bg-white border-2 border-gray-200 rounded-2xl p-10 shadow-sm"
        text={"No metric status found."}
      />
    );
  }
  const stats = [
    {
      label: "Total Commits",
      value: Commits,
      growth: "+12%", //later calculate it or try to fitch it
      icon: <Activity className="text-blue-500" />,
      color: "bg-blue-100",
    },
    {
      label: "PRs Merged",
      value: PL,
      growth: "+8%",
      icon: <GitPullRequest className="text-purple-500" />,
      color: "bg-purple-100",
    },
    {
      label: "Issues Closed",
      value: issueC,
      growth: "+15%",
      icon: <CircleCheck className="text-emerald-500" />,
      color: "bg-emerald-100",
    },
    {
      label: "Contributors",
      value: Contributers,
      growth: "+5%",
      icon: <Users className="text-cyan-400" />,
      color: "bg-cyan-100",
    },
  ];

  const contributors = [
    {
      name: "Sarah Johnson",
      commits: 342,
      prs: 45,
      img: "https://i.pravatar.cc/150?u=1",
    },
    {
      name: "Michael Chen",
      commits: 298,
      prs: 38,
      img: "https://i.pravatar.cc/150?u=2",
    },
    {
      name: "Emily Rodriguez",
      commits: 256,
      prs: 32,
      img: "https://i.pravatar.cc/150?u=3",
    },
    {
      name: "David Kim",
      commits: 234,
      prs: 29,
      img: "https://i.pravatar.cc/150?u=4",
    },
    {
      name: "Lisa Anderson",
      commits: 198,
      prs: 24,
      img: "https://i.pravatar.cc/150?u=5",
    },
  ];

  const data = [
    { name: "Jan", commits: 145, prs: 25, issues: 12 },
    { name: "Feb", commits: 200, prs: 32, issues: 20 },
    { name: "Mar", commits: 235, prs: 28, issues: 15 },
    { name: "Apr", commits: 270, prs: 35, issues: 22 },
    { name: "May", commits: 320, prs: 42, issues: 28 },
    { name: "Jun", commits: 295, prs: 38, issues: 20 },
  ];

  return (
    <div className=" bg-background min-h-screen font-sans text-Gray500">
      <div className="space-y-6 w-full">
        {/* 1. Top Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-7 ">
          {stats.map((stat, i) => (
            <StatsCard stat={stat} key={i} />
          ))}
        </div>

        {/* 2. Main Contribution Activity Card */}
        <ContributionActivityCard data={data} />
        {/* 3. Bottom Grid: Top Contributors & Monthly Bar Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
          {/* Top Contributors Card */}
          <TopContributerCard contributors={contributors} />

          {/* Monthly Contributions Bar Chart Card */}
          <MonthlyContributionCard data={data} />
        </div>
      </div>
    </div>
  );
};

export default Metrics;
