import MyWorkCompleteCard from "../common/MyWorkCompleteCard";
export default function CompletedWork() {
  const work = [
    {
      title: "Add authentication middleware",
      repo: "python-data-tools",
      date: "Nov 18, 2024",
      language: "Python",
      points: 10,
      additions: 234,
      deletions: 45,
      status: "Merged",
    },
    {
      title: "Add authentication middleware",
      repo: "python-data-tools",
      date: "Nov 18, 2024",
      language: "Python",
      points: 10,
      additions: 234,
      deletions: 45,
      status: "Merged",
    },
    {
      title: "Add authentication middleware",
      repo: "python-data-tools",
      date: "Nov 18, 2024",
      language: "Python",
      points: 10,
      additions: 234,
      deletions: 45,
      status: "Merged",
    },
  ];
  return (
    <div className="space-y-6">
      {work.map(w=>(   <MyWorkCompleteCard
        title={w.title}
        repo={w.repo}
        date={w.date}
        language={w.language}
        points={w.points}
        additions={w.additions}
        deletions={w.deletions}
        status={w.status}
      />))}
   
    </div>
  );
}
