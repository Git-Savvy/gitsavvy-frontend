import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RepoNav from "../components/layout/RepoNav";
import Readme from "../components/layout/Readme";
import Docs from "../components/layout/Docs/Docs";
import Issues from "../components/layout/Issues";
import Metrics from "../components/layout/Metrics";
import { Star, GitFork, Users, ExternalLink } from "lucide-react";
import SimpleLightButton from "../components/common/SimpleLightButton";
import BackButton from "../components/common/BackButton";
import { useParams } from "react-router-dom";
import { useRepository } from "../hooks/useRepoQuery";
import NotFound from "./NotFound";
import SkeletonPage from "../components/messages/SkeletonPage";
import ErrorMessage from "../components/messages/ErrorMessage";
export default function RepoDetail() {
  const { repoId } = useParams(); // id from URL "it is a string!"
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("readme");
  // ask for repo with this id
  const { data: repo, isPending, error } = useRepository(Number(repoId)); // convert to number
  function handleVisit() {
    // Use _blank for a new tab, or _self to open in the same window
    window.open(repo.externalRepoLink, "_blank", "noopener,noreferrer");
  }
  if (isPending) return <SkeletonPage />;
  if (error) {
    // Axios error has response object
    if (error.response?.status === 404) {
      return (
        <NotFound
          text="  The Repository page you’re looking for doesn’t exist or has been moved."
          button="Go to Home"
          url="/home"
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

  const renderContent = () => {
    switch (activeTab) {
      case "docs":
        return <Docs repoId={Number(repoId)} />;
      case "issues":
        return <Issues />;
      case "metrics":
        return <Metrics repoId={Number(repoId)} />;
      default:
        return <Readme repoId={Number(repoId)} />;
    }
  };

  return (
    <div className="max-w-8xl  flex-col gap-10 px-5 md:px-20 lg:px-45 ">
      {/*main content */}
      <BackButton
        text="Back to Discover"
        onClick={() => {
          navigate("..");
        }}
      />
      {/*repo info*/}
      <div className="mt-8">
        <div className="md:flex justify-between ">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-textdark  mb-3">
            {repo.title}
          </h1>
          <SimpleLightButton
            text="View on GitHub"
            icon={<ExternalLink className="w-5 h-5 " />}
            onClick={handleVisit}
          />
        </div>
        <p className="mt-5 text-xl md:text-2xl lg:text-3xl">
          {repo.description}
        </p>
        <div className="flex flex-col md:flex-row gap-4 text-sm  my-5 text-text-secondary">
          <span className="flex gap-1 text-base md:text-lg">
            <Star className="text-Yellow400" />
            <p>{repo.stars}</p>
            <p>stars</p>
          </span>
          <span className="flex gap-1 text-base md:text-lg">
            <GitFork className="text-Gray600" />
            <p>{repo.forks}</p>
            <p>forks</p>
          </span>
          <span className="flex gap-1 text-base md:text-lg">
            <Users className="text-primary" />
            <p>{repo.contributers}</p>
            <p>contributers</p>
          </span>
        </div>
        <div className="flex gap-2 mt-3">
          {repo.tags.map((tag) => (
            <span
              key={tag}
              className="md:text-base bg-primary  text-[#fff] text-bold  px-4 py-1 rounded-2xl bg-gray-300"
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
