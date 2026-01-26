export default function BranchView({ onNext }) {
  return (
    <div className="space-y-4">
      <label className="block text-sm font-bold text-Gray600">
        Branch Name
      </label>
      <input
        readOnly
        value="feature/add-dark-mode"
        className="w-full p-4 bg-background border border-Gray200 rounded-xl text-Gray600 focus:outline-none"
      />
      <p className="text-xs text-Gray600">
        Use a descriptive name like "feature/" or "fix/" prefix
      </p>
      <button
        onClick={onNext}
        className="w-full bg-primary text-white hover:bg-hoverd py-4 rounded-xl font-bold text-lg"
      >
        Create Branch
      </button>
    </div>
  );
}
