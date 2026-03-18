import RepositoryCard from "./RepositoryCard";
import { useNavigate } from "react-router-dom";
import { useRepositories } from "../../../hooks/useRepoQuery";
import Skeleton from "../../messages/SkeletonCard";
import ErrorMessage from "../../messages/ErrorMessage";
import SkeletonCard from "../../messages/SkeletonCard";
export default function RepositoryList({search}) {
  const { data: repos, isPending, error } = useRepositories();
  const navigate = useNavigate();
  const CARD_STYLE =
    "border-2 border-Gray200 rounded-xl p-5 bg-white h-[170px]";

  if (isPending)
    return (
      <div className="flex flex-col gap-4">
        {[...Array(3)].map((_, i) => (
          <SkeletonCard key={`skeleton-${i}`} containerStyle={CARD_STYLE} />
        ))}
      </div>
    );

  if (error)
    return (
      <ErrorMessage
        message={error.message}
        containerStyle={"w-full h-[450px]"}
      />
    );
  const filteredRepos = repos.filter((repo) => {
    const query = search.toLowerCase();

    return (
      repo.name.toLowerCase().includes(query) ||
      repo.topics?.some((tag) => tag.topic.toLowerCase().includes(query))
    );
  });

  return (
    <div className="space-y-6 px-2">
      {filteredRepos?.map((repo) => (
        <RepositoryCard key={repo.id} repo={repo} navigate={navigate} />
      ))}
    </div>
  );
}
