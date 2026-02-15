import React from "react";
import { Activity, GitPullRequest, CircleCheck, Users } from "lucide-react";
import StatsCard from "../common/metrics/StatsCard";
import ContributionActivityCard from "../common/metrics/ContributionActivityCard";
import TopContributerCard from "../common/metrics/TopContributerCard";
import MonthlyContributionCard from "../common/metrics/MonthlyContributionCard";
import { useMetricsByRepoId } from "../../hooks/useMetricQuery";
import NoDataMessage from "../messages/NoDataMessage";
import SkeletonCard from "../messages/SkeletonCard";
import ErrorMessage from "../messages/ErrorMessage";
const Metrics = ({ repoId }) => {
  const { data: metricStats, isPending, error } = useMetricsByRepoId(repoId);

  let Commits = 0;
  let CommitsG = 0;
  let PL = 0;
  let PLG = 0;
  let issueC = 0;
  let issueCG = 0;
  let Contributors = 0;
  let ContributorsG = 0;

  if (metricStats) {
    Commits = metricStats.totalCommits;
    CommitsG = metricStats.growthCommits;
    PL = metricStats.prsMerged;
    PLG = metricStats.growthPr;
    issueC = metricStats.issuesClosed;
    issueCG = metricStats.growthIssues;
    Contributors = metricStats.contributors;
    ContributorsG = metricStats.growthContributors;
  }
  const stats = [
    {
      label: "Total Commits",
      value: Commits,
      growth: CommitsG, //later calculate it or try to fitch it
      icon: <Activity className="text-indigo-500" />,
      color: "bg-indigo-500/15 border-indigo-500",
    },
    {
      label: "PRs Merged",
      value: PL,
      growth: PLG,
      icon: <GitPullRequest className="text-purple-500" />,
      color: "bg-purple-500/15 border-purple-500",
    },
    {
      label: "Issues Closed",
      value: issueC,
      growth: issueCG,
      icon: <CircleCheck className="text-teal-500" />,
      color: "bg-teal-500/15 border-teal-500",
    },
    {
      label: "Contributors",
      value: Contributors,
      growth: ContributorsG,
      icon: <Users className="text-cyan-400" />,
      color: "bg-cyan-400/15 border-cyan-400",
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

  if (isPending)
    return (
      <div className=" bg-background min-h-screen">
        <div className="space-y-6 w-full">
    
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-7 ">
            {stats.map((stat, i) => (
              <SkeletonCard key={i} containerStyle={"h-[150px]"}/>
            ))}
          </div>

          <ContributionActivityCard data={data} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
            <TopContributerCard contributors={contributors} />
            <MonthlyContributionCard data={data} />
          </div>
        </div>
      </div>
    );

  if (error)
    return (
      <ErrorMessage containerStyle={"h-[500px]"} message={error.message} />
    );

    if(!metricStats)
      return(<NoDataMessage containerStyle={"h-[500px]"} text={"No matrics found for this repository"}/>)

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
