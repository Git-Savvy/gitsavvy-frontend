import { useNavigate } from "react-router-dom";
import { MessageSquare, Clock, AlertCircle } from "lucide-react";
import SimpleDarkButton from "./SimpleDarkButton";

export default function IssueCard({ title, description, tags = [] }) {
  const navigate = useNavigate();
  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl p-6 lg:shadow-sm  transition-colors">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        {/* Left Side: Content */}
        <div className="space-y-3 flex-1">
          {/* Title and Icon */}
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-slate-400" />
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          </div>

          {/* Description */}
          <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
            {description}
          </p>

          {/* Corrected Tags Mapping */}
          <div className="flex flex-wrap gap-2 pt-1">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-0.5 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-full text-xs font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side: Action Button */}
        <SimpleDarkButton
          text="View Details"
          onClick={() => {
            navigate("/home/issue");
          }}
        />
      </div>

      {/* Footer Stats */}
      <div className="flex items-center justify-end gap-6  text-slate-400 text-sm">
        <div className="flex items-center gap-1.5">
          <Clock className="w-4 h-4" />
          <span>2 days ago</span>
        </div>
        <div className="flex items-center gap-1.5">
          <MessageSquare className="w-4 h-4" />
          <span>3</span>
        </div>
      </div>
    </div>
  );
}
