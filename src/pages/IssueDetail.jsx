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
  const { data: issue, isPending, error } = useIssue(Number(repoId),Number(issueId));
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  function handleVisit() {
    // Use _blank for a new tab, or _self to open in the same window
    window.open(issue.url, "_blank", "noopener,noreferrer");
  }
  const renderContent = () => {
    switch (activeTab) {
      case "comments":
        return <Comments repoId={issue.repository_id} issueId={issue.number} />;//use number for issue insted of id
      default:
        return <DescriptionIssue body={issue.body} />;
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
        text="Back to Repository"
        onClick={() => {
          navigate(`/home/repoDetail/${repoId}`);
        }}
      />

      {/* 2. Issue Title & Meta */}
      <div className="mt-8">
        <div className="md:flex justify-between gap-2">
          <div className="flex flex-col lg:flex-row gap-3 ">
            <div className="flex  gap-5">
              <div className=" w-17 h-17 bg-Teal400/20 rounded-full flex items-center justify-center text-Teal400">
                {/* <Info size={30} /> */}
                <img src={issue.author_avatar_url}className=" w-16 h-16 rounded-full"/>
              </div>
              {/* <span className="lg:hidden  font-normal text-xl border text-NavBorder bg-NavSelected  flex items-center justify-center rounded-full px-4 py-2 mt-2  h-fit">
                #{issue.number}
              </span> */}
            </div>
            <div className="space-y-3">
              <div className="flex gap-3 flex-col md:flex-row">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-textdark">
                  {issue.title}
                </h1>
                <span className="flex  font-normal text-xl border text-NavSelected bg-NavBorder flex text-center justify-center rounded-full px-4 py-2 mt-2 h-fit">
                  #{issue.number}
                </span>
              </div>

              <div className="flex gap-4 mb-6">
                <div className="flex flex-col lg:flex-row lg:items-center gap-4 text-base md:text-lg lg:text-xl text-Gray600">
                  <span>
                    <span className="lg:hidden">• </span>Opened{" "}
                    {timeAgo(issue.opened_at)}
                  </span>
                  <span className="flex items-center gap-1">{`• ${issue.commentsNum} comments`}</span>
                  <span className="flex items-center gap-1">
                    • <UserCircle size={20} /> {issue.author_username}
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
      {issue.issueStatus == "Open" ? (
        <ClaimBanner setIsModalOpen={setIsModalOpen} />
      ) : (
        <ClaimedBanner />
      )}

      {/* 4. Navigation Bar (Tabs) */}
      <div>
        <IssueNav activeTab={activeTab} setActiveTab={setActiveTab} num={issue.commentsNum}/>
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
