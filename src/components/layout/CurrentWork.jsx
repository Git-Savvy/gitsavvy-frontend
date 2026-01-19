import MyWorkCurrentCard from "../common/MyWorkCurrentWork";

export default function CurrentWork() {
  const work = [
    {
      title: "Add dark mode support",
      repo: "react-awesome-ui",
      description:
        "Implementing dark mode with theme provider and custom hooks",
      updatedDays: "366d",
      language: "TypeScript",
      branch: "feature/dark-mode",
      progress: 75,
      status: "In Progress",
    },
    {
      title: "Add dark mode support",
      repo: "react-awesome-ui",
      description:
        "Implementing dark mode with theme provider and custom hooks",
      updatedDays: "366d",
      language: "TypeScript",
      branch: "feature/dark-mode",
      progress: 75,
      status: "In Progress",
    },
    {
      title: "Add dark mode support",
      repo: "react-awesome-ui",
      description:
        "Implementing dark mode with theme provider and custom hooks",
      updatedDays: "366d",
      language: "TypeScript",
      branch: "feature/dark-mode",
      progress: 75,
      status: "In Progress",
    },
  ];
  return (
    <div className="space-y-6 ">
      {work.map((w, index) => (
        <MyWorkCurrentCard
          key={index}
          title={w.title}
          repo={w.repo}
          description={w.description}
          updatedDays={w.updatedDays}
          language={w.language}
          branch={w.branch}
          progress={w.progress}
          status={w.status}
        />
      ))}
    </div>
  );
}
