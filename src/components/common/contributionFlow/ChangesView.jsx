import { GitBranch, Clock } from "lucide-react";
import { useToast } from "../../../context/ToastContext";
export default function ({ onNext }) {
    const { showToast } = useToast();
    function handleChanges() {
      showToast({
        message: "Changes is showed successfully!",
        type: "success",
        duration: 4000,
      });
  
      onNext();
    }

  return (
    <div className="border border-Gray200 rounded-2xl overflow-hidden">
      <div className="p-4 bg-white border-b border-Gray200 flex justify-between items-center">
        <span className="font-bold text-text-secondary">Commit Activity</span>
        <span className="bg-background px-3 py-1 rounded-lg text-xs font-bold text-Gray600">
          3 commits
        </span>
      </div>
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="p-4 flex items-center justify-between border-b border-background last:border-0"
        >
          <div className="flex items-center gap-3 text-Gray600">
            <GitBranch size={16} />
            <span className="text-sm">Commit #{i}: Updated files</span>
          </div>
          <div className="flex items-center gap-1.5 text-Gray400 text-xs">
            <Clock size={14} /> <span>Just now</span>
          </div>
        </div>
      ))}
      <button
        onClick={()=>{handleChanges()}}
        className="w-full bg-primary text-white hover:bg-hoverd py-4 font-bold text-lg mt-4 rounded-xl"
      >
        Continue to Pull Request
      </button>
    </div>
  );
}
