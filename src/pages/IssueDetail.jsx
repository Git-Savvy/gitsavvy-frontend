import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/common/BackButton";
import { ExternalLink, Info, UserCircle } from "lucide-react";
import SimpleLightButton from "../components/common/SimpleLightButton";
import SimpleDarkButton from "../components/common/SimpleDarkButton";
import IssueNav from "../components/layout/IssueNav";
import DescriptionIssue from "../components/layout/DescriptionIssue";
import Comments from "../components/layout/Comments";
import ContributionWorkflow from "../components/common/contributionFlow/ContributionWorkflow"; // The modal component
import { useParams } from "react-router-dom";
import { IssueContext } from "../context/IssueContext";
import { useContext } from "react";
export default function IssueDetail() {
  const { id } = useParams(); // id from URL
  const { issues } = useContext(IssueContext);
  // find issue with this id
  const issue = issues.find((i) => i.issueId === parseInt(id));
  if (!issue) return <div>Issue not found</div>;
  {
    /*change it to nice card later*/
  }
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
  const renderContent = () => {
    switch (activeTab) {
      case "comments":
        return <Comments comments={comments} />;
      default:
        return <DescriptionIssue />;
    }
  };
  return (
    <main className="max-w-8xl  flex-col gap-10 px-45">
      {/* Back Link */}
      <BackButton
        text=" Back to Repository"
        onClick={() => {
          navigate(`/home/repoDetail/${issue.repositoryId}`);
        }}
      />

      {/* 2. Issue Title & Meta */}
      <div className="mt-8">
        <div className="lg:flex justify-between ">
          <div className="flex  gap-3 ">
            <div className=" w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600">
              <Info size={30} />
            </div>
            <div className="space-y-3">
              <div className="flex  gap-3 justify-center items-center">
                <h1 className="text-3xl text-bold text-textdark">
                  Add dark mode support{" "}
                </h1>
                <span className="text-text-secondary font-normal text-xl border border-gray-700  text-center rounded-xl w-10 h-7 mt-2">
                  #1
                </span>
              </div>
              <div className="flex  justify-between  mb-6 ">
                <div className="flex gap-4">
                  <div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>Opened 2 days ago</span>
                      <span className="flex items-center gap-1">
                        • 3 comments
                      </span>
                      <span className="flex items-center gap-1">
                        • <UserCircle size={14} /> johndoe
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SimpleLightButton
            text="View on GitHup"
            icon={<ExternalLink className="w-5 h-5 " />}
          />
        </div>
        {/* Labels */}
        <div className="flex gap-2 mb-8">
          {["Easy", "enhancement", "good first issue"].map((label) => (
            <span
              key={label}
              className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-xl border-1 border-green-400"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* 3. CTA Banner */}
      <div className="bg-gradient-to-br from-[#EFF6FF] to-[#FAF5FF]  border border-blue-300 rounded-2xl p-6 flex items-center justify-between mb-8 ">
        <div>
          <h3 className="font-semibold text-indigo-900 mb-1">
            Ready to contribute?
          </h3>
          <p className="text-indigo-700 text-sm">
            This issue is available for contributors. Claim it to start working!
          </p>
        </div>
        <SimpleDarkButton
          onClick={() => {
            setIsModalOpen(true);
          }}
          text=" Claim Issue"
        />
      </div>

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
      />
    </main>
  );
}
