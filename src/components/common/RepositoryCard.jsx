import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AlertCircle, ExternalLink } from "lucide-react";
import {
  faArrowUpRightFromSquare,
  faCodeFork,
} from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import recommended from "../../assets/recommendedLogo.svg";
import SimpleDarkButton from "./SimpleDarkButton";
import SimpleLightButton from "./SimpleLightButton";
export default function RepositoryCard({ repo, navigate }) {
  return (
    <div className="border-2 border-gray-200 rounded-xl p-5 bg-white flex flex-col lg:flex-row justify-between gap-4  lg:shadow-sm">
      {/* Left */}
      <div>
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-lg mb-2 md:mb-0">{repo.title}</h3>
          <img src={recommended} className="hidden lg:flex"/>
        </div>

        <p className=" text-sm text-gray-600 mt-1">{repo.description}</p>

        <div className="flex flex-col md:flex-row gap-4 text-sm text-gray-500 mt-3">
          <span className="flex gap-1">
            <FontAwesomeIcon
              icon={faStar}
              className="text-lg text-yellow-400"
            />
            {repo.stars}
          </span>
          <span className="flex gap-1">
            <FontAwesomeIcon
              icon={faCodeFork}
              className="text-lg text-gray-500"
            />{" "}
            {repo.forks}
          </span>
          <span className="flex gap-1">
            <AlertCircle className="w-[1.2rem] h-auto text-primary " />
            {repo.openIssues} open issues
          </span>
        </div>

        <div className="flex gap-2 mt-3">
          {repo.tags.map((tag) => (
            <span key={tag} className="text-xs border px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col gap-2">
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
