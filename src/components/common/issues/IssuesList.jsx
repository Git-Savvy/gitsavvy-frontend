import { useIssuesByRepo } from "../../../hooks/useIssueQuery";
import IssueCard from "./IssueCard";
import NoDataMessage from "../../messages/NoDataMessage";
import SkeletonCard from "../../messages/SkeletonCard";
import ErrorMessage from "../../messages/ErrorMessage";
import { useParams } from "react-router-dom";
export default function IssuesList({ search, selectedStatus, selectedLabels }) {
  const { repoId } = useParams(); // id from URL "it is a string!"
  const { data: issues, isPending, error } = useIssuesByRepo(Number(repoId));
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
        containerStyle={"w-full h-[450px] mb-4"}
      />
    );

  if (!issues || issues.length === 0) {
    return (
      <NoDataMessage
        text="No issues found for this repository."
        containerStyle="w-full h-[450px] mb-4"
      />
    );
  }
  const filteredIssues = issues.filter((issue) => {
    const query = search?.toLowerCase();

    // 🔍 search
    const matchesSearch =
      issue.title?.toLowerCase().includes(query) ||
      issue.body?.toLowerCase().includes(query) ||
      issue.issue_labels?.some((l) => l.name.toLowerCase().includes(query)) ||
      issue.issue_labels?.some((l) =>
        l.description?.toLowerCase().includes(query),
      );

    // 🏷 labels
    const matchesLabels =
      selectedLabels.length === 0 ||
      selectedLabels.every((selected) =>
        // Added ?. here to prevent crash if issue_labels is missing
        issue.issue_labels?.some(
          (label) =>
            // Added ?. here to prevent crash if name or description is null/undefined
            label.name?.toLowerCase().includes(selected.toLowerCase()) ||
            label.description?.toLowerCase().includes(selected.toLowerCase()),
        ),
      );

    // 📌 status
    const matchesStatus =
      selectedStatus === "" ||
      issue.state?.toLowerCase() === selectedStatus?.toLowerCase();

    return matchesSearch && matchesLabels && matchesStatus; //all of them has to be true
  });

  return (
    <>
      {filteredIssues.map((item) => (
        <IssueCard key={item.id} issue={item} />
      ))}
    </>
  );
}
