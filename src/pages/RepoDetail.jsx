import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RepoNav from "../components/layout/RepoNav";
import Readme from "../components/layout/Readme";
import Docs from "../components/layout/Docs";
import Issues from "../components/layout/Issues";
import Metrics from "../components/layout/Metrics";
import { Star, GitFork, Users, ExternalLink } from "lucide-react";
import SimpleLightButton from "../components/common/SimpleLightButton";
import BackButton from "../components/common/BackButton";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { RepoContext } from "../context/RepoContext";
export default function RepoDetail() {
  const { id } = useParams(); // id from URL
  const { repos } = useContext(RepoContext);
  // find repo with this id
  const repo = repos.find((r) => r.id === parseInt(id));
  if (!repo) return <div>Repository not found</div>;
  {
    /*change it to nice card later*/
  }

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("readme");

  const renderContent = () => {
    switch (activeTab) {
      case "docs":
        return <Docs />;
      case "issues":
        return <Issues />;
      case "metrics":
        return <Metrics />;
      default:
        return <Readme />;
    }
  };

  return (
    <div className="max-w-8xl  flex-col gap-10 px-45 ">
      {/*main content */}
      <BackButton
        text="Back to Discover"
        onClick={() => {
          navigate("..");
        }}
      />
      {/*repo info*/}
      <div className="mt-8">
        <div className="lg:flex justify-between ">
          <h1 className="text-3xl text-bold text-textdark  mb-3">
            {repo.title}
          </h1>
          <SimpleLightButton
            text="View on GitHup"
            icon={<ExternalLink className="w-5 h-5 " />}
          />
        </div>
        <p>{repo.description}</p>
        <div className="flex gap-4 text-sm text-gray-500 my-5 text-text-secondary">
          <span className="flex gap-1">
            <Star className="text-yellow-500" />
            <p className="text-base">{repo.stars}</p>
            <p className="text-base">stars</p>
          </span>
          <span className="flex gap-1 ">
            <GitFork />
            <p className="text-base">{repo.forks}</p>
            <p className="text-base">forks</p>
          </span>
          <span className="flex gap-1">
            <Users className="text-primary" />
            <p className="text-base">{repo.contributers}</p>
            <p className="text-base">contributers</p>
          </span>
        </div>
        <div className="flex gap-2 mt-3">
          {repo.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-bold  px-3 py-1 rounded-xl bg-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      {/*nav tabs area*/}
      <div className="py-6 ">
        <RepoNav activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="mt-6 ">{renderContent()}</div>
      </div>
    </div>
  );
}
