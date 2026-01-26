import { Check } from "lucide-react";
export default function CompleteView({ onNext }) {
  return (
    <div className="text-center py-4 space-y-6">
      <div className="w-20 h-20 bg-Teal400/20 text-Teal400 rounded-full flex items-center justify-center mx-auto">
        <Check size={40} strokeWidth={3} />
      </div>
      <div className="space-y-2">
        <h4 className="text-2xl font-bold text-textdark">
          Pull Request Created!
        </h4>
        <p className="text-Gray400 px-10">
          Your pull request has been submitted. Maintainers will review your
          changes and provide feedback.
        </p>
      </div>
      <div className="space-y-3">
        <button className="w-full border border-primary text-primary bg-background hover:outline-1 hover:bg-hoverl  py-3.5 rounded-xl font-bold  transition">
          View Pull Request
        </button>
        <button
          onClick={onNext}
          className="w-full bg-primary text-NavText1 hover:bg-hoverd  hover:outline-primary hover:outline-1 py-3.5 rounded-xl font-bold"
        >
          Done
        </button>
      </div>
    </div>
  );
}
