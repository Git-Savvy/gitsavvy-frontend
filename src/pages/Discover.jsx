
import RightSidebar from "../components/layout/RightSidebar";
import RepositoryList from "../components/common/discover/RepositoryList";
import SearchSquare from "../components/common/SearchSquare";
export default function Discover() {


  return (
    <div className="max-w-8xl  flex lg:gap-5 ">
      {/* Main content */}
      <main className="flex-1 space-y-6 px-2 lg:px-8 py-8">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Discover Repositories
          </h1>
          <p className="text-Gray600 text-lg md:text-xl lg:text-2xl">
            Find open-source projects that match your skills and interests
          </p>
        </div>
        {/* searchSquare */}
        <SearchSquare text="Search repositories by name, language, or topic..." />

        <h2 className="font-semibold text-xl">Recommended for You</h2>
        <RepositoryList />
      </main>
      {/* Right sidebar */}
      <div className="bg-white border-x-2 border-Gray200  lg:shadow-sm">
        <RightSidebar />
      </div>
    </div>
  );
}
