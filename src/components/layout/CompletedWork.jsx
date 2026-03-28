import MyWorkCompleteCard from "../common/mywork/MyWorkCompleteCard";
import NoDataMessages from"../messages/NoDataMessage"
export default function CompletedWork({data}) {

//   const data = [
//   {
//     title: "Migration from TF-IDF to L2 Distance",
//     repository_name: "gitsavvy-recommendation-engine",
//     closed_at: "2024-05-15",
//     language: "Python",
//     points: 25,
//     status: "Merged",
//     additions: 45,
//     deletions: 12
//   },
//   {
//     title: "Integrate Qwen2.5-Coder for Documentation",
//     repository_name: "gitsavvy-core",
//     closed_at: "2024-05-12",
//     language: "TypeScript",
//     points: 25,
//     status: "Completed",
//     additions: 120,
//     deletions: 5
//   },
//   {
//     title: "Implement GitHub OAuth Popup UI",
//     repository_name: "gitsavvy-frontend",
//     closed_at: "2024-05-10",
//     language: "React",
//     points: 25,
//     status: "Merged",
//     additions: 32,
//     deletions: 8
//   },
//   {
//     title: "BGE-Code-v1.5 Embedding Integration",
//     repository_name: "gitsavvy-backend",
//     closed_at: "2024-05-08",
//     language: "Node.js",
//     points: 25,
//     status: "Completed",
//     additions: 88,
//     deletions: 2
//   }
// ];

  if (!data || data.length === 0) {
    return <NoDataMessages text="You don't have complete work yet." containerStyle={"text-center h-[500px]"}/> ;
  }
  else
    return (
      <div className="space-y-6">
        {data.map((w) => (
          <MyWorkCompleteCard
            title={w.title}
            repo={w.repository_name}
            date={w.closed_at}
            language={w.language}
            points={w.points}
            // additions={w.additions}
            // deletions={w.deletions}
            status={w.status}
          />
        ))}
      </div>
    );
}
