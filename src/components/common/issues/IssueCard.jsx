import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";
import { MessageSquare, Clock, AlertCircle } from "lucide-react";
import SimpleDarkButton from "../SimpleDarkButton";
import { timeAgo } from "../../../utils/timeAgo";

export default function IssueCard({ issue }) {
  const navigate = useNavigate();
  return (
    <div className="bg-white border-2 border-Gray200 rounded-xl p-6 lg:shadow-sm  transition-colors">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        {/* Left Side: Content */}
        <div className="space-y-3 flex-1">
          {/* Title and Icon */}
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 md:w-7 md:h-7 text-Slate400" />
            <h3 className="text-lg md:text-2xl font-semibold text-textdark">
              {issue.title}
            </h3>
          </div>

          {/* Description */}

           <div
            className="prose text-Gray600 text-[15px] md:text-lg leading-relaxed max-w-5xl h-2xl 
          [&_>_p]:flex-wrap 
          [&_>_p]:gap-2 
          [&_strong]:text-textdark [&_h2]:text-textdark [&_code]:text-indigo-300 
          [&_pre]:bg-zinc-900 [&_a]:text-Indigo300  bg-white  line-clamp-2"
          >
            <ReactMarkdown>{issue.body}</ReactMarkdown>
          </div>

          {/* Corrected Tags Mapping */}
          {/* <div className="flex flex-wrap gap-2 pt-1">
            {issue.labels.map((label, index) => (
              <span
                key={index}
                className="px-3 py-1  bg-Cyan50 text-Teal400 border border-Teal400  font-semibold rounded-full text-xs font-semibold"
              >
                {label}
              </span>
            ))}
          </div> */}
        </div>

        {/* Right Side: Action Button */}
        <SimpleDarkButton
          text="View Details"
          onClick={() => {
            navigate(
              `/home/repoDetail/${issue.repository_id}/issueDetail/${issue.number}`,//here used number insted of id to align with api
            );
          }}
        />
      </div>

      {/* Footer Stats */}
      <div className="flex items-center justify-end gap-6  text-Slate400 text-sm">
        <div className="flex items-center gap-1.5">
          <Clock className="w-4 h-4" />
          <span>{timeAgo(issue.opened_at)}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <MessageSquare className="w-4 h-4" />
          <span>{issue.num_of_comments}</span>
        </div>
      </div>
    </div>
  );
}
