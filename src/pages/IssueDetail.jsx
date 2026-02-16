import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/common/BackButton";
import { ExternalLink, Info, UserCircle } from "lucide-react";
import SimpleLightButton from "../components/common/SimpleLightButton";
import IssueNav from "../components/layout/IssueNav";
import DescriptionIssue from "../components/layout/DescriptionIssue";
import Comments from "../components/layout/Comments";
import ContributionWorkflow from "../components/common/contributionFlow/ContributionWorkflow"; // The modal component
import { useParams } from "react-router-dom";
import { useIssue } from "../hooks/useIssueQuery";
import NotFound from "./NotFound";
import { timeAgo } from "../utils/timeAgo";
import ClaimBanner from "../components/common/contributionFlow/ClaimBanner";
import ClaimedBanner from "../components/common/contributionFlow/ClimedBanner";
import SkeletonPage from "../components/messages/SkeletonPage";
import ErrorMessage from "../components/messages/ErrorMessage";
export default function IssueDetail() {
  const { repoId, issueId } = useParams(); // id from URL
  const { data: issue, isPending, error } = useIssue(Number(issueId));
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const comments = [
    {
      id: 1,
      user: "sarahj",
      time: "1 day ago",
      text: "This would be a great addition! I can help with the CSS variables setup.",
    },
    {
      id: 2,
      user: "mikec",
      time: "1 day ago",
      text: "Should we use CSS variables or a theming library like styled-components?",
    },
    {
      id: 3,
      user: "mikec",
      time: "1 day ago",
      text: "Should we use CSS variables or a theming library like styled-components?",
    },
    {
      id: 4,
      user: "mikec",
      time: "1 day ago",
      text: "Should we use CSS variables or a theming library like styled-components?",
    },
  ];

    function handleVisit() {
    // Use _blank for a new tab, or _self to open in the same window
    window.open(issue.githubIssueLink, "_blank", "noopener,noreferrer");
  }
  const renderContent = () => {
    switch (activeTab) {
      case "comments":
        return <Comments comments={comments} />;
      default:
        return <DescriptionIssue issue={issue} />;
    }
  };
  if (isPending) return <SkeletonPage />;
  if (error) {
    // Axios error has response object
    if (error.response?.status === 404) {
      return (
        <NotFound
          text="  The Issue page you’re looking for doesn’t exist or has been moved."
          button={`Back to repository`}
          url={`/home/repoDetail/${repoId}`}
        />
      );
    }
    return (
      <ErrorMessage
        message={error.message}
        containerStyle={"w-full h-screen"}
      />
    );
  }

  return (
    <main className="max-w-8xl  flex-col gap-10 px-5 md:px-20 lg:px-45">
      {/* Back Link */}
      <BackButton
        text=" Back to Repository"
        onClick={() => {
          navigate(`/home/repoDetail/${repoId}`);
        }}
      />

      {/* 2. Issue Title & Meta */}
      <div className="mt-8">
        <div className="md:flex justify-between gap-2">
          <div className="flex flex-col lg:flex-row gap-3 ">
            <div className="flex  gap-5">
              <div className=" w-16 h-16 bg-Teal400/20 rounded-full flex items-center justify-center text-Teal400">
                <Info size={30} />
              </div>
              <span className="lg:hidden  font-normal text-xl border text-NavBorder bg-NavSelected  flex items-center justify-center rounded-xl w-13 h-8 mt-2">
                #{issue.id}
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex gap-3 flex-col md:flex-row">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-textdark">
                  {issue.issueTitle}
                </h1>
                <span className="hidden lg:flex  font-normal text-xl border text-NavBorder bg-NavSelected  text-center justify-center rounded-xl w-12 h-7 mt-2">
                  #{issue.id}
                </span>
              </div>

              <div className="flex gap-4 mb-6">
                <div className="flex flex-col lg:flex-row lg:items-center gap-4 text-base md:text-lg lg:text-xl text-Gray600">
                  <span>
                    <span className="lg:hidden">• </span>Opened{" "}
                    {timeAgo(issue.creationDate)}
                  </span>
                  <span className="flex items-center gap-1">• 3 comments</span>
                  <span className="flex items-center gap-1">
                    • <UserCircle size={20} /> johndoe
                  </span>
                </div>
              </div>
            </div>
          </div>
          <SimpleLightButton
            text="View on GitHub"
            icon={<ExternalLink className="w-5 h-5 " />}
            onClick={handleVisit}
          />
        </div>
        {/* Labels */}
        <div className="flex gap-2 mb-8 mt-5 md:mt-0">
          {["Easy", "enhancement", "good first issue"].map((label) => (
            <span
              key={label}
              className="px-3 py-1 text-NavBorder bg-NavSelected lg:text-base font-medium rounded-xl border"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* 3. CTA Claim Banner */}
      {issue.issueStatus=="Open" ? (
        <ClaimBanner setIsModalOpen={setIsModalOpen} />
      ) : (
        <ClaimedBanner />
      )}

      {/* 4. Navigation Bar (Tabs) */}
      <div>
        <IssueNav
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          num={comments.length}
        />
        <div className="mt-6 ">{renderContent()}</div>
      </div>
      {/* The Modal Component */}
      <ContributionWorkflow
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        issue={issue}
      />
    </main>
  );
}
