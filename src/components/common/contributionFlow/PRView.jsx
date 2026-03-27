import { useToast } from "../../../context/ToastContext";
export default function PRView({ onNext }) {
     const { showToast } = useToast();
      function handlePR() {
        showToast({
          message: "Pull Request is done successfully!",
          type: "success",
          duration: 4000,
        });
    
        onNext();
      }

  return (
    <div className="space-y-4">
      <p className="text-sm text-Slate400">
        Create a pull request to submit your changes for review. Include a clear
        description of what you've changed.
      </p>
      <div className="border border-Gray600 rounded-2xl p-6 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-text-secondary">Branch:</span>{" "}
          <span className="text-Gray400 font-mono font-medium">feature/add-dark-mode</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-text-secondary">Commits:</span>{" "}
          <span className="text-Gray400 font-medium">3</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-text-secondary">Issue:</span>{" "}
          <span className="text-Gray400 font-medium">#1</span>
        </div>
      </div>
      <button
        onClick={()=>handlePR()}
        className="w-full bg-primary text-white hover:bg-hoverd py-4 rounded-xl font-bold text-lg"
      >
        Create Pull Request
      </button>
    </div>
  );
}
