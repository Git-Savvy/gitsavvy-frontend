import RepositoryCard from "./RepositoryCard";
import { useNavigate } from "react-router-dom";
import { useRepositories } from "../../../hooks/useRepoQuery";
import Skeleton from "../../messages/Skeleton";
import ErrorMessage from "../../messages/ErrorMessage";
export default function RepositoryList() {
  const { data: repos, isPending, error } = useRepositories();
  const navigate = useNavigate();
 const CARD_STYLE = "border-2 border-Gray200 rounded-xl p-5 bg-white h-[170px]";

if (isPending)
  return (
    <div className="flex flex-col gap-4">
      {[...Array(3)].map((_, i) => (
        <Skeleton key={`skeleton-${i}`} containerStyle={CARD_STYLE} />
      ))}
    </div>
  );

if (error)
  return (
    <div className="flex flex-col gap-4">
      {[...Array(3)].map((_, i) => (
        <ErrorMessage
          key={`error-${i}`}
          message={i === 0 ? error.message : "Failed to load item"}
          containerStyle={CARD_STYLE}
        />
      ))}
    </div>
  );

  return (
    <div className="space-y-6 px-2">
      {repos?.map((repo) => (
        <RepositoryCard key={repo.id} repo={repo} navigate={navigate} />
      ))}
    </div>
  );
}
