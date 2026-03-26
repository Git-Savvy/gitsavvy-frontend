import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Sparkles, AlertCircle, ExternalLink } from "lucide-react";
import { faCodeFork } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import SimpleDarkButton from "../SimpleDarkButton";
import SimpleLightButton from "../SimpleLightButton";
export default function RepositoryCard({ repo, navigate }) {
  function handleVisit(){
  // Use _blank for a new tab, or _self to open in the same window
  window.open(repo.url, '_blank', 'noopener,noreferrer');
};
  return (
    <div className="border-2 border-Gray200 rounded-xl p-5 bg-white flex flex-col lg:flex-row justify-between gap-4  lg:shadow-sm">
      {/* Left */}
      <div>
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-xl md:text-2xl lg:text-3xl mb-2 md:mb-0">
            {repo.name}
          </h3>
          <div className="hidden lg:flex">
            <div className="flex items-center  gap-2 w-fit border-1  border-primary rounded-lg  px-2">
              <Sparkles className="w-4 h-4 text-primary " />
              <p className="text-primary font-semibold">Recommended</p>
            </div>
          </div>
        </div>

        <p className=" text-lg lg:text-xl text-Gray600 mt-1">
          {repo.description}
        </p>

        <div className="flex flex-col md:flex-row  gap-4 text-base lg:text-base text-Gray600 mt-3">
          <span className="flex gap-1 lg:items-center">
            <FontAwesomeIcon icon={faStar} className="text-lg text-Yellow400" />
            {repo.stars_count}
          </span>
          <span className="flex gap-1 lg:items-center">
            <FontAwesomeIcon
              icon={faCodeFork}
              className="text-lg text-Gray600"
            />{" "}
            {repo.forks_count} forks
          </span>
          <span className="flex gap-1 lg:items-center">
            <AlertCircle className="text-lg text-primary " />
            {repo.open_issues_count} open issues
          </span>
        </div>

        <div className="flex gap-2 mt-3">
          {repo.topics.map((tag) => (
            <span
              key={tag.id}
              className="text-sm font-semibold border-1  px-2 lg:px-3 py-1 rounded-full text-NavBorder bg-NavSelected"
            >
              {tag.topic}
            </span>
          ))}
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col gap-3 justify-items justify-center transition-all duration-300 ease-in-out">
        <SimpleDarkButton
          text="View Details"
          onClick={() => navigate(`/home/repoDetail/${repo.id}`)}
        />
        <SimpleLightButton
          text="GitHub"
          icon={<ExternalLink className="w-4 h-4 " />}
          onClick={handleVisit}
        />
      </div>
    </div>
  );
}
