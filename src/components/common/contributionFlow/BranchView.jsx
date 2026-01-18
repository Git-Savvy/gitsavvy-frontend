export default function BranchView({ onNext }) {
  return (
    <div className="space-y-4">
      <label className="block text-sm font-bold text-gray-700">
        Branch Name
      </label>
      <input
        readOnly
        value="feature/add-dark-mode"
        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-500 focus:outline-none"
      />
      <p className="text-xs text-gray-400">
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
