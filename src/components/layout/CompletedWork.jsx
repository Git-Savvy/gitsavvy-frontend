import MyWorkCompleteCard from "../common/mywork/MyWorkCompleteCard";
import NoDataMessages from"../messages/NoDataMessage"
export default function CompletedWork({data}) {
  if (!data || data.length === 0) {
    return <NoDataMessages text="You don't have complete work yet." containerStyle={"text-center py-10"}/> ;
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
