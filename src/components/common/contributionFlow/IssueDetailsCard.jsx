export default function IssueDetailsCard({ issue }) {
  return (
    <div className="border border-Gray200 rounded-2xl p-6 bg-white shadow-sm">
      <h3 className="text-xl font-bold text-text-secondary">
        {issue.issueTitle}
      </h3>
      <p className="text-Gray600 text-[15px] mt-3 leading-relaxed">
        {issue.issueDescription}
      </p>
      <div className="flex gap-2 mt-5">
        {issue.labels.map((label, index) => (
          <span
            key={index}
            className="px-4 py-1.5 bg-background border border-Gray200 text-Gray600 text-[13px] rounded-xl"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
