export default function PRView({ onNext }) {
  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500">
        Create a pull request to submit your changes for review. Include a clear
        description of what you've changed.
      </p>
      <div className="border border-gray-100 rounded-2xl p-6 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Branch:</span>{" "}
          <span className="font-mono font-medium">feature/add-dark-mode</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Commits:</span>{" "}
          <span className="font-medium">3</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Issue:</span>{" "}
          <span className="font-medium">#1</span>
        </div>
      </div>
      <button
        onClick={onNext}
        className="w-full bg-primary text-white hover:bg-hoverd py-4 rounded-xl font-bold text-lg"
      >
        Create Pull Request
      </button>
    </div>
  );
}
