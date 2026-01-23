import { useNavigate } from "react-router-dom";
import RepositoryCard from "../components/common/RepositoryCard";
import RightSidebar from "../components/layout/RightSidebar";
import SearchSquare from "../components/common/SearchSquare";
import { useContext } from "react";
import { RepoContext } from "../context/RepoContext";
export default function Discover() {
  const { repos } = useContext(RepoContext);
  const navigate = useNavigate();

  return (
    <div className="max-w-8xl  flex lg:gap-5 ">
      {/* Main content */}
      <main className="flex-1 space-y-6 px-2 lg:px-8 py-8">
        <div>
          <h1 className="text-2xl font-semibold">Discover Repositories</h1>
          <p className="text-gray-600">
            Find open-source projects that match your skills and interests
          </p>
        </div>
        {/* searchSquare */}
        <SearchSquare text="Search repositories by name, language, or topic..." />

        <h2 className="font-semibold text-lg">Recommended for You</h2>

        {repos.map((repo) => (
          <RepositoryCard key={repo.id} repo={repo} navigate={navigate} />
        ))}
      </main>
      {/* Right sidebar */}
      <div className="bg-white border-x-2 border-gray-200  lg:shadow-sm">
        <RightSidebar />
      </div>
    </div>
  );
}
