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
  console.log("repoId:", repoId);
  const { data: metricsData, isPending, error } = useMetricsByRepoId(repoId);
  console.log("HOOK RUNNING");


  let stats = [
    {
  
    },
    {
      
    },
    {
      
    },
    {
      
    },
  ];


  if (isPending)
    return (
      <div className=" bg-background min-h-screen">
        <div className="space-y-6 w-full">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-7 ">
            {stats.map((stats, i) => (
              <SkeletonCard key={i} containerStyle={"h-[150px]"} />
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
            <TopContributerCard contributors={"loading"} />
            <MonthlyContributionCard data={"loading"} />
          </div>
        </div>
      </div>
    );

  if (error)
    return (
      <ErrorMessage containerStyle={"h-[500px]"} message={error.message} />
    );

  if (!metricsData)
    return (
      <NoDataMessage
        containerStyle={"h-[500px]"}
        text={"No matrics found for this repository"}
      />
    );

  
  // let Commits = 0;
  // let CommitsG = 0;
  // let PL = 0;
  // let PLG = 0;
  // let issueC = 0;
  // let issueCG = 0;
  // let Contributors = 0;
  // let ContributorsG = 0;

   const metricStats = metricsData?.stats;
 
    let Commits = metricStats.num_of_commits;
    let CommitsG = metricStats.growthCommits;
    let PL = metricStats.num_of_merged_pr;
    let PLG = metricStats.growthPr;
    let issueC = metricStats.num_of_closed_issues;
    let issueCG = metricStats.growthIssues;
    let Contributors = metricStats.num_of_contributors;
    let ContributorsG = metricStats.growthContributors;
  

     stats = [
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
  
  // const data = [
  //   { name: "Jan", commits: 145, prs: 25, issues: 12 },
  //   { name: "Feb", commits: 200, prs: 32, issues: 20 },
  //   { name: "Mar", commits: 235, prs: 28, issues: 15 },
  //   { name: "Apr", commits: 270, prs: 35, issues: 22 },
  //   { name: "May", commits: 320, prs: 42, issues: 28 },
  //   { name: "Jun", commits: 295, prs: 38, issues: 20 },
  // ];

  let year=null;
  const chartData = metricsData?.monthly_activity?.map((item) => {
  // Convert "2025-03" to a short name like "Mar 25"
  const dateParts = item.month.split("-");
  year= dateParts[0].slice(-4); // "2025"
  const monthIndex = parseInt(dateParts[1], 10) - 1;
  const monthName = new Date(2000, monthIndex).toLocaleString('default', { month: 'short' });

  return {
    name: `${monthName} `, // e.g., "Mar 25"
    contributions: item.num_of_contributions,
    // Keep these as 0 or the same value if your Chart component requires them(future enhancement)
    // commits:0, 
    // prs: 0,
    // issues: 0,
  };
}) || [];

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
        {/* <ContributionActivityCard data={data} /> */}
        {/* 3. Bottom Grid: Top Contributors & Monthly Bar Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
          {/* Top Contributors Card */}
          <TopContributerCard contributors={contributors} />

          {/* Monthly Contributions Bar Chart Card */}
          <MonthlyContributionCard data={chartData} year={year}/>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
