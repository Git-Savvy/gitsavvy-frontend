import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
export default function IssueDetailsCard({ issue }) {
  return (
    <div className="border-2 border-Gray200 rounded-2xl p-6 bg-white shadow-sm">
      <h3 className="text-xl font-bold text-text-secondary">{issue.title}</h3>

      <div
        className="
                   text-Gray600 text-[15px] mt-3 leading-relaxed line-clamp-3 
                   [&_code]:rounded-2xl [&_code]:line-clamp-5 [&_pre]:bg-zinc-900 [&_a]:text-Indigo300 bg-white"
      >
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{issue.body}</ReactMarkdown>
      </div>

      <div className="flex gap-2 mt-5">
        {issue.labels.map((label, index) => (
          <span
            key={index}
            className="px-4 py-1.5 bg-background border border-Gray200 text-Gray600 text-[13px] rounded-xl"
          >
            {label.name}
          </span>
        ))}
      </div>
    </div>
  );
}
