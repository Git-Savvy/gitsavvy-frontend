import MyWorkCurrentCard from "../common/mywork/MyWorkCurrentWork";
import NoDataMessages from"../messages/NoDataMessage"
export default function CurrentWork({data}) {
 if (!data || data.length === 0) {
   return <NoDataMessages text="You don't have any current work." containerStyle={"text-center py-10"}/> ;
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
            // branch={w.branch}
            progress_percentage={w.progress}
            status={w.status}
          />
        ))}
      </div>
    );
  }
}
