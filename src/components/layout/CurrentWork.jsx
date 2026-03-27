import MyWorkCurrentCard from "../common/mywork/MyWorkCurrentWork";
import NoDataMessages from"../messages/NoDataMessage"
export default function CurrentWork({data}) {

//   const data = [
//   {
//     title: "Implement OAuth Popup Logic",
//     repository_name: "gitsavvy-frontend",
//     description: "Refactoring the login flow to use a popup window instead of a full page redirect for GitHub authentication.",
//     opened_at: "2024-05-10T14:30:00Z",
//     language: "TypeScript",
//     repository_branch: "feature/oauth-popup",
//     progress: 75,
//     status: "In Progress"
//   },
//   {
//     title: "Optimize L2 Distance Calculations",
//     repository_name: "gitsavvy-recommendation-engine",
//     description: "Improving the performance of the BGE-Code-v1.5 embedding comparisons using vector indexing.",
//     opened_at: "2024-05-12T09:15:00Z",
//     language: "Python",
//     repository_branch: "main",
//     progress: 40,
//     status: "On Hold"
//   },
//   {
//     title: "Update Documentation Generator",
//     repository_name: "gitsavvy-core",
//     description: "Integrating Qwen2.5-Coder-3B-Instruct to handle complex multi-file code explanation tasks.",
//     opened_at: "2024-05-14T11:00:00Z",
//     language: "JavaScript",
//     repository_branch: "develop",
//     progress: 100,
//     status: "Completed"
//   },
//   {
//     title: "Fix README Parsing Edge Cases",
//     repository_name: "gitsavvy-parser",
//     description: "Resolving issues where special Markdown characters break the TF-IDF to L2 migration logic.",
//     opened_at: "2024-05-15T16:45:00Z",
//     language: "Go",
//     repository_branch: "fix/readme-parser",
//     progress: 10,
//     status: "In Progress"
//   }
// ];

 if (!data || data.length === 0) {
   return <NoDataMessages text="You don't have any current work." containerStyle={"text-center h-[500px]"}/> ;
  }
  else {
    return (
      <div className="space-y-6 ">
        {data.map((w, index) => (
          <MyWorkCurrentCard
            key={index}
            title={w.title}
            repo={w.repository_name}
            description={w.description}
            opened_at={w.opened_at}
            language={w.language}
            branch={w.repository_branch}
            progress_percentage={w.progress}
            status={w.status}
          />
        ))}
      </div>
    );
  }
}
