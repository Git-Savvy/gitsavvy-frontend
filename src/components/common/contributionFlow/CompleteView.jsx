import { Check } from "lucide-react";
export default function CompleteView({ onNext }) {
  return (
    <div className="text-center py-4 space-y-6">
      <div className="w-20 h-20 bg-[#DCFCE7] text-[#22C55E] rounded-full flex items-center justify-center mx-auto">
        <Check size={40} strokeWidth={3} />
      </div>
      <div className="space-y-2">
        <h4 className="text-2xl font-bold text-gray-900">
          Pull Request Created!
        </h4>
        <p className="text-gray-500 px-10">
          Your pull request has been submitted. Maintainers will review your
          changes and provide feedback.
        </p>
      </div>
      <div className="space-y-3">
        <button className="w-full border border-gray-400  py-3.5 rounded-xl font-bold text-gray-700 hover:bg-hoverl transition">
          View Pull Request
        </button>
        <button
          onClick={onNext}
          className="w-full bg-primary text-white hover:bg-hoverd py-3.5 rounded-xl font-bold"
        >
          Done
        </button>
      </div>
    </div>
  );
}
