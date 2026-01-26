import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Sparkles, AlertCircle, ExternalLink } from "lucide-react";
import { faCodeFork } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import SimpleDarkButton from "../SimpleDarkButton";
import SimpleLightButton from "../SimpleLightButton";
export default function RepositoryCard({ repo, navigate }) {
  return (
    <div className="border-2 border-Gray200 rounded-xl p-5 bg-white flex flex-col lg:flex-row justify-between gap-4  lg:shadow-sm">
      {/* Left */}
      <div>
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-xl lg:text-2xl mb-2 md:mb-0">{repo.title}</h3>
          <div className="hidden lg:flex">
            <div className="flex items-center  gap-2 w-fit border-2  border-Purple400 text-Gray600 rounded-lg bg-Purple50 px-2">
              <Sparkles className="w-4 h-4 text-Purple400 " />
              <p>Recommended</p>
            </div>
          </div>
        </div>

        <p className=" text-sm lg:text-md text-Gray600 mt-1">{repo.description}</p>

        <div className="flex flex-col md:flex-row gap-4 text-sm text-Gray600 mt-3">
          <span className="flex gap-1">
            <FontAwesomeIcon icon={faStar} className="text-lg text-Yellow400" />
            {repo.stars}
          </span>
          <span className="flex gap-1">
            <FontAwesomeIcon
              icon={faCodeFork}
              className="text-lg text-Gray600"
            />{" "}
            {repo.forks}
          </span>
          <span className="flex gap-1">
            <AlertCircle className="text-lg text-primary pb-1" />
            {repo.openIssues} open issues
          </span>
        </div>

        <div className="flex gap-2 mt-3">
          {repo.tags.map((tag) => (
            <span key={tag} className="text-sm font-simibold border-1 px-2 lg:px-3 py-1 rounded-full text-Cyan400 bg-Cyan50">
              {tag}
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
          text="GitHup"
          icon={<ExternalLink className="w-4 h-4 " />}
        />
      </div>
    </div>
  );
}
