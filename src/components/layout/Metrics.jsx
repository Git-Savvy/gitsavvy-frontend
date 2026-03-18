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
import { useParams } from "react-router-dom";

const Metrics = ({}) => {
  const { repoId } = useParams();
  console.log("repoId:", repoId);
  const {
    data: metricsData,
    isPending,
    error,
  } = useMetricsByRepoId(Number(repoId));

  console.log("HOOK RUNNING");
  console.log("loading:", isPending);
  console.log("error:", error);
  console.log("data:", metricsData);
  const metricStats = metricsData?.stats;
  console.log(metricStats);
  let Commits = 0;
  let CommitsG = 0;
  let PL = 0;
  let PLG = 0;
  let issueC = 0;
  let issueCG = 0;
  let Contributors = 0;
  let ContributorsG = 0;

  if (metricStats) {
    Commits = metricStats.num_of_commits;
    CommitsG = metricStats.growthCommits;
    PL = metricStats.num_of_merged_pr;
    PLG = metricStats.growthPr;
    issueC = metricStats.num_of_closed_issues;
    issueCG = metricStats.growthIssues;
    Contributors = metricStats.num_of_contributors;
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
  const contributors = metricsData?.top_contributors;
  console.log(contributors);
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
              <SkeletonCard key={i} containerStyle={"h-[150px]"} />
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

  if (!metricStats)
    return (
      <NoDataMessage
        containerStyle={"h-[500px]"}
        text={"No matrics found for this repository"}
      />
    );

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
