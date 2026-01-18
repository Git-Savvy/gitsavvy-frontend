import {
  GitFork,
} from "lucide-react";
export default function ({ onNext }) {
  return (
    <div className="space-y-5">
      <div className="bg-[#FFFBEB] border border-[#FEF3C7] p-5 rounded-xl flex gap-4">
        <GitFork className="text-[#B45309] shrink-0" size={24} />
        <p className="text-sm text-[#92400E]">
          A fork of cloud-infrastructure will be created in your GitHub account.
          This gives you a personal copy to work with.
        </p>
      </div>
      <button
        onClick={onNext}
        className="w-full bg-primary text-white hover:bg-hoverd py-4 rounded-xl font-bold text-lg"
      >
        Fork Repository
      </button>
    </div>
  );
}
